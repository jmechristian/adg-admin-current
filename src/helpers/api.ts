import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import { uploadData } from 'aws-amplify/storage';
import awsconfig from '../aws-exports';
import axios from 'axios';
import {
  listProjects,
  listUsers,
  listSubcategories,
  listDepartments,
  listProjectTypes,
  listBuildingTypes,
  getGallery,
  listLocations,
  listGalleries,
  getDepartmentSubcategories,
  listDepartmentSubcategories,
  listProjectSubcategories,
  listProjectBuildingTypes,
  listProjectProjectTypes,
} from '../graphql/queries';
import {
  createLocation,
  updateImageObject,
  createProject,
  createGallery,
  createImageObject,
  updateProject,
  createProjectSubcategories,
  createProjectProjectTypes,
  createProjectBuildingTypes,
  deleteImageObject,
  updateLocation,
  deleteProjectSubcategories as deleteProjectSubcategoriesMutation,
  deleteProjectProjectTypes as deleteProjectProjectTypesMutation,
  deleteProjectBuildingTypes as deleteProjectBuildingTypesMutation,
  createProjectDepartments as createProjectDepartmentsMutation,
  updateQuote,
  deleteQuote,
  createQuote,
} from '../graphql/mutations';
import { GraphQLResult } from '@aws-amplify/api';
import {
  Project,
  Subcategory,
  ProjectType,
  BuildingType,
  Gallery,
  ProjectObject,
  LocationResponse,
  Location,
  Status,
  DepartmentSubcategory,
  ProjectSubcategory,
  ProjectProjectType,
  ProjectBuildingType,
  ProjectWithDepartments,
  Department,
  Quote,
} from '@/types';
// import * as doProjects from '../data/do-projects.json';
// import * as images from '../data/images.json';

Amplify.configure({
  ...awsconfig,
  Storage: {
    S3: {
      bucket: awsconfig.aws_user_files_s3_bucket,
      region: awsconfig.aws_user_files_s3_bucket_region,
    },
  },
});

const client = generateClient({
  authMode: 'apiKey',
});

// const subcats = [
//   {
//     name: 'Multi-Family',
//     id: '1614fbf7-ec9b-4de1-95e9-948c15bcbf56',
//   },
//   {
//     name: 'Rowhomes',
//     id: 'b9f28247-73f3-40af-885c-d2ea2a699ec8',
//   },
//   {
//     name: 'Featured',
//     id: 'e0cd71fd-2bad-4ae5-97fa-27b47f15325b',
//   },
//   {
//     name: 'Single-Family',
//     id: 'baad126f-b7b5-4ca3-885d-a4ece64b2572',
//   },
//   {
//     name: 'Commercial',
//     id: 'b15292a5-742d-46c0-81d7-bff2960ccc47',
//   },
// ];

// const buildingTypes = [
//   {
//     id: 'f9949f6e-2af5-427e-824c-aa34c8eeff62',
//     __typename: 'BuildingType',
//     createdAt: '2024-12-27T19:05:06.743Z',
//     name: 'Hospitality',
//     updatedAt: '2024-12-27T19:05:06.743Z',
//   },
//   {
//     id: 'd5f6c33c-00cd-4d85-a4f8-441445a4e50b',
//     __typename: 'BuildingType',
//     createdAt: '2024-12-27T19:05:29.333Z',
//     name: 'House',
//     updatedAt: '2024-12-27T19:05:29.333Z',
//   },
//   {
//     id: 'dab15b9a-00f1-4155-9ca1-2ec0e51891cc',
//     __typename: 'BuildingType',
//     createdAt: '2024-12-27T19:04:57.296Z',
//     name: 'Condo',
//     updatedAt: '2024-12-27T19:04:57.296Z',
//   },
//   {
//     id: '6e3ce7db-9a83-4ade-840d-ab2ad7c792e0',
//     __typename: 'BuildingType',
//     createdAt: '2024-12-27T19:05:41.358Z',
//     name: 'Office',
//     updatedAt: '2024-12-27T19:05:41.358Z',
//   },
//   {
//     id: '638a576a-6472-443c-911d-f3cb9be64094',
//     __typename: 'BuildingType',
//     createdAt: '2024-12-27T19:06:08.376Z',
//     name: 'Restaurant',
//     updatedAt: '2024-12-27T19:06:08.376Z',
//   },
//   {
//     id: '5601a7d6-526e-439e-adc5-6d9d56ebff05',
//     __typename: 'BuildingType',
//     createdAt: '2024-12-27T19:04:47.130Z',
//     name: 'Apartment',
//     updatedAt: '2024-12-27T19:04:47.130Z',
//   },
//   {
//     id: '635893b5-27f0-4188-8baa-7f576908c331',
//     __typename: 'BuildingType',
//     createdAt: '2024-12-27T19:06:19.532Z',
//     name: 'Rowhome',
//     updatedAt: '2024-12-27T19:06:19.532Z',
//   },
//   {
//     id: '23923996-4d9b-4ade-9bae-756b76a8b34c',
//     __typename: 'BuildingType',
//     createdAt: '2024-12-27T19:05:17.868Z',
//     name: 'Hotel',
//     updatedAt: '2024-12-27T19:05:17.868Z',
//   },
// ];

