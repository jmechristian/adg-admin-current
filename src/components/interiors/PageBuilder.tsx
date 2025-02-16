'use client';
import React from 'react';
import SidebarBuilder from '@/components/shared/SidebarBuilder';

import { HeadingHero, TwoColIntro } from '@jmechristian/adg-component-library';
import '@jmechristian/adg-component-library/styles.css';

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

interface PageBuilderProps {
  project: ProjectData;
}

export const PageBuilder = ({ project }: PageBuilderProps) => {
  return (
    <div className='grid grid-cols-10 w-full'>
      <div className='col-span-8 border'>
        <div className='flex flex-col gap-10 max-w-7xl mx-auto py-12 w-full'>
          <HeadingHero
            title={project.name}
            location={project.locationString || ''}
            hero={
              project.hero || {
                id: '9050e5e5-a95b-4020-87c5-03703c2b4400',
                url: 'https://adg-projects.nyc3.digitaloceanspaces.com/f86ae294c488099af5150f041291aa08.webp',
                alt: 'Hero Image',
              }
            }
          />
          <TwoColIntro
            id={project.id}
            description={project.description || ''}
            collaborators={
              project.collaborators?.items.map((c) => c.name) || []
            }
            size={project.size || ''}
            subcategory={project.subcategories?.items.map((s) => s.name) || []}
            project_type={project.project_type?.items.map((p) => p.name) || []}
            building_type={
              project.building_type?.items.map((b) => b.name) || []
            }
          />
        </div>
      </div>
      <div className='col-span-2 bg-black py-10 px-6'>
        <SidebarBuilder project={project} />
      </div>
    </div>
  );
};
