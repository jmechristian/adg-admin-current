'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { getHomePageFeatureItem } from '@/helpers/api';

const HomeDepartments = ({ id }: { id: string }) => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isDepartment, setDepartment] = useState('');
  const [isContent, setContent] = useState('');
  const [isCallout, setCallout] = useState('');
  const [isLink, setLink] = useState('');
  const [isImage, setImage] = useState('');

  useEffect(() => {
    getHomePageFeatureItem({ id: id }).then((data) => {
      setDepartment(data.title);
      setContent(data.callout);
      setCallout(data.linkText);
      setLink(data.link);
      setImage(data.image);
    });
  }, []);

  return (
    <div
      className='w-full py-10 px-6 relative flex flex-col justify-between items-center gap-40 bg-cover bg-center max-h-[548px]'
      style={{
        backgroundImage: `url(${isImage})`,
      }}
    >
      <div className='absolute inset-0 bg-black opacity-30'></div>
      <div className='uppercase text-white font-brand-book text-center tracking-[0.6rem] z-10 select-none'>
        {isDepartment ? isDepartment : ''}
      </div>
      <div className='flex flex-col gap-0'>
        <div className='text-white max-w-sm mx-auto text-4xl font-brand font-light text-center leading-tight z-10 select-none'>
          {isContent}
        </div>
        <div className='flex items-center gap-4'>
          <div
            className={`${
              isDepartment ? 'text-brand-peach' : 'text-white'
            } max-w-sm mx-auto text-4xl font-brand font-light text-center leading-tighter z-10 italic select-none`}
          >
            {isCallout}
          </div>
        </div>
      </div>
      <div
        className='flex items-center gap-2 z-10 cursor-pointer'
        onClick={() => router.push(isLink)}
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
