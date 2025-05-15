'use client';
import React from 'react';
import SidebarBuilder from '@/components/shared/SidebarBuilder';
import { images } from '@/data/image';
import { getProjectById } from '@/helpers/api';
import { GraphQLResult } from 'aws-amplify/api';

import {
  TwoColIntro,
  HeadingHero,
  TwoColGallery,
  ProjectQuote,
  CascadingGallery,
} from '@jmechristian/adg-component-library';
import '@jmechristian/adg-component-library/styles.css';
import { Project } from '@/types';
interface ProjectResponse {
  getProject: Project;
}

interface PageBuilderProps {
  project: Project;
}

export const ArchPageBuilder = ({ project }: PageBuilderProps) => {
  const [editedProject, setEditedProject] = React.useState(project);
  console.log('editedProject', editedProject);
  const handleProjectUpdate = async () => {
    try {
      const response = (await getProjectById(
        project.id
      )) as GraphQLResult<ProjectResponse>;
      setEditedProject(response.data.getProject);
    } catch (error) {
      console.error('Error refreshing project:', error);
      setEditedProject(project);
    }
  };

  const refreshProject = async () => {
    const response = (await getProjectById(
      project.id
    )) as GraphQLResult<ProjectResponse>;
    setEditedProject(response.data.getProject);
  };

  const handleDescriptionChange = (newDescription: string) => {
    setEditedProject((prev) => ({
      ...prev,
      description: newDescription,
    }));
  };

  const handleNameChange = (newName: string) => {
    setEditedProject((prev) => ({
      ...prev,
      name: newName,
    }));
  };

  const handleSizeChange = (newSize: string) => {
    setEditedProject((prev) => ({
      ...prev,
      size: newSize,
    }));
  };

  const handleLocationChange = (newLocation: string) => {
    setEditedProject((prev) => ({
      ...prev,
      locationString: newLocation,
    }));
  };

  const handleQuoteChange = (newQuote: string) => {
    setEditedProject((prev) => ({
      ...prev,
      quote: newQuote,
    }));
  };

  const handleQuoteAttributionChange = (newQuoteAttribution: string) => {
    setEditedProject((prev) => ({
      ...prev,
      quoteAttribution: newQuoteAttribution,
    }));
  };

  const handleCollaboratorsChange = (newCollaborators: string) => {
    setEditedProject((prev) => ({
      ...prev,
      collaborators: newCollaborators,
    }));
  };

  const handlePreviewLocationChange = (newPreviewLocation: string) => {
    setEditedProject((prev) => ({
      ...prev,
      previewLocation: newPreviewLocation,
    }));
  };
  return (
    <div className='grid grid-cols-10 w-full'>
      <div className='col-span-8 border'>
        <div className='flex flex-col gap-8 max-w-6xl mx-auto py-12 w-full'>
          <HeadingHero
            title={editedProject.name}
            location={editedProject.locationString || ''}
            hero={{
              id:
                editedProject.gallery.images.items.sort(
                  (a, b) => (a.order || 0) - (b.order || 0)
                )[0]?.id ?? '9050e5e5-a95b-4020-87c5-03703c2b4400',
              url:
                editedProject.gallery.images.items.sort(
                  (a, b) => (a.order || 0) - (b.order || 0)
                )[0]?.url ?? 'https://placehold.co/1152x775',
              alt:
                editedProject.gallery.images.items.sort(
                  (a, b) => (a.order || 0) - (b.order || 0)
                )[0]?.alt ?? 'Hero Image',
              caption:
                editedProject.gallery.images.items.sort(
                  (a, b) => (a.order || 0) - (b.order || 0)
                )[0]?.caption ?? 'Hero Image',
            }}
            setModalImage={() => {}}
          />
          <TwoColIntro
            id={editedProject.id}
            description={editedProject.description || ''}
            collaborators={editedProject.collaborators || ''}
            size={editedProject.size || ''}
            subcategory={
              editedProject.subcategories?.items.length > 0
                ? editedProject.subcategories?.items.map(
                    (s) => s.subcategory.name
                  )
                : null
            }
            project_type={
              editedProject.project_type?.items.length > 0
                ? editedProject.project_type?.items.map(
                    (p) => p.projectType.name
                  )
                : null
            }
            building_type={
              editedProject.building_type?.items.length > 0
                ? editedProject.building_type?.items.map(
                    (b) => b.buildingType.name
                  )
                : null
            }
          />
          <TwoColGallery
            images={editedProject.gallery.images.items
              .sort((a, b) => (a.order || 0) - (b.order || 0))
              .slice(1)}
            setModalImage={() => {}}
          />
        </div>
      </div>
      <div className='col-span-2 bg-black py-6 px-6'>
        <SidebarBuilder
          project={{
            ...editedProject,
            onDescriptionChange: handleDescriptionChange,
            onNameChange: handleNameChange,
            onSizeChange: handleSizeChange,
            onLocationChange: handleLocationChange,
            onQuoteChange: handleQuoteChange,
            onQuoteAttributionChange: handleQuoteAttributionChange,
            onCollaboratorsChange: handleCollaboratorsChange,
            onPreviewLocationChange: handlePreviewLocationChange,
          }}
          onProjectUpdate={handleProjectUpdate}
          refreshProject={refreshProject}
        />
      </div>
    </div>
  );
};
