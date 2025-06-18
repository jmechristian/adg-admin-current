import React from 'react';

const HomeText = ({ introText }: { introText: string }) => {
  return (
    <div className='w-full max-w-4xl mx-auto scroll-mt-10' id='home-text'>
      <div
        className='text-brand-gray text-3xl font-brand font-light text-center leading-snug px-5 pb-6 pt-4 mb-0.5 select-none'
        dangerouslySetInnerHTML={{ __html: introText }}
      ></div>
    </div>
  );
};

export default HomeText;
