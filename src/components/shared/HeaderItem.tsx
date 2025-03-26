import React from 'react';
import {
  MdArchitecture,
  MdChair,
  MdCategory,
  MdHome,
  MdBathroom,
} from 'react-icons/md';

interface HeaderItemProps {
  title: string;
  count: number;
  bgColor: string;
  onClick?: () => void;
}

const HeaderItem = ({ title, count, bgColor, onClick }: HeaderItemProps) => {
  return (
    <div
      className={`flex flex-col gap-4 ${bgColor} rounded-xl px-4 pt-3 pb-4`}
      onClick={onClick}
    >
      <div className='font-brand text-2xl text-brand-peach font-brand-serif'>
        {title}
      </div>
      <div className='flex items-center justify-between w-full'>
        <div className='text-white font-brand-serif text-3xl ml-1 leading-none'>
          {count}
        </div>
        {title === 'Architecture' ? (
          <MdArchitecture className='text-white/60 text-3xl' />
        ) : title === 'Interiors' ? (
          <MdChair className='text-white/60 text-3xl' />
        ) : title === 'Residential' ? (
          <MdHome className='text-white/60 text-3xl' />
        ) : title === 'Millwork' ? (
          <MdBathroom className='text-white/60 text-3xl' />
        ) : (
          <MdCategory className='text-white/60 text-3xl' />
        )}
      </div>
    </div>
  );
};

export default HeaderItem;
