'use client';

import { getStudioPage, saveStudioPage, saveStaff } from '@/helpers/api';
import { Staff, StudioPage } from '@/types';
import { useState } from 'react';
import { useEffect } from 'react';
import { OverlayHero } from '@jmechristian/adg-component-library';
import '@jmechristian/adg-component-library/styles.css';
import { MdClose, MdDelete, MdEdit, MdKey, MdSave } from 'react-icons/md';

export default function Studio() {
  const [studioPage, setStudioPage] = useState<StudioPage | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditingStaff, setIsEditingStaff] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isEditingHero, setIsEditingHero] = useState(false);
  const [heroQuote, setHeroQuote] = useState('');
  const [heroImage, setHeroImage] = useState('');
  const [selectedStaff, setSelectedStaff] = useState<Staff | null>(null);

  useEffect(() => {
    const fetchStudioPage = async () => {
      const studioPage = await getStudioPage();
      setStudioPage(studioPage);
      setIsLoading(false);
    };
    fetchStudioPage();
  }, []);

  const refreshData = async () => {
    const studioPage = await getStudioPage();
    setStudioPage(studioPage);
  };

  useEffect(() => {
    if (studioPage) {
      setHeroQuote(studioPage.heroQuote);
      setHeroImage(studioPage.hero);
    }
  }, [studioPage]);

  const handleSaveHero = async () => {
    setIsSaving(true);
    saveStudioPage({
      id: studioPage!.id,
      heroQuote,
      hero: heroImage,
    });
    setIsSaving(false);
    refreshData();
  };

  const handleSaveStaff = async () => {
    setIsSaving(true);
    saveStaff({
      id: selectedStaff!.id,
      name: selectedStaff!.name,
      title: selectedStaff!.title,
      extra: selectedStaff!.extra,
    });
    setIsSaving(false);
    refreshData();
  };

  if (isLoading) {
    return (
      <div className='space-y-4 p-4'>
        {[...Array(3)].map((_, i) => (
          <div key={i} className='animate-pulse'>
            <div className='h-8 bg-gray-200 rounded w-1/3 mb-2'></div>
            <div className='h-4 bg-gray-200 rounded w-full mb-2'></div>
            <div className='h-4 bg-gray-200 rounded w-5/6'></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className='w-full max-w-[2000px] mx-auto pb-16 overflow-x-hidden'>
      <div className='flex flex-col gap-16'>
        <div id='studio-hero relative'>
          <div className='absolute top-5 right-5 z-30 shadow-lg'>
            <div className='bg-brand-brown text-white px-4 py-2 rounded-md font-brand-book text-lg leading-none cursor-pointer'>
              <div
                className='flex items-center justify-center gap-1 leading-none'
                onClick={() => setIsEditingHero(true)}
              >
                <MdEdit size={24} />
              </div>
            </div>
          </div>
          <OverlayHero
            image={studioPage!.hero}
            content={studioPage!.heroQuote}
          />
        </div>
        <div className='w-full max-w-5xl mx-auto pb-16'>
          <div className='grid grid-cols-12 gap-20 items-center'>
            <div className='col-span-12 md:col-span-6 flex flex-col gap-4'>
              <div className='text-brand-gray text-4xl font-brand font-light'>
                About Us
              </div>
              <div className='text-brand-gray text-2xl font-brand font-light leading-normal'>
                Akseizer Design Group (ADG) is a dynamic team of interior
                designers, architects, brand strategists, and builders dedicated
                to crafting immersive, innovative spaces. Based in Alexandria,
                Virginia, our award-winning team has completed over 1,000
                projects across multi-family, hospitality, commercial, and
                residential sectors, always delivering with meticulous attention
                to detail.
              </div>
            </div>
            <div className='col-span-12 md:col-span-6 w-full h-full'>
              <div
                className='w-full h-full bg-cover bg-center'
                style={{
                  backgroundImage: `url('https://adgadmin170407-dev.s3.us-east-1.amazonaws.com/studio-building.webp')`,
                }}
              ></div>
            </div>
            <div className='col-span-12 md:col-span-12 w-full h-full'>
              <div className='text-brand-brown text-4xl font-brand text-center font-light italic leading-normal max-w-4xl mx-auto'>
                Each space we craft tells a story, brought to life through a
                distinctive visual language that elevates the everyday.
              </div>
            </div>
          </div>
        </div>
        <div className='w-full bg-brand-peach/50 pt-16 -mt-16'>
          <div className='w-full max-w-5xl mx-auto flex flex-col gap-6 pb-16'>
            <div className='text-brand-gray text-4xl font-brand font-light italic'>
              Our Team
            </div>
            <div className='grid grid-cols-4 gap-10'>
              {studioPage!.leadership.items
                .sort((a, b) => a.order - b.order)
                .map((person) => (
                  <div key={person.id} className='flex flex-col gap-5'>
                    <div
                      className='w-full bg-cover bg-center aspect-[9/11] relative'
                      style={{ backgroundImage: `url(${person.image})` }}
                    >
                      <div className='absolute top-0 right-0 z-30 shadow-lg'>
                        <div className='bg-brand-brown text-white px-4 py-2 rounded-md font-brand-book text-lg leading-none cursor-pointer'>
                          <div
                            className='flex items-center justify-center gap-1 leading-none'
                            onClick={() => {
                              setSelectedStaff(person);
                              setIsEditingStaff(true);
                            }}
                          >
                            <MdEdit size={24} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='flex flex-col gap-1'>
                      <div className='flex items-start justify-between'>
                        <div className='text-brand-gray text-2xl font-brand font-light leading-none'>
                          {person.name}
                        </div>
                        <div className='text-brand-brown text-xs font-brand-book uppercase font-light'>
                          {person.extra}
                        </div>
                      </div>
                      <div className='text-brand-brown text-xs font-brand-book uppercase font-light'>
                        {person.title}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className='w-full bg-brand-dark-peach py-16 flex flex-col gap-6'>
            <div className='w-full max-w-5xl mx-auto grid grid-cols-4 gap-10'>
              {studioPage!.staff.items
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((person) => (
                  <div key={person.id} className='flex flex-col gap-5'>
                    <div
                      className='w-full bg-cover bg-center aspect-[9/11] relative'
                      style={{ backgroundImage: `url(${person.image})` }}
                    >
                      <div className='absolute top-0 right-0 z-30 shadow-lg'>
                        <div className='bg-brand-brown text-white px-4 py-2 rounded-md font-brand-book text-lg leading-none cursor-pointer'>
                          <div
                            className='flex items-center justify-center gap-1 leading-none'
                            onClick={() => {
                              setSelectedStaff(person);
                              setIsEditingStaff(true);
                            }}
                          >
                            <MdEdit size={24} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <div className='flex items-start justify-between'>
                        <div className='text-brand-gray text-2xl font-brand font-light leading-none'>
                          {person.name}
                        </div>
                        <div className='text-brand-brown text-xs font-brand-book uppercase font-light'>
                          {person.extra}
                        </div>
                      </div>
                      <div className='text-brand-brown text-xs font-brand-book uppercase font-light'>
                        {person.title}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      {isEditingHero && (
        <div className='fixed inset-0 bg-black/80 flex items-center justify-center z-50'>
          <div className='bg-white p-6 rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto flex flex-col gap-3.5 relative'>
            <div className='absolute top-3 right-3 z-50'>
              <button onClick={() => setIsEditingHero(false)}>
                <MdClose size={24} />
              </button>
            </div>
            <div className='flex flex-col gap-6 w-full max-w-3xl mx-auto'>
              <div className='w-full'>
                <div
                  className='w-full aspect-[5/2.5] bg-brand-brown rounded bg-cover bg-center'
                  style={{ backgroundImage: `url(${heroImage})` }}
                ></div>
              </div>
              <div className='w-full flex flex-col gap-2'>
                <textarea
                  className='w-full'
                  value={heroQuote}
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
      {isEditingStaff && (
        <div className='fixed inset-0 bg-black/80 flex items-center justify-center z-50'>
          <div className='bg-white p-6 rounded-lg w-full max-w-xl max-h-[90vh] overflow-y-auto flex flex-col gap-3.5 relative'>
            <div className='absolute top-3 right-3 z-50'>
              <button onClick={() => setIsEditingStaff(false)}>
                <MdClose size={24} />
              </button>
            </div>
            <div className='flex items-center gap-5'>
              <div
                className='w-56 h-72 bg-brand-brown rounded-lg bg-cover bg-center'
                style={{ backgroundImage: `url(${selectedStaff?.image})` }}
              ></div>
              <div className='flex flex-col gap-2'>
                <input
                  className='text-brand-gray text-3xl font-brand font-light leading-none'
                  value={selectedStaff?.name}
                  onChange={(e) =>
                    setSelectedStaff({
                      ...selectedStaff!,
                      name: e.target.value,
                    })
                  }
                />
                <input
                  className='text-brand-brown font-brand-book uppercase font-light'
                  value={selectedStaff?.title}
                  onChange={(e) =>
                    setSelectedStaff({
                      ...selectedStaff!,
                      title: e.target.value,
                    })
                  }
                />
                <input
                  className='text-brand-brown font-brand-book uppercase font-light'
                  value={selectedStaff?.extra}
                  onChange={(e) =>
                    setSelectedStaff({
                      ...selectedStaff!,
                      extra: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className='w-full flex justify-end items-center gap-2 mt-3'>
              <button
                className={`bg-brand-brown text-white px-4 py-2 rounded-md font-brand-book text-lg leading-none cursor-pointer ${
                  isSaving ? 'opacity-50 cursor-not-allowed animate-bounce' : ''
                }`}
                onClick={handleSaveStaff}
              >
                <MdSave size={24} />
              </button>
              <button
                className='bg-red-500 text-white px-4 py-2 rounded-md font-brand-book text-lg leading-none cursor-pointer'
                onClick={() => setIsEditingStaff(false)}
              >
                <MdDelete size={24} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