// const projectTypes = [
//   {
//     id: 'ae1da68e-2a22-483b-b23f-20186f99d953',
//     __typename: 'ProjectType',
//     createdAt: '2024-12-27T18:58:54.232Z',
//     name: 'Condominiums & Townhomes',
//     updatedAt: '2024-12-27T18:58:54.232Z',
//   },
//   {
//     id: 'b716e1fa-a88a-4601-9bf0-f210e8d24834',
//     __typename: 'ProjectType',
//     createdAt: '2024-12-27T18:57:36.841Z',
//     name: 'Renovation',
//     updatedAt: '2024-12-27T18:57:36.841Z',
//   },
//   {
//     id: 'd4a818ed-2315-42c5-9046-a9c7fabfc326',
//     __typename: 'ProjectType',
//     createdAt: '2024-12-27T18:57:47.991Z',
//     name: 'Historic Renovation',
//     updatedAt: '2024-12-27T18:57:47.991Z',
//   },
//   {
//     id: '5ff80c82-875e-46a5-bc4e-d0653949c9b1',
//     __typename: 'ProjectType',
//     createdAt: '2024-12-27T18:58:40.426Z',
//     name: 'Apartments',
//     updatedAt: '2024-12-27T18:58:40.426Z',
//   },
//   {
//     id: '455f3cd0-696e-4021-a186-712e66301f78',
//     __typename: 'ProjectType',
//     createdAt: '2024-12-27T18:57:23.302Z',
//     name: 'New Construction',
//     updatedAt: '2024-12-27T18:57:23.302Z',
//   },
//   {
//     id: '29f0160e-8d58-4f9e-a17d-0ef5c20333e1',
//     __typename: 'ProjectType',
//     createdAt: '2024-12-27T18:58:00.220Z',
//     name: 'Addition',
//     updatedAt: '2024-12-27T18:58:00.220Z',
//   },
//   {
//     id: 'dc284801-c91e-433c-8195-79bd551d1f47',
//     __typename: 'ProjectType',
//     createdAt: '2024-12-27T18:58:12.613Z',
//     name: 'Adaptive Reuse',
//     updatedAt: '2024-12-27T18:58:12.613Z',
//   },
//   {
//     id: 'f93c5a2a-f5cf-43a0-afd7-19dbfc56e457',
//     __typename: 'ProjectType',
//     createdAt: '2024-12-27T18:58:28.402Z',
//     name: 'Corporate',
//     updatedAt: '2024-12-27T18:58:28.402Z',
//   },
//   {
//     id: '4ec39ee6-d958-4a88-a5cc-98d22c47720b',
//     __typename: 'ProjectType',
//     createdAt: '2024-12-27T18:59:05.175Z',
//     name: 'Non-Profit',
//     updatedAt: '2024-12-27T18:59:05.175Z',
//   },
// ];

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
  name,
  description,
}: {
  address: string;
  lat: number;
  lng: number;
  name: string;
  description: string;
}) => {
  const locationResponse = (await client.graphql({
    query: createLocation,
    variables: {
      input: {
        address,
        latitude: lat,
        longitude: lng,
        name,
        description,
      },
    },
  })) as GraphQLResult<{ createLocation: Location }>;

  return locationResponse.data.createLocation;
};

