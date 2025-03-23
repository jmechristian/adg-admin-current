'use client';
import { useState, useEffect } from 'react';
import {
  getSubcategories,
  createNewProjectSubcategories,
  deleteProjectSubcategories,
  getProjectSubcategoriesByProjectId,
} from '@/helpers/api';
import { ProjectSubcategory, Subcategory } from '@/types';
import { MdEdit, MdSave } from 'react-icons/md';

export const SubcategorySelect = ({
  currentSubcategories,
  projectId,
  departmentId,
  refreshProject,
}: {
  currentSubcategories: Subcategory[];
  projectId: string;
  departmentId: string;
  refreshProject: () => void;
}) => {
  const [showModal, setShowModal] = useState(false);
  const [allSubcategories, setAllSubcategories] = useState<Subcategory[]>([]);
  const [projectSubcategories, setProjectSubcategories] = useState<
    ProjectSubcategory[]
  >([]);
  const [selectedSubcategories, setSelectedSubcategories] =
    useState<Subcategory[]>(currentSubcategories);

  useEffect(() => {
    const fetchSubcategories = async () => {
      const subcategories = await getSubcategories(departmentId);
      setAllSubcategories(subcategories.map((s) => s.subcategory));
    };
    if (departmentId) {
      fetchSubcategories();
    }
  }, [departmentId]);

  useEffect(() => {
    const fetchProjectSubcategories = async () => {
      const projectSubcategories = await getProjectSubcategoriesByProjectId(
        projectId
      );
      setProjectSubcategories(projectSubcategories);
    };
    if (projectId) {
      fetchProjectSubcategories();
    }
  }, [projectId]);

  const refreshProjectSubcategories = async () => {
    const projectSubcategories = await getProjectSubcategoriesByProjectId(
      projectId
    );
    setProjectSubcategories(projectSubcategories);
    setSelectedSubcategories(projectSubcategories.map((ps) => ps.subcategory));
  };

  const handleActiveSubcategoryClick = async (subcategory: Subcategory) => {
    const projectSubcategory = projectSubcategories.find(
      (ps) => ps.subcategory.id === subcategory.id
    );
    if (projectSubcategory) {
      await deleteProjectSubcategories(projectSubcategory.id);
      refreshProject();
      refreshProjectSubcategories();
    } else {
      await createNewProjectSubcategories(projectId, subcategory.id);
      refreshProject();
      refreshProjectSubcategories();
    }
  };

  const handleSaveSubcategories = async () => {
    try {
      setShowModal(false);
    } catch (error) {
      console.error('Error saving subcategories:', error);
    }
  };

  const handleSubcategoryClick = async (subcategory: Subcategory) => {
    const projectSubcategory = projectSubcategories.find(
      (ps) => ps.subcategory.id === subcategory.id
    );
    if (projectSubcategory) {
      await deleteProjectSubcategories(projectSubcategory.id);
      refreshProject();
      refreshProjectSubcategories();
    } else {
      await createNewProjectSubcategories(projectId, subcategory.id);
      refreshProject();
      refreshProjectSubcategories();
    }
  };

  return (
    <div className='flex flex-col gap-2 w-full relative'>
      <div className='w-full text-sm text-gray-400 border-b border-b-gray-700 pb-1.5 flex items-center justify-between'>
        <div>Subcategory:</div>
        <div className='cursor-pointer' onClick={() => setShowModal(true)}>
          <MdEdit color='white' size={18} />
        </div>
      </div>
      <div className='flex flex-wrap items-center divide-x divide-gray-400'>
        {selectedSubcategories.length > 0 ? (
          selectedSubcategories.map((subcategory) => (
            <div
              key={subcategory.id}
              className='text-white font-semibold text-sm px-2 my-1'
            >
              {subcategory.name ? (
                subcategory.name
              ) : (
                <div className='text-gray-400'>No Subcategory</div>
              )}
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
              <div className='cursor-pointer' onClick={handleSaveSubcategories}>
                <MdSave color='black' size={18} />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              {allSubcategories.map((subcategory) => {
                const isSelected = projectSubcategories.some(
                  (selected) => selected.subcategory.id === subcategory.id
                );
                return (
                  <div
                    key={subcategory.id}
                    onClick={
                      isSelected
                        ? () => handleActiveSubcategoryClick(subcategory)
                        : () => handleSubcategoryClick(subcategory)
                    }
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
