import React from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { Project } from '@/types';
import { SubcategorySelect } from './SubcategorySelect';
import { ProjectTypeSelect } from './ProjectTypeSelect';
import { BuildingTypeSelector } from './BuildingTypeSelector';
const SidebarBuilder = ({ project }: { project: Project }) => {
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
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-1'>
        <div
          className='w-full aspect-video bg-cover bg-center bg-no-repeat bg-slate-500'
          style={{
            backgroundImage: `url(${
              project.gallery.images.items[0]?.url ||
              'https://placehold.co/600x400'
            })`,
          }}
        ></div>
      </div>

      <div className='flex flex-col gap-3'>
        <SubcategorySelect
          currentSubcategories={
            project.subcategories?.items.map((s) => s.subcategory) || []
          }
        />
        <ProjectTypeSelect
          currentProjectTypes={
            project.project_type?.items.map((p) => p.projectType) || []
          }
        />
        <BuildingTypeSelector
          currentBuildingTypes={
            project.building_type?.items.map((b) => b.buildingType) || []
          }
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
        <div className='w-full border border-gray-700 rounded p-2 grid grid-cols-3 gap-2'>
          {project.gallery.images.items.map((image) => (
            <div
              key={image.id}
              className='w-full aspect-square bg-cover bg-center bg-no-repeat bg-slate-500'
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            ></div>
          ))}
          <button className='w-full aspect-square bg-cover bg-center bg-no-repeat bg-slate-500'>
            <PlusIcon className='w-24 h-24 text-white' />
          </button>
        </div>
      </div>

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
              // onClick={project.onSave}
              className='px-4 py-3 text-sm text-white bg-gray-700 rounded hover:bg-gray-600'
            >
              Save
            </button>
            <button
              // onClick={project.onPublish}
              className='px-4 py-3 text-sm text-white bg-blue-600 rounded hover:bg-blue-500'
            >
              Publish
            </button>
          </>
        ) : (
          <button
            // onClick={project.onSave}
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
