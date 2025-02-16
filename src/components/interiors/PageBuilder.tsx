'use client';
import React from 'react';
import SidebarBuilder from '@/components/shared/SidebarBuilder';

import { HeadingHero, TwoColIntro } from '@jmechristian/adg-component-library';
import '@jmechristian/adg-component-library/styles.css';
import { Project } from '@/types';

interface PageBuilderProps {
  project: Project;
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
            collaborators={[]}
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
