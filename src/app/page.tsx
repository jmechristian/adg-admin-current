'use client';

import { useState, useEffect, useMemo } from 'react';
import { getProjectsWithDepartments } from '../helpers/api';
import HeaderItem from '@/components/shared/HeaderItem';
import { ProjectWithDepartments } from '@/types';
import ProjectItem from '@/components/shared/ProjectItem';
import useLayoutStore from '@/store/useLayoutStore';
import { MdRefresh } from 'react-icons/md';

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
          ? project?.departments?.items.some(
              (department) => department.department.id === activeFilter
            )
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
      ? projects.filter((project: ProjectWithDepartments) =>
          project?.departments?.items.some(
            (department) =>
              department.department.id ===
              '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7'
          )
        ).length
      : 0;
  }, [projects]);

  const commercialInteriorsCount = useMemo(() => {
    return projects.length > 0
      ? projects.filter((project: ProjectWithDepartments) =>
          project?.departments?.items.some(
            (department) =>
              department.department.id ===
              '0cd75086-b396-4c52-a907-5b52fb6aeedd'
          )
        ).length
      : 0;
  }, [projects]);

  const brandingCount = useMemo(() => {
    return projects.length > 0
      ? projects.filter((project: ProjectWithDepartments) =>
          project?.departments?.items.some(
            (department) =>
              department.department.id ===
              '4dfd71af-51a3-4af9-874f-da260e081f08'
          )
        ).length
      : 0;
  }, [projects]);

  const akresCount = useMemo(() => {
    return projects.length > 0
      ? projects.filter((project: ProjectWithDepartments) =>
          project?.departments?.items.some(
            (department) =>
              department.department.id ===
              '6cd6cac5-1533-45e3-8e9a-d4e1472def9a'
          )
        ).length
      : 0;
  }, [projects]);

  const millworkCount = useMemo(() => {
    return projects.length > 0
      ? projects.filter((project: ProjectWithDepartments) =>
          project?.departments?.items.some(
            (department) =>
              department.department.id ===
              '763080b2-dddf-45e6-ab08-c540a84d8b07'
          )
        ).length
      : 0;
  }, [projects]);

  const handleFilterClick = (department: string) => {
    setActiveFilter(activeFilter === department ? '' : department);
    setCurrentPage(1);
  };

  const publishedProjects = useMemo(() => {
    return projects.filter(
      (project: ProjectWithDepartments) => project.status === 'PUBLISHED'
    );
  }, [projects]);

  return (
    <div className='flex flex-col'>
      <header className='bg-gray-900 pt-6 pb-6'>
        <div className='mx-auto max-w-7xl'>
          <div className='flex flex-col gap-2.5'>
            <div className='grid grid-cols-5 gap-5'>
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
                    bgColor={`bg-brand-gray ${
                      activeFilter === '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7'
                        ? 'ring-2 ring-white ring-offset-2 transition-all duration-300'
                        : ''
                    }`}
                    onClick={() =>
                      handleFilterClick('0e20ac00-ec5f-464a-86d3-61ddc90e9aa7')
                    }
                  />
                  <HeaderItem
                    title='Interiors'
                    count={commercialInteriorsCount}
                    bgColor={`bg-brand-gray ${
                      activeFilter === '0cd75086-b396-4c52-a907-5b52fb6aeedd'
                        ? 'ring-2 ring-white ring-offset-2 transition-all duration-300'
                        : ''
                    }`}
                    onClick={() =>
                      handleFilterClick('0cd75086-b396-4c52-a907-5b52fb6aeedd')
                    }
                  />
                  <HeaderItem
                    title='Branding'
                    count={brandingCount}
                    bgColor={`bg-brand-gray ${
                      activeFilter === '4dfd71af-51a3-4af9-874f-da260e081f08'
                        ? 'ring-2 ring-white ring-offset-2 transition-all duration-300'
                        : ''
                    }`}
                    onClick={() =>
                      handleFilterClick('4dfd71af-51a3-4af9-874f-da260e081f08')
                    }
                  />
                  <HeaderItem
                    title='Residential'
                    count={akresCount}
                    bgColor={`bg-brand-gray ${
                      activeFilter === '6cd6cac5-1533-45e3-8e9a-d4e1472def9a'
                        ? 'ring-2 ring-white ring-offset-2 transition-all duration-300'
                        : ''
                    }`}
                    onClick={() =>
                      handleFilterClick('6cd6cac5-1533-45e3-8e9a-d4e1472def9a')
                    }
                  />
                  <HeaderItem
                    title='Millwork'
                    count={millworkCount}
                    bgColor={`bg-brand-gray ${
                      activeFilter === '763080b2-dddf-45e6-ab08-c540a84d8b07'
                        ? 'ring-2 ring-white ring-offset-2 transition-all duration-300'
                        : ''
                    }`}
                    onClick={() =>
                      handleFilterClick('763080b2-dddf-45e6-ab08-c540a84d8b07')
                    }
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
            <div className='w-full border-b-2 pb-4 flex justify-between items-center'>
              <div className='flex items-center gap-1'>
                <div className='font-brand-bold text-xl'>All Projects</div>
                <div className='text-xl text-gray-500 ml-1'>
                  {filteredProjects.length} projects /{' '}
                  {publishedProjects.length} published
                </div>
                <div
                  className='cursor-pointer'
                  onClick={() => {
                    setActiveFilter('');
                    setSearchTerm('');
                    setCurrentPage(1);
                  }}
                >
                  <MdRefresh className='text-gray-500' size={24} />
                </div>
              </div>
              <button
                onClick={toggleModal}
                className='bg-brand text-white px-4 py-2 rounded-md font-brand-bold text-lg'
              >
                Create New +
              </button>
            </div>
            <div className='flex justify-between items-center mt-5 mb-4 border-b-2 pb-4'>
              <input
                type='text'
                placeholder='Search by name'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='mb-4 p-2 border border-gray-300 w-[60%]'
              />
              <div className='flex justify-between items-center gap-2 text-sm mb-4'>
                <label className='flex items-center gap-1'>
                  Show
                  <select
                    value={itemsPerPage}
                    onChange={(e) => setItemsPerPage(Number(e.target.value))}
                    className='p-1.5 border border-gray-300 text-sm w-16'
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

            <div className='grid grid-cols-12 gap-5 border-b-2 pb-2'>
              <div className='font-brand-bold text-xs col-span-4'>Details</div>
              <div className='font-brand-bold text-xs col-span-2'>
                Project Type
              </div>
              <div className='font-brand-bold text-xs col-span-2'>
                Building Type
              </div>
              <div className='font-brand-bold text-xs col-span-1'>Size</div>
              <div className='font-brand-bold col-span-1 text-xs'>Featured</div>
              <div className='font-brand-bold col-span-2 text-xs text-center'>
                Status
              </div>
            </div>
            <div className='flex flex-col gap-2 divide-y divide-gray-300'>
              {currentProjects.length > 0 &&
                currentProjects
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((project: ProjectWithDepartments) => (
                    <ProjectItem
                      key={project.id}
                      project={project}
                      departmentId={
                        activeFilter
                          ? activeFilter
                          : project.departments.items[0].department.id
                      }
                    />
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
