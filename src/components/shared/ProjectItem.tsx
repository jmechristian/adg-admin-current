'use client';

import React, { useEffect, useState } from 'react';
import { Gallery, Project, GalleryResponse } from '@/types';
import { getProjectGallery } from '@/helpers/api';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const ProjectItem = ({ project }: { project: Project }) => {
  const [gallery, setGallery] = useState<Gallery | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchGallery = async () => {
      const projectGallery = (await getProjectGallery(
        project.gallery.id
      )) as GalleryResponse;
      setGallery(projectGallery.data.getGallery);
    };
    fetchGallery();
  }, [project.gallery.id]);

  const handleClick = () => {
    const catSlug = project.department.name.toLowerCase().replace(/\s+/g, '-');

    router.push(`/${catSlug}/${project.id}`);
  };

  return (
    <div
      key={project.id}
      className='grid grid-cols-12 gap-10 py-4 items-center w-full relative cursor-pointer hover:bg-gray-100'
      onClick={handleClick}
    >
      <div className='col-span-1 text-xs'>{project.oldId}</div>

      <div className='col-span-5 flex gap-5 items-center'>
        <div>
          <div
            className='aspect-video w-[180px]  bg-gray-300 overflow-hidden bg-cover bg-center'
            style={{
              backgroundImage: gallery?.images?.items?.length
                ? `url(${gallery.images.items[0].url})`
                : 'none',
            }}
          ></div>
        </div>
        <div className='flex flex-col gap-1'>
          <div className='font-brand-bold'>{project.name}</div>
          <div className='text-sm text-gray-500'>{project.department.name}</div>
        </div>
      </div>
      <div className='col-span-1 text-xs'>{gallery?.images.items.length}</div>
      <div className='col-span-2 text-xs'>{project.size}</div>

      <div className='col-span-1 text-xs'>
        {new Date(project.updatedAt).toLocaleDateString()}
      </div>
      <div className='col-span-1 text-xs flex items-center justify-center'>
        {project.featured ? (
          <FaCheckCircle className='text-green-500 text-2xl' />
        ) : (
          <FaTimesCircle className='text-red-500 text-2xl' />
        )}
      </div>
      <div className='col-span-1 text-xs'>
        {project.status === 'PUBLISHED' ? (
          <div className='text-green-700 bg-green-300 px-2 py-1 rounded-md text-xs font-brand-bold text-center'>
            Live
          </div>
        ) : (
          <div className='text-red-500 bg-red-100 px-2 py-1 rounded-md text-xs font-brand-bold text-center'>
            Draft
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
