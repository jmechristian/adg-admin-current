import { saveHomePageIntroText } from '@/helpers/api';
import React, { useState } from 'react';
import { MdClose, MdEdit, MdKey, MdSave } from 'react-icons/md';

const HomeText = ({ introText, id }: { introText: string; id: string }) => {
  const [isIntroText, setIntroText] = useState(introText);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleSaveIntroText = async () => {
    setIsSaving(true);
    await saveHomePageIntroText({
      data: {
        id,
        introText: isIntroText,
      },
    });
    setIsSaving(false);
  };
  return (
    <div
      className='w-full max-w-4xl mx-auto scroll-mt-10 relative'
      id='home-text'
    >
      {isEditing && (
        <div className='fixed inset-0 bg-black/50 z-50 flex items-center justify-center'>
          <div className='w-full max-w-4xl mx-auto bg-white px-10 py-6 rounded-lg flex flex-col gap-3.5 relative'>
            <textarea
              className='w-full h-full p-6 bg-white text-brand-gray text-3xl font-brand font-light text-center leading-snug px-5 pb-6 pt-4 mb-0.5 select-none'
              value={isIntroText}
              onChange={(e) => setIntroText(e.target.value)}
              rows={10}
            />
            <div className='w-full flex items-center gap-2.5 bg-brand-peach p-2'>
              <div>
                <MdKey size={24} />
              </div>
              <div className='font-brand-medium'>{`Add <br /> to create a line break, wrap text in <i></i> to highlight`}</div>
            </div>
            <div className='flex justify-end gap-2'>
              <button
                className='bg-brand-brown text-white px-4 py-2 rounded-md font-brand-book text-lg leading-none cursor-pointer'
                onClick={() => setIsEditing(false)}
              >
                <MdClose size={24} />
              </button>
              <button
                className={`bg-brand-brown text-white px-4 py-2 rounded-md font-brand-book text-lg leading-none cursor-pointer ${
                  isSaving ? 'opacity-50 cursor-not-allowed animate-bounce' : ''
                }`}
                onClick={handleSaveIntroText}
              >
                <MdSave size={24} />
              </button>
            </div>
          </div>
        </div>
      )}
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
      <div
        className='text-brand-gray text-3xl font-brand font-light text-center leading-snug px-5 pb-6 pt-4 mb-0.5 select-none'
        dangerouslySetInnerHTML={{ __html: isIntroText }}
      ></div>
    </div>
  );
};

export default HomeText;
