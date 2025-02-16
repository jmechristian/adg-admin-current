import { Amplify } from 'aws-amplify';
import { generateClient, GraphQLResult } from 'aws-amplify/api';
import awsconfig from '@/aws-exports';
import axios from 'axios';
import {
  listProjects,
  listUsers,
  getProject,
  listSubcategories,
  listProjectTypes,
  listBuildingTypes,
} from '../graphql/queries';
import {
  createImageObject,
  createLocation,
  createProject,
  createProjectBuildingTypes,
  createProjectProjectTypes,
  createProjectSubcategories,
} from '../graphql/mutations';

Amplify.configure(awsconfig, { ssr: true });

const client = generateClient({
  authMode: 'apiKey',
});

const subcats = [
  {
    name: 'Multi-Family',
    id: '1614fbf7-ec9b-4de1-95e9-948c15bcbf56',
  },
  {
    name: 'Rowhomes',
    id: 'b9f28247-73f3-40af-885c-d2ea2a699ec8',
  },
  {
    name: 'Featured',
    id: 'e0cd71fd-2bad-4ae5-97fa-27b47f15325b',
  },
  {
    name: 'Single-Family',
    id: 'baad126f-b7b5-4ca3-885d-a4ece64b2572',
  },
  {
    name: 'Commercial',
    id: 'b15292a5-742d-46c0-81d7-bff2960ccc47',
  },
];

const buildingTypes = [
  {
    id: 'f9949f6e-2af5-427e-824c-aa34c8eeff62',
    __typename: 'BuildingType',
    createdAt: '2024-12-27T19:05:06.743Z',
    name: 'Hospitality',
    updatedAt: '2024-12-27T19:05:06.743Z',
  },
  {
    id: 'd5f6c33c-00cd-4d85-a4f8-441445a4e50b',
    __typename: 'BuildingType',
    createdAt: '2024-12-27T19:05:29.333Z',
    name: 'House',
    updatedAt: '2024-12-27T19:05:29.333Z',
  },
  {
    id: 'dab15b9a-00f1-4155-9ca1-2ec0e51891cc',
    __typename: 'BuildingType',
    createdAt: '2024-12-27T19:04:57.296Z',
    name: 'Condo',
    updatedAt: '2024-12-27T19:04:57.296Z',
  },
  {
    id: '6e3ce7db-9a83-4ade-840d-ab2ad7c792e0',
    __typename: 'BuildingType',
    createdAt: '2024-12-27T19:05:41.358Z',
    name: 'Office',
    updatedAt: '2024-12-27T19:05:41.358Z',
  },
  {
    id: '638a576a-6472-443c-911d-f3cb9be64094',
    __typename: 'BuildingType',
    createdAt: '2024-12-27T19:06:08.376Z',
    name: 'Restaurant',
    updatedAt: '2024-12-27T19:06:08.376Z',
  },
  {
    id: '5601a7d6-526e-439e-adc5-6d9d56ebff05',
    __typename: 'BuildingType',
    createdAt: '2024-12-27T19:04:47.130Z',
    name: 'Apartment',
    updatedAt: '2024-12-27T19:04:47.130Z',
  },
  {
    id: '635893b5-27f0-4188-8baa-7f576908c331',
    __typename: 'BuildingType',
    createdAt: '2024-12-27T19:06:19.532Z',
    name: 'Rowhome',
    updatedAt: '2024-12-27T19:06:19.532Z',
  },
  {
    id: '23923996-4d9b-4ade-9bae-756b76a8b34c',
    __typename: 'BuildingType',
    createdAt: '2024-12-27T19:05:17.868Z',
    name: 'Hotel',
    updatedAt: '2024-12-27T19:05:17.868Z',
  },
];

