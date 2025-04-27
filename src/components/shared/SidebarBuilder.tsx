import { MdEdit } from 'react-icons/md';
import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import {
  PlusIcon,
  VideoCameraIcon,
  PhotoIcon,
} from '@heroicons/react/24/outline';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { Project } from '@/types';
import { SubcategorySelect } from './SubcategorySelect';
import { ProjectTypeSelect } from './ProjectTypeSelect';
import { BuildingTypeSelector } from './BuildingTypeSelector';
import FilterPreview from './FilterPreview';
import {
  updateImage,
  uploadAndConvertImage,
  addNewImageObject,
  saveProject,
  deleteImage,
  updateCurrentLocation,
  createNewLocation,
} from '@/helpers/api';
import LocationModal from './LocationModal';
import QuoteManager from './QuoteManager';

// Add type for image
interface ImageObject {
  id: string;
  url: string;
  alt?: string;
  caption?: string;
  order?: number;
  centerX?: number;
  centerY?: number;
  type?: string;
}

const getFullImageUrl = (url: string) => {
  if (!url) return url;
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  return `https://adgadmin170407-dev.s3.us-east-1.amazonaws.com/public/${url}`;
};

const SidebarBuilder = ({
  project,
  onProjectUpdate,
  refreshProject,
}: {
  project: Project;
  onProjectUpdate: () => void;
  refreshProject: () => void;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ImageObject | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [newImageAlt, setNewImageAlt] = useState('');
  const [newImageCaption, setNewImageCaption] = useState('');
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [draggedImage, setDraggedImage] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [sortedImages, setSortedImages] = useState<ImageObject[]>([]);
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>(
    {}
  );
  const [uploading, setUploading] = useState<string[]>([]);
  const [newMediaType, setNewMediaType] = useState<null | 'video'>(null);
  const [newVideoUrl, setNewVideoUrl] = useState('');
  const [newVideoCaption, setNewVideoCaption] = useState('');

  // Initialize the sorted images whenever project changes
  React.useEffect(() => {
    if (project?.gallery?.images?.items) {
      setSortedImages(
        [...project.gallery.images.items].sort(
          (a, b) => (a.order || 0) - (b.order || 0)
        )
      );
      console.log(
        'Sorted images:',
        [...project.gallery.images.items].sort(
          (a, b) => (a.order || 0) - (b.order || 0)
        )
      );
    }
  }, [project.gallery.images.items]);

  const handleImageUpdate = async (updates: Partial<ImageObject>) => {
    if (!selectedImage) return;
    setSelectedImage({ ...selectedImage, ...updates });
  };

  const handleUpdateSelected = async () => {
    if (!selectedImage) return;
    setIsUpdating(true);
    try {
      await updateImage(
        selectedImage.id,
        selectedImage.url,
        selectedImage.order || 0,
        selectedImage.caption || '',
        selectedImage.alt || selectedImage.caption || '',
        selectedImage.centerX || 0,
        selectedImage.centerY || 0
      );
    } finally {
      refreshProject();
      setIsUpdating(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const formattedDate = date
      .toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        timeZone: 'America/New_York',
      })
      .replace(/\//g, '-');

    const formattedTime = date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'America/New_York',
    });

    return `${formattedDate} ${formattedTime}`;
  };

  const handleSaveProject = async () => {
    setIsSaving(true);
    await saveProject(
      project.id,
      project.name,
      project.description || '',
      project.location?.id || '',
      project.locationString || '',
      project.collaborators || '',
      project.size || '',
      project.quote || '',
      project.quoteAttribution || '',
      project.previewLocation || ''
    );
    setIsSaving(false);
    refreshProject();
  };

  const handlePublishProject = async () => {
    console.log('publish project');
  };

  const handleDeleteImage = async (id: string) => {
    await deleteImage(id);
    refreshProject();
  };

  // Handle image reordering
  const handleDragStart = (e: React.DragEvent, imageId: string) => {
    setDraggedImage(imageId);
    e.dataTransfer.setData('imageId', imageId);
    e.currentTarget.classList.add('opacity-50');
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDragEnter = (e: React.DragEvent, imageId: string) => {
    e.preventDefault();
    e.currentTarget.classList.add('bg-gray-700');
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.currentTarget.classList.remove('bg-gray-700');
  };

  const handleDrop = async (e: React.DragEvent, targetImageId: string) => {
    e.preventDefault();
    e.currentTarget.classList.remove('bg-gray-700');

    if (!draggedImage || draggedImage === targetImageId) return;

    const draggedImageIndex = sortedImages.findIndex(
      (img) => img.id === draggedImage
    );
    const targetImageIndex = sortedImages.findIndex(
      (img) => img.id === targetImageId
    );

    if (draggedImageIndex === -1 || targetImageIndex === -1) return;

    // Create a new array with the reordered images
    const newImages = [...sortedImages];
    const [movedImage] = newImages.splice(draggedImageIndex, 1);
    newImages.splice(targetImageIndex, 0, movedImage);

    // Update order values for all items
    const updatedItems = newImages.map((item, index) => {
      return { ...item, order: index };
    });

    // Update the local state immediately for better UX
    setSortedImages(updatedItems);
    setIsUpdating(true);

    try {
      // Update each image's order in the database
      for (const item of updatedItems) {
        await updateImage(
          item.id,
          item.url,
          item.order || 0,
          item.caption || '',
          item.alt || item.caption || '',
          item.centerX || 0,
          item.centerY || 0
        );
      }
      refreshProject();
    } catch (error) {
      console.error('Error updating image order:', error);
    } finally {
      setIsUpdating(false);
    }

    setDraggedImage(null);
  };

  const handleDragEnd = (e: React.DragEvent) => {
    e.currentTarget.classList.remove('opacity-50');
    setDraggedImage(null);
  };

  return (
    <div className='flex flex-col gap-7 h-full'>
      <div className='flex flex-col gap-5'>
        <div className='w-full uppercase text-sm text-gray-300'>
          {project.departments.items.map((d) => d.department.name).join(', ')}
        </div>
        <div className='w-full text-sm text-gray-400'>
          Title:{' '}
          <input
            className='text-2xl font-bold font-brand-bold text-white w-full bg-transparent focus:outline-none border-l-0 border-t-0 border-r-0 border-b border-b-gray-700`'
            value={project.name || ''}
            onChange={(e) => project.onNameChange?.(e.target.value)}
          />
        </div>
        <div className='w-full text-sm text-gray-400'>
          Size:{' '}
          <input
            className='text-sm text-white w-full bg-transparent focus:outline-none border-l-0 border-t-0 border-r-0 border-b border-b-gray-700`'
            value={project.size || ''}
            onChange={(e) => project.onSizeChange?.(e.target.value)}
          />
        </div>
        <div className='w-full text-sm text-gray-400'>
          Location Display:{' '}
          <input
            className='text-sm text-white w-full bg-transparent focus:outline-none border-l-0 border-t-0 border-r-0 border-b border-b-gray-700`'
            value={project.locationString || ''}
            onChange={(e) => project.onLocationChange?.(e.target.value)}
          />
        </div>
        <div className='w-full text-sm text-gray-400 flex flex-col gap-2'>
          Map Location:{' '}
          <div className='w-full flex flex-col gap-1'>
            <div className='text-white ml-4'>{project.location?.address}</div>
          </div>
          <div className='w-full flex gap-1 ml-4'>
            <div className='text-brand'>
              <MapPinIcon className='w-4 h-4' />
            </div>
            <div className='text-white'>
              {project.location?.latitude}, {project.location?.longitude}
            </div>
            <button
              className='text-white ml-1'
              onClick={() => setIsLocationModalOpen(true)}
            >
              <MdEdit size={18} />
            </button>
            {isLocationModalOpen && (
              <LocationModal
                isOpen={isLocationModalOpen}
                onClose={() => setIsLocationModalOpen(false)}
                onSave={async (location) => {
                  if (location.id) {
                    await updateCurrentLocation(location);
                    refreshProject();
                  } else {
                    await createNewLocation({
                      address: location.address || '',
                      lat: location.latitude,
                      lng: location.longitude,
                      name: location.name || '',
                      description: location.description || '',
                    });
                    refreshProject();
                  }
                  // Handle saving the location to your backend
                  setIsLocationModalOpen(false);
                }}
                initialLocation={project.location}
              />
            )}
          </div>
        </div>
        <div className='w-full text-sm text-gray-400'>
          Preview Location:{' '}
          <input
            className='text-sm text-white w-full bg-transparent focus:outline-none border-l-0 border-t-0 border-r-0 border-b border-b-gray-700`'
            value={project.previewLocation || ''}
            onChange={(e) => project.onPreviewLocationChange?.(e.target.value)}
          />
        </div>
        <div className='w-full flex flex-col gap-1'>
          <div className='text-sm text-gray-400'>Preview</div>
          <div className='w-full aspect-video'>
            <FilterPreview project={project} />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <SubcategorySelect
          projectId={project.id}
          refreshProject={refreshProject}
          departments={project.departments.items.map((item) => ({
            id: item.department.id,
            name: item.department.name,
          }))}
        />
        <ProjectTypeSelect
          currentProjectTypes={
            project.project_type?.items.map((p) => p.projectType) || []
          }
          projectId={project.id}
          refreshProject={refreshProject}
        />
        <BuildingTypeSelector
          currentBuildingTypes={
            project.building_type?.items.map((b) => b.buildingType) || []
          }
          projectId={project.id}
          refreshProject={refreshProject}
        />
      </div>
      <div className='flex flex-col gap-3'>
        <div className='w-full text-sm text-gray-400'>
          Description:{' (450 char is the sweet spot.)'}
          <textarea
            className='w-full bg-transparent text-white text-sm mt-2 p-2 border border-gray-700 rounded'
            value={project.description || ''}
            onChange={(e) => project.onDescriptionChange?.(e.target.value)}
            rows={12}
          />
          <div className='w-full text-xs text-gray-400'>
            {project.description?.length || 0} / 450
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <div className='w-full text-sm text-gray-400'>
          Collaborators:{' '}
          <textarea
            className='w-full bg-transparent text-white text-sm mt-2 p-2 border border-gray-700 rounded'
            value={project.collaborators || ''}
            onChange={(e) => project.onCollaboratorsChange?.(e.target.value)}
            rows={2}
          />
        </div>
      </div>

      <div className='flex flex-col sticky top-3'>
        <div className='flex flex-col gap-6 top-0'>
          <div className='flex flex-col gap-1'>
            <div className='w-full text-sm text-gray-400'>Quotes:</div>
            <QuoteManager
              quotes={project.quotes.items}
              refreshProject={refreshProject}
              projectQuoteId={project.id}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <div className='w-full text-sm text-gray-400 flex justify-between items-center'>
              <span>Gallery:</span>
              {isUpdating && (
                <span className='text-xs text-brand'>Updating order...</span>
              )}
            </div>
            <div className='w-full border border-gray-700 rounded p-2'>
              <div className='grid grid-cols-3 gap-2'>
                {sortedImages.map((image, index) =>
                  image.type !== 'video' ? (
                    <div
                      key={image.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, image.id)}
                      onDragOver={handleDragOver}
                      onDragEnter={(e) => handleDragEnter(e, image.id)}
                      onDragLeave={handleDragLeave}
                      onDrop={(e) => handleDrop(e, image.id)}
                      onDragEnd={handleDragEnd}
                      className={`aspect-square bg-cover bg-center bg-no-repeat cursor-move relative group transition-all ${
                        selectedImage?.id === image.id
                          ? 'ring-2 ring-blue-500'
                          : ''
                      } hover:ring-1 hover:ring-gray-400`}
                      style={{
                        backgroundImage: `url("${getFullImageUrl(image.url)}")`,
                        backgroundPosition: `${image.centerX || 50}% ${
                          image.centerY || 50
                        }%`,
                      }}
                      onClick={() => setSelectedImage(image)}
                    >
                      <div className='absolute top-2 right-2 bg-black/50 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity'>
                        <svg
                          className='w-4 h-4 text-white'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M8 9l4-4 4 4m0 6l-4 4-4-4'
                          />
                        </svg>
                      </div>

                      {index === 0 && (
                        <div className='absolute top-1 left-1 bg-blue-500 text-white text-xs px-2 py-0.5 rounded-md font-medium'>
                          HERO
                        </div>
                      )}
                    </div>
                  ) : (
                    <div
                      key={image.id}
                      className='aspect-square object-cover relative bg-slate-700'
                    >
                      {image.type === 'video' && (
                        <div className='absolute top-1 left-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-md font-medium'>
                          VIDEO
                        </div>
                      )}
                      <ReactPlayer
                        url={image.url}
                        width='100%'
                        height='100%'
                        autoPlay={false}
                        config={{
                          vimeo: {
                            playerOptions: {
                              autoplay: false,
                            },
                          },
                        }}
                      />
                    </div>
                  )
                )}
                <button
                  className='aspect-square bg-cover bg-center bg-no-repeat bg-slate-500 flex items-center justify-center'
                  onClick={() => {
                    setSelectedImage(null);
                    setIsModalOpen(true);
                  }}
                >
                  <PlusIcon className='w-10 h-10 text-white/50' />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {isModalOpen && (
          <div className='fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center !z-[9999]'>
            <div className='bg-gray-800 px-6 py-8 rounded-lg w-full max-w-6xl flex h-[90vh]'>
              {/* Left side - Gallery */}
              <div className='w-8/12 pr-6 overflow-y-auto' id='scrollers'>
                <div className='grid grid-cols-4 gap-4 py-4'>
                  {sortedImages.map((image, index) => {
                    // Debug log to check image data
                    if (!image.url) {
                      console.warn('Image missing URL:', image);
                    }

                    if (image.type === 'video') {
                      return (
                        <div
                          key={image.id}
                          className='aspect-square object-cover relative bg-slate-700'
                        >
                          {image.type === 'video' && (
                            <div className='absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md font-medium'>
                              VIDEO
                            </div>
                          )}
                          <ReactPlayer
                            url={image.url}
                            width='100%'
                            height='100%'
                            autoPlay={false}
                            config={{
                              vimeo: {
                                playerOptions: {
                                  autoplay: false,
                                },
                              },
                            }}
                          />
                        </div>
                      );
                    }

                    return (
                      <div
                        key={image.id}
                        className={`aspect-square bg-cover bg-center bg-no-repeat cursor-pointer relative ${
                          selectedImage?.id === image.id
                            ? 'ring-2 ring-blue-500'
                            : ''
                        }`}
                        style={{
                          backgroundImage: `url("${getFullImageUrl(
                            image.url
                          )}")`,
                        }}
                        onClick={() => setSelectedImage(image)}
                      >
                        {index === 0 && (
                          <div className='absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-md font-medium'>
                            HERO
                          </div>
                        )}

                        {!image.url && (
                          <div className='absolute inset-0 flex items-center justify-center text-white text-sm'>
                            Missing Image URL
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right side - Image details */}
              <div className='w-4/12 pl-6 border-l border-gray-700'>
                {selectedImage ? (
                  <div className='flex flex-col gap-4 w-full'>
                    <div
                      className='w-full aspect-[4/3] bg-cover bg-center bg-no-repeat bg-slate-500 relative cursor-crosshair'
                      style={{
                        backgroundImage: `url("${getFullImageUrl(
                          selectedImage.url
                        )}")`,
                        backgroundPosition: `${selectedImage.centerX || 50}% ${
                          selectedImage.centerY || 50
                        }%`,
                      }}
                      onClick={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const x = ((e.clientX - rect.left) / rect.width) * 100;
                        const y = ((e.clientY - rect.top) / rect.height) * 100;

                        handleImageUpdate({
                          centerX: Math.round(x),
                          centerY: Math.round(y),
                        });
                      }}
                    ></div>

                    <div className='space-y-4'>
                      <div>
                        <label className='block text-sm text-gray-400'>
                          Alt Text
                        </label>
                        <input
                          type='text'
                          value={selectedImage.alt || ''}
                          onChange={(e) =>
                            handleImageUpdate({ alt: e.target.value })
                          }
                          className='w-full !bg-transparent text-white text-sm mt-1 p-2 border border-gray-700 rounded'
                        />
                      </div>
                      <div>
                        <label className='block text-sm text-gray-400'>
                          Caption
                        </label>
                        <textarea
                          value={selectedImage.caption || ''}
                          onChange={(e) =>
                            handleImageUpdate({ caption: e.target.value })
                          }
                          rows={3}
                          className='w-full !bg-transparent text-white text-sm mt-1 p-2 border border-gray-700 rounded'
                        />
                      </div>
                      <div>
                        <label className='block text-sm text-gray-400'>
                          Order
                        </label>
                        <input
                          type='number'
                          value={selectedImage.order || 0}
                          onChange={(e) =>
                            handleImageUpdate({
                              order: parseInt(e.target.value, 10),
                            })
                          }
                          className='w-full !bg-transparent text-white text-sm mt-1 p-2 border border-gray-700 rounded'
                        />
                      </div>
                      <div className='grid grid-cols-3 gap-5'>
                        <div>
                          <label className='block text-sm text-gray-400'>
                            Center X
                          </label>
                          <input
                            type='number'
                            value={selectedImage.centerX || 0}
                            onChange={(e) =>
                              handleImageUpdate({
                                centerX: parseInt(e.target.value, 10),
                              })
                            }
                            className='w-full !bg-transparent text-white text-sm mt-1 p-2 border border-gray-700 rounded'
                          />
                        </div>
                        <div>
                          <label className='block text-sm text-gray-400'>
                            Center Y
                          </label>
                          <input
                            type='number'
                            value={selectedImage.centerY || 0}
                            onChange={(e) =>
                              handleImageUpdate({
                                centerY: parseInt(e.target.value, 10),
                              })
                            }
                            className='w-full !bg-transparent text-white text-sm mt-1 p-2 border border-gray-700 rounded'
                          />
                        </div>
                      </div>
                    </div>
                    {selectedImage?.id && (
                      <div className='flex items-center justify-center gap-4'>
                        <button
                          className='w-full bg-blue-500 text-white text-sm mt-1 p-2 border border-gray-700 rounded disabled:opacity-50'
                          onClick={handleUpdateSelected}
                          disabled={isUpdating}
                        >
                          {isUpdating ? 'Updating...' : 'Update Selected'}
                        </button>
                        <button
                          className='w-full bg-red-500 text-white text-sm mt-1 p-2 border border-gray-700 rounded disabled:opacity-50'
                          onClick={() => {
                            handleDeleteImage(selectedImage?.id || '');
                          }}
                          disabled={isDeleting}
                        >
                          {isDeleting ? 'Deleting...' : 'Delete Selected'}
                        </button>
                      </div>
                    )}
                    <div className='flex items-center justify-center gap-4 pt-5 border-t border-t-gray-500 mt-5'>
                      <button
                        className='w-full bg-white text-black text-sm mt-1 p-2 border border-gray-700 rounded text-center cursor-pointer'
                        onClick={async () => {
                          if (selectedImage?.id) {
                            // If there's an existing image selected, clear the selection
                            setSelectedImage(null);
                          } else {
                            // Handle new image upload logic here
                            // You might want to trigger the file input or handle the upload differently
                            try {
                              const newImageObject = await addNewImageObject(
                                getFullImageUrl(selectedImage.url),
                                project.gallery.id,
                                project.gallery.images.items.length + 1,
                                selectedImage.caption || '',
                                selectedImage.alt || '',
                                selectedImage.centerX || 0,
                                selectedImage.centerY || 0
                              );
                              console.log(newImageObject);
                              // Call onProjectUpdate after successful upload
                              onProjectUpdate();
                              setIsModalOpen(false);
                            } catch (error) {
                              console.error(
                                'Error uploading new image:',
                                error
                              );
                            }
                          }
                        }}
                      >
                        {selectedImage?.id ? 'Upload New' : 'Upload Image'}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className='flex flex-col gap-6'>
                    <div className='grid grid-cols-2 gap-6'>
                      <div
                        onClick={() => setNewMediaType(null)}
                        className={`w-full p-2 bg-gray-700 rounded flex flex-col items-center justify-center cursor-pointer hover:border-gray-500 ${
                          newMediaType !== 'video' ? 'ring-2 ring-blue-500' : ''
                        }`}
                      >
                        <PhotoIcon className='w-10 h-10 text-gray-400 mx-auto' />
                      </div>
                      <div
                        onClick={() => setNewMediaType('video')}
                        className={`w-full p-2 bg-gray-700 rounded flex flex-col items-center justify-center cursor-pointer hover:border-gray-500 ${
                          newMediaType === 'video' ? 'ring-2 ring-blue-500' : ''
                        }`}
                      >
                        <VideoCameraIcon className='w-10 h-10 text-gray-400 mx-auto' />
                      </div>
                    </div>
                    {newMediaType !== 'video' && (
                      <div className='flex flex-col gap-4'>
                        <label className='w-full aspect-video border-2 border-dashed border-gray-600 rounded flex flex-col items-center justify-center cursor-pointer hover:border-gray-500'>
                          <input
                            type='file'
                            accept='image/*'
                            multiple
                            className='hidden'
                            onChange={async (e) => {
                              const files = Array.from(e.target.files || []);
                              if (files.length === 0) return;

                              setUploading(files.map((f) => f.name));

                              for (const file of files) {
                                setUploadProgress((prev) => ({
                                  ...prev,
                                  [file.name]: 0,
                                }));

                                try {
                                  const uploadedUrl =
                                    await uploadAndConvertImage(file);

                                  await addNewImageObject(
                                    uploadedUrl,
                                    project.gallery.id,
                                    project.gallery.images.items.length + 1,
                                    '',
                                    '',
                                    0,
                                    0
                                  );

                                  setUploadProgress((prev) => ({
                                    ...prev,
                                    [file.name]: 100,
                                  }));
                                } catch (error) {
                                  console.error(
                                    `Error uploading ${file.name}:`,
                                    error
                                  );
                                } finally {
                                  setUploading((prev) =>
                                    prev.filter((name) => name !== file.name)
                                  );
                                  onProjectUpdate();
                                }
                              }

                              e.target.value = '';
                            }}
                          />
                          <div className='text-center'>
                            <PlusIcon className='w-12 h-12 text-gray-400 mx-auto mb-2' />
                            <div className='text-gray-400'>
                              Click to upload Image
                            </div>
                          </div>

                          {uploading.length > 0 && (
                            <div className='mt-4 w-full px-4 space-y-2'>
                              {uploading.map((filename) => (
                                <div key={filename} className='text-sm'>
                                  <div className='flex justify-between mb-1'>
                                    <span className='text-gray-700'>
                                      {filename}
                                    </span>
                                    <span className='text-gray-500'>
                                      {uploadProgress[filename]}%
                                    </span>
                                  </div>
                                  <div className='w-full bg-gray-200 rounded-full h-1.5'>
                                    <div
                                      className='bg-brand h-1.5 rounded-full transition-all duration-300'
                                      style={{
                                        width: `${uploadProgress[filename]}%`,
                                      }}
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </label>
                      </div>
                    )}
                    {newMediaType === 'video' && (
                      <div className='flex flex-col gap-4'>
                        <div>
                          <input
                            type='text'
                            placeholder='Video URL'
                            value={newVideoUrl}
                            onChange={(e) => setNewVideoUrl(e.target.value)}
                            className='w-full !bg-transparent text-white text-sm mt-1 p-2 border border-gray-700 rounded'
                          />
                        </div>
                        <div className='w-full aspect-video bg-black'>
                          {newVideoUrl && (
                            <ReactPlayer
                              url={newVideoUrl}
                              width='100%'
                              height='100%'
                              config={{
                                vimeo: {
                                  playerOptions: {
                                    background: true,
                                  },
                                },
                              }}
                            />
                          )}
                        </div>
                        <div>
                          <textarea
                            value={newVideoCaption}
                            onChange={(e) => setNewVideoCaption(e.target.value)}
                            className='w-full !bg-transparent text-white text-sm mt-1 p-2 border border-gray-700 rounded'
                            rows={3}
                            placeholder='Caption'
                          ></textarea>
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                          <button
                            className='w-full bg-blue-500 text-white text-sm mt-1 p-2 border border-gray-700 rounded'
                            onClick={() => {
                              addNewImageObject(
                                newVideoUrl,
                                project.gallery.id,
                                project.gallery.images.items.length + 1,
                                newVideoCaption,
                                '',
                                0,
                                0,
                                'video'
                              );
                              onProjectUpdate();
                            }}
                          >
                            Create Video
                          </button>
                          <button
                            className='w-full bg-red-500 text-white text-sm mt-1 p-2 border border-gray-700 rounded'
                            onClick={() => setNewMediaType(null)}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Close button */}
              <button
                className='absolute top-4 right-4 text-white'
                onClick={() => setIsModalOpen(false)}
              >
                ✕
              </button>
            </div>
          </div>
        )}

        <div className='flex flex-col gap-0 pt-4 border-t border-t-gray-700'>
          <div className='w-full text-sm text-gray-400'>
            Created:{' '}
            <span className='text-white italic'>
              {formatDate(project.createdAt)}
            </span>
          </div>
          <div className='w-full text-sm text-gray-400'>
            Updated:{' '}
            <span className='text-white italic'>
              {formatDate(project.updatedAt)}
            </span>
          </div>
          <div className='w-full text-sm text-gray-400'>
            Last Updated By:{' '}
            <span className='text-white italic'>
              {project.lastUpdatedBy?.name
                ? project.lastUpdatedBy.name
                : project.createdBy.email}
            </span>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-4 pt-4 border-t border-t-gray-700'>
          {project.status === 'DRAFT' ? (
            <>
              <button
                onClick={handleSaveProject}
                className='px-4 py-3 text-sm text-white bg-gray-700 rounded hover:bg-gray-600'
              >
                {isSaving ? 'Saving...' : 'Save'}
              </button>
              {/* <button
                onClick={handlePublishProject}
                className='px-4 py-3 text-sm text-white bg-blue-600 rounded hover:bg-blue-500'
              >
                Publish
              </button> */}
            </>
          ) : (
            <button
              onClick={handleSaveProject}
              className='col-span-2 px-4 py-3 text-sm text-white bg-blue-600 rounded hover:bg-blue-500'
            >
              {isSaving ? 'Saving...' : 'Save Changes'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SidebarBuilder;
