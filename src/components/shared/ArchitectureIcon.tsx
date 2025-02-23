import React from 'react';
import { MdArchitecture } from 'react-icons/md';

interface ArchitectureIconProps {
  active?: boolean;
  onClick?: () => void;
}

const ArchitectureIcon = ({
  active = false,
  onClick,
}: ArchitectureIconProps) => {
  return (
    <div className='relative group' onClick={onClick}>
      <div
        className='absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm 
        opacity-0 group-hover:opacity-100 transition-opacity'
      >
        Architecture
      </div>
      <div
        className={`w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center cursor-pointer
        ${!active ? 'opacity-50' : ''} transition-opacity`}
      >
        <MdArchitecture className='text-white/70 text-3xl' />
      </div>
    </div>
  );
};

export default ArchitectureIcon;
