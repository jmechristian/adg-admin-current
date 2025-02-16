import React from 'react';
import { getProjectById } from '../../../helpers/api';
import { PageBuilder } from '../../../components/interiors/PageBuilder';
import { GraphQLResult } from 'aws-amplify/api';
import { Project } from '@/types';
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
  return (
    <main className='w-full'>
      <PageBuilder project={project.data.getProject} />
    </main>
  );
}
