'use client';

import { useState, useEffect, useMemo } from 'react';
import {
  getProjectsWithDepartments,
  getSubcategoriesByDepartment,
} from '../../helpers/api';
import useLayoutStore from '@/store/useLayoutStore';
import {
  DepartmentSubcategory,
  Project,
  ProjectWithDepartments,
} from '@/types';
import ProjectItem from '@/components/shared/ProjectItem';
import InteriorsIcon from '@/components/shared/InteriorsIcon';
import { MdRefresh } from 'react-icons/md';
export default function CommercialInteriors() {
  const [projects, setProjects] = useState<ProjectWithDepartments[]>([]);
  const [subcategories, setSubcategories] = useState<DepartmentSubcategory[]>(
    []
  );
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
        setProjects(
          res.filter(
            (project: ProjectWithDepartments) =>
              project.departments.items[0].department.id ===
              '0cd75086-b396-4c52-a907-5b52fb6aeedd'
          )
        );
        console.log(res);
      } finally {
        setLoading(false);
      }
    };
    getProjects();
  }, []);

  useEffect(() => {
    const getSubcategories = async () => {
      const subcategories = await getSubcategoriesByDepartment(
        '0cd75086-b396-4c52-a907-5b52fb6aeedd'
      );
      setSubcategories(subcategories);
    };
    getSubcategories();
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
          ? project.subcategories?.items.some(
              (item) => item.subcategory.name === activeFilter
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

  return (
    <div className='flex flex-col'>
      <div className='max-w-7xl mx-auto flex flex-col gap-5 py-10 w-full'>
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
            <div className='font-brand-bold text-2xl w-full border-b-2 pb-4 flex justify-between items-center'>
              <div className='flex items-center gap-1'>
                {/* <InteriorsIcon active={true} /> */}
                Commercial Interiors:{' '}
                <span className='text-gray-500 font-brand-book'>
                  {projects.length} Projects
                </span>
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
                className='bg-brand hover:bg-brand-brown transition-colors duration-300 text-white px-4 py-2 rounded-md font-brand-bold text-lg'
              >
                Create New +
              </button>
            </div>

            <div className='flex justify-between items-center border-b-2 pb-4'>
              <input
                type='text'
                placeholder='Search by name'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='mb-4 p-2 border border-gray-300 w-[60%]'
              />
              <div className='flex justify-between items-center gap-2 text-sm mb-2'>
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
            <div className='flex flex-wrap gap-2 mb-4 border-b-2 pb-4'>
              {subcategories.map((subcategory) => {
                const count = projects.filter((project) =>
                  project.subcategories?.items.some(
                    (item) =>
                      item.subcategory.name === subcategory.subcategory.name
                  )
                ).length;

                return (
                  <button
                    key={subcategory.id}
                    className={`px-3 py-1 rounded-md flex items-center gap-2 font-brand-serif ${
                      activeFilter === subcategory.subcategory.name
                        ? 'bg-gray-400 text-white'
                        : 'bg-brand-gray text-white'
                    }`}
                    onClick={() =>
                      setActiveFilter(subcategory.subcategory.name)
                    }
                  >
                    {subcategory.subcategory.name}
                    <span className='bg-white font-brand-bold text-gray-700 rounded-full w-5 h-5 flex items-center justify-center text-xs'>
                      {count}
                    </span>
                  </button>
                );
              })}
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
