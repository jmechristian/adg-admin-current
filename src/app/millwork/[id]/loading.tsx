export default function Loading() {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='w-32 h-32 relative'>
        <div className='animate-pulse flex space-y-4'>
          <div className='space-y-3'>
            <div className='h-4 bg-gray-200 rounded w-32'></div>
            <div className='h-4 bg-gray-200 rounded w-24'></div>
            <div className='h-4 bg-gray-200 rounded w-28'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
