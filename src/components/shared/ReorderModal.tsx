'use client';
import { useState, useEffect } from 'react';
import {
  getProjectsBySubcategory,
  updateSubcategoryProjectOrder,
} from '@/helpers/api';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// Define the type for subcategory projects
interface SubcategoryProject {
  id: string;
  project: {
    id: string;
    name: string;
  };
  displayOrder: number;
}

interface SortableItemProps {
  id: string;
  project: SubcategoryProject;
  index: number;
}

const SortableItem = ({ id, project, index }: SortableItemProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div className='flex items-center justify-between gap-2 border border-gray-400 p-2 hover:bg-gray-50 cursor-move'>
        <div className='flex items-center gap-2'>
          <div className='w-7 h-7 rounded-full bg-black text-white flex items-center justify-center text-sm'>
            {project.displayOrder}
          </div>
          <h3 className='text-lg font-bold'>{project.project.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default function ReorderModal({
  subcategoryId,
  closeModal,
  refetchProjects,
  departmentId,
}: {
  subcategoryId: string;
  closeModal: () => void;
  refetchProjects: () => void;
  departmentId: string;
}) {
  const [projects, setProjects] = useState<SubcategoryProject[]>([]);
  const [isSaving, setIsSaving] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  useEffect(() => {
    const fetchProjects = async () => {
      const projects = await getProjectsBySubcategory(
        subcategoryId,
        departmentId
      );
      setProjects(projects);
      console.log(projects);
    };
    fetchProjects();
  }, [subcategoryId, departmentId]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setProjects((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        const newItems = arrayMove(items, oldIndex, newIndex).map(
          (item, index) => {
            return {
              ...item,
              displayOrder: index,
            };
          }
        );

        return newItems;
      });
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      for (const project of projects) {
        await updateSubcategoryProjectOrder(project.id, project.displayOrder);
      }
      refetchProjects();
      closeModal();
    } catch (error) {
      console.error('Error updating project order:', error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
      <div className='bg-white p-6 rounded-md w-full max-w-2xl h-[90vh] overflow-y-auto'>
        <div className='flex flex-col gap-5'>
          <div className='flex justify-between items-center border-b border-gray-200 pb-4'>
            <h2 className='text-2xl font-bold'>
              <span className='text-gray-500'>Reorder Projects</span>
            </h2>
            <div className='flex items-center gap-4'>
              <button
                onClick={handleSave}
                disabled={isSaving}
                className='bg-brand-brown text-white px-4 py-2 rounded-md disabled:opacity-50'
              >
                {isSaving ? 'Saving...' : 'Save'}
              </button>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={projects.map((p) => p.id)}
              strategy={verticalListSortingStrategy}
            >
              <div className='flex flex-col gap-2'>
                {projects.length > 0 ? (
                  projects
                    .sort((a, b) => a.displayOrder - b.displayOrder)
                    .map((project, index) => (
                      <SortableItem
                        key={project.id}
                        id={project.id}
                        project={project}
                        index={index}
                      />
                    ))
                ) : (
                  <div className='text-center text-gray-500'>
                    No published projects found
                  </div>
                )}
              </div>
            </SortableContext>
          </DndContext>
        </div>
      </div>
    </div>
  );
}
