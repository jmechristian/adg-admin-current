import React from 'react';
import { MdArchitecture, MdChair, MdCategory, MdHome } from 'react-icons/md';

const HeaderItem = ({ title, count, bgColor }) => {
  return (
    <div className={`flex flex-col gap-4 ${bgColor} rounded-xl p-4`}>
      <div className='font-brand text-lg'>{title}</div>
      <div className='flex items-center justify-between w-full'>
        <div className='text-white font-brandBold text-4xl'>{count}</div>
        {title === 'Architecture' ? (
          <MdArchitecture className='text-white/60 text-4xl' />
        ) : title === 'Commercial Interiors' ? (
          <MdChair className='text-white/60 text-4xl' />
        ) : title === 'AkRes' ? (
          <MdHome className='text-white/60 text-4xl' />
        ) : (
          <MdCategory className='text-white/60 text-4xl' />
        )}
      </div>
    </div>
  );
};

export default HeaderItem;
