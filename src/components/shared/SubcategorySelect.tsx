'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import {
  getSubcategories,
  createNewProjectSubcategories,
  deleteProjectSubcategories,
  getProjectSubcategoriesByProjectId,
  deleteCurrentSubcategoryProject,
  createNewSubcategoryProject,
} from '@/helpers/api';
import {
  ProjectSubcategory,
  Subcategory,
  DepartmentSubcategory,
  Department,
} from '@/types';
import { MdEdit, MdSave } from 'react-icons/md';

export const SubcategorySelect = ({
  projectId,
  refreshProject,
  departments,
}: {
  projectId: string;
  refreshProject: () => void;
  departments: { name: string; id: string }[];
}) => {
  const pathname = usePathname();
  const department = pathname.split('/')[1];

  const departmentId = departments.find(
    (dept) => dept.name.toLowerCase() === department.toLowerCase()
  )?.id;

  const [showModal, setShowModal] = useState(false);
  const [allSubcategories, setAllSubcategories] = useState<
    DepartmentSubcategory[]
  >([]);
  const [projectSubcategories, setProjectSubcategories] = useState<
    ProjectSubcategory[]
  >([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState<
    ProjectSubcategory[]
  >([]);

  useEffect(() => {
    const fetchSubcategories = async () => {
      const subcategories = await getSubcategories();
      setAllSubcategories(subcategories);
      console.log('allSubcategories', subcategories);
    };

    fetchSubcategories();
  }, []);

  useEffect(() => {
    const fetchProjectSubcategories = async () => {
      const projectSubcategories = await getProjectSubcategoriesByProjectId(
        projectId
      );
      setProjectSubcategories(projectSubcategories);
      setSelectedSubcategories(projectSubcategories);
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
    setSelectedSubcategories(projectSubcategories);
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
      await createNewSubcategoryProject(
        projectId,
        subcategory.id,
        departmentId || '',
        0
      );
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
      await createNewSubcategoryProject(
        projectId,
        subcategory.id,
        departmentId || '',
        0
      );
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
              {subcategory.subcategory.name ? (
                subcategory.subcategory.name
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
        <div className='fixed z-10 top-1/2 w-fit left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50'>
          <div className='bg-white p-4 rounded-md w-full flex flex-col gap-4'>
            <div className='flex items-center justify-between'>
              <div className='font-brand-bold'>Select Subcategories</div>
              <div className='cursor-pointer' onClick={handleSaveSubcategories}>
                <MdSave color='black' size={18} />
              </div>
            </div>

            <div className='grid grid-cols-5 gap-4'>
              {Object.entries(
                allSubcategories.reduce((acc, item) => {
                  const deptId = item.department.id;
                  if (!acc[deptId]) {
                    acc[deptId] = {
                      name: item.department.name,
                      subcategories: [],
                    };
                  }
                  acc[deptId].subcategories.push({
                    ...item.subcategory,
                    departmentId: deptId,
                  });
                  return acc;
                }, {} as Record<string, { name: string; subcategories: any[] }>)
              ).map(([deptId, dept]) => (
                <div key={deptId} className='flex flex-col gap-2'>
                  <div className='font-brand-bold text-sm text-gray-700 border-b pb-2'>
                    {dept.name}
                  </div>
                  <div className='flex flex-col gap-1'>
                    {dept.subcategories.map((subcategory) => {
                      const isSelected = projectSubcategories.some(
                        (selected) =>
                          selected.subcategory.id === subcategory.id &&
                          departments.some(
                            (dept) => dept.id === subcategory.departmentId
                          )
                      );
                      return (
                        <div
                          key={subcategory.id}
                          onClick={
                            isSelected
                              ? () => handleActiveSubcategoryClick(subcategory)
                              : () => handleSubcategoryClick(subcategory)
                          }
                          className={`cursor-pointer p-2 rounded text-sm ${
                            isSelected
                              ? 'bg-brand text-white'
                              : 'hover:bg-gray-100'
                          }`}
                        >
                          {subcategory.name}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
