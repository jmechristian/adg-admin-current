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
      className={`flex flex-col gap-4 ${bgColor} rounded-xl p-4`}
      onClick={onClick}
    >
      <div className='font-brand text-lg text-brand-peach'>{title}</div>
      <div className='flex items-center justify-between w-full'>
        <div className='text-white font-brandBold text-4xl'>{count}</div>
        {title === 'Architecture' ? (
          <MdArchitecture className='text-white/60 text-4xl' />
        ) : title === 'Interiors' ? (
          <MdChair className='text-white/60 text-4xl' />
        ) : title === 'Residential' ? (
          <MdHome className='text-white/60 text-4xl' />
        ) : title === 'Millwork' ? (
          <MdBathroom className='text-white/60 text-4xl' />
        ) : (
          <MdCategory className='text-white/60 text-4xl' />
        )}
      </div>
    </div>
  );
};

export default HeaderItem;