const projectTypes = [
  {
    id: 'ae1da68e-2a22-483b-b23f-20186f99d953',
    __typename: 'ProjectType',
    createdAt: '2024-12-27T18:58:54.232Z',
    name: 'Condominiums & Townhomes',
    updatedAt: '2024-12-27T18:58:54.232Z',
  },
  {
    id: 'b716e1fa-a88a-4601-9bf0-f210e8d24834',
    __typename: 'ProjectType',
    createdAt: '2024-12-27T18:57:36.841Z',
    name: 'Renovation',
    updatedAt: '2024-12-27T18:57:36.841Z',
  },
  {
    id: 'd4a818ed-2315-42c5-9046-a9c7fabfc326',
    __typename: 'ProjectType',
    createdAt: '2024-12-27T18:57:47.991Z',
    name: 'Historic Renovation',
    updatedAt: '2024-12-27T18:57:47.991Z',
  },
  {
    id: '5ff80c82-875e-46a5-bc4e-d0653949c9b1',
    __typename: 'ProjectType',
    createdAt: '2024-12-27T18:58:40.426Z',
    name: 'Apartments',
    updatedAt: '2024-12-27T18:58:40.426Z',
  },
  {
    id: '455f3cd0-696e-4021-a186-712e66301f78',
    __typename: 'ProjectType',
    createdAt: '2024-12-27T18:57:23.302Z',
    name: 'New Construction',
    updatedAt: '2024-12-27T18:57:23.302Z',
  },
  {
    id: '29f0160e-8d58-4f9e-a17d-0ef5c20333e1',
    __typename: 'ProjectType',
    createdAt: '2024-12-27T18:58:00.220Z',
    name: 'Addition',
    updatedAt: '2024-12-27T18:58:00.220Z',
  },
  {
    id: 'dc284801-c91e-433c-8195-79bd551d1f47',
    __typename: 'ProjectType',
    createdAt: '2024-12-27T18:58:12.613Z',
    name: 'Adaptive Reuse',
    updatedAt: '2024-12-27T18:58:12.613Z',
  },
  {
    id: 'f93c5a2a-f5cf-43a0-afd7-19dbfc56e457',
    __typename: 'ProjectType',
    createdAt: '2024-12-27T18:58:28.402Z',
    name: 'Corporate',
    updatedAt: '2024-12-27T18:58:28.402Z',
  },
  {
    id: '4ec39ee6-d958-4a88-a5cc-98d22c47720b',
    __typename: 'ProjectType',
    createdAt: '2024-12-27T18:59:05.175Z',
    name: 'Non-Profit',
    updatedAt: '2024-12-27T18:59:05.175Z',
  },
];

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

