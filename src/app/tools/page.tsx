'use client';

import React from 'react';
import // pullAllImagesIntoGalleries,
// updateProjectGalleries,
// putAllImagesIntoGalleries,
'@/helpers/api';

const Page = () => {
  return (
    <div className='max-w-5xl w-full mx-auto py-16 flex flex-col gap-10'>
      <h1 className='text-2xl font-bold w-full border-b border-gray-400 pb-4'>
        Tools
      </h1>
      <div className='grid grid-cols-4 gap-10'>
        <div className='w-full p-5 border border-gray-400 rounded-md text-center'>
          Pull and Print All DO Projects
        </div>
        <div className='w-full p-5 border border-gray-400 rounded-md text-center'>
          Bulk Create AWS Projects
        </div>
        {/* <div
          className='w-full p-5 border border-gray-400 rounded-md text-center'
          onClick={pullAllImagesIntoGalleries}
        >
          Pull All Images into Galleries
        </div>
        <div
          className='w-full p-5 border border-gray-400 rounded-md text-center'
          onClick={putAllImagesIntoGalleries}
        >
          Download Images into Folders
        </div>
        <div
          className='w-full p-5 border border-gray-400 rounded-md text-center'
          onClick={updateProjectGalleries}
        >
          Update Project Galleries
        </div> */}
      </div>
    </div>
  );
};

export default Page;
