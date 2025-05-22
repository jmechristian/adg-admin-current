import React, { useState } from 'react';
import { MdClose, MdAdd, MdDelete } from 'react-icons/md';
import {
  createNewEnvisionSummaryItem,
  createNewDesignSummaryItem,
  createNewExecuteSummaryItem,
} from '../../helpers/api';

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
              className='w-full h-full aspect-[4/3] bg-cover bg-center rounded-lg'
              style={{ backgroundImage: `url(${image})` }}
            ></div>
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
        <div className='grid grid-cols-3 gap-2'>
          <div className='col-span-1 flex flex-col gap-2'>
            <h3 className='text-lg font-brand-medium w-full bg-brand-brown text-white px-4 py-2 rounded'>
              Envision
            </h3>
            <div className='flex flex-col px-1.5'>
              {envision
                .sort((a: any, b: any) => a.order - b.order)
                .map((item: any) => (
                  <div
                    key={item.id}
                    className='flex items-center gap-2 hover:bg-brand-brown/10 p-1 rounded-md cursor-pointer'
                    onClick={() => setIsSelectedItem(item)}
                  >
                    <div className='w-1 h-1 bg-brand-brown rounded-full'></div>
                    <div className='text-sm font-brand-book'>
                      {item.content}
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className='col-span-1'>
            <h3 className='text-lg font-brand-medium w-full bg-brand-brown text-white px-4 py-2 rounded'>
              Design
            </h3>
            <div className='flex flex-col px-1.5'>
              {design
                .sort((a: any, b: any) => a.order - b.order)
                .map((item: any) => (
                  <div
                    key={item.id}
                    className='flex items-center gap-2 hover:bg-brand-brown/10 p-1 rounded-md cursor-pointer'
                    onClick={() => setIsSelectedItem(item)}
                  >
                    <div className='w-1 h-1 bg-brand-brown rounded-full'></div>
                    <div className='text-sm font-brand-book'>
                      {item.content}
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className='col-span-1'>
            <h3 className='text-lg font-brand-medium w-full bg-brand-brown text-white px-4 py-2 rounded'>
              Execute
            </h3>
            <div className='flex flex-col px-1.5'>
              {execute
                .sort((a: any, b: any) => a.order - b.order)
                .map((item: any) => (
                  <div
                    key={item.id}
                    className='flex items-center gap-2 hover:bg-brand-brown/10 p-1 rounded-md cursor-pointer'
                    onClick={() => setIsSelectedItem(item)}
                  >
                    <div className='w-1 h-1 bg-brand-brown rounded-full'></div>
                    <div className='text-sm font-brand-book'>
                      {item.content}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className='w-full  rounded flex flex-1 items-end'>
          <div className='flex items-center justify-between gap-2 w-full bg-brand-brown/30 p-5 rounded-lg'>
            <div className='flex w-full'>
              {isSelectedItem ? (
                <div className='flex gap-2 w-96'>
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
            <button className='bg-brand-gray hover:bg-brand-brown/80 font-brand-medium text-lg text-white px-4 py-2 rounded w-fit whitespace-nowrap'>
              Save All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuxEditModal;
