'use client';

import { useState } from 'react';

interface FlipbookProps {
  pdfUrl: string;
}

export default function Flipbook({ pdfUrl }: FlipbookProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changePage = (direction: 'next' | 'prev') => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentPage((prev) => (direction === 'next' ? prev + 1 : prev - 1));

    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className='flex flex-col items-center min-h-screen bg-gray-100 p-6'>
      <div className='flex space-x-4 mb-4'>
        <button
          onClick={() => changePage('prev')}
          disabled={currentPage <= 1 || isTransitioning}
          className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50'
        >
          Previous Page
        </button>
        <button
          onClick={() => changePage('next')}
          disabled={isTransitioning}
          className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50'
        >
          Next Page
        </button>
      </div>

      <div className='relative w-[800px] h-[600px]'>
        <iframe
          src={`${pdfUrl}#page=${currentPage}&toolbar=0&navpanes=0`}
          width={800}
          height={600}
          className={`absolute inset-0 border-0 transition-opacity duration-300 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
          title='PDF Viewer'
        />
      </div>
    </div>
  );
}
