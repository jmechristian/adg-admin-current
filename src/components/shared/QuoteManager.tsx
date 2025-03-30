'use client';
import React, { useState } from 'react';
import { Quote } from '@/types';
import {
  updateSelectedQuote,
  deleteSelectedQuote,
  createNewQuote,
} from '@/helpers/api';
import QuoteModal from './QuoteModal';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// Create a sortable quote item component
const SortableQuote = ({
  quote,
  onQuoteClick,
}: {
  quote: Quote;
  onQuoteClick: (quote: Quote) => void;
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: quote.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div className='flex items-center gap-2'>
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className='flex-1 line-clamp-1 py-0.5 px-2 rounded bg-white/20 text-sm text-gray-300 leading-none hover:bg-white/30 cursor-pointer'
      >
        {quote.text}
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onQuoteClick(quote);
        }}
        className='p-1 text-gray-400 hover:text-white'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='14'
          height='14'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7' />
          <path d='M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z' />
        </svg>
      </button>
    </div>
  );
};

const QuoteManager = ({
  quotes,
  projectQuoteId,
  refreshProject,
}: {
  quotes: Quote[];
  projectQuoteId: string;
  refreshProject: () => void;
}) => {
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [localQuotes, setLocalQuotes] = useState(quotes);
  const [isEditing, setIsEditing] = useState(false);
  const [editedQuote, setEditedQuote] = useState<Quote | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Update localQuotes when props change
  React.useEffect(() => {
    setLocalQuotes(quotes);
  }, [quotes]);

  const handleQuoteClick = (quote: Quote | null) => {
    if (quote === null) {
      setSelectedQuote({
        id: '',
        text: '',
        attribution: '',
        projectQuoteId: projectQuoteId,
        displayOrder: localQuotes.length,
      });
    } else {
      setSelectedQuote(quote);
    }
    setEditedQuote(quote);
    setIsModalOpen(true);
  };

  const handleQuoteChange = (quote: Quote) => {
    setLocalQuotes(localQuotes.map((q) => (q.id === quote.id ? quote : q)));
    refreshProject();
  };

  const handleQuoteSave = async () => {
    console.log('selectedQuote', selectedQuote);
    setIsLoading(true);
    if (selectedQuote) {
      await updateSelectedQuote(selectedQuote);
    }
    setIsLoading(false);
    setIsModalOpen(false);
    refreshProject();
  };

  const handleQuoteDelete = async () => {
    setIsLoading(true);
    if (selectedQuote) {
      await deleteSelectedQuote(selectedQuote.id);
    }
    setIsLoading(false);
    setIsModalOpen(false);
    refreshProject();
  };

  const handleQuoteCreate = async () => {
    setIsLoading(true);
    if (selectedQuote) {
      await createNewQuote(selectedQuote);
    }
    setIsLoading(false);
    setIsModalOpen(false);
    refreshProject();
  };

  const handleQuoteCancel = () => {
    setIsModalOpen(false);
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = localQuotes.findIndex((q) => q.id === active.id);
    const newIndex = localQuotes.findIndex((q) => q.id === over.id);

    // Update local state immediately
    const updatedQuotes = arrayMove(localQuotes, oldIndex, newIndex).map(
      (quote, index) => ({
        ...quote,
        displayOrder: index,
      })
    );
    setLocalQuotes(updatedQuotes);

    // Then sync with backend
    try {
      const updates = updatedQuotes.map((quote) => updateSelectedQuote(quote));
      await Promise.all(updates);
      refreshProject();
    } catch (error) {
      // If backend update fails, revert to original state
      setLocalQuotes(quotes);
      console.error('Failed to update quote order:', error);
    }
  };

  const sortedQuotes = [...localQuotes].sort(
    (a, b) => a.displayOrder - b.displayOrder
  );

  return (
    <div className='flex flex-col gap-1 relative'>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={sortedQuotes.map((q) => q.id)}
          strategy={verticalListSortingStrategy}
        >
          {sortedQuotes.map((quote) => (
            <SortableQuote
              key={quote.id}
              quote={quote}
              onQuoteClick={handleQuoteClick}
            />
          ))}
        </SortableContext>
      </DndContext>

      <div className='flex flex-col gap-1'>
        <button
          className='py-0.5 px-2 rounded bg-white/20 text-sm text-gray-300 leading-none hover:bg-white/30 cursor-pointer group'
          onClick={() => handleQuoteClick(null)}
        >
          Add Quote
        </button>
      </div>

      {isModalOpen && (
        <QuoteModal
          quote={selectedQuote}
          projectQuoteId={projectQuoteId}
          onQuoteChange={(field, value) => {
            setSelectedQuote((prev) =>
              prev
                ? {
                    ...prev,
                    [field]: value,
                  }
                : null
            );
          }}
          onQuoteSave={handleQuoteSave}
          onQuoteDelete={handleQuoteDelete}
          onQuoteCreate={handleQuoteCreate}
          onQuoteCancel={handleQuoteCancel}
        />
      )}
    </div>
  );
};

export default QuoteManager;
