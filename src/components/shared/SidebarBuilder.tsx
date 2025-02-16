import React from 'react';
// import { SubcategorySelect } from './SubcategorySelect';
// import { ProjectTypeSelect } from './ProjectTypeSelect';
// import { BuildingTypeSelector } from './BuildingTypeSelector';

interface Location {
  id: string;
  name: string | null;
  address: string;
  description: string | null;
  latitude: number;
  longitude: number;
  createdAt: string;
  updatedAt: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

interface Image {
  id: string;
  url: string;
  alt: string;
  caption: string;
  createdAt: string;
  updatedAt: string;
  projectGalleryId: string | null;
}

interface Department {
  id: string;
  name: string;
  projects: {
    nextToken: string | null;
  };
  createdAt: string;
  updatedAt: string;
}

interface ProjectData {
  id: string;
  oldId: string;
  name: string;
  description: string;
  location: Location;
  locationString: string;
  createdBy: User;
  lastUpdatedBy: User | null;
  featured: boolean;
  link: string;
  quote: string | null;
  quoteAttribution: string | null;
  collaborators: {
    items: any[];
    nextToken: string | null;
  };
  size: string;
  gridOrder: number;
  status: string;
  hero: Image;
  gallery: {
    items: any[];
    nextToken: string | null;
  };
  department: Department;
  subcategories: {
    items: Array<{
      id: string;
      projectID: string;
      subcategoryID: string;
      createdAt: string;
      updatedAt: string;
    }>;
    nextToken: string | null;
  };
  building_type: {
    items: Array<{
      id: string;
      projectID: string;
      buildingTypeID: string;
      createdAt: string;
      updatedAt: string;
    }>;
    nextToken: string | null;
  };
  project_type: {
    items: Array<{
      id: string;
      projectID: string;
      projectTypeID: string;
      createdAt: string;
      updatedAt: string;
    }>;
    nextToken: string | null;
  };
  createdAt: string;
  updatedAt: string;
  departmentProjectsId: string;
  projectLocationId: string;
  projectCreatedById: string;
  projectLastUpdatedById: string | null;
  projectHeroId: string;
}

const SidebarBuilder = ({ project }: { project: ProjectData }) => {
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
        <div className='flex flex-col gap-0'>
          <h2 className='text-2xl font-brand-bold text-white'>
            {project.name}
          </h2>
          <div className='w-full text-lg text-white leading-none'>
            {project.locationString}
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-1'>
        <div
          className='w-full aspect-video bg-cover bg-center bg-no-repeat bg-slate-500'
          style={{
            backgroundImage: `url(${
              project.hero?.url || 'https://placehold.co/600x400'
            })`,
          }}
        ></div>
      </div>
      <div className='flex flex-col gap-0'>
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
      {/* <SubcategorySelect currentSubcategories={project.subcategories} />
      <ProjectTypeSelect currentProjectTypes={project.project_type} />
      <BuildingTypeSelector currentBuildingTypes={project.building_type} /> */}
    </div>
  );
};

export default SidebarBuilder;
