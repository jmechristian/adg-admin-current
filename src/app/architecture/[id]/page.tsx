'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getProjectById } from '@/helpers/api';
import { GraphQLResult } from 'aws-amplify/api';
import { Project } from '@/types';
import {
  FullWidth,
  HeadingHero,
  TwoColIntro,
} from '@jmechristian/adg-component-library';
import '@jmechristian/adg-component-library/styles.css';
import { ArchPageBuilder } from '@/components/architecture/ArchPageBuilder';

interface ImageObject {
  id: string;
  url: string;
  alt: string;
  caption: string;
}

const Page = () => {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getProjectById(id as string)
        .then((result) => {
          if ('data' in result) {
            setProject(result.data?.getProject ?? null);
          }
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching project:', error);
          setIsLoading(false);
        });
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className='w-full mx-auto max-w-7xl py-20 animate-pulse'>
        {/* 16:9 Image Skeleton */}
        <div className='w-full aspect-video bg-gray-200 rounded-lg mb-8' />

        {/* Text Skeletons */}
        <div className='space-y-4 mb-12'>
          <div className='h-8 bg-gray-200 rounded w-3/4 mx-auto' />
          <div className='h-4 bg-gray-200 rounded w-1/2 mx-auto' />
          <div className='h-4 bg-gray-200 rounded w-2/3 mx-auto' />
        </div>

        {/* 3 Column Grid Image Skeletons */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {[...Array(3)].map((_, index) => (
            <div key={index} className='aspect-square bg-gray-200 rounded-lg' />
          ))}
        </div>
      </div>
    );
  }

  console.log(project);

  return (
    <main className='w-full'>
      <ArchPageBuilder project={project!} />
    </main>
  );
};

export default Page;
