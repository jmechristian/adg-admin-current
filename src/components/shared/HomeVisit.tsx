import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { saveHomePageStudioText } from '@/helpers/api';
import { MdEdit, MdKey, MdSave } from 'react-icons/md';
import ImageUpload from './ImageUpload';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const HomeVisit = ({
  studioText,
  studioLink,
  studioImage,
  id,
}: {
  studioText: string;
  studioLink: string;
  studioImage: string;
  id: string;
}) => {
  const router = useRouter();
  const [isStudioText, setStudioText] = useState(studioText);
  const [isStudioLink, setStudioLink] = useState(studioLink);
  const [isStudioImage, setStudioImage] = useState(studioImage);
  const [isEditing, setIsEditing] = useState(false);

  const editor = useEditor({
    extensions: [StarterKit],
    content: isStudioText,
    onUpdate: ({ editor }) => {
      setStudioText(editor.getHTML());
    },
  });

  const handleSaveStudioText = async () => {
    await saveHomePageStudioText({
      id,
      studioText: isStudioText,
      studioLink: isStudioLink,
      studioImage: isStudioImage,
    });
  };

  const MenuBar = () => {
    if (!editor) {
      return null;
    }

    return (
      <div className='border-b border-gray-300 p-2 bg-gray-50 rounded-t-lg'>
        <div className='flex gap-2'>
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`px-3 py-1 rounded text-sm font-medium ${
              editor.isActive('bold')
                ? 'bg-brand-brown text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Bold
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`px-3 py-1 rounded text-sm font-medium ${
              editor.isActive('italic')
                ? 'bg-brand-brown text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Italic
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`px-3 py-1 rounded text-sm font-medium ${
              editor.isActive('bulletList')
                ? 'bg-brand-brown text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            List
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className='w-full max-w-6xl mx-auto pb-16 relative'>
      <div className='absolute top-5 -right-10 z-30 shadow-lg'>
        <div className='bg-brand-brown text-white px-4 py-2 rounded-md font-brand-book text-lg leading-none cursor-pointer'>
          <div
            className='flex items-center justify-center gap-1 leading-none'
            onClick={() => setIsEditing(true)}
          >
            <MdEdit size={24} />
          </div>
        </div>
      </div>
      {isEditing && (
        <div className='fixed inset-0 bg-black/50 z-50 flex items-center justify-center'>
          <div className='w-full max-w-5xl mx-auto bg-white p-10 rounded-lg flex flex-col gap-3.5 relative'>
            <div className='absolute top-3 right-3 z-50'>
              <button onClick={() => setIsEditing(false)}>
                <MdEdit size={24} />
              </button>
            </div>
            <div className='grid grid-cols-2 gap-5'>
              <div className='flex flex-col gap-4'>
                <div className='w-full h-64 border border-gray-300 rounded-lg overflow-hidden'>
                  <MenuBar />
                  <EditorContent
                    editor={editor}
                    className='p-4 h-48 overflow-y-auto focus:outline-none'
                  />
                </div>
              </div>
              <div className='flex flex-col gap-4'>
                <div className='w-full'>
                  <div
                    className='w-full aspect-[16/9] bg-brand-brown rounded bg-cover bg-center flex items-center justify-center'
                    style={{ backgroundImage: `url(${isStudioImage})` }}
                  >
                    <ImageUpload setImage={(url) => setStudioImage(url)} />
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full flex items-center gap-2.5 bg-brand-peach p-2'>
              <div>
                <MdKey size={24} />
              </div>
              <div className='font-brand-medium'>
                Use the toolbar to format text with bold, italic, and lists
              </div>
            </div>
            <div className='flex justify-end gap-4 mt-6'>
              <button
                onClick={() => setIsEditing(false)}
                className='px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50'
              >
                Cancel
              </button>
              <button
                onClick={async () => {
                  await handleSaveStudioText();
                  setIsEditing(false);
                  router.refresh();
                }}
                className='px-6 py-2 bg-brand-brown text-white rounded-lg hover:bg-brand-brown/80 flex items-center gap-2'
              >
                <MdSave size={20} />
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      <div className='grid grid-cols-12 gap-20 items-center'>
        <div className='col-span-12 md:col-span-6 flex flex-col gap-10'>
          <div className='text-brand-gray text-2xl font-brand font-light'>
            <div
              dangerouslySetInnerHTML={{ __html: isStudioText }}
              className='studio-text'
            ></div>
          </div>

          <div
            onClick={() => router.push(isStudioLink)}
            className='text-brand-gray font-brand-book uppercase bg-brand-peach px-10 py-6 w-fit cursor-pointer'
          >
            Visit Our Studio
          </div>
        </div>
        <div className='col-span-12 md:col-span-6 w-full h-full'>
          <div
            className='w-full h-full bg-cover bg-center'
            style={{
              backgroundImage: `url(${isStudioImage})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HomeVisit;
