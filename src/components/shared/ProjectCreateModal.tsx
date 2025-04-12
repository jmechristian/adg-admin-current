import { Location, Status, Department } from '@/types';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import useLayoutStore from '@/store/useLayoutStore';
import useAuthStore from '@/store/useAuthStore';
import Map, { Marker } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import {
  createNewLocation,
  createNewProject,
  createNewGallery,
} from '@/helpers/api';
import { GraphQLResult } from 'aws-amplify/api';
import { updateProject } from '@/graphql/mutations';
import { generateClient } from 'aws-amplify/api';
import { getDepartments, createProjectDepartments } from '@/helpers/api';

const client = generateClient();

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

if (!MAPBOX_TOKEN) {
  console.error(
    'Mapbox token is missing! Set the NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN environment variable.'
  );
}

interface NewProject {
  name: string;
  description: string;
  projectLocationId: string;
  locationString: string;
  link: string;
  projectCreatedById: string;
}

const ProjectCreateModal = () => {
  const router = useRouter();
  const toggleModal = useLayoutStore((state) => state.toggleModal);
  const user = useAuthStore((state) => state.user);
  const [project, setProject] = useState<NewProject>({
    name: '',
    description: '',
    projectLocationId: '',
    locationString: '',
    link: '',
    projectCreatedById: user?.id,
  });
  // State for form fields and marker position
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    description: '',
    latitude: 39,
    longitude: -98,
  } as {
    name: string;
    address: string;
    description: string;
    latitude: number;
    longitude: number;
  });
  const [departments, setDepartments] = useState<Department[]>([]);
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
  useEffect(() => {
    const getAllDepartments = async () => {
      const departments = await getDepartments();
      setDepartments(departments);
    };
    getAllDepartments();
  }, []);

  // Handle map click
  const handleMapClick = async (event: any) => {
    const { lng, lat } = event.lngLat;

    // Reverse geocoding to get address from coordinates
    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${MAPBOX_TOKEN}`
      );
      const data = await response.json();
      const address = data.features[0]?.place_name || '';

      setFormData((prev) => ({
        ...prev,
        address,
        latitude: lat,
        longitude: lng,
      }));
    } catch (error) {
      console.error('Error fetching address:', error);
    }
  };

  // Handle address search
  const handleAddressSearch = async (searchText: string) => {
    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          searchText
        )}.json?access_token=${MAPBOX_TOKEN}`
      );
      const data = await response.json();
      const feature = data.features[0];

      if (feature) {
        setFormData((prev) => ({
          ...prev,
          address: feature.place_name,
          latitude: feature.center[1],
          longitude: feature.center[0],
        }));
      }
    } catch (error) {
      console.error('Error searching address:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!project.name.trim()) {
      alert('Please enter a project name');
      return;
    }

    if (selectedDepartments.length === 0) {
      alert('Please select at least one department');
      return;
    }

    // Create slug from project name
    const slug = project.name.toLowerCase().replace(/\s+/g, '-');

    const location = await createNewLocation({
      address: formData.address,
      lat: formData.latitude,
      lng: formData.longitude,
      name: formData.name,
      description: formData.description,
    });

    const newProject = (await createNewProject({
      name: project.name,
      description: project.description,
      projectLocationId: location.id,
      locationString: formData.name,
      link: slug,
      status: Status.DRAFT,
      projectCreatedById: user?.id,
      size: '',
      quote: '',
      quoteAttribution: '',
      collaborators: '',
      featured: false,
    })) as GraphQLResult<{ createProject: { id: string } }>;

    const gallery = (await createNewGallery(
      newProject.data.createProject.id
    )) as GraphQLResult<{ createGallery: { id: string } }>;

    // Update project with gallery ID
    await client.graphql({
      query: updateProject,
      variables: {
        input: {
          id: newProject.data.createProject.id,
          projectGalleryId: gallery.data.createGallery.id,
        },
      },
    });

    await selectedDepartments.forEach(async (departmentId) => {
      await createProjectDepartments(
        newProject.data.createProject.id,
        departmentId
      );
    });
    toggleModal();
    router.push(`/projects/${newProject.data.createProject.id}`);
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50'>
      <div className='bg-white py-5 px-6 rounded-lg shadow-lg w-full max-w-4xl'>
        <h2 className='text-2xl font-bold mb-4 border-b border-gray-200 pb-4'>
          Create New Project
        </h2>
        <form onSubmit={handleSubmit} className='flex flex-col h-full'>
          <div className='grid grid-cols-2 gap-10'>
            <div className='mb-4'>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-gray-700'
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
                value={project.name}
                onChange={(e) =>
                  setProject({ ...project, name: e.target.value })
                }
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='department'
                className='block text-sm font-medium text-gray-700'
              >
                Departments
              </label>
              <div className='flex flex-wrap gap-2 mt-1'>
                {departments.map((department) => (
                  <div key={department.id} className='flex items-center gap-2'>
                    <input
                      type='checkbox'
                      id={department.id}
                      checked={selectedDepartments.includes(department.id)}
                      onChange={(e) =>
                        setSelectedDepartments((prev) =>
                          e.target.checked
                            ? [...prev, department.id]
                            : prev.filter((id) => id !== department.id)
                        )
                      }
                    />
                    {department.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='mb-4'>
            <label
              htmlFor='description'
              className='block text-sm font-medium text-gray-700'
            >
              Description
            </label>
            <textarea
              id='description'
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
              value={project.description}
              onChange={(e) =>
                setProject({ ...project, description: e.target.value })
              }
            />
          </div>
          <div className='flex flex-col h-full w-full gap-6 bg-gray-100 rounded-lg p-5'>
            <div className='w-full border-b border-gray-200 pb-1'>
              <h2 className='text-lg font-bold'>Location</h2>
            </div>
            <div className='grid grid-cols-2 h-full w-full gap-5'>
              {/* Map Section */}
              <div className='h-full'>
                <Map
                  key={`${formData.latitude}-${formData.longitude}`}
                  mapboxAccessToken={MAPBOX_TOKEN}
                  initialViewState={{
                    longitude: formData.longitude,
                    latitude: formData.latitude,
                    zoom: 12,
                    bearing: 0,
                    pitch: 0,
                    padding: {
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                    },
                  }}
                  onMove={(evt) => {
                    // Optional: update state when user moves the map manually
                    // setFormData(prev => ({
                    //   ...prev,
                    //   longitude: evt.viewState.longitude,
                    //   latitude: evt.viewState.latitude
                    // }));
                  }}
                  style={{ width: '100%', height: '100%' }}
                  mapStyle='mapbox://styles/adg-branding/cl47jmywy003p15rmjzucu62i'
                  onClick={handleMapClick}
                >
                  {formData.latitude && formData.longitude && (
                    <Marker
                      longitude={formData.longitude}
                      latitude={formData.latitude}
                      color='red'
                    />
                  )}
                </Map>
              </div>

              {/* Form Section */}
              <div className='w-full flex flex-col gap-4 text-sm'>
                <input
                  type='text'
                  placeholder='Search address...'
                  onChange={(e) => handleAddressSearch(e.target.value)}
                  className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 placeholder:text-gray-400 placeholder:text-sm text-sm'
                />

                <input
                  type='text'
                  placeholder='Name'
                  value={formData.name || ''}
                  onChange={(e) => {
                    setFormData((prev) => ({ ...prev, name: e.target.value }));
                    setProject({ ...project, locationString: e.target.value });
                  }}
                  className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 placeholder:text-gray-400 placeholder:text-sm text-sm'
                />

                <input
                  type='text'
                  placeholder='Address'
                  value={formData.address || ''}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      address: e.target.value,
                    }))
                  }
                  className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 placeholder:text-gray-400 placeholder:text-sm text-sm'
                />

                <textarea
                  placeholder='Description'
                  value={formData.description || ''}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 placeholder:text-gray-400 placeholder:text-sm text-sm'
                />

                {/* Coordinates display */}
                <div className='grid grid-cols-2 gap-4 w-full'>
                  <input
                    type='text'
                    value={`Latitude: ${formData.latitude.toFixed(2)}`}
                    readOnly
                    className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 placeholder:text-gray-400 placeholder:text-sm text-sm'
                  />
                  <input
                    type='text'
                    value={`Longitude: ${formData.longitude.toFixed(2)}`}
                    readOnly
                    className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 placeholder:text-gray-400 placeholder:text-sm text-sm'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-end mt-6 gap-4'>
            <button
              type='button'
              onClick={() => toggleModal()}
              className='bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md font-brand-bold'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='bg-brand hover:bg-red-500 text-white px-4 py-2 rounded-md font-brand-bold'
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectCreateModal;
