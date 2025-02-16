'use client';
import { useState, useEffect } from 'react';
import { getProjectTypes } from '@/helpers/api';
import { ProjectType } from '@/types';
import { MdEdit, MdSave } from 'react-icons/md';

export const ProjectTypeSelect = ({
  currentProjectTypes,
}: {
  currentProjectTypes: ProjectType[];
}) => {
  const [showModal, setShowModal] = useState(false);
  const [allProjectTypes, setAllProjectTypes] = useState<ProjectType[]>([]);
  const [selectedProjectTypes, setSelectedProjectTypes] = useState<
    ProjectType[]
  >(Array.isArray(currentProjectTypes) ? currentProjectTypes : []);

  useEffect(() => {
    const fetchProjectTypes = async () => {
      const projectTypes = await getProjectTypes();
      setAllProjectTypes(projectTypes);
    };
    fetchProjectTypes();
  }, []);

  const handleProjectTypeClick = (projectType: ProjectType) => {
    // Ensure we're working with an array
    const currentSelected = Array.isArray(selectedProjectTypes)
      ? selectedProjectTypes
      : [];

    // Check if projectType is already selected
    const isSelected = currentSelected.some(
      (selected) => selected.id === projectType.id
    );

    if (isSelected) {
      // Remove if already selected
      setSelectedProjectTypes(
        currentSelected.filter((selected) => selected.id !== projectType.id)
      );
    } else {
      // Add if not selected
      setSelectedProjectTypes([...currentSelected, projectType]);
    }
  };

  return (
    <div className='flex flex-col gap-2 w-full relative'>
      <div className='w-full font-brand-bold text-white border-b border-b-brand pb-1.5 flex items-center justify-between'>
        <div>Project Type</div>
        <div className='cursor-pointer' onClick={() => setShowModal(true)}>
          <MdEdit color='white' size={18} />
        </div>
      </div>
      <div className='flex flex-wrap items-center divide-x divide-gray-400'>
        {selectedProjectTypes && selectedProjectTypes.length > 0 ? (
          selectedProjectTypes.map((projectType) => (
            <div
              key={projectType.id}
              className='text-gray-400 text-sm px-2 my-1'
            >
              {projectType.name}
            </div>
          ))
        ) : (
          <div className='text-sm text-gray-400'>No Project Types Selected</div>
        )}
      </div>
      {showModal && (
        <div className='absolute z-10 top-8 left-0 w-full h-full bg-black bg-opacity-50'>
          <div className='bg-white p-4 rounded-md w-full flex flex-col gap-2'>
            <div className='flex items-center justify-between'>
              <div className='font-brand-bold'>Select Project Types</div>
              <div
                className='cursor-pointer'
                onClick={() => setShowModal(false)}
              >
                <MdSave color='black' size={18} />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              {allProjectTypes.map((projectType) => {
                const isSelected = selectedProjectTypes.some(
                  (selected) => selected.id === projectType.id
                );
                return (
                  <div
                    key={projectType.id}
                    onClick={() => handleProjectTypeClick(projectType)}
                    className={`cursor-pointer p-2 rounded ${
                      isSelected ? 'bg-brand text-white' : 'hover:bg-gray-100'
                    }`}
                  >
                    {projectType.name}
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