export const createNewProject = async (project) => {
  try {
    let locationId = null;

    // Check if the project has an address before attempting to create a location
    const locationResponse = await client.graphql({
      query: createLocation,
      variables: {
        input: {
          address: project.attributes.address || '',
          latitude: project.attributes.lat || 0,
          longitude: project.attributes.lng || 0,
        },
      },
    });
    const locationData = locationResponse as GraphQLResult<any>;
    locationId = locationData?.data?.createLocation?.id;

    let heroImageId = null;
    if (project.attributes.hero.data?.attributes.url) {
      const heroImageResponse = await client.graphql({
        query: createImageObject,
        variables: {
          input: {
            url: project.attributes.hero.data.attributes.url,
            caption: project.attributes.hero.data?.attributes.caption || '',
            alt: project.attributes.hero.data?.attributes.alternativeText || '',
          },
        },
      });
      const heroImageData = heroImageResponse as GraphQLResult<any>;
      heroImageId = heroImageData?.data?.createImageObject?.id;
    }

    // Transform the project data
    const transformedProject = {
      oldId: project.id,
      departmentProjectsId:
        project.attributes.department.data.attributes.name === 'Architecture'
          ? '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7'
          : project.attributes.department.data.attributes.name ===
            'Commercial Interiors'
          ? '0cd75086-b396-4c52-a907-5b52fb6aeedd'
          : project.attributes.department.data.attributes.name === 'Branding'
          ? '4dfd71af-51a3-4af9-874f-da260e081f08'
          : '4dfd71af-51a3-4af9-874f-da260e081f08',
      name: project.attributes.name,
      description: project.attributes.description,
      projectLocationId: locationId,
      locationString: project.attributes.location,
      projectHeroId: heroImageId,
      link: project.attributes.link ? project.attributes.link : '',
      status: project.attributes.Live ? 'PUBLISHED' : 'DRAFT',
      projectCreatedById: 'f01a7b31-392b-4c77-933c-45ce75849ea4',
      featured: project.attributes.featured,
      gridOrder: project.attributes.grid_order,
      size: project.attributes.size,
      quote: project.attributes.quote,
      quoteAttribution: project.attributes.quote_attribution,

      // Add other necessary fields here
    };

    const createProjectResponse = await client.graphql({
      query: createProject,
      variables: {
        input: transformedProject,
      },
    });

    if (createProjectResponse.data.createProject.id) {
      // Handle subcategories if they exist
      if (project.attributes.subcategories.data.length > 0) {
        // Get the subcategory name from the nested structure
        const subcategoryName =
          project.attributes.subcategories.data[0].attributes.subcategory;

        // Find matching subcategory from subcats array
        const matchingSubcat = subcats.find(
          (sub) => sub.name === subcategoryName
        );

        if (matchingSubcat) {
          await client.graphql({
            query: createProjectSubcategories,
            variables: {
              input: {
                projectID: createProjectResponse.data.createProject.id,
                subcategoryID: matchingSubcat.id,
              },
            },
          });
        }
      }

      if (project.attributes.building_type?.data) {
        // Get the building type name from the nested structure
        const buildingTypeName =
          project.attributes.building_type.data.attributes.type;

        // Find matching building type from buildingTypes array
        const matchingBuildingType = buildingTypes.find(
          (sub) => sub.name === buildingTypeName
        );

        if (matchingBuildingType) {
          await client.graphql({
            query: createProjectBuildingTypes,
            variables: {
              input: {
                projectID: createProjectResponse.data.createProject.id,
                buildingTypeID: matchingBuildingType.id,
              },
            },
          });
        }
      }

      if (project.attributes.project_types?.data?.length > 0) {
        const projectTypeName =
          project.attributes.project_types.data[0].attributes.type;

        const matchingProjectType = projectTypes.find(
          (sub) => sub.name === projectTypeName
        );

        if (matchingProjectType) {
          await client.graphql({
            query: createProjectProjectTypes,
            variables: {
              input: {
                projectID: createProjectResponse.data.createProject.id,
                projectTypeID: matchingProjectType.id,
              },
            },
          });
        }
      }
    }

    console.log(
      createProjectResponse?.data?.createProject || {
        message: 'Error creating project',
      }
    );

    return {
      success: true,
      message: 'Project created successfully',
      project: transformedProject,
    };
  } catch (error) {
    console.error(`Error transforming project ${project.id}:`, error);
    return {
      success: false,
      message: 'Error creating project',
      error: error,
    };
  }
};

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

export const getSubcategories = async () => {
  const subcategories = await client.graphql({
    query: listSubcategories,
  });
  return subcategories.data.listSubcategories.items;
};

export const getProjectTypes = async () => {
  const projectTypes = await client.graphql({
    query: listProjectTypes,
  });
  return projectTypes.data.listProjectTypes.items;
};

export const getBuildingTypes = async () => {
  const buildingTypes = await client.graphql({
    query: listBuildingTypes,
  });
  return buildingTypes.data.listBuildingTypes.items;
};

export const getAllDOProjects = async () => {
  const res = await axios.get(
    'https://adg-projects-hs6ir.ondigitalocean.app/api/projects?populate=*'
  );

  const allProjects = res.data.data;

  return allProjects;
};