export const updateCurrentLocation = async (location: Location) => {
  const locationResponse = (await client.graphql({
    query: updateLocation,
    variables: { input: location },
  })) as GraphQLResult<{ updateLocation: Location }>;
  return locationResponse.data.updateLocation;
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
//     if (project.attributes.hero.data?.attributes.url) {
//       const heroImageResponse = await client.graphql({
//         query: createImageObject,
//         variables: {
//           input: {
//             url: project.attributes.hero.data.attributes.url,
//             caption: project.attributes.hero.data?.attributes.caption || '',
//             alt: project.attributes.hero.data?.attributes.alternativeText || '',
//           },
//         },
//       });
//       const heroImageData = heroImageResponse as GraphQLResult<any>;
//       heroImageId = heroImageData?.data?.createImageObject?.id;
//     }

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

//     if (createProjectResponse.data.createProject.id) {
//       // Handle subcategories if they exist
//       if (project.attributes.subcategories.data.length > 0) {
//         // Get the subcategory name from the nested structure
//         const subcategoryName =
//           project.attributes.subcategories.data[0].attributes.subcategory;

//         // Find matching subcategory from subcats array
//         const matchingSubcat = subcats.find(
//           (sub) => sub.name === subcategoryName
//         );

//         if (matchingSubcat) {
//           await client.graphql({
//             query: createProjectSubcategories,
//             variables: {
//               input: {
//                 projectID: createProjectResponse.data.createProject.id,
//                 subcategoryID: matchingSubcat.id,
//               },
//             },
//           });
//         }
//       }

//       if (project.attributes.building_type?.data) {
//         // Get the building type name from the nested structure
//         const buildingTypeName =
//           project.attributes.building_type.data.attributes.type;

//         // Find matching building type from buildingTypes array
//         const matchingBuildingType = buildingTypes.find(
//           (sub) => sub.name === buildingTypeName
//         );

//         if (matchingBuildingType) {
//           await client.graphql({
//             query: createProjectBuildingTypes,
//             variables: {
//               input: {
//                 projectID: createProjectResponse.data.createProject.id,
//                 buildingTypeID: matchingBuildingType.id,
//               },
//             },
//           });
//         }
//       }

//       if (project.attributes.project_types?.data?.length > 0) {
//         const projectTypeName =
//           project.attributes.project_types.data[0].attributes.type;

//         const matchingProjectType = projectTypes.find(
//           (sub) => sub.name === projectTypeName
//         );

//         if (matchingProjectType) {
//           await client.graphql({
//             query: createProjectProjectTypes,
//             variables: {
//               input: {
//                 projectID: createProjectResponse.data.createProject.id,
//                 projectTypeID: matchingProjectType.id,
//               },
//             },
//           });
//         }
//       }
//     }

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
  const projects = (await client.graphql({
    query: listProjects,
    variables: { limit: 300 },
    authMode: 'apiKey',
  })) as GraphQLResult<{ listProjects: { items: Project[] } }>;

  return projects.data.listProjects.items;
};

export const getProjectById = async (id: string) => {
  const project = await client.graphql({
    query: `
      query GetProject($id: ID!) {
        getProject(id: $id) {
          building_type {
            items {
              buildingType {
                id
                name
              }
            }
          }
          collaborators
          createdAt
          createdBy {
            email
            id
            name
          }
          departments {
            items {
              department {
                name
                id
              }
            }
          }
          description
          featured
          gallery {
            id
            images {
              items {
                id
                order
                url
                alt
                caption
                centerX
                centerY
                zoom
              }
            }
          }
          gridOrder
          id
          lastUpdatedBy {
            email
            id
            name
          }
          link
          location {
            address
            description
            id
            latitude
            longitude
            name
          }
          locationString
          previewLocation
          name
          oldId
          project_type {
            items {
              projectType {
                id
                name
              }
            }
          }
          quote
          quoteAttribution
          quotes {
        items {
              attribution
              displayOrder
              id
              projectQuotesId
              text
            }
          }
          size
          status
          subcategories {
            items {
              subcategory {
                name
                id
              }
            }
          }
          updatedAt
        }
      }
    `,
    variables: { id },
  });
  return project;
};

