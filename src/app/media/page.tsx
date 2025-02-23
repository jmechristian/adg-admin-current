'use client';

import React, { useState, useEffect } from 'react';
import { getGalleries } from '@/helpers/api';
import ArchitectureIcon from '@/components/shared/ArchitectureIcon';
import BrandingIcon from '@/components/shared/BrandingIcon';
import InteriorsIcon from '@/components/shared/InteriorsIcon';
import AkresIcon from '@/components/shared/AkresIcon';
import { Gallery, Image, DepartmentFilters } from '@/types';

export default function Media() {
  const [galleries, setGalleries] = useState<Gallery[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeDepartments, setActiveDepartments] = useState<DepartmentFilters>(
    {
      architecture: true,
      'commercial interiors': true,
      branding: true,
      akres: true,
    }
  );
  const [expandedGalleries, setExpandedGalleries] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Add pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 25;

  // Add selected image state
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    const fetchGalleries = async () => {
      try {
        const galleries = await getGalleries();
        const sortedGalleries = [...galleries].sort(
          (a, b) =>
            (Number(a.project?.oldId) || 0) - (Number(b.project?.oldId) || 0)
        );
        setGalleries(sortedGalleries);

        if (sortedGalleries.length > 0) {
          setExpandedGalleries([sortedGalleries[0].id]);
          const firstImage = sortedGalleries[0].images?.items[0];
          if (firstImage) {
            setSelectedImage(firstImage);
          }
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchGalleries();
  }, []);

  const toggleDepartment = (department: string) => {
    const deptKey =
      department === 'interiors' ? 'commercial interiors' : department;
    setActiveDepartments((prev) => ({
      ...prev,
      [deptKey as keyof DepartmentFilters]:
        !prev[deptKey as keyof DepartmentFilters],
    }));
  };

  // Helper function to map department IDs to department names

  const filteredGalleries = galleries.filter((gallery) => {
    const projectName = gallery.project?.name?.toLowerCase() || '';
    const matchesSearch = projectName.includes(searchTerm.toLowerCase());

    // Get department and normalize it
    const departmentName =
      gallery.project?.department?.name?.toLowerCase() || '';
    // Check if it's either 'commercial interiors' or 'interiors'
    const isInteriors =
      departmentName === 'commercial interiors' ||
      departmentName === 'interiors';

    const matchesDepartment = isInteriors
      ? activeDepartments['commercial interiors']
      : activeDepartments[departmentName as keyof DepartmentFilters];

    return matchesSearch && matchesDepartment;
  });

  // Add this function to handle gallery toggling
  const toggleGallery = (galleryId: string) => {
    setExpandedGalleries((prev) =>
      prev.includes(galleryId)
        ? prev.filter((id) => id !== galleryId)
        : [...prev, galleryId]
    );
  };

  // Calculate pagination
  const indexOfLastGallery = currentPage * itemsPerPage;
  const indexOfFirstGallery = indexOfLastGallery - itemsPerPage;
  const currentGalleries = filteredGalleries.slice(
    indexOfFirstGallery,
    indexOfLastGallery
  );
  const totalPages = Math.ceil(filteredGalleries.length / itemsPerPage);

  // Add pagination controls component
  const Pagination = () => {
    return (
      <div className='flex items-center justify-between mt-6 border-t pt-4'>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className='px-4 py-2 border rounded disabled:opacity-50 disabled:cursor-not-allowed'
        >
          Previous
        </button>
        <span className='text-sm'>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className='px-4 py-2 border rounded disabled:opacity-50 disabled:cursor-not-allowed'
        >
          Next
        </button>
      </div>
    );
  };

  // Add this effect to reset pagination when search or department filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, activeDepartments]);

  if (isLoading) {
    return (
      <div className='w-full max-w-7xl mx-auto py-10 flex flex-col gap-10'>
        <div className='w-full flex items-end justify-between border-b-2 pb-4'>
          <div className='w-full h-8 bg-gray-200 animate-pulse rounded'></div>
          <div className='w-full flex justify-end items-end gap-5'>
            <div className='w-[400px] h-10 bg-gray-200 animate-pulse rounded'></div>
            <div className='flex gap-2'>
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className='w-10 h-10 bg-gray-200 animate-pulse rounded'
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className='w-full grid grid-cols-12 gap-6'>
          <div className='col-span-8'>
            {[1, 2, 3].map((i) => (
              <div key={i} className='mb-6 border-b pb-4'>
                <div className='h-8 bg-gray-200 animate-pulse rounded mb-4'></div>
                <div className='grid grid-cols-5 gap-4'>
                  {[1, 2, 3, 4, 5].map((j) => (
                    <div
                      key={j}
                      className='aspect-square bg-gray-200 animate-pulse rounded'
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className='col-span-4 border p-4'>
            <div className='aspect-square bg-gray-200 animate-pulse rounded mb-4'></div>
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className='h-6 bg-gray-200 animate-pulse rounded mb-3'
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='w-full max-w-7xl mx-auto py-10 flex flex-col gap-10'>
      <div className='w-full flex items-end justify-between border-b-2 pb-4'>
        <div className='font-brand-bold text-2xl w-full'>
          Project Galleries:{' '}
          <span className='text-brand'>{filteredGalleries.length}</span>
        </div>
        <div className='w-full flex justify-end items-end gap-5'>
          {/* Search */}
          <input
            type='text'
            placeholder='Search by name'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='p-2 border border-gray-300 w-[400px]'
          />
          {/* Filter */}
          <div className='flex items-center gap-2'>
            <div onClick={() => toggleDepartment('architecture')}>
              <ArchitectureIcon active={activeDepartments.architecture} />
            </div>
            <div onClick={() => toggleDepartment('interiors')}>
              <InteriorsIcon
                active={activeDepartments['commercial interiors']}
              />
            </div>
            <div onClick={() => toggleDepartment('branding')}>
              <BrandingIcon active={activeDepartments.branding} />
            </div>
            <div onClick={() => toggleDepartment('akres')}>
              <AkresIcon active={activeDepartments.akres} />
            </div>
          </div>
        </div>
      </div>

      {/* Add your gallery display here using filteredGalleries */}
      <div className='w-fill grid grid-cols-12 gap-6'>
        <div className='col-span-8'>
          {currentGalleries.map((gallery) => (
            <div key={gallery.id} className='mb-6 border-b pb-4'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <h3 className='font-brand-bold text-xl'>
                    {gallery.project?.name || 'Untitled Project'}
                  </h3>
                  <div className='bg-brand py-1 px-2 rounded-md text-white/80 text-xs font-brand-bold'>
                    {gallery.images?.items.length} Images
                  </div>
                </div>
                <button
                  onClick={() => toggleGallery(gallery.id)}
                  className='text-brand hover:text-brand-dark'
                >
                  {expandedGalleries.includes(gallery.id) ? '−' : '+'}
                </button>
              </div>

              {expandedGalleries.includes(gallery.id) && (
                <div className='grid grid-cols-5 gap-4 pt-5'>
                  {[...(gallery.images?.items || [])]
                    .sort((a, b) => a.order - b.order)
                    .map((image) => (
                      <div
                        key={image.id}
                        className={`aspect-square relative overflow-hidden cursor-pointer ${
                          selectedImage?.id === image.id
                            ? 'ring-2 ring-brand'
                            : ''
                        }`}
                        onClick={() => setSelectedImage(image)}
                      >
                        <img
                          src={image.url}
                          alt={image.alt || 'Gallery image'}
                          className='object-cover w-full h-full'
                        />
                      </div>
                    ))}

                  {/* Add Image Placeholder */}
                  <div className='aspect-square relative bg-black flex items-center justify-center cursor-pointer hover:bg-gray-900 transition-colors'>
                    <div className='text-white text-4xl'>+</div>
                  </div>
                </div>
              )}
            </div>
          ))}
          <Pagination />
        </div>
        <div className='col-span-4 border p-4'>
          {selectedImage ? (
            <div className='flex flex-col gap-4'>
              <div className='aspect-square relative overflow-hidden'>
                <img
                  src={selectedImage.url}
                  alt={selectedImage.alt || 'Selected image'}
                  className='object-cover w-full h-full'
                />
              </div>

              <div className='space-y-3'>
                <div>
                  <label className='text-sm text-gray-500'>File Name</label>
                  <p className='font-brand-bold'>{selectedImage.alt}</p>
                </div>

                <div>
                  <label className='text-sm text-gray-500'>Alt Text</label>
                  <p className='font-brand'>
                    {selectedImage.alt || 'No alt text provided'}
                  </p>
                </div>

                <div>
                  <label className='text-sm text-gray-500'>Caption</label>
                  <p className='font-brand'>
                    {selectedImage.caption || 'No caption provided'}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className='h-full flex flex-col items-center justify-center text-gray-500 gap-2'>
              <div className='text-6xl'>🖼️</div>
              <div className='font-brand-bold'>Select an Image</div>
              <div className='text-sm'>Click any image to view its details</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
