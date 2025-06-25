'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MdClose, MdEdit, MdKey, MdSave } from 'react-icons/md';
import ImageUpload from '@/components/shared/ImageUpload';
import { saveHomePageHero } from '@/helpers/api';

const Hero = ({
  hero,
  heroQuote,
  id,
}: {
  hero: string;
  heroQuote: string;
  id: string;
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [heroImage, setHeroImage] = useState(hero);
  const [isHeroQuote, setHeroQuote] = useState(heroQuote);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleSaveHero = async () => {
    setIsSaving(true);
    await saveHomePageHero({
      data: {
        id,
        hero: heroImage,
        heroQuote: isHeroQuote,
      },
    });
    setIsSaving(false);
  };

  return (
    <div
      className='w-full h-screen bg-black bg-center relative bg-no-repeat bg-cover flex flex-col justify-between items-center'
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {isEditing && (
        <div className='fixed inset-0 bg-black/80 flex items-center justify-center z-50'>
          <div className='bg-white p-6 rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto flex flex-col gap-3.5 relative'>
            <div className='absolute top-3 right-3 z-50'>
              <button onClick={() => setIsEditing(false)}>
                <MdClose size={24} />
              </button>
            </div>
            <div className='flex flex-col gap-6 w-full max-w-3xl mx-auto'>
              <div className='w-full'>
                <div
                  className='w-full aspect-[5/2.5] bg-brand-brown rounded bg-cover bg-center flex items-center justify-center'
                  style={{ backgroundImage: `url(${heroImage})` }}
                >
                  <ImageUpload setImage={(url) => setHeroImage(url)} />
                </div>
              </div>
              <div className='w-full flex flex-col gap-2'>
                <textarea
                  className='w-full'
                  value={isHeroQuote}
                  onChange={(e) => setHeroQuote(e.target.value)}
                  rows={3}
                />
                <div className='w-full flex items-center gap-2.5 bg-brand-peach p-2'>
                  <div>
                    <MdKey size={24} />
                  </div>
                  <div className='font-brand-medium'>{`Add <br /> to create a line break, wrap text in <i></i> to highlight`}</div>
                </div>
              </div>
              <div className='flex w-full justify-end items-center gap-2 mt-3'>
                <button
                  className={`bg-brand-brown text-white px-4 py-2 rounded-md font-brand-book text-lg leading-none cursor-pointer ${
                    isSaving
                      ? 'opacity-50 cursor-not-allowed animate-bounce'
                      : ''
                  }`}
                  onClick={handleSaveHero}
                >
                  <MdSave size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className='absolute top-5 right-5 z-30 shadow-lg'>
        <div className='bg-brand-brown text-white px-4 py-2 rounded-md font-brand-book text-lg leading-none cursor-pointer'>
          <div
            className='flex items-center justify-center gap-1 leading-none'
            onClick={() => setIsEditing(true)}
          >
            <MdEdit size={24} />
          </div>
        </div>
      </div>
      <div className='w-full h-40 bg-gradient-to-b from-black to-transparent'></div>
      <div className='w-full max-w-6xl mx-auto z-20'>
        <div
          className='text-white text-6xl !font-brand font-light text-center leading-tighter -mt-12 select-none'
          dangerouslySetInnerHTML={{ __html: isHeroQuote }}
        ></div>
      </div>
      <div className='w-full pb-12 flex items-center justify-center relative z-50'>
        <div
          onClick={() => router.push('#home-text')}
          className='cursor-pointer'
        >
          <Image
            src='https://adgadmin170407-dev.s3.us-east-1.amazonaws.com/scroll.png'
            alt='Scroll'
            width={127 / 1.5}
            height={35 / 1.5}
          />
        </div>
      </div>
      <div className='absolute top-0 left-0 w-full h-full bg-black !bg-opacity-15 !z-10'></div>
    </div>
  );
};

export default Hero;
