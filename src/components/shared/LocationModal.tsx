import { useState, useEffect } from 'react';
import Map, { Marker } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Location } from '@/types'; // Define your Location type based on the schema

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (location: Location) => void;
  initialLocation?: Location;
}

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export default function LocationModal({
  isOpen,
  onClose,
  onSave,
  initialLocation,
}: LocationModalProps) {
  // State for form fields and marker position
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    description: '',
    latitude: 0,
    longitude: 0,
    id: '',
  } as {
    name?: string;
    address?: string;
    description?: string;
    latitude: number;
    longitude: number;
    id?: string;
  });

  // Initialize with passed location or default values
  useEffect(() => {
    if (initialLocation) {
      setFormData(initialLocation);
    }
  }, [initialLocation]);

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

  return isOpen ? (
    <div className='fixed inset-0 z-[50]'>
      {/* Modal Overlay */}
      <div className='fixed inset-0 bg-black bg-opacity-50' onClick={onClose} />

      {/* Modal Content */}
      <div className='fixed inset-10 bg-white rounded-lg shadow-xl overflow-hidden z-[51]'>
        <div className='flex h-full'>
          {/* Map Section */}
          <div className='w-2/3 h-full'>
            <Map
              mapboxAccessToken={MAPBOX_TOKEN}
              initialViewState={{
                longitude:
                  initialLocation?.longitude || formData.longitude || -98,
                latitude: initialLocation?.latitude || formData.latitude || 39,
                zoom: 12,
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
          <div className='w-1/3 p-6 bg-gray-900 text-gray-100'>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSave({
                  ...formData,
                  id: formData.id || '',
                });
              }}
              className='space-y-4'
            >
              <input
                type='text'
                placeholder='Search address...'
                onChange={(e) => handleAddressSearch(e.target.value)}
                className='w-full px-3 py-2 !bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              />

              <input
                type='text'
                placeholder='Name'
                value={formData.name || ''}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                className='w-full px-3 py-2 !bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              />

              <input
                type='text'
                placeholder='Address'
                value={formData.address || ''}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, address: e.target.value }))
                }
                className='w-full px-3 py-2 !bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
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
                className='w-full px-3 py-2 !bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]'
              />

              {/* Coordinates display */}
              <div className='grid grid-cols-2 gap-4'>
                <input
                  type='text'
                  value={`Latitude: ${formData.latitude.toFixed(6)}`}
                  readOnly
                  className='px-3 py-2 !bg-gray-800 border border-gray-700 rounded-lg text-sm'
                />
                <input
                  type='text'
                  value={`Longitude: ${formData.longitude.toFixed(6)}`}
                  readOnly
                  className='px-3 py-2 !bg-gray-800 border border-gray-700 rounded-lg text-sm'
                />
              </div>

              <div className='flex gap-4 pt-4'>
                <button
                  type='submit'
                  className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
                >
                  Save Location
                </button>
                <button
                  type='button'
                  onClick={onClose}
                  className='px-4 py-2 !bg-gray-800 text-gray-100 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500'
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
