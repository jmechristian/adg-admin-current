'use client';
import React from 'react';
import HomeDepartments from './HomeDepartments';
import useLayoutStore from '@/store/useLayoutStore';
const SecondVariableHomeDepartments = () => {
  const { isBoxedLayout } = useLayoutStore();
  return (
    <div className={`grid md:grid-cols-3 gap-12 w-full mx-auto`}>
      <HomeDepartments
        department=''
        content=''
        callout='Millwork & Cabinetry'
        link='/interior-design'
        image='https://adgadmin170407-dev.s3.us-east-1.amazonaws.com/subfeature-1.png'
      />
      <HomeDepartments
        department=''
        content=''
        callout='Construction Services'
        link='/architecture'
        image='https://adgadmin170407-dev.s3.us-east-1.amazonaws.com/subfeature-2.png'
      />
      <HomeDepartments
        department=''
        content=''
        callout='Residential Design'
        link='/branding'
        image='https://adgadmin170407-dev.s3.us-east-1.amazonaws.com/subfeature-3.png'
      />
    </div>
  );
};

export default SecondVariableHomeDepartments;
