'use client';
import { getServicesPage } from '@/helpers/api';
import { ServicesPage } from '@/types';
import { useEffect } from 'react';
import {
  OverlayHero,
  DepartmentSummary,
} from '@jmechristian/adg-component-library';
import '@jmechristian/adg-component-library/styles.css';
import { useState } from 'react';

const Services = () => {
  const [servicesPage, setServicesPage] = useState<ServicesPage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getServicesPage()
      .then(setServicesPage)
      .finally(() => setIsLoading(false));
  }, []);

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
        <div id='services-hero'>
          <OverlayHero
            image={servicesPage[0].hero}
            content={servicesPage[0].heroQuote}
          />
        </div>
        <div className='flex flex-col max-w-5xl mx-auto px-4 lg:px-0'>
          {servicesPage[0].departments.items
            .sort((a, b) => a.order - b.order)
            .map((department) => (
              <div key={department.id}>
                <DepartmentSummary
                  key={department.id}
                  title={department.title}
                  image={department.image}
                  description={department.description}
                  split={department.split as 'left' | 'right'}
                  envision={department.envision.items}
                  design={department.design.items}
                  execute={department.execute.items}
                />
                <div className='h-px bg-brand-brown my-16'></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
