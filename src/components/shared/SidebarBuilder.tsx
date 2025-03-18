import { MdEdit } from 'react-icons/md';
import React, { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { Project } from '@/types';
import { SubcategorySelect } from './SubcategorySelect';
import { ProjectTypeSelect } from './ProjectTypeSelect';
import { BuildingTypeSelector } from './BuildingTypeSelector';
import {
  updateImage,
  uploadAndConvertImage,
  addNewImageObject,
  saveProject,
  deleteImage,
  updateCurrentLocation,
  createNewLocation,
} from '@/helpers/api';
import LocationModal from './LocationModal';
import { updateProject } from '@/graphql/mutations';
// Add type for image
interface ImageObject {
  id: string;
  url: string;
  alt?: string;
  caption?: string;
  order?: number;
}

const getFullImageUrl = (url: string) => {
  if (!url) return url;
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  return `https://adgadmin170407-dev.s3.us-east-1.amazonaws.com/public/${url}`;
};

const SidebarBuilder = ({
  project,
  onProjectUpdate,
  refreshProject,
}: {
  project: Project;
  onProjectUpdate: () => void;
  refreshProject: () => void;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ImageObject | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [newImageAlt, setNewImageAlt] = useState('');
  const [newImageCaption, setNewImageCaption] = useState('');
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const handleImageUpdate = async (updates: Partial<ImageObject>) => {
    if (!selectedImage) return;
    setSelectedImage({ ...selectedImage, ...updates });
  };

  const handleUpdateSelected = async () => {
    if (!selectedImage) return;
    setIsUpdating(true);
    try {
      await updateImage(
        selectedImage.id,
        selectedImage.url,
        selectedImage.order || 0,
        selectedImage.caption || '',
        selectedImage.alt || selectedImage.caption || ''
      );
    } finally {
      refreshProject();
      setIsUpdating(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const formattedDate = date
      .toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        timeZone: 'America/New_York',
      })
      .replace(/\//g, '-');

    const formattedTime = date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'America/New_York',
    });

    return `${formattedDate} ${formattedTime}`;
  };

  const handleSaveProject = async () => {
    await saveProject(
      project.id,
      project.name,
      project.description || '',
      project.location?.id || '',
      project.locationString || '',
      project.collaborators || '',
      project.size || '',
      project.quote || '',
      project.quoteAttribution || ''
    );
    refreshProject();
  };

  const handlePublishProject = async () => {
    console.log('publish project');
  };

  const handleDeleteImage = async (id: string) => {
    await deleteImage(id);
    refreshProject();
  };

  return (
    <div className='flex flex-col gap-7'>
      <div className='flex flex-col gap-3'>
        <div className='w-full uppercase text-xs text-gray-400'>
          {project.department.name}
        </div>
        <div className='w-full text-sm text-gray-400'>
          Title:{' '}
          <input
            className='text-2xl font-bold font-brand-bold text-white w-full bg-transparent focus:outline-none border-l-0 border-t-0 border-r-0 border-b border-b-gray-700`'
            value={project.name || ''}
            onChange={(e) => project.onNameChange?.(e.target.value)}
          />
        </div>
        <div className='w-full text-sm text-gray-400'>
          Size:{' '}
          <input
            className='text-sm text-white w-full bg-transparent focus:outline-none border-l-0 border-t-0 border-r-0 border-b border-b-gray-700`'
            value={project.size || ''}
            onChange={(e) => project.onSizeChange?.(e.target.value)}
          />
        </div>
        <div className='w-full text-sm text-gray-400'>
          Location Display:{' '}
          <input
            className='text-sm text-white w-full bg-transparent focus:outline-none border-l-0 border-t-0 border-r-0 border-b border-b-gray-700`'
            value={project.locationString || ''}
            onChange={(e) => project.onLocationChange?.(e.target.value)}
          />
        </div>
        <div className='w-full text-sm text-gray-400 flex flex-col gap-2'>
          Map Location:{' '}
          <div className='w-full flex flex-col gap-1'>
            <div className='text-white ml-4'>{project.location?.address}</div>
          </div>
          <div className='w-full flex gap-1 ml-4'>
            <div className='text-brand'>
              <MapPinIcon className='w-4 h-4' />
            </div>
            <div className='text-white'>
              {project.location?.latitude}, {project.location?.longitude}
            </div>
            <button
              className='text-white ml-1'
              onClick={() => setIsLocationModalOpen(true)}
            >
              <MdEdit size={18} />
            </button>
            {isLocationModalOpen && (
              <LocationModal
                isOpen={isLocationModalOpen}
                onClose={() => setIsLocationModalOpen(false)}
                onSave={async (location) => {
                  if (location.id) {
                    await updateCurrentLocation(location);
                    refreshProject();
                  } else {
                    await createNewLocation({
                      address: location.address || '',
                      lat: location.latitude,
                      lng: location.longitude,
                      name: location.name || '',
                      description: location.description || '',
                    });
                    refreshProject();
                  }
                  // Handle saving the location to your backend
                  setIsLocationModalOpen(false);
                }}
                initialLocation={project.location}
              />
            )}
          </div>
        </div>
      </div>
      {/* <div className='flex flex-col gap-1'>
        <div
          className='w-full aspect-video bg-cover bg-center bg-no-repeat bg-slate-500'
          style={{
            backgroundImage: `url(${
              project.gallery.images.items[0]?.url ||
              'https://placehold.co/600x400'
            })`,
          }}
        ></div>
      </div> */}

      <div className='flex flex-col gap-3'>
        <SubcategorySelect
          currentSubcategories={
            project.subcategories?.items.map((s) => s.subcategory) || []
          }
          projectId={project.id}
          refreshProject={refreshProject}
        />
        <ProjectTypeSelect
          currentProjectTypes={
            project.project_type?.items.map((p) => p.projectType) || []
          }
          projectId={project.id}
          refreshProject={refreshProject}
        />
        <BuildingTypeSelector
          currentBuildingTypes={
            project.building_type?.items.map((b) => b.buildingType) || []
          }
          projectId={project.id}
          refreshProject={refreshProject}
        />
      </div>
      <div className='flex flex-col gap-3'>
        <div className='w-full text-sm text-gray-400'>
          Description:{' '}
          <textarea
            className='w-full bg-transparent text-white text-sm mt-2 p-2 border border-gray-700 rounded'
            value={project.description || ''}
            onChange={(e) => project.onDescriptionChange?.(e.target.value)}
            rows={8}
          />
        </div>
      </div>
      <div className='flex flex-col gap-1'>
        <div className='w-full text-sm text-gray-400'>
          Quote:{' '}
          <textarea
            className='w-full bg-transparent text-white text-sm mt-2 p-2 border border-gray-700 rounded'
            value={project.quote || ''}
            onChange={(e) => project.onQuoteChange?.(e.target.value)}
            rows={3}
          />
        </div>
        <div className='flex flex-col gap-1'>
          <div className='w-full text-sm text-gray-400'>
            Quote Attribution:{' '}
            <input
              className='w-full bg-transparent text-white text-sm mt-2 p-2 border border-gray-700 rounded'
              value={project.quoteAttribution || ''}
              onChange={(e) =>
                project.onQuoteAttributionChange?.(e.target.value)
              }
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='w-full text-sm text-gray-400'>Gallery:</div>
        <div className='w-full border border-gray-700 rounded p-2 grid grid-cols-5 gap-2'>
          {[...project.gallery.images.items]
            .sort((a, b) => (a.order || 0) - (b.order || 0))
            .map((image, index) => (
              <div
                key={image.id}
                className={`aspect-square bg-cover bg-center bg-no-repeat cursor-pointer ${
                  selectedImage?.id === image.id ? 'ring-2 ring-blue-500' : ''
                }`}
                style={{
                  backgroundImage: `url(${image.url})`,
                }}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          <button
            className='w-full aspect-square bg-cover bg-center bg-no-repeat bg-slate-500 flex items-center justify-center'
            onClick={() => {
              setSelectedImage(null);
              setIsModalOpen(true);
            }}
          >
            <PlusIcon className='w-10 h-10 text-white/50' />
          </button>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50'>
          <div className='bg-gray-800 p-6 rounded-lg w-full max-w-5xl h-5/6 flex'>
            {/* Left side - Gallery */}
            <div className='w-8/12 pr-6 overflow-y-auto grid grid-cols-3 gap-4'>
              {[...project.gallery.images.items]
                .sort((a, b) => (a.order || 0) - (b.order || 0))
                .map((image, index) => (
                  <div
                    key={image.id}
                    className={`aspect-square bg-cover bg-center bg-no-repeat cursor-pointer relative ${
                      selectedImage?.id === image.id
                        ? 'ring-2 ring-blue-500'
                        : ''
                    }`}
                    style={{
                      backgroundImage: `url(${image.url})`,
                    }}
                    onClick={() => setSelectedImage(image)}
                  >
                    {index === 0 && (
                      <div className='absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-md font-medium'>
                        HERO
                      </div>
                    )}
                  </div>
                ))}
            </div>

            {/* Right side - Image details */}
            <div className='w-4/12 pl-6 border-l border-gray-700'>
              {selectedImage ? (
                <div className='flex flex-col gap-4 w-full'>
                  <div
                    className='w-full aspect-[4/3] overflow-hidden bg-cover bg-center bg-no-repeat bg-slate-500'
                    style={{
                      backgroundImage: `url(${getFullImageUrl(
                        selectedImage.url
                      )})`,
                    }}
                  ></div>
                  <div className='space-y-4'>
                    <div>
                      <label className='block text-sm text-gray-400'>
                        Alt Text
                      </label>
                      <input
                        type='text'
                        value={selectedImage.alt || ''}
                        onChange={(e) =>
                          handleImageUpdate({ alt: e.target.value })
                        }
                        className='w-full !bg-transparent text-white text-sm mt-1 p-2 border border-gray-700 rounded'
                      />
                    </div>
                    <div>
                      <label className='block text-sm text-gray-400'>
                        Caption
                      </label>
                      <textarea
                        value={selectedImage.caption || ''}
                        onChange={(e) =>
                          handleImageUpdate({ caption: e.target.value })
                        }
                        rows={3}
                        className='w-full !bg-transparent text-white text-sm mt-1 p-2 border border-gray-700 rounded'
                      />
                    </div>
                    <div>
                      <label className='block text-sm text-gray-400'>
                        Order
                      </label>
                      <input
                        type='number'
                        value={selectedImage.order || 0}
                        onChange={(e) =>
                          handleImageUpdate({
                            order: parseInt(e.target.value, 10),
                          })
                        }
                        className='w-full !bg-transparent text-white text-sm mt-1 p-2 border border-gray-700 rounded'
                      />
                    </div>
                  </div>
                  {selectedImage?.id && (
                    <div className='flex items-center justify-center gap-4'>
                      <button
                        className='w-full bg-blue-500 text-white text-sm mt-1 p-2 border border-gray-700 rounded disabled:opacity-50'
                        onClick={handleUpdateSelected}
                        disabled={isUpdating}
                      >
                        {isUpdating ? 'Updating...' : 'Update Selected'}
                      </button>
                      <button
                        className='w-full bg-red-500 text-white text-sm mt-1 p-2 border border-gray-700 rounded disabled:opacity-50'
                        onClick={() => {
                          handleDeleteImage(selectedImage?.id || '');
                        }}
                        disabled={isDeleting}
                      >
                        {isDeleting ? 'Deleting...' : 'Delete Selected'}
                      </button>
                    </div>
                  )}
                  <div className='flex items-center justify-center gap-4 pt-5 border-t border-t-gray-500 mt-5'>
                    <button
                      className='w-full bg-white text-black text-sm mt-1 p-2 border border-gray-700 rounded text-center cursor-pointer'
                      onClick={async () => {
                        if (selectedImage?.id) {
                          // If there's an existing image selected, clear the selection
                          setSelectedImage(null);
                        } else {
                          // Handle new image upload logic here
                          // You might want to trigger the file input or handle the upload differently
                          try {
                            const newImageObject = await addNewImageObject(
                              getFullImageUrl(selectedImage.url),
                              project.gallery.id,
                              project.gallery.images.items.length + 1,
                              selectedImage.caption || '',
                              selectedImage.alt || ''
                            );
                            console.log(newImageObject);
                            // Call onProjectUpdate after successful upload
                            onProjectUpdate();
                            setIsModalOpen(false);
                          } catch (error) {
                            console.error('Error uploading new image:', error);
                          }
                        }
                      }}
                    >
                      {selectedImage?.id ? 'Upload New' : 'Upload Image'}
                    </button>
                  </div>
                </div>
              ) : (
                <div className='flex flex-col gap-4'>
                  <label className='w-full aspect-video border-2 border-dashed border-gray-600 rounded flex items-center justify-center cursor-pointer hover:border-gray-500'>
                    <input
                      type='file'
                      accept='image/*'
                      className='hidden'
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;

                        setIsUploading(true);
                        try {
                          const uploadedUrl = await uploadAndConvertImage(file);
                          setSelectedImage({
                            id: '',
                            url: uploadedUrl,
                            order: project.gallery.images.items.length + 1,
                            alt: newImageAlt,
                            caption: newImageCaption,
                          });
                          setNewImageAlt('');
                          setNewImageCaption('');
                          e.target.value = '';
                        } finally {
                          setIsUploading(false);
                        }
                      }}
                    />
                    <div className='text-center'>
                      <PlusIcon className='w-12 h-12 text-gray-400 mx-auto mb-2' />
                      <div className='text-gray-400'>
                        Click to upload new image
                      </div>
                    </div>
                  </label>
                  <div className='space-y-4'>
                    <div>
                      <label className='block text-sm text-gray-400'>
                        Alt Text
                      </label>
                      <input
                        type='text'
                        value={newImageAlt}
                        onChange={(e) => setNewImageAlt(e.target.value)}
                        className='w-full !bg-transparent text-white text-sm mt-1 p-2 border border-gray-700 rounded'
                      />
                    </div>
                    <div>
                      <label className='block text-sm text-gray-400'>
                        Caption
                      </label>
                      <textarea
                        value={newImageCaption}
                        onChange={(e) => setNewImageCaption(e.target.value)}
                        rows={3}
                        className='w-full !bg-transparent text-white text-sm mt-1 p-2 border border-gray-700 rounded'
                      />
                    </div>
                    <div>
                      <label className='block text-sm text-gray-400'>
                        Order
                      </label>
                      <input
                        type='number'
                        value={project.gallery.images.items.length + 1}
                        className='w-full !bg-transparent text-white text-sm mt-1 p-2 border border-gray-700 rounded'
                        readOnly
                      />
                    </div>
                  </div>
                  <button
                    className='w-full bg-blue-500 text-white text-sm mt-1 p-2 border border-gray-700 rounded disabled:opacity-50'
                    disabled={isUploading}
                  >
                    {isUploading ? 'Uploading...' : 'Upload New Image'}
                  </button>
                </div>
              )}
            </div>

            {/* Close button */}
            <button
              className='absolute top-4 right-4 text-white'
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <div className='flex flex-col gap-0 pt-4 border-t border-t-gray-700'>
        <div className='w-full text-sm text-gray-400'>
          Created:{' '}
          <span className='text-white italic'>
            {formatDate(project.createdAt)}
          </span>
        </div>
        <div className='w-full text-sm text-gray-400'>
          Updated:{' '}
          <span className='text-white italic'>
            {formatDate(project.updatedAt)}
          </span>
        </div>
        <div className='w-full text-sm text-gray-400'>
          Last Updated By:{' '}
          <span className='text-white italic'>
            {project.lastUpdatedBy?.name
              ? project.lastUpdatedBy.name
              : project.createdBy.email}
          </span>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-4 pt-4 border-t border-t-gray-700'>
        {project.status === 'DRAFT' ? (
          <>
            <button
              onClick={handleSaveProject}
              className='px-4 py-3 text-sm text-white bg-gray-700 rounded hover:bg-gray-600'
            >
              Save
            </button>
            <button
              onClick={handlePublishProject}
              className='px-4 py-3 text-sm text-white bg-blue-600 rounded hover:bg-blue-500'
            >
              Publish
            </button>
          </>
        ) : (
          <button
            onClick={handleSaveProject}
            className='col-span-2 px-4 py-3 text-sm text-white bg-blue-600 rounded hover:bg-blue-500'
          >
            Save Changes
          </button>
        )}
      </div>
    </div>
  );
};

export default SidebarBuilder;