export const getSubcategories = async () => {
  const subcategories = (await client.graphql({
    query: listDepartmentSubcategories,
  })) as GraphQLResult<{
    listDepartmentSubcategories: { items: DepartmentSubcategory[] };
  }>;
  return subcategories.data.listDepartmentSubcategories.items;
};

export const getProjectSubcategoriesByProjectId = async (projectId: string) => {
  const projectSubcategories = (await client.graphql({
    query: listProjectSubcategories,
    variables: {
      filter: {
        projectID: { eq: projectId },
      },
    },
  })) as GraphQLResult<{
    listProjectSubcategories: { items: ProjectSubcategory[] };
  }>;
  return projectSubcategories.data.listProjectSubcategories.items;
};

export const getProjectProjectTypesByProjectId = async (projectId: string) => {
  const projectProjectTypes = (await client.graphql({
    query: listProjectProjectTypes,
    variables: {
      filter: {
        projectID: { eq: projectId },
      },
    },
  })) as GraphQLResult<{
    listProjectProjectTypes: { items: ProjectProjectType[] };
  }>;
  return projectProjectTypes.data.listProjectProjectTypes.items;
};

export const getProjectBuildingTypesByProjectId = async (projectId: string) => {
  const projectBuildingTypes = (await client.graphql({
    query: listProjectBuildingTypes,
    variables: {
      filter: {
        projectID: { eq: projectId },
      },
    },
  })) as GraphQLResult<{
    listProjectBuildingTypes: { items: ProjectBuildingType[] };
  }>;
  return projectBuildingTypes.data.listProjectBuildingTypes.items;
};

export const deleteProjectProjectTypes = async (
  projectProjectTypeId: string
) => {
  const projectProjectType = (await client.graphql({
    query: deleteProjectProjectTypesMutation,
    variables: { input: { id: projectProjectTypeId } },
  })) as GraphQLResult<{ deleteProjectProjectType: { id: string } }>;
  return projectProjectType;
};

export const deleteProjectBuildingTypes = async (
  projectBuildingTypeId: string
) => {
  const projectBuildingType = (await client.graphql({
    query: deleteProjectBuildingTypesMutation,
    variables: { input: { id: projectBuildingTypeId } },
  })) as GraphQLResult<{ deleteProjectBuildingType: { id: string } }>;
  return projectBuildingType;
};

export const getDepartments = async () => {
  const departments = (await client.graphql({
    query: listDepartments,
  })) as GraphQLResult<{ listDepartments: { items: Department[] } }>;
  return departments.data.listDepartments.items;
};

export const getProjectTypes = async () => {
  const projectTypes = (await client.graphql({
    query: listProjectTypes,
  })) as GraphQLResult<{ listProjectTypes: { items: ProjectType[] } }>;
  return projectTypes.data.listProjectTypes.items;
};

export const getBuildingTypes = async () => {
  const buildingTypes = (await client.graphql({
    query: listBuildingTypes,
  })) as GraphQLResult<{ listBuildingTypes: { items: BuildingType[] } }>;
  return buildingTypes.data.listBuildingTypes.items;
};

export const getAllDOProjects = async () => {
  const res = await axios.get(
    'https://adg-projects-hs6ir.ondigitalocean.app/api/projects?populate=*'
  );

  const allProjects = res.data.data;

  // Create a blob and download it
  const blob = new Blob([JSON.stringify(allProjects, null, 2)], {
    type: 'application/json',
  });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'do-projects.json';
  a.click();
  window.URL.revokeObjectURL(url);

  return allProjects;
};

// export const pullAllImagesIntoGalleries = async () => {
//   // Safely access the projects data, handling both direct and default exports
//   const projects = Array.isArray(doProjects) ? doProjects : doProjects.default;
//   if (!projects) {
//     throw new Error('No projects data found');
//   }

//   const transformedProjects = projects.map((project) => {
//     const gallery = [];

//     // Add hero image if it exists
//     if (project.attributes.hero?.data?.attributes) {
//       gallery.push({
//         name: project.attributes.hero.data.attributes.name || '',
//         alt: project.attributes.hero.data.attributes.alternativeText || '',
//         caption: project.attributes.hero.data.attributes.caption || '',
//         url: project.attributes.hero.data.attributes.url || '',
//         order: 0,
//       });
//     }

