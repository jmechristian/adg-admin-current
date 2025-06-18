'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

const HomeDepartments = ({ department, content, callout, link, image }) => {
  const router = useRouter();
  return (
    <div
      className='w-full py-10 px-6 relative flex flex-col justify-between items-center gap-40 bg-cover bg-center max-h-[548px]'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='absolute inset-0 bg-black opacity-30'></div>
      <div className='uppercase text-white font-brand-book text-center tracking-[0.6rem] z-10 select-none'>
        {department ? department : ''}
      </div>
      <div className='flex flex-col gap-0'>
        <div className='text-white max-w-sm mx-auto text-4xl font-brand font-light text-center leading-tight z-10 select-none'>
          {content}
        </div>
        <div className='flex items-center gap-4'>
          <div
            className={`${
              department ? 'text-brand-peach' : 'text-white'
            } max-w-sm mx-auto text-4xl font-brand font-light text-center leading-tighter z-10 italic select-none`}
          >
            {callout}
          </div>
        </div>
      </div>
      <div
        className='flex items-center gap-2 z-10 cursor-pointer'
        onClick={() => router.push(link)}
      >
        <div className='text-white font-light font-brand uppercase tracking-[0.5rem]'>
          View More
        </div>
        <div>
          <ArrowLongRightIcon className='w-7 h-7 text-white' />
        </div>
      </div>
    </div>
  );
};

export default HomeDepartments;
