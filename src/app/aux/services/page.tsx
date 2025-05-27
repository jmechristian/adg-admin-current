'use client';
import { getServicesPage, saveServicesPage } from '@/helpers/api';
import { ServicesPage } from '@/types';
import { useEffect } from 'react';
import {
  OverlayHero,
  DepartmentSummary,
} from '@jmechristian/adg-component-library';
import '@jmechristian/adg-component-library/styles.css';
import { useState } from 'react';
import {
  MdArrowForwardIos,
  MdClose,
  MdEdit,
  MdSave,
  MdKey,
} from 'react-icons/md';
import AuxEditModal from '@/components/shared/AuxEditModal';
import ImageUpload from '@/components/shared/ImageUpload';

const Services = () => {
  const [servicesPage, setServicesPage] = useState<ServicesPage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingHero, setIsEditingHero] = useState(false);
  const [heroQuote, setHeroQuote] = useState('');
  const [heroImage, setHeroImage] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    getServicesPage()
      .then(setServicesPage)
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    if (servicesPage.length > 0) {
      setHeroQuote(servicesPage[0].heroQuote);
      setHeroImage(servicesPage[0].hero);
    }
  }, [servicesPage]);

  const refreshPage = () => {
    getServicesPage().then(setServicesPage);
  };

  const handleDepartmentClick = (department: any) => {
    setSelectedDepartment(department);
    setIsEditing(true);
  };

  const handleCloseClick = () => {
    setIsEditing(false);
    setSelectedDepartment(null);
  };

  const handleSaveHero = () => {
    setIsSaving(true);
    saveServicesPage({
      id: servicesPage[0].id,
      heroQuote,
      hero: heroImage,
    });
    refreshPage();
    setIsSaving(false);
  };

  if (isLoading) {
    return (
      <div className='space-y-4 p-4'>
        {[...Array(3)].map((_, i) => (
          <div key={i} className='animate-pulse'>
            <div className='h-8 bg-gray-200 rounded w-1/3 mb-2'></div>
            <div className='h-4 bg-gray-200 rounded w-full mb-2'></div>
            <div className='h-4 bg-gray-200 rounded w-5/6'></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className='w-full max-w-[2000px] mx-auto pb-16 overflow-x-hidden'>
      <div className='flex flex-col gap-16'>
        <div id='services-hero relative'>
          <div className='absolute top-5 right-5 z-30 shadow-lg'>
            <div className='bg-brand-brown text-white px-4 py-2 rounded-md font-brand-book text-lg leading-none cursor-pointer'>
              <div
                className='flex items-center justify-center gap-1 leading-none'
                onClick={() => setIsEditingHero(true)}
              >
                <MdEdit size={24} />
              </div>
            </div>
          </div>
          <OverlayHero
            image={servicesPage[0].hero}
            content={servicesPage[0].heroQuote}
          />
        </div>
        <div className='flex flex-col max-w-5xl mx-auto px-4 lg:px-0'>
          {servicesPage[0].departments.items
            .sort((a, b) => a.order - b.order)
            .map((department) => (
              <div
                key={department.id}
                className='cursor-pointer w-full relative'
              >
                <DepartmentSummary
                  key={department.id}
                  title={department.title}
                  image={department.image}
                  description={department.description}
                  split={department.split as 'left' | 'right'}
                  envision={department.envision.items}
                  design={department.design.items}
                  execute={department.execute.items}
                  link={
                    department.link
                      ? () => window.open(department.link, '_blank')
                      : undefined
                  }
                />
                <div className='absolute top-0 right-0 z-30 shadow-lg'>
                  <div className='bg-brand-brown text-white px-4 py-2 rounded-md font-brand-book text-lg leading-none cursor-pointer'>
                    <div
                      className='flex items-center justify-center gap-1 leading-none'
                      onClick={() => handleDepartmentClick(department)}
                    >
                      <MdEdit size={24} />
                    </div>
                  </div>
                </div>
                <div className='h-px bg-brand-brown my-16'></div>
              </div>
            ))}
        </div>
      </div>
      {isEditing && (
        <AuxEditModal
          department={selectedDepartment}
          close={handleCloseClick}
          refreshPage={refreshPage}
        />
      )}
      {isEditingHero && (
        <div className='fixed inset-0 bg-black/80 flex items-center justify-center z-50'>
          <div className='bg-white p-6 rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto flex flex-col gap-3.5 relative'>
            <div className='absolute top-3 right-3 z-50'>
              <button onClick={() => setIsEditingHero(false)}>
                <MdClose size={24} />
              </button>
            </div>
            <div className='flex flex-col gap-6 w-full max-w-3xl mx-auto'>
              <div className='w-full'>
                <div
                  className='w-full aspect-[5/2.5] bg-brand-brown rounded bg-cover bg-center flex items-center justify-center'
                  style={{ backgroundImage: `url(${heroImage})` }}
                >
                  <ImageUpload setImage={(url) => setHeroImage(url)} />
                </div>
              </div>
              <div className='w-full flex flex-col gap-2'>
                <textarea
                  className='w-full'
                  value={heroQuote}
                  onChange={(e) => setHeroQuote(e.target.value)}
                  rows={3}
                />
                <div className='w-full flex items-center gap-2.5 bg-brand-peach p-2'>
                  <div>
                    <MdKey size={24} />
                  </div>
                  <div className='font-brand-medium'>{`Add <br /> to create a line break, wrap text in <i></i> to highlight`}</div>
                </div>
              </div>
              <div className='flex w-full justify-end items-center gap-2 mt-3'>
                <button
                  className={`bg-brand-brown text-white px-4 py-2 rounded-md font-brand-book text-lg leading-none cursor-pointer ${
                    isSaving
                      ? 'opacity-50 cursor-not-allowed animate-bounce'
                      : ''
                  }`}
                  onClick={handleSaveHero}
                >
                  <MdSave size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