//     // Add gallery images if they exist
//     if (project.attributes.gallery?.data) {
//       project.attributes.gallery.data.forEach((item, index) => {
//         if (item.attributes) {
//           gallery.push({
//             name: item.attributes.name || '',
//             alt: item.attributes.alternativeText || '',
//             caption: item.attributes.caption || '',
//             url: item.attributes.url || '',
//             order: index + 1,
//           });
//         }
//       });
//     }

//     // Process above_quote images
//     if (project.attributes.above_quote) {
//       [
//         'full_width',
//         'vertical_left',
//         'horizontal_right',
//         'horizontal_left',
//         'vertical_right',
//       ].forEach((type, index) => {
//         const component = project.attributes.above_quote.find((item) =>
//           item.__component?.includes(type)
//         );
//         if (component?.image?.data?.attributes) {
//           gallery.push({
//             name: component.image.data.attributes.name || '',
//             alt: component.image.data.attributes.alternativeText || '',
//             caption: component.image.data.attributes.caption || '',
//             url: component.image.data.attributes.url || '',
//             order: index + 1,
//           });
//         }
//       });
//     }

//     // Process below_text images
//     if (project.attributes.below_text) {
//       [
//         'full_width',
//         'vertical_left',
//         'horizontal_right',
//         'horizontal_left',
//         'vertical_right',
//       ].forEach((type, index) => {
//         const component = project.attributes.below_text.find((item) =>
//           item.__component?.includes(type)
//         );
//         if (component?.image?.data?.attributes) {
//           gallery.push({
//             name: component.image.data.attributes.name || '',
//             alt: component.image.data.attributes.alternativeText || '',
//             caption: component.image.data.attributes.caption || '',
//             url: component.image.data.attributes.url || '',
//             order: index + 1,
//           });
//         }
//       });
//     }

//     return {
//       oldId: project.id,
//       gallery,
//     };
//   });

//   // Create a blob and download it
//   const blob = new Blob([JSON.stringify(transformedProjects, null, 2)], {
//     type: 'application/json',
//   });
//   const url = window.URL.createObjectURL(blob);
//   const a = document.createElement('a');
//   a.href = url;
//   a.download = 'transformed-projects.json';
//   a.click();
//   window.URL.revokeObjectURL(url);

//   return transformedProjects;
// };

// export const updateProjectGalleries = async () => {
//   const projects = await listAllProjects();

//   for (const project of projects) {
//     try {
//       const galleryResponse = await client.graphql({
//         query: createGallery,
//         variables: {
//           input: {
//             galleryProjectId: project.id,
//           },
//         },
//       });

//       console.log('Gallery creation response:', galleryResponse); // Debug log

//       if (!galleryResponse?.data?.createGallery?.id) {
//         console.error(`No gallery ID returned for project ${project.name}`);
//         continue;
//       }

//       await client.graphql({
//         query: updateProject,
//         variables: {
//           input: {
//             id: project.id,
//             projectGalleryId: galleryResponse.data.createGallery.id,
//           },
//         },
//       });

//       console.log(`Successfully updated project: ${project.name}`);
//     } catch (error) {
//       console.error(`Error processing project ${project.name}:`, error);
//     }
//   }
// };

// export const putAllImagesIntoGalleries = async () => {
//   const projects = await listAllProjects();

//   for (const project of projects) {
//     try {
//       const matchingImageData = images.find(
//         (img) => img.oldId === Number(project.oldId)
//       );

//       if (!matchingImageData || !project.projectGalleryId) {
//         console.log(
//           `Skipping project ${project.name} (oldId: ${project.oldId}): No matching image data or gallery ID`
//         );
//         continue;
//       }

//       console.log(
//         `Processing ${matchingImageData.gallery.length} images for project: ${project.name}`
//       );

//       // Create image objects for each image in the gallery
//       for (const image of matchingImageData.gallery) {
//         try {
//           await client.graphql({
//             query: createImageObject,
//             variables: {
//               input: {
//                 url: image.url,
//                 alt: image.alt || '',
//                 caption: image.caption || '',
//                 galleryImagesId: project.projectGalleryId,
//                 order: image.order,
//               },
//             },
//           });

