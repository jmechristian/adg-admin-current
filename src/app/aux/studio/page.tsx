'use client';

import { getStudioPage } from '@/helpers/api';
import { StudioPage } from '@/types';
import { useState } from 'react';
import { useEffect } from 'react';
import { OverlayHero } from '@jmechristian/adg-component-library';
import '@jmechristian/adg-component-library/styles.css';

export default function Studio() {
  const [studioPage, setStudioPage] = useState<StudioPage | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStudioPage = async () => {
      const studioPage = await getStudioPage();
      setStudioPage(studioPage);
      setIsLoading(false);
    };
    fetchStudioPage();
  }, []);

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
        <div id='studio-hero'>
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
                      className='w-full bg-cover bg-center aspect-[9/11]'
                      style={{ backgroundImage: `url(${person.image})` }}
                    ></div>
                    <div className='flex flex-col gap-1'>
                      <div className='text-brand-gray text-2xl font-brand font-light leading-none'>
                        {person.name}
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
                      className='w-full bg-cover bg-center aspect-[9/11]'
                      style={{ backgroundImage: `url(${person.image})` }}
                    ></div>
                    <div className='flex flex-col gap-1'>
                      <div className='text-brand-gray text-2xl font-brand font-light leading-none'>
                        {person.name}
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
    </div>
  );
}
