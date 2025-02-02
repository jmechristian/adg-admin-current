import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import awsconfig from '@/aws-exports';

import { listProjects, listUsers, getProject } from '../graphql/queries';
import { createLocation } from '../graphql/mutations';

Amplify.configure(awsconfig, { ssr: true });

const client = generateClient({
  authMode: 'apiKey',
});

export const getUser = async () => {
  const user = await client.graphql({
    query: listUsers,
  });
  return user;
};

export const createNewLocation = async ({
  address,
  lat,
  lng,
}: {
  address: string;
  lat: number;
  lng: number;
}) => {
  const locationResponse = await client.graphql({
    query: createLocation,
    variables: {
      address,
      lat,
      lng,
    },
  });

  return locationResponse;
};

// export const createNewProject = async (project) => {
//   try {
//     let locationId = null;

//     // Check if the project has an address before attempting to create a location
//     const locationResponse = await client.graphql({
//       query: createLocation,
//       variables: {
//         input: {
//           address: project.attributes.address || '',
//           latitude: project.attributes.lat || 0,
//           longitude: project.attributes.lng || 0,
//         },
//       },
//     });
//     const locationData = locationResponse as GraphQLResult<any>;
//     locationId = locationData?.data?.createLocation?.id;

//     let heroImageId = null;
//     const heroImageResponse = await client.graphql({
//       query: createImageObject,
//       variables: {
//         input: {
//           url: project.attributes.hero.data?.attributes.url || '',
//           caption: project.attributes.hero.data?.attributes.caption || '',
//           alt: project.attributes.hero.data?.attributes.alternativeText || '',
//         },
//       },
//     });
//     const heroImageData = heroImageResponse as GraphQLResult<any>;
//     heroImageId = heroImageData?.data?.createImageObject?.id;

//     // Transform the project data
//     const transformedProject = {
//       oldId: project.id,
//       departmentProjectsId:
//         project.attributes.department.data.attributes.name === 'Architecture'
//           ? '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7'
//           : project.attributes.department.data.attributes.name ===
//             'Commercial Interiors'
//           ? '0cd75086-b396-4c52-a907-5b52fb6aeedd'
//           : project.attributes.department.data.attributes.name === 'Branding'
//           ? '4dfd71af-51a3-4af9-874f-da260e081f08'
//           : '4dfd71af-51a3-4af9-874f-da260e081f08',
//       name: project.attributes.name,
//       description: project.attributes.description,
//       projectLocationId: locationId,
//       locationString: project.attributes.location,
//       projectHeroId: heroImageId,
//       link: project.attributes.link ? project.attributes.link : '',
//       status: project.attributes.Live ? 'PUBLISHED' : 'DRAFT',
//       projectCreatedById: 'f01a7b31-392b-4c77-933c-45ce75849ea4',
//       featured: project.attributes.featured,
//       gridOrder: project.attributes.grid_order,
//       size: project.attributes.size,
//       quote: project.attributes.quote,
//       quoteAttribution: project.attributes.quote_attribution,

//       // Add other necessary fields here
//     };

//     const createProjectResponse = await client.graphql({
//       query: createProject,
//       variables: {
//         input: transformedProject,
//       },
//     });

//     console.log(
//       createProjectResponse?.data?.createProject || {
//         message: 'Error creating project',
//       }
//     );

//     return {
//       success: true,
//       message: 'Project created successfully',
//       project: transformedProject,
//     };
//   } catch (error) {
//     console.error(`Error transforming project ${project.id}:`, error);
//     return {
//       success: false,
//       message: 'Error creating project',
//       error: error,
//     };
//   }
// };

export const listAllProjects = async () => {
  const projects = await client.graphql({
    query: listProjects,
    variables: { limit: 300 },
    authMode: 'apiKey',
  });

  return projects.data.listProjects.items;
};

export const getProjectById = async (id: string) => {
  const project = await client.graphql({
    query: getProject,
    variables: { id },
  });
  return project;
};
