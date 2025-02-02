'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  FaCheckCircle,
  FaTimesCircle,
  FaMapMarkerAlt,
  FaEye,
  FaEdit,
  FaTrash,
} from 'react-icons/fa';
import { listAllProjects } from '@/helpers/api';
import HeaderItem from '@/components/shared/HeaderItem';

export default function Home() {
  const router = useRouter();
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25);

  useEffect(() => {
    const getProjects = async () => {
      const res = await listAllProjects();

      setProjects(res);
      console.log(res);
    };
    getProjects();
  }, []);

  const filteredProjects = projects
    .sort((a, b) => {
      if (a.status === 'PUBLISHED' && b.status !== 'PUBLISHED') return -1;
      if (a.status !== 'PUBLISHED' && b.status === 'PUBLISHED') return 1;
      return 0;
    })
    .filter((project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
      <header className='bg-gray-900 pt-4 pb-6'>
        <div className='mx-auto max-w-7xl'>
          <div className='flex flex-col gap-2.5'>
            <h2 className='text-xl font-brandBold tracking-tight text-white'>
              All Projects
            </h2>
            <div className='grid grid-cols-4 gap-5'>
              <HeaderItem
                title='Architecture'
                count={148}
                bgColor='bg-indigo-200/70'
              />
              <HeaderItem
                title='Commercial Interiors'
                count={17}
                bgColor='bg-lime-300/60'
              />
              <HeaderItem
                title='Branding'
                count={2}
                bgColor='bg-yellow-400/80'
              />
              <HeaderItem title='AkRes' count={0} bgColor='bg-orange-400/80' />
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

        <div className='grid grid-cols-12 gap-5 border-b-2 pb-2 content-center'>
          <div className='font-brandBold text-sm col-span-1'>ID</div>
          <div className='font-brandBold text-sm col-span-4'>Details</div>
          <div className='font-brandBold text-sm col-span-1'>Featured</div>
          <div className='font-brandBold text-sm col-span-1'>Location</div>
          <div className='font-brandBold text-sm col-span-3'>Size</div>
          <div className='font-brandBold col-span-1 text-sm'>Status</div>
          <div className='font-brandBold col-span-1 text-sm'></div>
        </div>
        <div className='flex flex-col gap-2 divide-y divide-gray-300'>
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className='grid grid-cols-12 gap-5 py-4 items-center w-full'
            >
              <div className='col-span-1 text-sm'>{project.oldId}</div>
              <div className='col-span-4 flex gap-5 items-center'>
                <div
                  className='aspect-square w-[150px] h-[150px] bg-gray-300 overflow-hidden bg-cover bg-center'
                  style={
                    project.hero.url
                      ? {
                          backgroundImage: `url(${project.hero.url})`,
                        }
                      : {}
                  }
                ></div>
                <div className='flex flex-col gap-1'>
                  <div className='font-brandBold text-sm'>{project.name}</div>
                  <div className='text-sm'>{project.department.name}</div>
                </div>
              </div>
              <div className='col-span-1 text-sm flex items-center justify-center'>
                {project.featured ? (
                  <FaCheckCircle className='text-green-500 text-2xl' />
                ) : (
                  <FaTimesCircle className='text-red-500 text-2xl' />
                )}
              </div>
              <div className='col-span-1 text-sm flex flex-col gap-2 items-center'>
                <div>
                  <FaMapMarkerAlt className='text-2xl' />
                </div>
              </div>
              <div className='col-span-3 text-sm'>{project.size}</div>
              <div className='col-span-1 text-sm'>
                {project.status === 'PUBLISHED' ? (
                  <div className='text-green-700 bg-green-300 px-2 py-1 rounded-md text-sm font-brandBold text-center'>
                    Live
                  </div>
                ) : (
                  <div className='text-red-500 bg-red-100 px-2 py-1 rounded-md text-sm font-brandBold text-center'>
                    Draft
                  </div>
                )}
              </div>
              <div className='col-span-1 flex items-center justify-end'>
                <div className='flex flex-col gap-2 items-center bg-gray-900 py-3 px-2 rounded-lg w-fit h-full'>
                  <button className='rounded-full p-2 bg-blue-500 text-white'>
                    <FaEye />
                  </button>
                  <button
                    className='rounded-full p-2 bg-green-600 text-white cursor-pointer'
                    onClick={() => router.push(`/project/${project.id}`)}
                  >
                    <FaEdit />
                  </button>
                  <button className='rounded-full p-2 bg-red-500 text-white'>
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
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
