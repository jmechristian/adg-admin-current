'use client';
import { ProjectWithDepartments } from '@/types';
import React, { useState } from 'react';
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
import { updateFeaturedProjectOrder } from '@/helpers/api';
interface SortableItemProps {
  id: string;
  project: ProjectWithDepartments;
  index: number;
}

const SortableItem = ({ id, project, index }: SortableItemProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  // Get the display order from featuredProjects or use index + 1
  const displayOrder =
    project.featuredProjects?.items?.[0]?.displayOrder || index + 1;

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div className='flex items-center justify-between gap-2 border border-gray-400 p-2 hover:bg-gray-50 cursor-move'>
        <div className='flex items-center gap-2'>
          <div className='w-7 h-7 rounded-full bg-black text-white flex items-center justify-center text-sm'>
            {displayOrder}
          </div>
          <h3 className='text-lg font-bold'>{project.name}</h3>
        </div>
      </div>
    </div>
  );
};

const FeaturedModal = ({
  featuredProjects,
  closeModal,
  refetchProjects,
}: {
  featuredProjects: ProjectWithDepartments[];
  closeModal: () => void;
  refetchProjects: () => void;
}) => {
  const [projects, setProjects] =
    useState<ProjectWithDepartments[]>(featuredProjects);
  const [isSaving, setIsSaving] = useState(false);
  console.log(projects);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setProjects((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        const newItems = arrayMove(items, oldIndex, newIndex).map(
          (item, index) => {
            // Create a deep copy of the item
            const updatedItem = { ...item };

            // Update the displayOrder in featuredProjects if it exists
            if (
              updatedItem.featuredProjects?.items &&
              updatedItem.featuredProjects.items.length > 0
            ) {
              updatedItem.featuredProjects = {
                ...updatedItem.featuredProjects,
                items: updatedItem.featuredProjects.items.map((fp) => ({
                  ...fp,
                  displayOrder: index + 1,
                })),
              };
            }

            return updatedItem;
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
        const featuredProjectId = project.featuredProjects?.items[0]?.id;
        const displayOrder = project.featuredProjects?.items[0]?.displayOrder;
        if (featuredProjectId && displayOrder !== undefined) {
          await updateFeaturedProjectOrder(featuredProjectId, displayOrder);
        }
      }
      refetchProjects();
    } catch (error) {
      console.error('Error updating project order:', error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
      <div className='bg-white p-6 rounded-md w-full max-w-4xl h-[90vh] overflow-y-auto'>
        <div className='flex flex-col gap-6'>
          <div className='flex justify-between items-center border-b border-gray-200 pb-4'>
            <h2 className='text-2xl font-bold'>
              <span className='text-gray-500'>Featured Projects:</span>{' '}
              {projects.length}/12 max
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
                {projects
                  .sort(
                    (a, b) =>
                      a.featuredProjects?.items[0]?.displayOrder -
                      b.featuredProjects?.items[0]?.displayOrder
                  )
                  .map((project, index) => (
                    <SortableItem
                      key={project.id}
                      id={project.id}
                      project={project}
                      index={index}
                    />
                  ))}
              </div>
            </SortableContext>
          </DndContext>
        </div>
      </div>
    </div>
  );
};

export default FeaturedModal;
