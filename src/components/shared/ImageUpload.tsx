import { Project } from '@/types';
import { PlusIcon } from '@heroicons/react/24/outline';
import {
  addNewImageObject,
  uploadAndConvertImage,
  getFullImageUrl,
} from '@/helpers/api';

import { useState } from 'react';

const ImageUpload = ({ setImage }: { setImage: (image: string) => void }) => {
  const [uploading, setUploading] = useState<string[]>([]);
  const [uploadProgress, setUploadProgress] = useState<{
    [key: string]: number;
  }>({});

  return (
    <div className='flex flex-col gap-4'>
      <label className='w-full aspect-video rounded flex flex-col items-center justify-center cursor-pointer hover:border-gray-500'>
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
                const uploadedUrl = await uploadAndConvertImage(file);

                // await addNewImageObject(
                //   uploadedUrl,
                //   project.gallery.id,
                //   project.gallery.images.items.length + 1,
                //   '',
                //   '',
                //   0,
                //   0
                // );
                setImage(getFullImageUrl(uploadedUrl));

                setUploadProgress((prev) => ({
                  ...prev,
                  [file.name]: 100,
                }));
              } catch (error) {
                console.error(`Error uploading ${file.name}:`, error);
              } finally {
                setUploading((prev) =>
                  prev.filter((name) => name !== file.name)
                );
              }
            }

            e.target.value = '';
          }}
        />
        <div className='text-center bg-black/50 rounded-lg p-4'>
          <PlusIcon className='w-12 h-12 text-gray-300 mx-auto mb-2' />
          <div className='text-gray-300'>Click to upload Image</div>
        </div>

        {uploading.length > 0 && (
          <div className='mt-4 w-full px-4 space-y-2'>
            {uploading.map((filename) => (
              <div key={filename} className='text-sm'>
                <div className='flex justify-between mb-1'>
                  <span className='text-gray-700'>{filename}</span>
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
  );
};

export default ImageUpload;
