import React from 'react';
import { Quote } from '@/types';

interface QuoteModalProps {
  quote: Quote | null;
  onQuoteChange: (field: keyof Quote, value: string) => void;
  onQuoteSave: () => void;
  onQuoteDelete: () => void;
  onQuoteCreate: () => void;
  onQuoteCancel: () => void;
  projectQuoteId: string;
}

const QuoteModal: React.FC<QuoteModalProps> = ({
  quote,
  onQuoteChange,
  onQuoteSave,
  onQuoteDelete,
  onQuoteCreate,
  onQuoteCancel,
  projectQuoteId,
}) => {
  const isNewQuote = !quote?.id;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999]'>
      <div className='bg-gray-800 rounded-lg p-6 w-full max-w-2xl'>
        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-xl text-white font-semibold'>
            {isNewQuote ? 'Add New Quote' : 'Edit Quote'}
          </h2>
          <button
            onClick={onQuoteCancel}
            className='text-gray-400 hover:text-white'
          >
            ✕
          </button>
        </div>

        <div className='space-y-4'>
          <div>
            <label className='block text-sm text-gray-400 mb-2'>
              Quote Text
            </label>
            <textarea
              value={quote?.text || ''}
              onChange={(e) => onQuoteChange('text', e.target.value)}
              rows={4}
              className='w-full bg-transparent text-white text-sm p-2 border border-gray-700 rounded focus:border-blue-500 focus:outline-none'
              placeholder='Enter quote text...'
            />
          </div>

          <div>
            <label className='block text-sm text-gray-400 mb-2'>
              Attribution
            </label>
            <input
              type='text'
              value={quote?.attribution || ''}
              onChange={(e) => onQuoteChange('attribution', e.target.value)}
              className='w-full !bg-transparent text-white text-sm p-2 border border-gray-700 rounded focus:border-blue-500 focus:outline-none'
              placeholder='Enter attribution...'
            />
          </div>
        </div>

        <div className='flex justify-end gap-4 mt-6'>
          {!isNewQuote && (
            <button
              onClick={onQuoteDelete}
              className='px-4 py-2 text-sm text-white bg-red-600 rounded hover:bg-red-700 transition-colors'
            >
              Delete
            </button>
          )}
          <button
            onClick={onQuoteCancel}
            className='px-4 py-2 text-sm text-white bg-gray-600 rounded hover:bg-gray-700 transition-colors'
          >
            Cancel
          </button>
          <button
            onClick={isNewQuote ? onQuoteCreate : onQuoteSave}
            className='px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors'
          >
            {isNewQuote ? 'Create' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
