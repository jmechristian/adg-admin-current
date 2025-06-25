'use client';
import React, { useState, useEffect } from 'react';
import Hero from '@/components/shared/Hero';
import HomeFeatured from '@/components/shared/HomeFeatured';
import HomeText from '@/components/shared/HomeText';
import SecondVariableHomeDepartments from '@/components/shared/SecondVariableHomeDepartments';
import VariableHomeDepartments from '@/components/shared/VariableHomeDepartments';
import HomeVisit from '@/components/shared/HomeVisit';
import { HomePageType } from '@/types';
import { getHomePage } from '@/helpers/api';
import { HomeSlider } from '@jmechristian/adg-component-library';
import '@jmechristian/adg-component-library/styles.css';

const HomePage = () => {
  const [homePage, setHomePage] = useState<HomePageType>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getHomePage().then((data) => {
      setHomePage(data);
      console.log(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className='w-full max-w-[2000px] mx-auto relative flex flex-col gap-16 overflow-hidden'>
      <Hero
        hero={homePage?.hero || ''}
        heroQuote={homePage?.heroQuote || ''}
        id={homePage!.id}
      />
      <HomeText introText={homePage?.introText || ''} id={homePage!.id} />
      <VariableHomeDepartments />
      <HomeSlider featured={homePage?.featureProjects.items || []} />
      <SecondVariableHomeDepartments />
      <HomeVisit
        studioText={homePage?.studioText || ''}
        studioLink={homePage?.studioLink || ''}
        studioImage={homePage?.studioImage || ''}
        id={homePage!.id}
      />
    </div>
  );
};

export default HomePage;
