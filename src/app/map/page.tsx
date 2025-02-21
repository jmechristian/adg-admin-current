'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import Map, { MapRef, Marker } from 'react-map-gl/mapbox';
import { listProjectsWithLocations } from '@/helpers/api';
import 'mapbox-gl/dist/mapbox-gl.css';

interface ProjectWithLocation {
  department: {
    name: string;
  };
  gallery: {
    images: {
      items: [];
    };
  };
  locationString: string;
  name: string;
  size: string;
  status: string;
  description: string;
  location: {
    address: string;
    id: string;
    latitude: number;
    longitude: number;
    name: string;
  };
}

const MapPage = () => {
  const [locations, setLocations] = useState<ProjectWithLocation[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLocation, setSelectedLocation] =
    useState<ProjectWithLocation | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const initialView = {
    longitude: -77.0307193335218,
    latitude: 38.87225889119998,
    zoom: 12,
    pitch: 60,
  };
  const [viewState, setViewState] = useState(initialView);
  const mapRef = useRef<MapRef>(null);

  useEffect(() => {
    const getLocations = async () => {
      setLoading(true);
      const res = await listProjectsWithLocations();
      setLocations(res);
      console.log(res);
      setLoading(false);
    };
    getLocations();
  }, []);

  const getMarkerStyle = (department: string) => {
    switch (department.toLowerCase()) {
      case 'akres':
        return 'bg-blue-500';
      case 'commercial interiors':
        return 'bg-pink-800';
      case 'architecture':
        return 'bg-brand';
      default:
        return 'bg-gray-500';
    }
  };

  const markers = useMemo(() => {
    return locations.map((location) => {
      const colorClass = getMarkerStyle(location.department.name);

      return (
        <Marker
          key={location.location.id}
          longitude={location.location.longitude}
          latitude={location.location.latitude}
        >
          <div className='relative cursor-pointer'>
            {/* Custom pin shape using CSS */}
            <div
              className={`
              w-6 h-6 
              ${colorClass}
              rounded-full 
              flex items-center justify-center
              shadow-lg
              before:content-[''] 
              before:absolute 
              before:w-4 
              before:h-4 
              before:rotate-45 
              before:${colorClass}
              before:-bottom-1 
              before:left-1
            `}
              onClick={(e) => {
                // If we let the click event propagates to the map, it will immediately close the popup
                // with `closeOnClick: true`
                e.stopPropagation();
                setSelectedLocation(location);
                mapRef.current?.flyTo({
                  center: [
                    location.location.longitude,
                    location.location.latitude,
                  ],
                  zoom: 16,
                  duration: 1500,
                  offset: [0, 100],
                  pitch: 70,
                  bearing: 0,
                  essential: true,
                  curve: 0.7,
                  easing: function (t) {
                    return 1 - Math.pow(1 - t, 5);
                  },
                });
              }}
            >
              {/* Optional: Add an icon or text inside the marker */}
              <span className='text-white text-xs'>
                {location.department.name.charAt(0)}
              </span>
            </div>
          </div>
        </Marker>
      );
    });
  }, [locations]);

  const LocationModal = ({
    location,
    onClose,
  }: {
    location: ProjectWithLocation;
    onClose: () => void;
  }) => (
    <div
      className={`absolute w-[550px] flex items-center ${
        isSidebarOpen ? 'right-10' : 'left-10'
      } z-50`}
    >
      <div className='bg-white rounded-lg p-6 min-w-96 max-w-lg w-full'>
        <div className='space-y-3'>
          <div className='flex justify-between items-center pb-3 border-b border-gray-300'>
            <div className='flex flex-col gap-0'>
              <div className='text-sm text-gray-500'>
                {location.department.name}
              </div>
              <h2 className='text-xl font-bold'>{location.name}</h2>
            </div>
            <div>
              {location.status === 'DRAFT' ? (
                <div className='text-sm text-gray-600 bg-yellow-200 py-2 px-4 rounded-md font-brand-bold uppercase'>
                  Draft
                </div>
              ) : (
                <div className='text-sm text-gray-500 bg-green-200 py-2 px-4 rounded-md font-brand-bold uppercase'>
                  Active
                </div>
              )}
            </div>
          </div>

          <div className='flex flex-col gap-1 mt-2'>
            <span className='font-brand-bold text-xs text-gray-500'>
              Address:
            </span>{' '}
            <span className='text-sm'>
              {location.location.address || 'N/A'}
            </span>
          </div>
          <div className='text-sm line-clamp-6 mb-3'>
            {location.description}
          </div>
          <div className='flex items-center gap-5 justify-end pt-3 border-t border-gray-300'>
            <div
              className='text-sm text-gray-700 cursor-pointer'
              onClick={onClose}
            >
              Close
            </div>
            <div className='text-sm  bg-brand text-white py-2 px-4 rounded-md'>
              Edit Project
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const LocationSidebar = () => (
    <div
      className={`absolute left-0 top-0 h-full bg-white w-80 shadow-lg transform transition-transform duration-300 ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className='p-4'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-lg font-bold'>Locations</h2>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className='text-gray-500 hover:text-gray-700'
          >
            <span className='text-2xl'>×</span>
          </button>
        </div>
        <div className='space-y-2'>
          {locations.map((location) => (
            <div
              key={location.location.id}
              className='p-3 border rounded-lg hover:bg-gray-50 cursor-pointer'
              onClick={() => {
                mapRef.current?.flyTo({
                  center: [
                    location.location.longitude,
                    location.location.latitude,
                  ],
                  zoom: 16,
                  duration: 1500,
                  essential: true,
                });
                setSelectedLocation(location);
              }}
            >
              <div className='font-semibold'>{location.name}</div>
              <div className='text-sm text-gray-500'>
                {location.department.name}
              </div>
              <div className='text-xs text-gray-400'>
                {location.location.address}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className='w-screen h-[calc(100vh-84px)] flex justify-center items-center overflow-hidden'>
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        initialViewState={viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        style={{ width: '100%', height: '100%' }}
        mapStyle='mapbox://styles/adg-branding/cl47jmywy003p15rmjzucu62i'
        ref={mapRef}
      >
        <button
          className='absolute top-4 left-4 bg-white p-3 rounded-md shadow-md hover:bg-gray-100 z-10'
          onClick={() => setIsSidebarOpen(true)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {markers}
        <button
          className='absolute top-4 right-4 bg-white px-4 py-2 rounded-md shadow-md hover:bg-gray-100'
          onClick={() => {
            mapRef.current?.flyTo({
              center: [initialView.longitude, initialView.latitude],
              zoom: initialView.zoom,
              pitch: initialView.pitch,
              duration: 1500,
              essential: true,
            });
            setViewState(initialView);
          }}
        >
          Reset View
        </button>
      </Map>
      <LocationSidebar />
      {selectedLocation && (
        <LocationModal
          location={selectedLocation}
          onClose={() => setSelectedLocation(null)}
        />
      )}
    </div>
  );
};

export default MapPage;
