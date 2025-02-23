'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import Map, { MapRef, Marker } from 'react-map-gl/mapbox';
import { listProjectsWithLocations } from '@/helpers/api';
import 'mapbox-gl/dist/mapbox-gl.css';
import ArchitectureIcon from '@/components/shared/ArchitectureIcon';
import BrandingIcon from '@/components/shared/BrandingIcon';
import AkresIcon from '@/components/shared/AkresIcon';
import InteriorsIcon from '@/components/shared/InteriorsIcon';

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

const styles = `
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  
  .hide-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`;

const LocationSidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
  searchQuery,
  setSearchQuery,
  filteredLocations,
  mapRef,
  setSelectedLocation,
}: {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredLocations: ProjectWithLocation[];
  mapRef: React.RefObject<MapRef>;
  setSelectedLocation: (location: ProjectWithLocation | null) => void;
}) => (
  <div
    className={`absolute left-0 top-0 z-50 h-screen overflow-y-auto bg-white w-96 shadow-lg transform transition-transform duration-300 hide-scrollbar ${
      isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
    }`}
  >
    <div className='p-4'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-lg font-bold'>
          Locations :{' '}
          <span className='text-brand'> {filteredLocations.length}</span>
        </h2>
        <button
          onClick={() => setIsSidebarOpen(false)}
          className='text-gray-500 hover:text-gray-700'
        >
          <span className='text-2xl'>×</span>
        </button>
      </div>
      <div className='mb-4'>
        <input
          type='text'
          placeholder='Search by name or address...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent'
        />
      </div>
      <div className='space-y-2'>
        {filteredLocations.map((location) => (
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

const MapPage = () => {
  const [locations, setLocations] = useState<ProjectWithLocation[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLocation, setSelectedLocation] =
    useState<ProjectWithLocation | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>([
    'akres',
    'commercial interiors',
    'architecture',
    'branding',
  ]);

  const initialView = {
    longitude: -77.0307193335218,
    latitude: 38.87225889119998,
    zoom: 12,
    pitch: 60,
  };
  const [viewState, setViewState] = useState(initialView);
  const mapRef = useRef<MapRef>(null) as React.MutableRefObject<MapRef>;

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

  const getMarkerIcon = (department: string) => {
    switch (department.toLowerCase()) {
      case 'akres':
        return <AkresIcon active small />;
      case 'commercial interiors':
        return <InteriorsIcon active small />;
      case 'architecture':
        return <ArchitectureIcon active small />;
      case 'branding':
        return <BrandingIcon active small />;
      default:
        return <ArchitectureIcon active small />;
    }
  };

  const toggleFilter = (department: string) => {
    setActiveFilters((prev) =>
      prev.includes(department.toLowerCase())
        ? prev.filter((f) => f !== department.toLowerCase())
        : [...prev, department.toLowerCase()]
    );
  };

  const filteredLocations = useMemo(() => {
    let filtered = locations;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (location) =>
          location.name.toLowerCase().includes(query) ||
          location.location.address.toLowerCase().includes(query)
      );
    }

    return filtered.filter((location) =>
      activeFilters.includes(location.department.name.toLowerCase())
    );
  }, [locations, searchQuery, activeFilters]);

  const markers = useMemo(() => {
    return filteredLocations.map((location) => {
      const icon = getMarkerIcon(location.department.name);

      return (
        <Marker
          key={location.location.id}
          longitude={location.location.longitude}
          latitude={location.location.latitude}
        >
          <div
            onClick={(e) => {
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
            {icon}
          </div>
        </Marker>
      );
    });
  }, [filteredLocations]);

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

  return (
    <>
      <style>{styles}</style>
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
          <div className='w-fit flex items-center gap-3 absolute top-4 right-4 z-10'>
            <div className=' flex gap-1.5'>
              <div
                onClick={() => toggleFilter('Akres')}
                className='cursor-pointer'
              >
                <AkresIcon active={activeFilters.includes('akres')} />
              </div>
              <div
                onClick={() => toggleFilter('Commercial Interiors')}
                className='cursor-pointer'
              >
                <InteriorsIcon
                  active={activeFilters.includes('commercial interiors')}
                />
              </div>
              <div
                onClick={() => toggleFilter('Architecture')}
                className='cursor-pointer'
              >
                <ArchitectureIcon
                  active={activeFilters.includes('architecture')}
                />
              </div>
              <div
                onClick={() => toggleFilter('Branding')}
                className='cursor-pointer'
              >
                <BrandingIcon active={activeFilters.includes('branding')} />
              </div>
            </div>
            <button
              className=' bg-white px-4 py-2 rounded-md shadow-md hover:bg-gray-100'
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
          </div>
          {markers}
        </Map>
        <LocationSidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filteredLocations={filteredLocations}
          mapRef={mapRef}
          setSelectedLocation={setSelectedLocation}
        />
        {selectedLocation && (
          <LocationModal
            location={selectedLocation}
            onClose={() => setSelectedLocation(null)}
          />
        )}
      </div>
    </>
  );
};

export default MapPage;
