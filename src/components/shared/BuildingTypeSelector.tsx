'use client';
import { useState, useEffect } from 'react';
import {
  createNewProjectBuildingType,
  deleteProjectBuildingTypes,
  getBuildingTypes,
  getProjectBuildingTypesByProjectId,
} from '@/helpers/api';
import { BuildingType, ProjectBuildingType } from '@/types';
import { MdEdit, MdSave } from 'react-icons/md';

export const BuildingTypeSelector = ({
  currentBuildingTypes,
  projectId,
  onBuildingTypeChange,
  refreshProject,
}: {
  currentBuildingTypes: BuildingType[];
  projectId: string;
  onBuildingTypeChange?: (buildingTypes: BuildingType[]) => void;
  refreshProject: () => void;
}) => {
  const [showModal, setShowModal] = useState(false);
  const [allBuildingTypes, setAllBuildingTypes] = useState<BuildingType[]>([]);
  const [selectedBuildingTypes, setSelectedBuildingTypes] =
    useState<BuildingType[]>(currentBuildingTypes);
  const [projectBuildingTypes, setProjectBuildingTypes] = useState<
    ProjectBuildingType[]
  >([]);

  useEffect(() => {
    const fetchBuildingTypes = async () => {
      const buildingTypes = await getBuildingTypes();
      setAllBuildingTypes(buildingTypes);
    };
    fetchBuildingTypes();
  }, []);

  useEffect(() => {
    const fetchProjectBuildingTypes = async () => {
      const projectBuildingTypes = await getProjectBuildingTypesByProjectId(
        projectId
      );
      setProjectBuildingTypes(projectBuildingTypes);
    };
    if (projectId) {
      fetchProjectBuildingTypes();
    }
  }, [projectId]);

  const refreshProjectBuildingTypes = async () => {
    const projectBuildingTypes = await getProjectBuildingTypesByProjectId(
      projectId
    );
    setProjectBuildingTypes(projectBuildingTypes);
  };
  const handleBuildingTypeClick = async (buildingType: BuildingType) => {
    // Ensure we're working with an array
    const currentSelected = Array.isArray(selectedBuildingTypes)
      ? selectedBuildingTypes
      : [];

    // Check if buildingType is already selected
    const isSelected = currentSelected.some(
      (selected) => selected.id === buildingType.id
    );

    if (isSelected) {
      // Remove if already selected
      setSelectedBuildingTypes(
        currentSelected.filter((selected) => selected.id !== buildingType.id)
      );
      const projectBuildingType = projectBuildingTypes.find(
        (p) => p.buildingType.id === buildingType.id
      );
      if (projectBuildingType) {
        await deleteProjectBuildingTypes(projectBuildingType.id);
      }
      refreshProject();
      refreshProjectBuildingTypes();
    } else {
      // Add if not selected
      setSelectedBuildingTypes([...currentSelected, buildingType]);
      await createNewProjectBuildingType(projectId, buildingType.id);
      refreshProject();
      refreshProjectBuildingTypes();
    }
  };

  const handleSaveBuildingTypes = async () => {
    try {
      // Map through each building type ID and create promises for each
      // const promises = selectedBuildingTypes.map((buildingType) =>
      //   createNewProjectBuildingType(projectId, buildingType.id)
      // );

      // // Wait for all promises to resolve
      // const results = await Promise.all(promises);

      setShowModal(false);

      // If you need to refresh the UI after saving
      if (onBuildingTypeChange) {
        onBuildingTypeChange(selectedBuildingTypes);
      }
    } catch (error) {
      console.error('Error saving building types:', error);
    }
  };

  return (
    <div className='flex flex-col gap-2 w-full relative'>
      <div className='w-full text-sm text-gray-400 border-b border-b-gray-700 pb-1.5 flex items-center justify-between'>
        <div>Building Type:</div>
        <div className='cursor-pointer' onClick={() => setShowModal(true)}>
          <MdEdit color='white' size={18} />
        </div>
      </div>
      <div className='flex flex-wrap items-center divide-x divide-gray-400'>
        {selectedBuildingTypes && selectedBuildingTypes.length > 0 ? (
          selectedBuildingTypes.map((buildingType) => (
            <div
              key={buildingType.id}
              className='text-white font-semibold text-sm px-2 my-1'
            >
              {buildingType.name}
            </div>
          ))
        ) : (
          <div className='text-sm text-gray-400'>
            No Building Types Selected
          </div>
        )}
      </div>
      {showModal && (
        <div className='absolute z-10 top-8 left-0 w-full h-full bg-black bg-opacity-50'>
          <div className='bg-white p-4 rounded-md w-full flex flex-col gap-2'>
            <div className='flex items-center justify-between'>
              <div className='font-brand-bold'>Select Building Types</div>
              <div className='cursor-pointer' onClick={handleSaveBuildingTypes}>
                <MdSave color='black' size={18} />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              {allBuildingTypes.map((buildingType) => {
                const isSelected =
                  Array.isArray(selectedBuildingTypes) &&
                  selectedBuildingTypes.some(
                    (selected) => selected.id === buildingType.id
                  );
                return (
                  <div
                    key={buildingType.id}
                    onClick={() => handleBuildingTypeClick(buildingType)}
                    className={`cursor-pointer p-2 rounded ${
                      isSelected ? 'bg-brand text-white' : 'hover:bg-gray-100'
                    }`}
                  >
                    {buildingType.name}
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
