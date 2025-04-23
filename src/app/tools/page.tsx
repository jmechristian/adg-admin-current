'use client';

import React, { useEffect, useState } from 'react';
import {
  createNewSubcategoryProject,
  createProjectDepartments,
  getProjectsForNewThing,
  getDepartmentsWithSubcategoryProjects,
  addDepartmentsToSubcategoryProjects,
  getSubcategoryProjects,
} from '@/helpers/api';

// Define the types for our data structure
interface Project {
  id: string;
  projectID: string;
  subcategoryID: string;
  project: {
    departments: {
      items: Array<{
        department: {
          id: string;
          name: string;
        };
      }>;
    };
  };
}

interface Subcategory {
  id: string;
  name: string;
  projects: {
    items: Project[];
  };
}

interface SubcategoryItem {
  id: string;
  subcategory: Subcategory;
}

const Page = () => {
  const [items, setItems] = useState<any>({});
  const [items2, setItems2] = useState<any>([]);
  const [items3, setItems3] = useState<any>([]);
  const [subcategoryProjects, setSubcategoryProjects] = useState<any>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    getProjectsForNewThing().then((res: any) => {
      setItems2(
        res.map((item: any) => ({
          ...item,
          subcategory: {
            ...item.subcategory,
            projects: {
              ...item.subcategory.projects,
              items: item.subcategory.projects.items.filter((project: any) =>
                project.project.departments.items.some(
                  (dept: any) =>
                    dept.department.id ===
                    '4dfd71af-51a3-4af9-874f-da260e081f08'
                )
              ),
            },
          },
        }))
      );
      console.log(
        '2',
        res.map((item: any) => ({
          ...item,
          subcategory: {
            ...item.subcategory,
            projects: {
              ...item.subcategory.projects,
              items: item.subcategory.projects.items.filter((project: any) =>
                project.project.departments.items.some(
                  (dept: any) =>
                    dept.department.id ===
                    '4dfd71af-51a3-4af9-874f-da260e081f08'
                )
              ),
            },
          },
        }))
      );
      console.log(
        'Raw data structure:',
        JSON.stringify(res[0]?.subcategory?.projects?.items[0], null, 2)
      );

      const filteredData = res
        .map((item: SubcategoryItem) => {
          const filteredProjects = item.subcategory.projects.items.filter(
            (project: Project) => {
              const hasInteriors = project.project.departments.items.some(
                (dept) =>
                  dept.department.id === '4dfd71af-51a3-4af9-874f-da260e081f08'
              );
              console.log(
                `Project ${project.projectID} has Branding:`,
                hasInteriors
              );
              return hasInteriors;
            }
          );

          return {
            ...item,
            subcategory: {
              ...item.subcategory,
              projects: {
                ...item.subcategory.projects,
                items: filteredProjects,
              },
            },
          };
        })
        .filter(
          (item: SubcategoryItem) => item.subcategory.projects.items.length > 0
        );

      console.log('Filtered data:', filteredData);
      setItems3(filteredData);
    });

    getDepartmentsWithSubcategoryProjects().then((res: any) => {
      console.log('API Response:', res);
      setItems(res);
    });
  }, []);

  useEffect(() => {
    console.log('Current items state:', items);
  }, [items]);

  useEffect(() => {
    getSubcategoryProjects().then((res: any) => {
      console.log(res);
      setSubcategoryProjects(res.data.listSubcategoryProjects.items);
    });
  }, []);

  // const handleCreateSubcategoryProjects = async () => {
  //   setIsProcessing(true);
  //   setStatus('Processing...');

  //   try {
  //     for (const item of items3) {
  //       const subcategoryId = item.subcategory.id;
  //       const projects = item.subcategory.projects.items;

  //       setStatus(`Processing subcategory: ${item.subcategory.name}`);

  //       for (let i = 0; i < projects.length; i++) {
  //         const project = projects[i];
  //         await createNewSubcategoryProject(
  //           project.projectID,
  //           project.subcategoryID,
  //           '4dfd71af-51a3-4af9-874f-da260e081f08',
  //           i
  //         );
  //       }
  //     }

  //     setStatus('All subcategory projects created successfully!');
  //   } catch (error: any) {
  //     console.error('Error creating subcategory projects:', error);
  //     setStatus(`Error: ${error.message || 'Unknown error occurred'}`);
  //   } finally {
  //     setIsProcessing(false);
  //   }
  // };

  // const handleAddDepartmentsToSubcategoryProjects = async () => {
  //   setIsProcessing(true);
  //   setStatus('Processing...');

  //   try {
  //     for (const item of subcategoryProjects) {
  //       await addDepartmentsToSubcategoryProjects({
  //         id: item.id,
  //         departmentId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  //       });
  //     }

  //     setStatus('All departments added to subcategory projects successfully!');
  //   } catch (error: any) {
  //     console.error('Error adding departments to subcategory projects:', error);
  //     setStatus(`Error: ${error.message || 'Unknown error occurred'}`);
  //   } finally {
  //     setIsProcessing(false);
  //   }
  // };

  return (
    <div className='max-w-7xl w-full mx-auto py-16 flex flex-col gap-10'>
      <h1 className='text-2xl font-bold w-full border-b border-gray-400 pb-4'>
        Tools
      </h1>

      <div className='text-lg mb-4'>
        Total Projects:{' '}
        {items3?.subcategories?.items?.reduce(
          (total: number, item: any) =>
            total + item.subcategory.subcategoryProjects.items.length,
          0
        ) || 0}
      </div>

      <div className='flex flex-col gap-4'>
        <button
          onClick={() => {}}
          disabled={true}
          className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50'
        >
          {isProcessing ? 'Processing...' : 'Create Subcategory Projects'}
        </button>

        {status && <div className='p-4 bg-gray-100 rounded'>{status}</div>}
      </div>

      <div className='grid grid-cols-7 gap-10'>
        {items3.map((item: SubcategoryItem) => (
          <div key={item.id}>
            <div>{item.subcategory.name}</div>
            <div>{item.subcategory.projects.items.length}</div>
            <div className='text-xs text-gray-500 space-y-5'>
              {item.subcategory.projects.items.map((project: Project) => (
                <div key={project.id} className='space-y-1'>
                  <div className='font-bold'>{project.project.name}</div>
                  <div className='text-xs text-gray-500'>
                    {project.project.departments.items.map((dept: any) => (
                      <div key={dept.department.id}>{dept.department.name}</div>
                    ))}
                  </div>
                  <br />
                  {project.subcategoryID}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className='grid grid-cols-7 gap-10'>
        {items3?.subcategories?.items
          ?.sort((a: any, b: any) =>
            a.subcategory.name.localeCompare(b.subcategory.name)
          )
          .map((item: any) => (
            <div key={item.id} className='border p-4 rounded'>
              <h3 className='font-bold mb-2'>
                {item.subcategory.name} (
                {item.subcategory.subcategoryProjects.items.length})
              </h3>
              <div className='space-y-1'>
                {item.subcategory.subcategoryProjects.items
                  .sort((a: any, b: any) =>
                    a.project.name.localeCompare(b.project.name)
                  )
                  .map((project: any) => (
                    <div key={project.id} className='text-sm'>
                      {project.project.name}
                    </div>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Page;
