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
  setFeaturedProject,
} from '@/helpers/api';
import { MdArchive, MdEdit, MdCheckCircle, MdBurstMode } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import { Switch } from '@headlessui/react';

const ProjectItem = ({ project }: { project: ProjectWithDepartments }) => {
  console.log(project);
  const [featured, setFeatured] = useState(project.featured);
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
      className={`grid grid-cols-12 gap-5 py-4 items-center w-full relative cursor-pointer hover:bg-gray-100 transition-colors duration-200 ${
        isClicked ? 'bg-gray-200' : ''
      }`}
    >
      <div className='col-span-4 flex gap-5 items-center' onClick={handleClick}>
        <div>
          <div
            className='aspect-video w-[180px]  bg-gray-300 overflow-hidden bg-cover bg-center relative'
            style={{
              backgroundImage: gallery?.images?.items?.length
                ? `url(${getFullImageUrl(
                    [...gallery.images.items].sort(
                      (a, b) => (a.order || 0) - (b.order || 0)
                    )[0].url
                  )})`
                : 'none',
            }}
          >
            <div className='absolute bottom-1 right-1'>
              <div className='bg-black/60 text-white text-xs py-1 px-2 flex items-center gap-1 font-brand-bold'>
                <div>{gallery?.images.items.length}</div>
                <div>
                  <MdBurstMode size={24} color='lightgray' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='text-xs text-gray-900 uppercase'>
            {project.departments.items
              .map((department: any) => department.department.name)
              .join(', ')}
          </div>
          <div className='font-brand-bold text-xl leading-tight'>
            {project.name}
          </div>
          <div className='text-xs text-gray-500'>{project.locationString}</div>
        </div>
      </div>

      <div className='col-span-2 text-xs' onClick={handleClick}>
        {project.project_type.items.length > 0
          ? project.project_type.items
              .map((item: any) => item.projectType.name)
              .join(', ')
          : 'N/A'}
      </div>
      <div className='col-span-2 text-xs' onClick={handleClick}>
        {project.building_type.items.length > 0
          ? project.building_type.items
              .map((item: any) => item.buildingType.name)
              .join(', ')
          : 'N/A'}
      </div>
      <div className='col-span-1 text-xs' onClick={handleClick}>
        {project.size}
      </div>
      <div className='col-span-1 text-xs flex items-center justify-center gap-2'>
        <Switch
          checked={featured}
          onChange={async () => {
            setLoading(true);
            setFeatured(!featured);
            await setFeaturedProject(project.id);
            setLoading(false);
          }}
          className={`${
            featured ? 'bg-blue-600' : 'bg-gray-200'
          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
        >
          <span
            className={`${
              featured ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
          />
        </Switch>
      </div>
      <div className='col-span-2 text-xs flex flex-col gap-3 justify-center items-center'>
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
        <div className='flex gap-1 items-center justify-center'>
          <div className='text-xs' onClick={handleClick}>
            {new Date(project.updatedAt).toLocaleDateString()}
          </div>
          <div className='text-xs' onClick={handleClick}>
            {new Date(project.updatedAt).toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
