import React from 'react';
import { getProjectById } from '@/helpers/api';
import { PageBuilder } from '@/components/interiors/PageBuilder';
const Page = async ({ params }: { params: { id: string } }) => {
  const id = (await params).id;
  const project = await getProjectById(id);
  return (
    <main className='w-full'>
      <PageBuilder project={project.data.getProject} />
    </main>
  );
};

export default Page;
