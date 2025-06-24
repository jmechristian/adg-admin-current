'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { getHomePageFeatureItem, saveHomePageFeatureItem } from '@/helpers/api';
import { MdClose, MdEdit, MdSave } from 'react-icons/md';
import ImageUpload from './ImageUpload';

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

  const handleSave = async () => {
    setIsSaving(true);
    await saveHomePageFeatureItem({
      id,
      department: isDepartment,
      content: isContent,
      callout: isCallout,
      link: isLink,
      image: isImage,
    });
    setIsEditing(false);
    setIsSaving(false);
  };

  return (
    <div
      className='w-full py-10 px-6 relative flex flex-col justify-between items-center gap-40 bg-cover bg-center max-h-[548px]'
      style={{
        backgroundImage: `url(${isImage})`,
      }}
    >
      {isEditing && (
        <div className='fixed inset-0 bg-black/80 flex items-center justify-center z-50'>
          <div className='bg-white p-6 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col gap-3.5 relative'>
            <div className='absolute top-3 right-3 z-50'>
              <button onClick={() => setIsEditing(false)}>
                <MdClose size={24} />
              </button>
            </div>
            <div className='flex items-center gap-6 w-full'>
              <div className='w-full max-w-[300px] h-full'>
                <div
                  className='w-full h-full aspect-[3/4] bg-cover bg-center rounded-lg flex items-center justify-center max-w-[300px]'
                  style={{ backgroundImage: `url(${isImage})` }}
                >
                  <ImageUpload
                    setImage={(url) => {
                      setImage(url);
                    }}
                  />
                </div>
              </div>
              <div className='w-full flex flex-col gap-4'>
                <div className='flex flex-col gap-2 w-full'>
                  <label htmlFor='department'>Intro Text</label>
                  <input
                    type='text'
                    id='department'
                    value={isDepartment}
                    onChange={(e) => setDepartment(e.target.value)}
                  />
                </div>
                <div className='flex flex-col gap-2 w-full'>
                  <label htmlFor='content'>Top Text</label>
                  <input
                    type='text'
                    id='content'
                    value={isContent}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>
                <div className='flex flex-col gap-2 w-full'>
                  <label htmlFor='callout'>Italic Text</label>
                  <input
                    type='text'
                    id='callout'
                    value={isCallout}
                    onChange={(e) => setCallout(e.target.value)}
                  />
                </div>
                <div className='flex flex-col gap-4 w-full'>
                  <div className='flex flex-col gap-2 w-full'>
                    <label htmlFor='link'>Link</label>
                    <input
                      type='text'
                      id='link'
                      value={isLink}
                      onChange={(e) => setLink(e.target.value)}
                    />
                  </div>
                </div>
                <div className='flex flex-col gap-4 w-full'>
                  <button
                    className='bg-brand-brown text-white px-4 py-2 rounded-md font-brand-book text-lg leading-none cursor-pointer'
                    onClick={handleSave}
                  >
                    <div
                      className={`flex items-center justify-center gap-1 leading-none ${
                        isSaving ? 'animate-pulse' : ''
                      }`}
                    >
                      <MdSave size={24} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className='absolute top-2 right-2 z-30 shadow-lg'>
        <div className='bg-brand-brown text-white px-4 py-2 rounded-md font-brand-book text-lg leading-none cursor-pointer'>
          <div
            className='flex items-center justify-center gap-1 leading-none'
            onClick={() => setIsEditing(true)}
          >
            <MdEdit size={24} />
          </div>
        </div>
      </div>
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
