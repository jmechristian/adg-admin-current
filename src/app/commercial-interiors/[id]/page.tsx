import React from 'react';
import { getProjectById } from '@/helpers/api';
import { PageBuilder } from '@/components/interiors/PageBuilder';
import { Project } from '@/types';
import { GraphQLResult } from 'aws-amplify/api';

interface ProjectResponse {
  getProject: Project;
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const project = (await getProjectById(id)) as GraphQLResult<ProjectResponse>;
  console.log(project);
  return (
    <main className='w-full'>
      <PageBuilder project={project.data.getProject} />
    </main>
  );
}