//           console.log(`Created image: ${image.url}`);
//         } catch (imageError) {
//           console.error(
//             `Error creating image for project ${project.name}:`,
//             imageError
//           );
//         }
//       }
//     } catch (error) {
//       console.error(`Error processing project ${project.name}:`, error);
//     }
//   }
// };

export const getProjectGallery = async (galleryId: string) => {
  const gallery = await client.graphql({
    query: getGallery,
    variables: { id: galleryId },
  });
  return gallery;
};

export const listProjectsWithLocations = async () => {
  const customQuery = `
    query MyQuery {
  listProjects(limit: 300) {
    items {
      departments {
        items {
          department {
            id
            name
          }
        }
      }
      gallery {
        images(limit: 1) {
          items {
            url
          }
        }
      }
      locationString
      name
      size
      status
      description
      location {
        address
            id
            latitude
            longitude
            name
          }
        }
      }
    }
  `;

  const locations = (await client.graphql({
    query: customQuery,
    variables: {
      limit: 300,
    },
  })) as { data: { listProjects: { items: any[] } } };
  return locations.data.listProjects.items;
};

export const getGalleries = async () => {
  const customQuery = `
    query ListGalleries {
      listGalleries(limit: 500) {
        items {
          id
          project {
            id
            name
            departments {
              items {
                department {
                  id
                  name
                }
              }
            }
          }
          images {
            items {
              id
              url
              alt
              caption
              order
            }
          }
        }
      }
    }
  `;

  const galleries = (await client.graphql({
    query: customQuery,
    variables: {
      limit: 500,
    },
  })) as GraphQLResult<{ listGalleries: { items: Gallery[] } }>;
  return galleries.data.listGalleries.items;
};

export const createNewGallery = async (projectId: string) => {
  const gallery = await client.graphql({
    query: createGallery,
    variables: {
      input: {
        galleryProjectId: projectId,
      },
    },
  });
  return gallery;
};

export const uploadAndConvertImage = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch('/api/upload-image', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to upload image');
    }

    // Get the processed filename from Content-Disposition header
    const contentDisposition = response.headers.get('Content-Disposition');
    const processedFilename = contentDisposition
      ? contentDisposition.split('filename="')[1].split('"')[0]
      : file.name
          .replace(/\.[^/.]+$/, '')
          .replace(/\s+/g, '-')
          .toLowerCase() + '.webp';

    // Get the WebP buffer from the response
    const webpBuffer = await response.blob();

    const result = await uploadData({
      key: `${processedFilename}`, // Use the processed filename instead of original
      data: webpBuffer,
      options: {
        contentType: 'image/webp',
      },
    }).result;

    console.log('Upload result:', result.key);
    return result.key.toString();
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

export const addNewImageObject = async (
  imageUrl: string,
  galleryId: string,
  order: number,
  caption: string,
  alt: string,
  centerX: number,
  centerY: number
) => {
  const addToGallery = await client.graphql({
    query: createImageObject,
    variables: {
      input: {
        url: imageUrl,
        galleryImagesId: galleryId,
        order: order,
        caption: caption,
        alt: caption,
        centerX: centerX,
        centerY: centerY,
      },
    },
  });
  return addToGallery;
};

export const updateImage = async (
  imageId: string,
  url: string,
  order: number,
  caption: string,
  alt: string,
  centerX: number,
  centerY: number
) => {
  const updateImage = await client.graphql({
    query: updateImageObject,
    variables: {
      input: { id: imageId, url, order, caption, alt, centerX, centerY },
    },
  });
  return updateImage;
};

export const createNewProject = async (project: ProjectObject) => {
  const createNewProject = await client.graphql({
    query: createProject,
    variables: { input: project },
  });
  return createNewProject;
};

export const updateCurrentProject = async (project: ProjectObject) => {
  const updateProj = await client.graphql({
    query: updateProject,
    variables: { input: project },
  });
  return updateProj;
};

