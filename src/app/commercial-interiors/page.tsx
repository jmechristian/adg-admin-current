'use client';

import { useState, useEffect, useMemo } from 'react';
import { listAllProjects } from '../../helpers/api';
import { Project } from '@/types';
import ProjectItem from '@/components/shared/ProjectItem';
export default function CommercialInteriors() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const [activeFilter, setActiveFilter] = useState('');

  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await listAllProjects();
        setProjects(
          res.filter(
            (project: Project) =>
              project.department.name === 'Commercial Interiors'
          )
        );
      } finally {
        setLoading(false);
      }
    };
    getProjects();
  }, []);

  const filteredProjects = useMemo(() => {
    if (!projects.length) return [];

    return projects
      .sort((a, b) => {
        if (a.status === 'PUBLISHED' && b.status !== 'PUBLISHED') return -1;
        if (a.status !== 'PUBLISHED' && b.status === 'PUBLISHED') return 1;
        return 0;
      })
      .filter(
        (project: Project) =>
          project?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ??
          false
      )
      .filter((project: Project) =>
        activeFilter ? project?.department?.name === activeFilter : true
      );
  }, [projects, searchTerm, activeFilter]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='flex flex-col'>
      <div className='max-w-7xl mx-auto flex flex-col gap-7 py-10 w-full'>
        {loading ? (
          <>
            <div className='h-10 w-1/3 bg-gray-200 animate-pulse rounded'></div>
            <div className='flex justify-between items-center mb-4'>
              <div className='h-10 w-[60%] bg-gray-200 animate-pulse rounded'></div>
              <div className='h-10 w-[20%] bg-gray-200 animate-pulse rounded'></div>
            </div>
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className='h-16 w-full bg-gray-200 animate-pulse rounded mb-2'
              ></div>
            ))}
          </>
        ) : (
          <>
            <div className='font-brand-bold text-2xl w-full border-b-2 pb-2'>
              Commercial Interiors:{' '}
              <span className='text-brand'>{projects.length} Projects</span>
            </div>

            <div className='flex justify-between items-center mb-4'>
              <input
                type='text'
                placeholder='Search by name'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='mb-4 p-2 border border-gray-300 w-[60%]'
              />
              <div className='flex justify-between items-center gap-2 text-sm mb-4'>
                <label>
                  Show
                  <select
                    value={itemsPerPage}
                    onChange={(e) => setItemsPerPage(Number(e.target.value))}
                    className='mx-1 p-2 border border-gray-300 text-sm'
                  >
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </select>
                  items per page
                </label>
              </div>
            </div>

            <div className='grid grid-cols-12 gap-10 border-b-2 pb-2'>
              <div className='font-brand-bold text-xs col-span-1'>ID</div>

              <div className='font-brand-bold text-xs col-span-5'>Details</div>
              <div className='font-brand-bold text-xs col-span-1'>Gallery</div>
              <div className='font-brand-bold text-xs col-span-2'>Size</div>
              <div className='font-brand-bold text-xs col-span-1'>Updated</div>
              <div className='font-brand-bold text-xs col-span-1'>Featured</div>
              <div className='font-brand-bold col-span-1 text-xs'>Status</div>
            </div>
            <div className='flex flex-col gap-2 divide-y divide-gray-300'>
              {currentProjects.length > 0 &&
                currentProjects
                  .sort((a, b) => a.oldId.localeCompare(b.oldId))
                  .map((project: Project) => (
                    <ProjectItem key={project.id} project={project} />
                  ))}
            </div>
            <div className='flex justify-center mt-4'>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`mx-1 px-3 py-1 border ${
                    currentPage === index + 1
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-black'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
