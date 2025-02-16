import React from 'react';
import { getProjectById } from '@/helpers/api';
import { PageBuilder } from '@/components/interiors/PageBuilder';
import { GraphQLResult } from '@aws-amplify/api';

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
  getProject: {
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
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const project = (await getProjectById(id)) as GraphQLResult<ProjectData>;

  if (!project.data) {
    return <div>Project not found</div>;
  }

  return (
    <main className='w-full'>
      <PageBuilder project={project.data.getProject} />
    </main>
  );
}
