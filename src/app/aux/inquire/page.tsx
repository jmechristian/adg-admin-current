'use client';
import { getInquirePage, saveInquirePage } from '@/helpers/api';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { MapRef, Marker } from 'react-map-gl/mapbox';
import { MdClose, MdEdit, MdGrade, MdKey, MdSave } from 'react-icons/md';
import { InquirePage } from '@/types';
import { useEffect, useRef } from 'react';
import {
  OverlayHero,
  DepartmentSummary,
} from '@jmechristian/adg-component-library';
import '@jmechristian/adg-component-library/styles.css';
import { useState } from 'react';
import ImageUpload from '@/components/shared/ImageUpload';

const Inquire = () => {
  const interestedInOptions = [
    'Interior Design',
    'Architecture',
    'Branding & Marketing',
    'Millwork & Cabinetry',
    'Construction Services',
    'Residential Design',
  ];

  const [inquirePage, setInquirePage] = useState<InquirePage>();
  const [formState, setFormState] = useState<{
    name: string;
    email: string;
    company: string;
    interestedIn: string[];
    projectAddress: string;
    projectDescription: string;
    projectBudget: number;
  }>({
    name: '',
    email: '',
    company: '',
    interestedIn: [],
    projectAddress: '',
    projectDescription: '',
    projectBudget: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isEditingHero, setIsEditingHero] = useState(false);
  const [heroQuote, setHeroQuote] = useState('');
  const [heroImage, setHeroImage] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const mapRef = useRef<MapRef>(null) as React.MutableRefObject<MapRef>;
  useEffect(() => {
    getInquirePage()
      .then(setInquirePage)
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    if (inquirePage) {
      setHeroQuote(inquirePage.heroQuote);
      setHeroImage(inquirePage.hero);
    }
  }, [inquirePage]);

  const refreshData = async () => {
    const inquirePage = await getInquirePage();
    setInquirePage(inquirePage);
  };

  const initialView = {
    longitude: -77.048834,
    latitude: 38.806236,
    zoom: 13,
    pitch: 0,
  };

  const handleSubmit = async () => {
    if (formState.email === '') {
      setIsError(true);
      setErrorMessage('Email is required');
      return;
    }
    if (formState.name === '') {
      setIsError(true);
      setErrorMessage('Name is required');
      return;
    }
    if (formState.company === '') {
      setIsError(true);
      setErrorMessage('Company is required');
      return;
    }
    if (formState.projectBudget === 0) {
      setIsError(true);
      setErrorMessage('Project budget is required');
      return;
    }
    if (formState.projectAddress === '') {
      setIsError(true);
      setErrorMessage('Project address is required');
      return;
    }
    if (formState.projectDescription === '') {
      setIsError(true);
      setErrorMessage('Project description is required');
      return;
    }
    if (formState.interestedIn.length === 0) {
      setIsError(true);
      setErrorMessage('At least one interest is required');
      return;
    }

    setIsSending(true);
    const res = await fetch('/api/mailchimp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formState),
    });

    const result = await res.json();

    if (res.ok) {
      console.log('✅ Success:', result);
    } else {
      console.error('❌ Error:', result);
    }
    setIsSubmitted(true);
    setIsSending(false);
    console.log(formState);
  };

  const handleSaveHero = async () => {
    setIsSaving(true);
    saveInquirePage({
      id: inquirePage!.id,
      heroQuote: heroQuote,
      hero: heroImage,
    });
    setIsSaving(false);
    refreshData();
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
    <div className='w-full max-w-[2000px] mx-auto overflow-x-hidden'>
      <div className='flex flex-col'>
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
            image={inquirePage!.hero}
            content={inquirePage!.heroQuote}
          />
        </div>
        <div className='grid lg:grid-cols-12 px-4 lg:px-0 w-full'>
          <div className='lg:col-span-4 grid content-center w-full py-16'>
            <div className='flex flex-col gap-4 max-w-sm w-full mx-auto'>
              <div className='text-brand-brown uppercase tracking-widest font-brand-medium'>
                GET IN TOUCH
              </div>
              <div className='flex flex-col gap-0.5'>
                <div className='font-brand-medium'>Akseizer Design Group</div>
                <div className='font-brand-book'>123 North Alfred Street</div>
                <div className='font-brand-book'>Alexandria, VA 22314</div>
              </div>
              <div className='flex flex-col gap-0.5 my-6'>
                <div className='font-brand-book'>
                  <span className='font-brand-medium'>T:</span> (703) 804-8200
                </div>
                <div className='font-brand-book'>
                  <span className='font-brand-medium'>E:</span>{' '}
                  Info@DesignADG.com
                </div>
              </div>
              <div className='w-full h-px bg-brand-brown'></div>
              <div className='flex flex-col gap-4 w-full mt-5'>
                <div className='font-brand-medium uppercase tracking-widest text-brand-brown'>
                  CAREERS
                </div>
                <div className='font-brand-book'>
                  We&apos;re always looking for the next great addition to our
                  talented team. Applicants may submit a cover letter, resume,
                  and portfolio link to{' '}
                  <span className='font-brand-medium'>
                    careers@designadg.com.
                  </span>{' '}
                  Qualified candidates will be contacted as hiring needs arise.
                </div>
              </div>
            </div>
          </div>
          <div className='lg:col-span-8 w-full h-full'>
            <Map
              mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
              initialViewState={initialView}
              style={{ width: '100%', height: '100%' }}
              mapStyle='mapbox://styles/adg-branding/cl47jmywy003p15rmjzucu62i'
              scrollZoom={false}
              dragRotate={false}
              dragPan={false}
              keyboard={false}
              doubleClickZoom={false}
              ref={mapRef}
            >
              <Marker longitude={-77.048834} latitude={38.806236}>
                <div className='w-10 h-10 bg-brand-brown rounded-full flex items-center justify-center'>
                  <MdGrade className='text-white' size={24} />
                </div>
              </Marker>
            </Map>
          </div>
        </div>
        <div className='w-full bg-brand-light-peach py-16'>
          <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-4'>
              <div className='flex flex-col gap-4 max-w-sm mx-auto'>
                <div className='text-4xl font-serif'>Inquire</div>
                <div className='text-brand-gray font-brand-book text-lg'>
                  Connect with our team by completing the form below.
                </div>
              </div>
            </div>

            <div className='col-span-8 w-full px-16'>
              <div className=' grid grid-cols-2 gap-10'>
                <div className='flex flex-col gap-3'>
                  <div className='text-brand-brown font-brand-book uppercase'>
                    Name (Required)
                  </div>
                  <div>
                    <input
                      type='text'
                      className='w-full !border-0 border-brand-brown p-2 outline-none ring-0'
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className='flex flex-col gap-3'>
                  <div className='text-brand-brown font-brand-book uppercase'>
                    Email (Required)
                  </div>
                  <div>
                    <input
                      type='text'
                      className='w-full !border-0 border-brand-brown p-2 outline-none ring-0'
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className='col-span-2 flex flex-col gap-3'>
                  <div className='text-brand-brown font-brand-book uppercase'>
                    Company (Required)
                  </div>
                  <div>
                    <input
                      type='text'
                      className='w-full !border-0 border-brand-brown p-2 outline-none ring-0'
                      value={formState.company}
                      onChange={(e) =>
                        setFormState({ ...formState, company: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className='col-span-2 flex flex-col gap-3 '>
                  <div className='text-brand-brown font-brand-book uppercase'>
                    INTERESTED IN: (Required)
                  </div>
                  <div className='grid grid-cols-2 gap-3 mt-2'>
                    {interestedInOptions.map((option) => (
                      <div key={option} className='flex items-center gap-3'>
                        <input
                          type='checkbox'
                          className='w-4 h-4'
                          checked={formState.interestedIn.includes(option)}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              interestedIn: e.target.checked
                                ? [...formState.interestedIn, option]
                                : formState.interestedIn.filter(
                                    (o) => o !== option
                                  ),
                            })
                          }
                        />
                        <div className='text-brand-brown font-brand-book'>
                          {option}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='col-span-2 flex flex-col gap-3'>
                  <div className='text-brand-brown font-brand-book uppercase'>
                    Project Address (Required)
                  </div>
                  <div>
                    <input
                      type='text'
                      className='w-full !border-0 border-brand-brown p-2 outline-none ring-0'
                      value={formState.projectAddress}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          projectAddress: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className='col-span-2 flex flex-col gap-3'>
                  <div className='text-brand-brown font-brand-book uppercase'>
                    Project Budget (Required)
                  </div>
                  <div className='relative'>
                    <span className='absolute left-2 top-1/2 -translate-y-1/2 text-brand-brown'>
                      $
                    </span>
                    <input
                      type='number'
                      className='w-full !border-0 border-brand-brown p-2 pl-6 outline-none ring-0'
                      value={formState.projectBudget}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          projectBudget: Number(e.target.value),
                        })
                      }
                    />
                  </div>
                </div>
                <div className='col-span-2 flex flex-col gap-3'>
                  <div className='text-brand-brown font-brand-book uppercase'>
                    Project Description (Required)
                  </div>
                  <div>
                    <textarea
                      className='w-full !border-0 border-brand-brown p-2 outline-none ring-0'
                      value={formState.projectDescription}
                      rows={7}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          projectDescription: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                {!isSubmitted && (
                  <div className='col-span-2 flex gap-3'>
                    <button
                      className='bg-brand-brown hover:bg-brand-brown/80 text-white px-6 py-4 uppercase font-brand-book tracking-wide'
                      onClick={handleSubmit}
                    >
                      Send Inquiry
                    </button>
                  </div>
                )}
                {isSubmitted && !isError && (
                  <div className='w-full bg-brand-light-peach'>
                    <div className='text-lg font-serif italic text-brand-brown'>
                      Your message has been submitted, thank you!
                    </div>
                  </div>
                )}
                {isError && (
                  <div className='col-span-2 flex gap-3'>
                    <div className='text-brand-brown font-brand-book'>
                      Error: {errorMessage}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default Inquire;
