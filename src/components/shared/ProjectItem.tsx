'use client';

import React, { useEffect, useState } from 'react';
import {
  Gallery,
  ProjectWithDepartments,
  GalleryResponse,
  Department,
} from '@/types';
import {
  getProjectGallery,
  getFullImageUrl,
  archiveProject,
  setDraftProject,
  setPublishedProject,
} from '@/helpers/api';
import { MdArchive, MdEdit, MdCheckCircle } from 'react-icons/md';
import { useRouter } from 'next/navigation';

const ProjectItem = ({ project }: { project: ProjectWithDepartments }) => {
  const [gallery, setGallery] = useState<Gallery | null>(null);
  const [isClicked, setIsClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(project.status);
  const router = useRouter();

  useEffect(() => {
    const fetchGallery = async () => {
      const projectGallery = (await getProjectGallery(
        project.projectGalleryId
      )) as GalleryResponse;
      setGallery(projectGallery.data.getGallery);
    };

    if (project) {
      fetchGallery();
    }
  }, [project]);

  const handleClick = () => {
    setIsClicked(true);
    const catSlug = project.departments.items[0].department.name
      .toLowerCase()
      .replace(/\s+/g, '-');

    // Reset the click state after a brief delay
    setTimeout(() => setIsClicked(false), 200);
    router.push(`/${catSlug}/${project.id}`);
  };

  return (
    <div
      key={project.id}
      className={`grid grid-cols-12 gap-10 py-4 items-center w-full relative cursor-pointer hover:bg-gray-100 transition-colors duration-200 ${
        isClicked ? 'bg-gray-200' : ''
      }`}
    >
      <div className='col-span-4 flex gap-5 items-center' onClick={handleClick}>
        <div>
          <div
            className='aspect-video w-[180px]  bg-gray-300 overflow-hidden bg-cover bg-center'
            style={{
              backgroundImage: gallery?.images?.items?.length
                ? `url(${getFullImageUrl(
                    [...gallery.images.items].sort(
                      (a, b) => (a.order || 0) - (b.order || 0)
                    )[0].url
                  )})`
                : 'none',
            }}
          ></div>
        </div>
        <div className='flex flex-col gap-1'>
          <div className='font-brand-bold'>{project.name}</div>
          <div className='text-sm text-gray-500'>
            {project.departments.items
              .map((department: any) => department.department.name)
              .join(', ')}
          </div>
        </div>
      </div>
      <div className='col-span-2 text-xs' onClick={handleClick}>
        {project.locationString}
      </div>
      <div className='col-span-1 text-xs' onClick={handleClick}>
        {gallery?.images.items.length}
      </div>
      <div className='col-span-2 text-xs' onClick={handleClick}>
        {project.size}
      </div>

      <div className='col-span-1 text-xs' onClick={handleClick}>
        {new Date(project.updatedAt).toLocaleDateString()}
      </div>

      <div className='col-span-2 text-xs'>
        <div className='flex flex-wrap items-center gap-2'>
          <div
            className={`w-10 h-10 bg-red-500 flex items-center justify-center rounded hover:bg-red-600 transition-opacity duration-200 ${
              status === 'ARCHIVED' ? '' : 'opacity-30 hover:opacity-100'
            }`}
            onClick={() => {
              setLoading(true);
              archiveProject(project.id);
              setStatus('ARCHIVED');
              setLoading(false);
            }}
          >
            <div className='text-white'>
              <MdArchive size={24} />
            </div>
          </div>
          <div
            className={`w-10 h-10 bg-yellow-500 flex items-center justify-center rounded hover:bg-yellow-600 transition-opacity duration-200 ${
              status === 'DRAFT' ? '' : 'opacity-30 hover:opacity-100'
            }`}
            onClick={() => {
              setLoading(true);
              setDraftProject(project.id);
              setStatus('DRAFT');
              setLoading(false);
            }}
          >
            <div className='text-white'>
              <MdEdit size={24} />
            </div>
          </div>
          <div
            className={`w-10 h-10 bg-green-500 flex items-center justify-center rounded hover:bg-green-600 transition-opacity duration-200 ${
              status === 'PUBLISHED' ? '' : 'opacity-30 hover:opacity-100'
            }`}
            onClick={() => {
              setLoading(true);
              setPublishedProject(project.id);
              setStatus('PUBLISHED');
              setLoading(false);
            }}
          >
            <div className='text-white'>
              <MdCheckCircle size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
