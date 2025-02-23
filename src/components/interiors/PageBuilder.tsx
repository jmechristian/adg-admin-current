'use client';
import React from 'react';
import SidebarBuilder from '@/components/shared/SidebarBuilder';

import {
  TwoColIntro,
  HeadingHero,
  ProjectQuote,
} from '@jmechristian/adg-component-library';
import '@jmechristian/adg-component-library/styles.css';
import { Project } from '@/types';

interface PageBuilderProps {
  project: Project;
}

export const PageBuilder = ({ project }: PageBuilderProps) => {
  const [editedProject, setEditedProject] = React.useState(project);

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

  return (
    <div className='grid grid-cols-10 w-full'>
      <div className='col-span-8 border'>
        <div className='flex flex-col gap-10 max-w-7xl mx-auto py-12 w-full'>
          <HeadingHero
            title={editedProject.name}
            location={editedProject.locationString || ''}
            hero={{
              id:
                editedProject.gallery.images.items[0]?.id ??
                '9050e5e5-a95b-4020-87c5-03703c2b4400',
              url:
                editedProject.gallery.images.items[0]?.url ??
                'https://placehold.co/1152x775',
              alt: editedProject.gallery.images.items[0]?.alt ?? 'Hero Image',
              caption:
                editedProject.gallery.images.items[0]?.caption ?? 'Hero Image',
            }}
          />
          <TwoColIntro
            id={editedProject.id}
            description={editedProject.description || ''}
            collaborators={[]}
            size={editedProject.size || ''}
            subcategory={
              editedProject.subcategories?.items.map(
                (s) => s.subcategory.name
              ) || []
            }
            project_type={
              editedProject.project_type?.items.map(
                (p) => p.projectType.name
              ) || []
            }
            building_type={
              editedProject.building_type?.items.map(
                (b) => b.buildingType.name
              ) || []
            }
          />
          {editedProject.quote && (
            <ProjectQuote
              quote={editedProject.quote || ''}
              attribution={editedProject.quoteAttribution || ''}
            />
          )}
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
          }}
        />
      </div>
    </div>
  );
};
