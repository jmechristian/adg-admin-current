'use client';
import React from 'react';
import HomeDepartments from './HomeDepartments';

const VariableHomeDepartments = () => {
  return (
    <div className={`grid md:grid-cols-3 gap-12 mx-auto w-full`}>
      <HomeDepartments
        department='Interior Design'
        content='Designing your dreams'
        callout='into reality'
        link='/interior-design'
        image='https://adgadmin170407-dev.s3.us-east-1.amazonaws.com/home_department1.png'
      />
      <HomeDepartments
        department='ARCHITECTURE'
        content='Elevating your vision to'
        callout='new heights'
        link='/architecture'
        image='https://adgadmin170407-dev.s3.us-east-1.amazonaws.com/home_department2.png'
      />
      <HomeDepartments
        department='branding & marketing'
        content='Crafting brands that sell '
        callout='your story'
        link='/branding'
        image='https://adgadmin170407-dev.s3.us-east-1.amazonaws.com/home_department3.png'
      />
    </div>
  );
};

export default VariableHomeDepartments;
