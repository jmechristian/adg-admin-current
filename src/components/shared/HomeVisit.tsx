import React from 'react';
import { useRouter } from 'next/navigation';

const HomeVisit = ({
  studioText,
  studioLink,
  studioImage,
}: {
  studioText: string;
  studioLink: string;
  studioImage: string;
}) => {
  const router = useRouter();

  return (
    <div className='w-full max-w-6xl mx-auto pb-16'>
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
