import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { saveHomePageStudioText } from '@/helpers/api';
import { MdEdit, MdSave } from 'react-icons/md';

const HomeVisit = ({
  studioText,
  studioLink,
  studioImage,
  id,
}: {
  studioText: string;
  studioLink: string;
  studioImage: string;
  id: string;
}) => {
  const router = useRouter();
  const [isStudioText, setStudioText] = useState(studioText);
  const [isStudioLink, setStudioLink] = useState(studioLink);
  const [isStudioImage, setStudioImage] = useState(studioImage);
  const [isEditing, setIsEditing] = useState(false);
  const handleSaveStudioText = async () => {
    await saveHomePageStudioText({
      id,
      studioText: isStudioText,
      studioLink: isStudioLink,
      studioImage: isStudioImage,
    });
  };

  return (
    <div className='w-full max-w-6xl mx-auto pb-16 relative'>
      <div className='absolute top-5 -right-10 z-30 shadow-lg'>
        <div className='bg-brand-brown text-white px-4 py-2 rounded-md font-brand-book text-lg leading-none cursor-pointer'>
          <div
            className='flex items-center justify-center gap-1 leading-none'
            onClick={() => setIsEditing(true)}
          >
            <MdEdit size={24} />
          </div>
        </div>
      </div>
      {isEditing && (
        <div className='fixed inset-0 bg-black/50 z-50 flex items-center justify-center'>
          <div className='w-full max-w-4xl mx-auto bg-white p-10 rounded-lg flex flex-col gap-3.5 relative'>
            <textarea
              className='w-full h-full p-6 bg-white text-brand-gray text-3xl font-brand font-light text-center leading-snug px-5 pb-6 pt-4 mb-0.5 select-none'
              value={isStudioText}
              onChange={(e) => setStudioText(e.target.value)}
            />
            <input
              className='w-full p-6 bg-white text-brand-gray text-3xl font-brand font-light text-center leading-snug px-5 pb-6 pt-4 mb-0.5 select-none'
              value={isStudioLink}
              onChange={(e) => setStudioLink(e.target.value)}
            />
            <input
              className='w-full p-6 bg-white text-brand-gray text-3xl font-brand font-light text-center leading-snug px-5 pb-6 pt-4 mb-0.5 select-none'
              value={isStudioImage}
              onChange={(e) => setStudioImage(e.target.value)}
            />
            <button
              className='bg-brand-brown text-white px-4 py-2 rounded-md font-brand-book text-lg leading-none cursor-pointer flex items-center justify-center gap-1'
              onClick={handleSaveStudioText}
            >
              <MdSave size={24} />
            </button>
          </div>
        </div>
      )}
      <div className='grid grid-cols-12 gap-20 items-center'>
        <div className='col-span-12 md:col-span-6 flex flex-col gap-10'>
          <div className='text-brand-gray text-2xl font-brand font-light'>
            <div dangerouslySetInnerHTML={{ __html: studioText }}></div>
          </div>

          <div
            onClick={() => router.push(studioLink)}
            className='text-brand-gray font-brand-book uppercase bg-brand-peach px-10 py-6 w-fit cursor-pointer'
          >
            Visit Our Studio
          </div>
        </div>
        <div className='col-span-12 md:col-span-6 w-full h-full'>
          <div
            className='w-full h-full bg-cover bg-center'
            style={{
              backgroundImage: `url(${studioImage})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HomeVisit;
