'use client';
import { useState, useEffect } from 'react';
import { getSubcategories } from '@/helpers/api';
import { Subcategory } from '@/types';
import { MdEdit, MdSave } from 'react-icons/md';

export const SubcategorySelect = ({
  currentSubcategories,
}: {
  currentSubcategories: Subcategory[];
}) => {
  const [showModal, setShowModal] = useState(false);
  const [allSubcategories, setAllSubcategories] = useState<Subcategory[]>([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState<
    Subcategory[]
  >(Array.isArray(currentSubcategories) ? currentSubcategories : []);

  useEffect(() => {
    const fetchSubcategories = async () => {
      const subcategories = await getSubcategories();
      setAllSubcategories(subcategories);
    };
    fetchSubcategories();
  }, []);

  const handleSubcategoryClick = (subcategory: Subcategory) => {
    if (!Array.isArray(selectedSubcategories)) {
      setSelectedSubcategories([subcategory]);
      return;
    }

    const isSelected = selectedSubcategories.some(
      (selected) => selected.id === subcategory.id
    );

    if (isSelected) {
      setSelectedSubcategories(
        selectedSubcategories.filter(
          (selected) => selected.id !== subcategory.id
        )
      );
    } else {
      setSelectedSubcategories([...selectedSubcategories, subcategory]);
    }
  };

  return (
    <div className='flex flex-col gap-2 w-full relative'>
      <div className='w-full font-brand-bold text-white border-b border-b-brand pb-1.5 flex items-center justify-between'>
        <div>Subcategory</div>
        <div className='cursor-pointer' onClick={() => setShowModal(true)}>
          <MdEdit color='white' size={18} />
        </div>
      </div>
      <div className='flex flex-wrap items-center divide-x divide-gray-400'>
        {selectedSubcategories && selectedSubcategories.length > 0 ? (
          selectedSubcategories.map((subcategory) => (
            <div
              key={subcategory.id}
              className='text-gray-400 text-sm px-2 my-1'
            >
              {subcategory.name}
            </div>
          ))
        ) : (
          <div className='text-sm text-gray-400'>No Subcategories Selected</div>
        )}
      </div>
      {showModal && (
        <div className='absolute z-10 top-8 left-0 w-full h-full bg-black bg-opacity-50'>
          <div className='bg-white p-4 rounded-md w-full flex flex-col gap-2'>
            <div className='flex items-center justify-between'>
              <div className='font-brand-bold'>Select Subcategories</div>
              <div
                className='cursor-pointer'
                onClick={() => setShowModal(false)}
              >
                <MdSave color='black' size={18} />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              {allSubcategories.map((subcategory) => {
                const isSelected = selectedSubcategories.some(
                  (selected) => selected.id === subcategory.id
                );
                return (
                  <div
                    key={subcategory.id}
                    onClick={() => handleSubcategoryClick(subcategory)}
                    className={`cursor-pointer p-2 rounded ${
                      isSelected ? 'bg-brand text-white' : 'hover:bg-gray-100'
                    }`}
                  >
                    {subcategory.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
