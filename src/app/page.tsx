'use client';

import { useState, useEffect, useMemo } from 'react';
import { listAllProjects } from '@/helpers/api';
import HeaderItem from '@/components/shared/HeaderItem';
import { Project } from '@/types';
import ProjectItem from '@/components/shared/ProjectItem';
export default function Home() {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const [activeFilter, setActiveFilter] = useState('');

  useEffect(() => {
    const getProjects = async () => {
      const res = await listAllProjects();

      setProjects(res);
      console.log(res);
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

  const architectureCount = useMemo(() => {
    return projects.length > 0
      ? projects.filter(
          (project: Project) => project?.department?.name === 'Architecture'
        ).length
      : 0;
  }, [projects]);

  const commercialInteriorsCount = useMemo(() => {
    return projects.length > 0
      ? projects.filter(
          (project: Project) =>
            project?.department?.name === 'Commercial Interiors'
        ).length
      : 0;
  }, [projects]);

  const brandingCount = useMemo(() => {
    return projects.length > 0
      ? projects.filter(
          (project: Project) => project?.department?.name === 'Branding'
        ).length
      : 0;
  }, [projects]);

  const akresCount = useMemo(() => {
    return projects.length > 0
      ? projects.filter(
          (project: Project) => project?.department?.name === 'AkRes'
        ).length
      : 0;
  }, [projects]);

  const handleFilterClick = (department: string) => {
    setActiveFilter(activeFilter === department ? '' : department);
    setCurrentPage(1);
  };

  // const createBulkProjects = async () => {
  //   try {
  //     for (const project of projects) {
  //       await createNewProject(project);
  //       console.log(`Created project: ${project.name}`);
  //     }
  //     console.log('All projects created successfully');
  //   } catch (error) {
  //     console.error('Error creating projects:', error);
  //   }
  // };

  return (
    <div className='flex flex-col'>
      <header className='bg-gray-900 pt-4 pb-6'>
        <div className='mx-auto max-w-7xl'>
          <div className='flex flex-col gap-2.5'>
            <div className='grid grid-cols-4 gap-5'>
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
                title='Commercial Interiors'
                count={commercialInteriorsCount}
                bgColor={`bg-lime-300/60 ${
                  activeFilter === 'Commercial Interiors'
                    ? 'ring-2 ring-white ring-offset-2 transition-all duration-300'
                    : ''
                }`}
                onClick={() => handleFilterClick('Commercial Interiors')}
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
                title='AkRes'
                count={akresCount}
                bgColor={`bg-orange-400/80 ${
                  activeFilter === 'AkRes'
                    ? 'ring-2 ring-white ring-offset-2 transition-all duration-300'
                    : ''
                }`}
                onClick={() => handleFilterClick('AkRes')}
              />
            </div>
          </div>
        </div>
      </header>
      <div className='max-w-7xl mx-auto flex flex-col gap-3 py-10 w-full'>
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
          <div className='font-brand-bold text-xs col-span-1'>Created</div>
          <div className='font-brand-bold text-xs col-span-5'>Details</div>
          <div className='font-brand-bold text-xs col-span-2'>Size</div>
          <div className='font-brand-bold text-xs col-span-1'>Updated</div>
          <div className='font-brand-bold text-xs col-span-1'>Featured</div>
          <div className='font-brand-bold col-span-1 text-xs'>Status</div>
        </div>
        <div className='flex flex-col gap-2 divide-y divide-gray-300'>
          {currentProjects.length > 0 &&
            currentProjects.map((project: Project) => (
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
      </div>
    </div>
  );
}