export const saveProject = async (
  id: string,
  name: string,
  description: string,
  projectLocationId: string,
  locationString: string,
  collaborators: string,
  size: string,
  quote: string,
  quoteAttribution: string,
  previewLocation: string
) => {
  const res = await client.graphql({
    query: updateProject,
    variables: {
      input: {
        id,
        name,
        description,
        projectLocationId,
        locationString,
        collaborators,
        size,
        quote,
        quoteAttribution,
        previewLocation,
      },
    },
  });
  return res;
};

export const createNewProjectSubcategories = async (
  projectId: string,
  subcat: string
) => {
  const res = await client.graphql({
    query: createProjectSubcategories,
    variables: { input: { projectID: projectId, subcategoryID: subcat } },
  });
  return res;
};

export const deleteProjectSubcategories = async (id: string) => {
  const res = await client.graphql({
    query: deleteProjectSubcategoriesMutation,
    variables: { input: { id } },
  });
  return res;
};

export const createNewProjectProjectType = async (
  projectId: string,
  projectTypeId: string
) => {
  const res = await client.graphql({
    query: createProjectProjectTypes,
    variables: {
      input: { projectID: projectId, projectTypeID: projectTypeId },
    },
  });
  return res;
};

export const createNewProjectBuildingType = async (
  projectId: string,
  buildingTypeId: string
) => {
  const res = await client.graphql({
    query: createProjectBuildingTypes,
    variables: {
      input: { projectID: projectId, buildingTypeID: buildingTypeId },
    },
  });
  return res;
};

export const deleteImage = async (imageId: string) => {
  const res = await client.graphql({
    query: deleteImageObject,
    variables: { input: { id: imageId } },
  });
  return res;
};

export const createProjectDepartments = async (
  projectId: string,
  departmentId: string
) => {
  const res = await client.graphql({
    query: createProjectDepartmentsMutation,
    variables: { input: { projectID: projectId, departmentID: departmentId } },
  });
  return res;
};

export const getProjectsWithDepartments = async () => {
  const customQuery = `
    query MyQuery($nextToken: String) {
      listProjects(limit: 1000, nextToken: $nextToken) {
        items {
          createdAt
          departments {
            items {
              department {
                id
                name
              }
            }
          }
          subcategories {
            items {
              subcategory {
                id
                name
              }
            }
          }
          description
          displayOrder
          featured
          projectGalleryId
          name
          locationString
          link
          id
          size
          status
          updatedAt
        }
        nextToken
      }
    }
  `;

  let allItems: any[] = [];
  let nextToken: string | null = null;

  do {
    const response = (await client.graphql({
      query: customQuery,
      variables: { nextToken },
    })) as GraphQLResult<{
      listProjects: {
        items: Array<ProjectWithDepartments>;
        nextToken: string | null;
      };
    }>;

    allItems = [...allItems, ...response.data.listProjects.items];
    nextToken = response.data.listProjects.nextToken;
  } while (nextToken);

  return allItems;
};

export const getSubcategoriesByDepartment = async (departmentId: string) => {
  const subcategories = (await client.graphql({
    query: listDepartmentSubcategories,
    variables: { filter: { departmentID: { eq: departmentId } } },
  })) as GraphQLResult<{
    listDepartmentSubcategories: { items: DepartmentSubcategory[] };
  }>;
  return subcategories.data.listDepartmentSubcategories.items;
};

export const getFullImageUrl = (url: string) => {
  if (!url) return url;
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  return `https://adgadmin170407-dev.s3.us-east-1.amazonaws.com/public/${url}`;
};

export const updateSelectedQuote = async (quote: Quote) => {
  const res = await client.graphql({
    query: updateQuote,
    variables: {
      input: {
        id: quote.id,
        text: quote.text,
        attribution: quote.attribution,
        displayOrder: quote.displayOrder,
      },
    },
  });
  return res;
};

export const deleteSelectedQuote = async (quoteId: string) => {
  const res = await client.graphql({
    query: deleteQuote,
    variables: { input: { id: quoteId } },
  });
  return res;
};

export const createNewQuote = async (quote: Quote) => {
  const res = await client.graphql({
    query: createQuote,
    variables: {
      input: {
        text: quote.text,
        projectQuotesId: quote.projectQuoteId,
        displayOrder: quote.displayOrder,
        attribution: quote.attribution,
      },
    },
  });
  return res;
};
