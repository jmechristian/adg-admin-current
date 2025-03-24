'use client';

import { useState, useEffect, useMemo } from 'react';
import { getProjectsWithDepartments } from '../helpers/api';
import HeaderItem from '@/components/shared/HeaderItem';
import { ProjectWithDepartments } from '@/types';
import ProjectItem from '@/components/shared/ProjectItem';
import useLayoutStore from '@/store/useLayoutStore';

export default function Home() {
  const [projects, setProjects] = useState<ProjectWithDepartments[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const [activeFilter, setActiveFilter] = useState('');
  const toggleModal = useLayoutStore((state) => state.toggleModal);
  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await getProjectsWithDepartments();
        console.log(res);
        setProjects(res);
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
        (project: ProjectWithDepartments) =>
          project?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ??
          false
      )
      .filter((project: ProjectWithDepartments) =>
        activeFilter
          ? project?.departments?.items[0]?.department?.name === activeFilter
          : true
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

  const architectureCount = useMemo(() => {
    return projects.length > 0
      ? projects.filter(
          (project: ProjectWithDepartments) =>
            project?.departments?.items[0]?.department?.id ===
            '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7'
        ).length
      : 0;
  }, [projects]);

  const commercialInteriorsCount = useMemo(() => {
    return projects.length > 0
      ? projects.filter(
          (project: ProjectWithDepartments) =>
            project?.departments?.items[0]?.department?.id ===
            '0cd75086-b396-4c52-a907-5b52fb6aeedd'
        ).length
      : 0;
  }, [projects]);

  const brandingCount = useMemo(() => {
    return projects.length > 0
      ? projects.filter(
          (project: ProjectWithDepartments) =>
            project?.departments?.items[0]?.department?.id ===
            '4dfd71af-51a3-4af9-874f-da260e081f08'
        ).length
      : 0;
  }, [projects]);

  const akresCount = useMemo(() => {
    return projects.length > 0
      ? projects.filter(
          (project: ProjectWithDepartments) =>
            project?.departments?.items[0]?.department?.id ===
            '6cd6cac5-1533-45e3-8e9a-d4e1472def9a'
        ).length
      : 0;
  }, [projects]);

  const handleFilterClick = (department: string) => {
    setActiveFilter(activeFilter === department ? '' : department);
    setCurrentPage(1);
  };

  return (
    <div className='flex flex-col'>
      <header className='bg-gray-900 pt-4 pb-6'>
        <div className='mx-auto max-w-7xl'>
          <div className='flex flex-col gap-2.5'>
            <div className='grid grid-cols-4 gap-5'>
              {loading ? (
                [...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className='h-24 bg-gray-200 animate-pulse rounded'
                  ></div>
                ))
              ) : (
                <>
                  <HeaderItem
                    title='Architecture'
                    count={architectureCount}
                    bgColor={`bg-indigo-200/70 ${
                      activeFilter === 'Architecture'
                        ? 'ring-2 ring-white ring-offset-2 transition-all duration-300'
                        : ''
                    }`}
                    onClick={() => handleFilterClick('Architecture')}
                  />
                  <HeaderItem
                    title='Interiors'
                    count={commercialInteriorsCount}
                    bgColor={`bg-lime-300/60 ${
                      activeFilter === 'Interiors'
                        ? 'ring-2 ring-white ring-offset-2 transition-all duration-300'
                        : ''
                    }`}
                    onClick={() => handleFilterClick('Interiors')}
                  />
                  <HeaderItem
                    title='Branding'
                    count={brandingCount}
                    bgColor={`bg-yellow-400/80 ${
                      activeFilter === 'Branding'
                        ? 'ring-2 ring-white ring-offset-2 transition-all duration-300'
                        : ''
                    }`}
                    onClick={() => handleFilterClick('Branding')}
                  />
                  <HeaderItem
                    title='Residential'
                    count={akresCount}
                    bgColor={`bg-orange-400/80 ${
                      activeFilter === 'Residential'
                        ? 'ring-2 ring-white ring-offset-2 transition-all duration-300'
                        : ''
                    }`}
                    onClick={() => handleFilterClick('Residential')}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </header>
      <div className='max-w-7xl mx-auto flex flex-col gap-3 py-10 w-full'>
        {loading ? (
          <>
            <div className='flex justify-between items-center mb-4'>
              <div className='h-10 w-[60%] bg-gray-200 animate-pulse rounded'></div>
              <div className='h-10 w-[20%] bg-gray-200 animate-pulse rounded'></div>
            </div>
            <div className='h-8 w-full bg-gray-200 animate-pulse rounded mb-4'></div>
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className='h-16 w-full bg-gray-200 animate-pulse rounded mb-2'
              ></div>
            ))}
          </>
        ) : (
          <>
            <div className='w-full border-b-2 pb-2 flex justify-between items-center'>
              <div className='font-brand-bold text-2xl'>All Projects</div>
              <button
                onClick={toggleModal}
                className='bg-brand text-white px-4 py-2 rounded-md font-brand-bold text-sm'
              >
                Create New +
              </button>
            </div>
            <div className='flex justify-between items-center mt-5 mb-4'>
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
              <div className='font-brand-bold text-xs col-span-4'>Details</div>
              <div className='font-brand-bold text-xs col-span-2'>Location</div>
              <div className='font-brand-bold text-xs col-span-1'>Gallery</div>
              <div className='font-brand-bold text-xs col-span-2'>Size</div>
              <div className='font-brand-bold text-xs col-span-1'>Updated</div>
              <div className='font-brand-bold text-xs col-span-1'>Featured</div>
              <div className='font-brand-bold col-span-1 text-xs'>Status</div>
            </div>
            <div className='flex flex-col gap-2 divide-y divide-gray-300'>
              {currentProjects.length > 0 &&
                currentProjects
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((project: ProjectWithDepartments) => (
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
