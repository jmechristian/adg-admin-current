import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import React from 'react';

const HomeFeatured = () => {
  return (
    <div className='w-full bg-brand-peach grid grid-cols-12'>
      <div
        className='col-span-12 md:col-span-7 h-full w-full bg-cover bg-center'
        style={{
          backgroundImage: `url('https://adgadmin170407-dev.s3.us-east-1.amazonaws.com/featured-hero.webp')`,
        }}
      ></div>
      <div className='col-span-12 md:col-span-5 flex flex-col gap-5 py-24 px-12'>
        <div className='text-brand-brown font-brand-book font-light uppercase tracking-[0.3rem] text-center'>
          Featured Work
        </div>
        <div className='flex flex-col gap-4'>
          <div className='text-brand-gray text-5xl font-brand italic text-center leading-tight'>
            <span>The Ritz-Carlton Residences</span>
          </div>
          <div className='text-brand-gray text-3xl font-light font-brand text-center leading-snug'>
            <span>Chevy Chase, MD</span>
          </div>
        </div>
        <div className='w-full max-w-sm mx-auto py-5'>
          <div className='w-full h-px bg-brand-gray'></div>
        </div>
        <div className='w-full flex justify-center items-center gap-2'>
          <div className='text-brand-gray text-xl font-brand font-light uppercase tracking-[0.3rem]'>
            Discover
          </div>
          <div>
            <ArrowLongRightIcon className='w-6 h-6 text-brand-gray' />
          </div>
        </div>
        <div className='flex items-center justify-center gap-2.5'>
          <div className='w-3 h-3 bg-brand-brown/40 rounded-full'></div>
          <div className='w-3 h-3 bg-brand-brown rounded-full'></div>
          <div className='w-3 h-3 bg-brand-brown rounded-full'></div>
          <div className='w-3 h-3 bg-brand-brown rounded-full'></div>
        </div>
      </div>
    </div>
  );
};

export default HomeFeatured;
