import React, { useState } from 'react';
import { MdClose, MdAdd, MdDelete, MdSave } from 'react-icons/md';
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
import {
  createNewEnvisionSummaryItem,
  createNewDesignSummaryItem,
  createNewExecuteSummaryItem,
  deleteNewSummaryItem,
  updateNewSummaryItem,
  updateSelectedDepartmentSummary,
} from '../../helpers/api';
import ImageUpload from './ImageUpload';

interface SortableItemProps {
  id: string;
  content: string;
  type: string;
  onSelect: (item: any) => void;
}

const SortableItem = ({ id, content, type, onSelect }: SortableItemProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id,
      data: {
        type,
        content,
      },
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className='flex items-center gap-2 hover:bg-brand-brown/10 p-1 rounded-md cursor-grab active:cursor-grabbing'
      onClick={() => onSelect({ id, content, type })}
    >
      <div className='w-1 h-1 bg-brand-brown rounded-full'></div>
      <div className='text-sm font-brand-book'>{content}</div>
    </div>
  );
};

const AuxEditModal = ({
  department,
  close,
  refreshPage,
}: {
  department: any;
  close: () => void;
  refreshPage: () => void;
}) => {
  const [title, setTitle] = useState(department.title);
  const [description, setDescription] = useState(department.description);
  const [image, setImage] = useState(department.image);
  const [split, setSplit] = useState(department.split);
  const [envision, setEnvision] = useState(department.envision.items);
  const [design, setDesign] = useState(department.design.items);
  const [execute, setExecute] = useState(department.execute.items);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSelectedItem, setIsSelectedItem] = useState<any>(null);
  const [isNewItem, setIsNewItem] = useState<any>('');
  const [isNewItemType, setIsNewItemType] = useState<any>('envision');

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleItemAdd = async () => {
    if (isNewItem.trim() === '') return;
    if (isNewItemType === 'envision') {
      const res = await createNewEnvisionSummaryItem({
        content: isNewItem,
        order: envision.length + 1,
        departmentSummaryEnvisionId: department.id,
      });
      if ('data' in res) {
        setEnvision([...envision, res.data.createDepartmentSummaryItem]);
      }
      refreshPage();
    } else if (isNewItemType === 'design') {
      const res = await createNewDesignSummaryItem({
        content: isNewItem,
        order: design.length + 1,
        departmentSummaryDesignId: department.id,
      });
      if ('data' in res) {
        setDesign([...design, res.data.createDepartmentSummaryItem]);
      }
      refreshPage();
    } else if (isNewItemType === 'execute') {
      const res = await createNewExecuteSummaryItem({
        content: isNewItem,
        order: execute.length + 1,
        departmentSummaryExecuteId: department.id,
      });
      if ('data' in res) {
        setExecute([...execute, res.data.createDepartmentSummaryItem]);
      }
      refreshPage();
    }
    setIsNewItem('');
  };

  const handleItemDelete = async () => {
    if (isSelectedItem) {
      await deleteNewSummaryItem({ id: isSelectedItem.id });
      if (isSelectedItem.type === 'envision') {
        setEnvision(
          envision.filter((item: any) => item.id !== isSelectedItem.id)
        );
      } else if (isSelectedItem.type === 'design') {
        setDesign(design.filter((item: any) => item.id !== isSelectedItem.id));
      } else if (isSelectedItem.type === 'execute') {
        setExecute(
          execute.filter((item: any) => item.id !== isSelectedItem.id)
        );
      }
      refreshPage();
    }
  };

  const handleItemUpdate = async () => {
    if (isSelectedItem) {
      await updateNewSummaryItem({
        id: isSelectedItem.id,
        content: isSelectedItem.content,
        order: isSelectedItem.order,
      });
      if (isSelectedItem.type === 'envision') {
        setEnvision(
          envision.map((item: any) =>
            item.id === isSelectedItem.id ? isSelectedItem : item
          )
        );
      } else if (isSelectedItem.type === 'design') {
        setDesign(
          design.map((item: any) =>
            item.id === isSelectedItem.id ? isSelectedItem : item
          )
        );
      } else if (isSelectedItem.type === 'execute') {
        setExecute(
          execute.map((item: any) =>
            item.id === isSelectedItem.id ? isSelectedItem : item
          )
        );
      }
      refreshPage();
    }
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const activeType = active.data.current?.type;
    if (!activeType) return;

    let items: any[];
    let setItems: (items: any[]) => void;

    switch (activeType) {
      case 'envision':
        items = [...envision];
        setItems = setEnvision;
        break;
      case 'design':
        items = [...design];
        setItems = setDesign;
        break;
      case 'execute':
        items = [...execute];
        setItems = setExecute;
        break;
      default:
        return;
    }

    const oldIndex = items.findIndex((item) => item.id === active.id);
    const newIndex = items.findIndex((item) => item.id === over.id);

    if (oldIndex === -1 || newIndex === -1) return;

    const newItems = arrayMove(items, oldIndex, newIndex).map(
      (item, index) => ({
        ...item,
        order: index + 1,
      })
    );

    setItems(newItems);

    // Update all items in the backend
    try {
      await Promise.all(
        newItems.map((item) =>
          updateNewSummaryItem({
            id: item.id,
            content: item.content,
            order: item.order,
          })
        )
      );
      refreshPage();
    } catch (error) {
      console.error('Error updating item order:', error);
      // Revert the state if the update fails
      setItems(items);
    }
  };

  const handleSaveAll = async () => {
    setIsSaving(true);
    await updateSelectedDepartmentSummary({
      id: department.id,
      title,
      description,
      image,
    });
    refreshPage();
    setIsSaving(false);
  };

  return (
    <div className='fixed inset-0 bg-black/80 flex items-center justify-center z-50'>
      <div className='bg-white p-6 rounded-lg w-full max-w-4xl h-full  max-h-[90vh] overflow-y-auto flex flex-col gap-3.5 relative'>
        <div className='absolute top-3 right-3 z-50'>
          <button onClick={close}>
            <MdClose size={24} />
          </button>
        </div>
        <div className='w-full grid grid-cols-2 gap-10'>
          <div>
            <div
              className='w-full h-full aspect-[4/3] bg-cover bg-center rounded-lg flex items-center justify-center'
              style={{ backgroundImage: `url(${image})` }}
            >
              <ImageUpload
                setImage={(url) => {
                  setImage(url);
                }}
              />
            </div>
          </div>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
              <label htmlFor='title'>Title</label>
              <input
                type='text'
                id='title'
                className='w-full'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='description'>Description</label>
              <textarea
                id='description'
                className='w-full'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={6}
              />
            </div>
          </div>
        </div>

        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <div className='grid grid-cols-3 gap-2'>
            <div className='col-span-1 flex flex-col gap-2'>
              <h3 className='text-lg font-brand-medium w-full bg-brand-brown text-white px-4 py-2 rounded'>
                Envision
              </h3>
              <SortableContext
                items={envision.map((item: any) => item.id)}
                strategy={verticalListSortingStrategy}
              >
                <div className='flex flex-col px-1.5'>
                  {envision
                    .sort((a: any, b: any) => a.order - b.order)
                    .map((item: any) => (
                      <SortableItem
                        key={item.id}
                        id={item.id}
                        content={item.content}
                        type='envision'
                        onSelect={setIsSelectedItem}
                      />
                    ))}
                </div>
              </SortableContext>
            </div>

            <div className='col-span-1'>
              <h3 className='text-lg font-brand-medium w-full bg-brand-brown text-white px-4 py-2 rounded'>
                Design
              </h3>
              <SortableContext
                items={design.map((item: any) => item.id)}
                strategy={verticalListSortingStrategy}
              >
                <div className='flex flex-col px-1.5'>
                  {design
                    .sort((a: any, b: any) => a.order - b.order)
                    .map((item: any) => (
                      <SortableItem
                        key={item.id}
                        id={item.id}
                        content={item.content}
                        type='design'
                        onSelect={setIsSelectedItem}
                      />
                    ))}
                </div>
              </SortableContext>
            </div>

            <div className='col-span-1'>
              <h3 className='text-lg font-brand-medium w-full bg-brand-brown text-white px-4 py-2 rounded'>
                Execute
              </h3>
              <SortableContext
                items={execute.map((item: any) => item.id)}
                strategy={verticalListSortingStrategy}
              >
                <div className='flex flex-col px-1.5'>
                  {execute
                    .sort((a: any, b: any) => a.order - b.order)
                    .map((item: any) => (
                      <SortableItem
                        key={item.id}
                        id={item.id}
                        content={item.content}
                        type='execute'
                        onSelect={setIsSelectedItem}
                      />
                    ))}
                </div>
              </SortableContext>
            </div>
          </div>
        </DndContext>

        <div className='w-full rounded flex flex-1 items-end'>
          <div className='flex items-center justify-between gap-2 w-full bg-brand-brown/30 p-5 rounded-lg'>
            <div className='flex w-full'>
              {isSelectedItem ? (
                <div className='flex gap-2 w-96 items-center'>
                  <input
                    type='text'
                    value={isSelectedItem.content}
                    className='w-full !bg-white/60 border-none outline-none'
                    onChange={(e) =>
                      setIsSelectedItem({
                        ...isSelectedItem,
                        content: e.target.value,
                      })
                    }
                  />
                  <button
                    className='bg-red-500 hover:bg-red-600 font-brand-medium text-lg text-white rounded-full p-1.5 w-8 h-8 flex items-center justify-center'
                    onClick={handleItemDelete}
                  >
                    <MdDelete size={24} />
                  </button>
                  <button
                    className='bg-brand-gray hover:bg-brand-brown/80 font-brand-medium text-lg text-white rounded-full p-1.5 w-8 h-8 flex items-center justify-center'
                    onClick={handleItemUpdate}
                  >
                    <MdSave size={24} />
                  </button>
                </div>
              ) : (
                <div className='flex gap-2 w-full items-center'>
                  <input
                    type='text'
                    value={isNewItem}
                    className='w-72 !bg-white/60 border-none outline-none'
                    onChange={(e) => setIsNewItem(e.target.value)}
                    placeholder='Add new item'
                  />
                  <div className='text-sm font-brand-book'>To</div>
                  <div className='w-fit'>
                    <select
                      name='type'
                      id='type'
                      className='w-fit !bg-white/60 border-none outline-none'
                      value={isNewItemType}
                      onChange={(e) => setIsNewItemType(e.target.value)}
                    >
                      <option value='envision'>Envision</option>
                      <option value='design'>Design</option>
                      <option value='execute'>Execute</option>
                    </select>
                  </div>
                  <button
                    className='bg-brand-gray hover:bg-brand-brown/80 font-brand-medium text-lg text-white rounded-full p-1.5 w-8 h-8 flex items-center justify-center'
                    onClick={handleItemAdd}
                  >
                    <MdAdd size={24} />
                  </button>
                </div>
              )}
            </div>
            <button
              className='bg-brand-gray hover:bg-brand-brown/80 font-brand-medium text-lg text-white px-4 py-2 rounded w-fit whitespace-nowrap'
              onClick={handleSaveAll}
              disabled={isSaving}
            >
              {isSaving ? 'Saving...' : 'Save All'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuxEditModal;
