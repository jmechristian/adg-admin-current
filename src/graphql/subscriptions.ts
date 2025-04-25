/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      email
      role
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      email
      role
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      email
      role
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation {
    onCreateLocation {
      id
      name
      address
      description
      latitude
      longitude
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation {
    onUpdateLocation {
      id
      name
      address
      description
      latitude
      longitude
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation {
    onDeleteLocation {
      id
      name
      address
      description
      latitude
      longitude
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFeaturedProject = /* GraphQL */ `
  subscription OnCreateFeaturedProject {
    onCreateFeaturedProject {
      id
      project {
        id
        oldId
        name
        description
        location {
          id
          name
          address
          description
          latitude
          longitude
          createdAt
          updatedAt
        }
        locationString
        createdBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        lastUpdatedBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        featured
        link
        slug
        quote
        quoteAttribution
        quotes {
          nextToken
        }
        collaborators
        size
        gridOrder
        status
        gallery {
          id
          createdAt
          updatedAt
          galleryProjectId
        }
        departments {
          nextToken
        }
        subcategories {
          nextToken
        }
        building_type {
          nextToken
        }
        project_type {
          nextToken
        }
        displayOrder
        previewLocation
        featuredProjects {
          nextToken
        }
        subcategoryProjects {
          nextToken
        }
        createdAt
        updatedAt
        projectLocationId
        projectCreatedById
        projectLastUpdatedById
        projectGalleryId
      }
      displayOrder
      department {
        id
        name
        projects {
          nextToken
        }
        subcategories {
          nextToken
        }
        displayOrder
        featuredProjects {
          nextToken
        }
        subcategoriesProjects {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      projectFeaturedProjectsId
      departmentFeaturedProjectsId
    }
  }
`;
export const onUpdateFeaturedProject = /* GraphQL */ `
  subscription OnUpdateFeaturedProject {
    onUpdateFeaturedProject {
      id
      project {
        id
        oldId
        name
        description
        location {
          id
          name
          address
          description
          latitude
          longitude
          createdAt
          updatedAt
        }
        locationString
        createdBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        lastUpdatedBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        featured
        link
        slug
        quote
        quoteAttribution
        quotes {
          nextToken
        }
        collaborators
        size
        gridOrder
        status
        gallery {
          id
          createdAt
          updatedAt
          galleryProjectId
        }
        departments {
          nextToken
        }
        subcategories {
          nextToken
        }
        building_type {
          nextToken
        }
        project_type {
          nextToken
        }
        displayOrder
        previewLocation
        featuredProjects {
          nextToken
        }
        subcategoryProjects {
          nextToken
        }
        createdAt
        updatedAt
        projectLocationId
        projectCreatedById
        projectLastUpdatedById
        projectGalleryId
      }
      displayOrder
      department {
        id
        name
        projects {
          nextToken
        }
        subcategories {
          nextToken
        }
        displayOrder
        featuredProjects {
          nextToken
        }
        subcategoriesProjects {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      projectFeaturedProjectsId
      departmentFeaturedProjectsId
    }
  }
`;
export const onDeleteFeaturedProject = /* GraphQL */ `
  subscription OnDeleteFeaturedProject {
    onDeleteFeaturedProject {
      id
      project {
        id
        oldId
        name
        description
        location {
          id
          name
          address
          description
          latitude
          longitude
          createdAt
          updatedAt
        }
        locationString
        createdBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        lastUpdatedBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        featured
        link
        slug
        quote
        quoteAttribution
        quotes {
          nextToken
        }
        collaborators
        size
        gridOrder
        status
        gallery {
          id
          createdAt
          updatedAt
          galleryProjectId
        }
        departments {
          nextToken
        }
        subcategories {
          nextToken
        }
        building_type {
          nextToken
        }
        project_type {
          nextToken
        }
        displayOrder
        previewLocation
        featuredProjects {
          nextToken
        }
        subcategoryProjects {
          nextToken
        }
        createdAt
        updatedAt
        projectLocationId
        projectCreatedById
        projectLastUpdatedById
        projectGalleryId
      }
      displayOrder
      department {
        id
        name
        projects {
          nextToken
        }
        subcategories {
          nextToken
        }
        displayOrder
        featuredProjects {
          nextToken
        }
        subcategoriesProjects {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      projectFeaturedProjectsId
      departmentFeaturedProjectsId
    }
  }
`;
export const onCreateGallery = /* GraphQL */ `
  subscription OnCreateGallery {
    onCreateGallery {
      id
      images {
        items {
          id
          url
          alt
          caption
          order
          centerX
          centerY
          zoom
          createdAt
          updatedAt
          galleryImagesId
        }
        nextToken
      }
      gifs {
        items {
          id
          url
          caption
          order
          createdAt
          updatedAt
          galleryGifsId
        }
        nextToken
      }
      videos {
        items {
          id
          url
          caption
          order
          createdAt
          updatedAt
          galleryVideosId
        }
        nextToken
      }
      project {
        id
        oldId
        name
        description
        location {
          id
          name
          address
          description
          latitude
          longitude
          createdAt
          updatedAt
        }
        locationString
        createdBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        lastUpdatedBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        featured
        link
        slug
        quote
        quoteAttribution
        quotes {
          nextToken
        }
        collaborators
        size
        gridOrder
        status
        gallery {
          id
          createdAt
          updatedAt
          galleryProjectId
        }
        departments {
          nextToken
        }
        subcategories {
          nextToken
        }
        building_type {
          nextToken
        }
        project_type {
          nextToken
        }
        displayOrder
        previewLocation
        featuredProjects {
          nextToken
        }
        subcategoryProjects {
          nextToken
        }
        createdAt
        updatedAt
        projectLocationId
        projectCreatedById
        projectLastUpdatedById
        projectGalleryId
      }
      createdAt
      updatedAt
      galleryProjectId
    }
  }
`;
export const onUpdateGallery = /* GraphQL */ `
  subscription OnUpdateGallery {
    onUpdateGallery {
      id
      images {
        items {
          id
          url
          alt
          caption
          order
          centerX
          centerY
          zoom
          createdAt
          updatedAt
          galleryImagesId
        }
        nextToken
      }
      gifs {
        items {
          id
          url
          caption
          order
          createdAt
          updatedAt
          galleryGifsId
        }
        nextToken
      }
      videos {
        items {
          id
          url
          caption
          order
          createdAt
          updatedAt
          galleryVideosId
        }
        nextToken
      }
      project {
        id
        oldId
        name
        description
        location {
          id
          name
          address
          description
          latitude
          longitude
          createdAt
          updatedAt
        }
        locationString
        createdBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        lastUpdatedBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        featured
        link
        slug
        quote
        quoteAttribution
        quotes {
          nextToken
        }
        collaborators
        size
        gridOrder
        status
        gallery {
          id
          createdAt
          updatedAt
          galleryProjectId
        }
        departments {
          nextToken
        }
        subcategories {
          nextToken
        }
        building_type {
          nextToken
        }
        project_type {
          nextToken
        }
        displayOrder
        previewLocation
        featuredProjects {
          nextToken
        }
        subcategoryProjects {
          nextToken
        }
        createdAt
        updatedAt
        projectLocationId
        projectCreatedById
        projectLastUpdatedById
        projectGalleryId
      }
      createdAt
      updatedAt
      galleryProjectId
    }
  }
`;
export const onDeleteGallery = /* GraphQL */ `
  subscription OnDeleteGallery {
    onDeleteGallery {
      id
      images {
        items {
          id
          url
          alt
          caption
          order
          centerX
          centerY
          zoom
          createdAt
          updatedAt
          galleryImagesId
        }
        nextToken
      }
      gifs {
        items {
          id
          url
          caption
          order
          createdAt
          updatedAt
          galleryGifsId
        }
        nextToken
      }
      videos {
        items {
          id
          url
          caption
          order
          createdAt
          updatedAt
          galleryVideosId
        }
        nextToken
      }
      project {
        id
        oldId
        name
        description
        location {
          id
          name
          address
          description
          latitude
          longitude
          createdAt
          updatedAt
        }
        locationString
        createdBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        lastUpdatedBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        featured
        link
        slug
        quote
        quoteAttribution
        quotes {
          nextToken
        }
        collaborators
        size
        gridOrder
        status
        gallery {
          id
          createdAt
          updatedAt
          galleryProjectId
        }
        departments {
          nextToken
        }
        subcategories {
          nextToken
        }
        building_type {
          nextToken
        }
        project_type {
          nextToken
        }
        displayOrder
        previewLocation
        featuredProjects {
          nextToken
        }
        subcategoryProjects {
          nextToken
        }
        createdAt
        updatedAt
        projectLocationId
        projectCreatedById
        projectLastUpdatedById
        projectGalleryId
      }
      createdAt
      updatedAt
      galleryProjectId
    }
  }
`;
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject {
    onCreateProject {
      id
      oldId
      name
      description
      location {
        id
        name
        address
        description
        latitude
        longitude
        createdAt
        updatedAt
      }
      locationString
      createdBy {
        id
        name
        email
        role
        createdAt
        updatedAt
      }
      lastUpdatedBy {
        id
        name
        email
        role
        createdAt
        updatedAt
      }
      featured
      link
      slug
      quote
      quoteAttribution
      quotes {
        items {
          id
          text
          attribution
          displayOrder
          createdAt
          updatedAt
          projectQuotesId
        }
        nextToken
      }
      collaborators
      size
      gridOrder
      status
      gallery {
        id
        images {
          nextToken
        }
        gifs {
          nextToken
        }
        videos {
          nextToken
        }
        project {
          id
          oldId
          name
          description
          locationString
          featured
          link
          slug
          quote
          quoteAttribution
          collaborators
          size
          gridOrder
          status
          displayOrder
          previewLocation
          createdAt
          updatedAt
          projectLocationId
          projectCreatedById
          projectLastUpdatedById
          projectGalleryId
        }
        createdAt
        updatedAt
        galleryProjectId
      }
      departments {
        items {
          id
          projectID
          departmentID
          createdAt
          updatedAt
        }
        nextToken
      }
      subcategories {
        items {
          id
          projectID
          subcategoryID
          createdAt
          updatedAt
        }
        nextToken
      }
      building_type {
        items {
          id
          projectID
          buildingTypeID
          createdAt
          updatedAt
        }
        nextToken
      }
      project_type {
        items {
          id
          projectID
          projectTypeID
          createdAt
          updatedAt
        }
        nextToken
      }
      displayOrder
      previewLocation
      featuredProjects {
        items {
          id
          displayOrder
          createdAt
          updatedAt
          projectFeaturedProjectsId
          departmentFeaturedProjectsId
        }
        nextToken
      }
      subcategoryProjects {
        items {
          id
          displayOrder
          createdAt
          updatedAt
          projectSubcategoryProjectsId
          departmentSubcategoriesProjectsId
          subcategorySubcategoryProjectsId
        }
        nextToken
      }
      createdAt
      updatedAt
      projectLocationId
      projectCreatedById
      projectLastUpdatedById
      projectGalleryId
    }
  }
`;
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject {
    onUpdateProject {
      id
      oldId
      name
      description
      location {
        id
        name
        address
        description
        latitude
        longitude
        createdAt
        updatedAt
      }
      locationString
      createdBy {
        id
        name
        email
        role
        createdAt
        updatedAt
      }
      lastUpdatedBy {
        id
        name
        email
        role
        createdAt
        updatedAt
      }
      featured
      link
      slug
      quote
      quoteAttribution
      quotes {
        items {
          id
          text
          attribution
          displayOrder
          createdAt
          updatedAt
          projectQuotesId
        }
        nextToken
      }
      collaborators
      size
      gridOrder
      status
      gallery {
        id
        images {
          nextToken
        }
        gifs {
          nextToken
        }
        videos {
          nextToken
        }
        project {
          id
          oldId
          name
          description
          locationString
          featured
          link
          slug
          quote
          quoteAttribution
          collaborators
          size
          gridOrder
          status
          displayOrder
          previewLocation
          createdAt
          updatedAt
          projectLocationId
          projectCreatedById
          projectLastUpdatedById
          projectGalleryId
        }
        createdAt
        updatedAt
        galleryProjectId
      }
      departments {
        items {
          id
          projectID
          departmentID
          createdAt
          updatedAt
        }
        nextToken
      }
      subcategories {
        items {
          id
          projectID
          subcategoryID
          createdAt
          updatedAt
        }
        nextToken
      }
      building_type {
        items {
          id
          projectID
          buildingTypeID
          createdAt
          updatedAt
        }
        nextToken
      }
      project_type {
        items {
          id
          projectID
          projectTypeID
          createdAt
          updatedAt
        }
        nextToken
      }
      displayOrder
      previewLocation
      featuredProjects {
        items {
          id
          displayOrder
          createdAt
          updatedAt
          projectFeaturedProjectsId
          departmentFeaturedProjectsId
        }
        nextToken
      }
      subcategoryProjects {
        items {
          id
          displayOrder
          createdAt
          updatedAt
          projectSubcategoryProjectsId
          departmentSubcategoriesProjectsId
          subcategorySubcategoryProjectsId
        }
        nextToken
      }
      createdAt
      updatedAt
      projectLocationId
      projectCreatedById
      projectLastUpdatedById
      projectGalleryId
    }
  }
`;
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject {
    onDeleteProject {
      id
      oldId
      name
      description
      location {
        id
        name
        address
        description
        latitude
        longitude
        createdAt
        updatedAt
      }
      locationString
      createdBy {
        id
        name
        email
        role
        createdAt
        updatedAt
      }
      lastUpdatedBy {
        id
        name
        email
        role
        createdAt
        updatedAt
      }
      featured
      link
      slug
      quote
      quoteAttribution
      quotes {
        items {
          id
          text
          attribution
          displayOrder
          createdAt
          updatedAt
          projectQuotesId
        }
        nextToken
      }
      collaborators
      size
      gridOrder
      status
      gallery {
        id
        images {
          nextToken
        }
        gifs {
          nextToken
        }
        videos {
          nextToken
        }
        project {
          id
          oldId
          name
          description
          locationString
          featured
          link
          slug
          quote
          quoteAttribution
          collaborators
          size
          gridOrder
          status
          displayOrder
          previewLocation
          createdAt
          updatedAt
          projectLocationId
          projectCreatedById
          projectLastUpdatedById
          projectGalleryId
        }
        createdAt
        updatedAt
        galleryProjectId
      }
      departments {
        items {
          id
          projectID
          departmentID
          createdAt
          updatedAt
        }
        nextToken
      }
      subcategories {
        items {
          id
          projectID
          subcategoryID
          createdAt
          updatedAt
        }
        nextToken
      }
      building_type {
        items {
          id
          projectID
          buildingTypeID
          createdAt
          updatedAt
        }
        nextToken
      }
      project_type {
        items {
          id
          projectID
          projectTypeID
          createdAt
          updatedAt
        }
        nextToken
      }
      displayOrder
      previewLocation
      featuredProjects {
        items {
          id
          displayOrder
          createdAt
          updatedAt
          projectFeaturedProjectsId
          departmentFeaturedProjectsId
        }
        nextToken
      }
      subcategoryProjects {
        items {
          id
          displayOrder
          createdAt
          updatedAt
          projectSubcategoryProjectsId
          departmentSubcategoriesProjectsId
          subcategorySubcategoryProjectsId
        }
        nextToken
      }
      createdAt
      updatedAt
      projectLocationId
      projectCreatedById
      projectLastUpdatedById
      projectGalleryId
    }
  }
`;
export const onCreateQuote = /* GraphQL */ `
  subscription OnCreateQuote {
    onCreateQuote {
      id
      text
      attribution
      project {
        id
        oldId
        name
        description
        location {
          id
          name
          address
          description
          latitude
          longitude
          createdAt
          updatedAt
        }
        locationString
        createdBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        lastUpdatedBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        featured
        link
        slug
        quote
        quoteAttribution
        quotes {
          nextToken
        }
        collaborators
        size
        gridOrder
        status
        gallery {
          id
          createdAt
          updatedAt
          galleryProjectId
        }
        departments {
          nextToken
        }
        subcategories {
          nextToken
        }
        building_type {
          nextToken
        }
        project_type {
          nextToken
        }
        displayOrder
        previewLocation
        featuredProjects {
          nextToken
        }
        subcategoryProjects {
          nextToken
        }
        createdAt
        updatedAt
        projectLocationId
        projectCreatedById
        projectLastUpdatedById
        projectGalleryId
      }
      displayOrder
      createdAt
      updatedAt
      projectQuotesId
    }
  }
`;
export const onUpdateQuote = /* GraphQL */ `
  subscription OnUpdateQuote {
    onUpdateQuote {
      id
      text
      attribution
      project {
        id
        oldId
        name
        description
        location {
          id
          name
          address
          description
          latitude
          longitude
          createdAt
          updatedAt
        }
        locationString
        createdBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        lastUpdatedBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        featured
        link
        slug
        quote
        quoteAttribution
        quotes {
          nextToken
        }
        collaborators
        size
        gridOrder
        status
        gallery {
          id
          createdAt
          updatedAt
          galleryProjectId
        }
        departments {
          nextToken
        }
        subcategories {
          nextToken
        }
        building_type {
          nextToken
        }
        project_type {
          nextToken
        }
        displayOrder
        previewLocation
        featuredProjects {
          nextToken
        }
        subcategoryProjects {
          nextToken
        }
        createdAt
        updatedAt
        projectLocationId
        projectCreatedById
        projectLastUpdatedById
        projectGalleryId
      }
      displayOrder
      createdAt
      updatedAt
      projectQuotesId
    }
  }
`;
export const onDeleteQuote = /* GraphQL */ `
  subscription OnDeleteQuote {
    onDeleteQuote {
      id
      text
      attribution
      project {
        id
        oldId
        name
        description
        location {
          id
          name
          address
          description
          latitude
          longitude
          createdAt
          updatedAt
        }
        locationString
        createdBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        lastUpdatedBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        featured
        link
        slug
        quote
        quoteAttribution
        quotes {
          nextToken
        }
        collaborators
        size
        gridOrder
        status
        gallery {
          id
          createdAt
          updatedAt
          galleryProjectId
        }
        departments {
          nextToken
        }
        subcategories {
          nextToken
        }
        building_type {
          nextToken
        }
        project_type {
          nextToken
        }
        displayOrder
        previewLocation
        featuredProjects {
          nextToken
        }
        subcategoryProjects {
          nextToken
        }
        createdAt
        updatedAt
        projectLocationId
        projectCreatedById
        projectLastUpdatedById
        projectGalleryId
      }
      displayOrder
      createdAt
      updatedAt
      projectQuotesId
    }
  }
`;
export const onCreateDepartment = /* GraphQL */ `
  subscription OnCreateDepartment {
    onCreateDepartment {
      id
      name
      projects {
        items {
          id
          projectID
          departmentID
          createdAt
          updatedAt
        }
        nextToken
      }
      subcategories {
        items {
          id
          departmentID
          subcategoryID
          createdAt
          updatedAt
        }
        nextToken
      }
      displayOrder
      featuredProjects {
        items {
          id
          displayOrder
          createdAt
          updatedAt
          projectFeaturedProjectsId
          departmentFeaturedProjectsId
        }
        nextToken
      }
      subcategoriesProjects {
        items {
          id
          displayOrder
          createdAt
          updatedAt
          projectSubcategoryProjectsId
          departmentSubcategoriesProjectsId
          subcategorySubcategoryProjectsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDepartment = /* GraphQL */ `
  subscription OnUpdateDepartment {
    onUpdateDepartment {
      id
      name
      projects {
        items {
          id
          projectID
          departmentID
          createdAt
          updatedAt
        }
        nextToken
      }
      subcategories {
        items {
          id
          departmentID
          subcategoryID
          createdAt
          updatedAt
        }
        nextToken
      }
      displayOrder
      featuredProjects {
        items {
          id
          displayOrder
          createdAt
          updatedAt
          projectFeaturedProjectsId
          departmentFeaturedProjectsId
        }
        nextToken
      }
      subcategoriesProjects {
        items {
          id
          displayOrder
          createdAt
          updatedAt
          projectSubcategoryProjectsId
          departmentSubcategoriesProjectsId
          subcategorySubcategoryProjectsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDepartment = /* GraphQL */ `
  subscription OnDeleteDepartment {
    onDeleteDepartment {
      id
      name
      projects {
        items {
          id
          projectID
          departmentID
          createdAt
          updatedAt
        }
        nextToken
      }
      subcategories {
        items {
          id
          departmentID
          subcategoryID
          createdAt
          updatedAt
        }
        nextToken
      }
      displayOrder
      featuredProjects {
        items {
          id
          displayOrder
          createdAt
          updatedAt
          projectFeaturedProjectsId
          departmentFeaturedProjectsId
        }
        nextToken
      }
      subcategoriesProjects {
        items {
          id
          displayOrder
          createdAt
          updatedAt
          projectSubcategoryProjectsId
          departmentSubcategoriesProjectsId
          subcategorySubcategoryProjectsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateImageObject = /* GraphQL */ `
  subscription OnCreateImageObject {
    onCreateImageObject {
      id
      url
      alt
      caption
      gallery {
        id
        images {
          nextToken
        }
        gifs {
          nextToken
        }
        videos {
          nextToken
        }
        project {
          id
          oldId
          name
          description
          locationString
          featured
          link
          slug
          quote
          quoteAttribution
          collaborators
          size
          gridOrder
          status
          displayOrder
          previewLocation
          createdAt
          updatedAt
          projectLocationId
          projectCreatedById
          projectLastUpdatedById
          projectGalleryId
        }
        createdAt
        updatedAt
        galleryProjectId
      }
      order
      centerX
      centerY
      zoom
      createdAt
      updatedAt
      galleryImagesId
    }
  }
`;
export const onUpdateImageObject = /* GraphQL */ `
  subscription OnUpdateImageObject {
    onUpdateImageObject {
      id
      url
      alt
      caption
      gallery {
        id
        images {
          nextToken
        }
        gifs {
          nextToken
        }
        videos {
          nextToken
        }
        project {
          id
          oldId
          name
          description
          locationString
          featured
          link
          slug
          quote
          quoteAttribution
          collaborators
          size
          gridOrder
          status
          displayOrder
          previewLocation
          createdAt
          updatedAt
          projectLocationId
          projectCreatedById
          projectLastUpdatedById
          projectGalleryId
        }
        createdAt
        updatedAt
        galleryProjectId
      }
      order
      centerX
      centerY
      zoom
      createdAt
      updatedAt
      galleryImagesId
    }
  }
`;
export const onDeleteImageObject = /* GraphQL */ `
  subscription OnDeleteImageObject {
    onDeleteImageObject {
      id
      url
      alt
      caption
      gallery {
        id
        images {
          nextToken
        }
        gifs {
          nextToken
        }
        videos {
          nextToken
        }
        project {
          id
          oldId
          name
          description
          locationString
          featured
          link
          slug
          quote
          quoteAttribution
          collaborators
          size
          gridOrder
          status
          displayOrder
          previewLocation
          createdAt
          updatedAt
          projectLocationId
          projectCreatedById
          projectLastUpdatedById
          projectGalleryId
        }
        createdAt
        updatedAt
        galleryProjectId
      }
      order
      centerX
      centerY
      zoom
      createdAt
      updatedAt
      galleryImagesId
    }
  }
`;
export const onCreateVideoObject = /* GraphQL */ `
  subscription OnCreateVideoObject {
    onCreateVideoObject {
      id
      url
      caption
      gallery {
        id
        images {
          nextToken
        }
        gifs {
          nextToken
        }
        videos {
          nextToken
        }
        project {
          id
          oldId
          name
          description
          locationString
          featured
          link
          slug
          quote
          quoteAttribution
          collaborators
          size
          gridOrder
          status
          displayOrder
          previewLocation
          createdAt
          updatedAt
          projectLocationId
          projectCreatedById
          projectLastUpdatedById
          projectGalleryId
        }
        createdAt
        updatedAt
        galleryProjectId
      }
      order
      createdAt
      updatedAt
      galleryVideosId
    }
  }
`;
export const onUpdateVideoObject = /* GraphQL */ `
  subscription OnUpdateVideoObject {
    onUpdateVideoObject {
      id
      url
      caption
      gallery {
        id
        images {
          nextToken
        }
        gifs {
          nextToken
        }
        videos {
          nextToken
        }
        project {
          id
          oldId
          name
          description
          locationString
          featured
          link
          slug
          quote
          quoteAttribution
          collaborators
          size
          gridOrder
          status
          displayOrder
          previewLocation
          createdAt
          updatedAt
          projectLocationId
          projectCreatedById
          projectLastUpdatedById
          projectGalleryId
        }
        createdAt
        updatedAt
        galleryProjectId
      }
      order
      createdAt
      updatedAt
      galleryVideosId
    }
  }
`;
export const onDeleteVideoObject = /* GraphQL */ `
  subscription OnDeleteVideoObject {
    onDeleteVideoObject {
      id
      url
      caption
      gallery {
        id
        images {
          nextToken
        }
        gifs {
          nextToken
        }
        videos {
          nextToken
        }
        project {
          id
          oldId
          name
          description
          locationString
          featured
          link
          slug
          quote
          quoteAttribution
          collaborators
          size
          gridOrder
          status
          displayOrder
          previewLocation
          createdAt
          updatedAt
          projectLocationId
          projectCreatedById
          projectLastUpdatedById
          projectGalleryId
        }
        createdAt
        updatedAt
        galleryProjectId
      }
      order
      createdAt
      updatedAt
      galleryVideosId
    }
  }
`;
export const onCreateGifObject = /* GraphQL */ `
  subscription OnCreateGifObject {
    onCreateGifObject {
      id
      url
      caption
      gallery {
        id
        images {
          nextToken
        }
        gifs {
          nextToken
        }
        videos {
          nextToken
        }
        project {
          id
          oldId
          name
          description
          locationString
          featured
          link
          slug
          quote
          quoteAttribution
          collaborators
          size
          gridOrder
          status
          displayOrder
          previewLocation
          createdAt
          updatedAt
          projectLocationId
          projectCreatedById
          projectLastUpdatedById
          projectGalleryId
        }
        createdAt
        updatedAt
        galleryProjectId
      }
      order
      createdAt
      updatedAt
      galleryGifsId
    }
  }
`;
export const onUpdateGifObject = /* GraphQL */ `
  subscription OnUpdateGifObject {
    onUpdateGifObject {
      id
      url
      caption
      gallery {
        id
        images {
          nextToken
        }
        gifs {
          nextToken
        }
        videos {
          nextToken
        }
        project {
          id
          oldId
          name
          description
          locationString
          featured
          link
          slug
          quote
          quoteAttribution
          collaborators
          size
          gridOrder
          status
          displayOrder
          previewLocation
          createdAt
          updatedAt
          projectLocationId
          projectCreatedById
          projectLastUpdatedById
          projectGalleryId
        }
        createdAt
        updatedAt
        galleryProjectId
      }
      order
      createdAt
      updatedAt
      galleryGifsId
    }
  }
`;
export const onDeleteGifObject = /* GraphQL */ `
  subscription OnDeleteGifObject {
    onDeleteGifObject {
      id
      url
      caption
      gallery {
        id
        images {
          nextToken
        }
        gifs {
          nextToken
        }
        videos {
          nextToken
        }
        project {
          id
          oldId
          name
          description
          locationString
          featured
          link
          slug
          quote
          quoteAttribution
          collaborators
          size
          gridOrder
          status
          displayOrder
          previewLocation
          createdAt
          updatedAt
          projectLocationId
          projectCreatedById
          projectLastUpdatedById
          projectGalleryId
        }
        createdAt
        updatedAt
        galleryProjectId
      }
      order
      createdAt
      updatedAt
      galleryGifsId
    }
  }
`;
export const onCreateSubcategory = /* GraphQL */ `
  subscription OnCreateSubcategory {
    onCreateSubcategory {
      id
      name
      projects {
        items {
          id
          projectID
          subcategoryID
          createdAt
          updatedAt
        }
        nextToken
      }
      subcategoryProjects {
        items {
          id
          displayOrder
          createdAt
          updatedAt
          projectSubcategoryProjectsId
          departmentSubcategoriesProjectsId
          subcategorySubcategoryProjectsId
        }
        nextToken
      }
      departments {
        items {
          id
          departmentID
          subcategoryID
          createdAt
          updatedAt
        }
        nextToken
      }
      displayOrder
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSubcategory = /* GraphQL */ `
  subscription OnUpdateSubcategory {
    onUpdateSubcategory {
      id
      name
      projects {
        items {
          id
          projectID
          subcategoryID
          createdAt
          updatedAt
        }
        nextToken
      }
      subcategoryProjects {
        items {
          id
          displayOrder
          createdAt
          updatedAt
          projectSubcategoryProjectsId
          departmentSubcategoriesProjectsId
          subcategorySubcategoryProjectsId
        }
        nextToken
      }
      departments {
        items {
          id
          departmentID
          subcategoryID
          createdAt
          updatedAt
        }
        nextToken
      }
      displayOrder
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSubcategory = /* GraphQL */ `
  subscription OnDeleteSubcategory {
    onDeleteSubcategory {
      id
      name
      projects {
        items {
          id
          projectID
          subcategoryID
          createdAt
          updatedAt
        }
        nextToken
      }
      subcategoryProjects {
        items {
          id
          displayOrder
          createdAt
          updatedAt
          projectSubcategoryProjectsId
          departmentSubcategoriesProjectsId
          subcategorySubcategoryProjectsId
        }
        nextToken
      }
      departments {
        items {
          id
          departmentID
          subcategoryID
          createdAt
          updatedAt
        }
        nextToken
      }
      displayOrder
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSubcategoryProject = /* GraphQL */ `
  subscription OnCreateSubcategoryProject {
    onCreateSubcategoryProject {
      id
      project {
        id
        oldId
        name
        description
        location {
          id
          name
          address
          description
          latitude
          longitude
          createdAt
          updatedAt
        }
        locationString
        createdBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        lastUpdatedBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        featured
        link
        slug
        quote
        quoteAttribution
        quotes {
          nextToken
        }
        collaborators
        size
        gridOrder
        status
        gallery {
          id
          createdAt
          updatedAt
          galleryProjectId
        }
        departments {
          nextToken
        }
        subcategories {
          nextToken
        }
        building_type {
          nextToken
        }
        project_type {
          nextToken
        }
        displayOrder
        previewLocation
        featuredProjects {
          nextToken
        }
        subcategoryProjects {
          nextToken
        }
        createdAt
        updatedAt
        projectLocationId
        projectCreatedById
        projectLastUpdatedById
        projectGalleryId
      }
      subcategory {
        id
        name
        projects {
          nextToken
        }
        subcategoryProjects {
          nextToken
        }
        departments {
          nextToken
        }
        displayOrder
        createdAt
        updatedAt
      }
      department {
        id
        name
        projects {
          nextToken
        }
        subcategories {
          nextToken
        }
        displayOrder
        featuredProjects {
          nextToken
        }
        subcategoriesProjects {
          nextToken
        }
        createdAt
        updatedAt
      }
      displayOrder
      createdAt
      updatedAt
      projectSubcategoryProjectsId
      departmentSubcategoriesProjectsId
      subcategorySubcategoryProjectsId
    }
  }
`;
export const onUpdateSubcategoryProject = /* GraphQL */ `
  subscription OnUpdateSubcategoryProject {
    onUpdateSubcategoryProject {
      id
      project {
        id
        oldId
        name
        description
        location {
          id
          name
          address
          description
          latitude
          longitude
          createdAt
          updatedAt
        }
        locationString
        createdBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        lastUpdatedBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        featured
        link
        slug
        quote
        quoteAttribution
        quotes {
          nextToken
        }
        collaborators
        size
        gridOrder
        status
        gallery {
          id
          createdAt
          updatedAt
          galleryProjectId
        }
        departments {
          nextToken
        }
        subcategories {
          nextToken
        }
        building_type {
          nextToken
        }
        project_type {
          nextToken
        }
        displayOrder
        previewLocation
        featuredProjects {
          nextToken
        }
        subcategoryProjects {
          nextToken
        }
        createdAt
        updatedAt
        projectLocationId
        projectCreatedById
        projectLastUpdatedById
        projectGalleryId
      }
      subcategory {
        id
        name
        projects {
          nextToken
        }
        subcategoryProjects {
          nextToken
        }
        departments {
          nextToken
        }
        displayOrder
        createdAt
        updatedAt
      }
      department {
        id
        name
        projects {
          nextToken
        }
        subcategories {
          nextToken
        }
        displayOrder
        featuredProjects {
          nextToken
        }
        subcategoriesProjects {
          nextToken
        }
        createdAt
        updatedAt
      }
      displayOrder
      createdAt
      updatedAt
      projectSubcategoryProjectsId
      departmentSubcategoriesProjectsId
      subcategorySubcategoryProjectsId
    }
  }
`;
export const onDeleteSubcategoryProject = /* GraphQL */ `
  subscription OnDeleteSubcategoryProject {
    onDeleteSubcategoryProject {
      id
      project {
        id
        oldId
        name
        description
        location {
          id
          name
          address
          description
          latitude
          longitude
          createdAt
          updatedAt
        }
        locationString
        createdBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        lastUpdatedBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        featured
        link
        slug
        quote
        quoteAttribution
        quotes {
          nextToken
        }
        collaborators
        size
        gridOrder
        status
        gallery {
          id
          createdAt
          updatedAt
          galleryProjectId
        }
        departments {
          nextToken
        }
        subcategories {
          nextToken
        }
        building_type {
          nextToken
        }
        project_type {
          nextToken
        }
        displayOrder
        previewLocation
        featuredProjects {
          nextToken
        }
        subcategoryProjects {
          nextToken
        }
        createdAt
        updatedAt
        projectLocationId
        projectCreatedById
        projectLastUpdatedById
        projectGalleryId
      }
      subcategory {
        id
        name
        projects {
          nextToken
        }
        subcategoryProjects {
          nextToken
        }
        departments {
          nextToken
        }
        displayOrder
        createdAt
        updatedAt
      }
      department {
        id
        name
        projects {
          nextToken
        }
        subcategories {
          nextToken
        }
        displayOrder
        featuredProjects {
          nextToken
        }
        subcategoriesProjects {
          nextToken
        }
        createdAt
        updatedAt
      }
      displayOrder
      createdAt
      updatedAt
      projectSubcategoryProjectsId
      departmentSubcategoriesProjectsId
      subcategorySubcategoryProjectsId
    }
  }
`;
export const onCreateBuildingType = /* GraphQL */ `
  subscription OnCreateBuildingType {
    onCreateBuildingType {
      id
      name
      projects {
        items {
          id
          projectID
          buildingTypeID
          createdAt
          updatedAt
        }
        nextToken
      }
      displayOrder
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBuildingType = /* GraphQL */ `
  subscription OnUpdateBuildingType {
    onUpdateBuildingType {
      id
      name
      projects {
        items {
          id
          projectID
          buildingTypeID
          createdAt
          updatedAt
        }
        nextToken
      }
      displayOrder
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBuildingType = /* GraphQL */ `
  subscription OnDeleteBuildingType {
    onDeleteBuildingType {
      id
      name
      projects {
        items {
          id
          projectID
          buildingTypeID
          createdAt
          updatedAt
        }
        nextToken
      }
      displayOrder
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProjectType = /* GraphQL */ `
  subscription OnCreateProjectType {
    onCreateProjectType {
      id
      name
      projects {
        items {
          id
          projectID
          projectTypeID
          createdAt
          updatedAt
        }
        nextToken
      }
      displayOrder
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProjectType = /* GraphQL */ `
  subscription OnUpdateProjectType {
    onUpdateProjectType {
      id
      name
      projects {
        items {
          id
          projectID
          projectTypeID
          createdAt
          updatedAt
        }
        nextToken
      }
      displayOrder
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProjectType = /* GraphQL */ `
  subscription OnDeleteProjectType {
    onDeleteProjectType {
      id
      name
      projects {
        items {
          id
          projectID
          projectTypeID
          createdAt
          updatedAt
        }
        nextToken
      }
      displayOrder
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProjectDepartments = /* GraphQL */ `
  subscription OnCreateProjectDepartments {
    onCreateProjectDepartments {
      id
      projectID
      departmentID
      project {
        id
        oldId
        name
        description
        location {
          id
          name
          address
          description
          latitude
          longitude
          createdAt
          updatedAt
        }
        locationString
        createdBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        lastUpdatedBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        featured
        link
        slug
        quote
        quoteAttribution
        quotes {
          nextToken
        }
        collaborators
        size
        gridOrder
        status
        gallery {
          id
          createdAt
          updatedAt
          galleryProjectId
        }
        departments {
          nextToken
        }
        subcategories {
          nextToken
        }
        building_type {
          nextToken
        }
        project_type {
          nextToken
        }
        displayOrder
        previewLocation
        featuredProjects {
          nextToken
        }
        subcategoryProjects {
          nextToken
        }
        createdAt
        updatedAt
        projectLocationId
        projectCreatedById
        projectLastUpdatedById
        projectGalleryId
      }
      department {
        id
        name
        projects {
          nextToken
        }
        subcategories {
          nextToken
        }
        displayOrder
        featuredProjects {
          nextToken
        }
        subcategoriesProjects {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProjectDepartments = /* GraphQL */ `
  subscription OnUpdateProjectDepartments {
    onUpdateProjectDepartments {
      id
      projectID
      departmentID
      project {
        id
        oldId
        name
        description
        location {
          id
          name
          address
          description
          latitude
          longitude
          createdAt
          updatedAt
        }
        locationString
        createdBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        lastUpdatedBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        featured
        link
        slug
        quote
        quoteAttribution
        quotes {
          nextToken
        }
        collaborators
        size
        gridOrder
        status
        gallery {
          id
          createdAt
          updatedAt
          galleryProjectId
        }
        departments {
          nextToken
        }
        subcategories {
          nextToken
        }
        building_type {
          nextToken
        }
        project_type {
          nextToken
        }
        displayOrder
        previewLocation
        featuredProjects {
          nextToken
        }
        subcategoryProjects {
          nextToken
        }
        createdAt
        updatedAt
        projectLocationId
        projectCreatedById
        projectLastUpdatedById
        projectGalleryId
      }
      department {
        id
        name
        projects {
          nextToken
        }
        subcategories {
          nextToken
        }
        displayOrder
        featuredProjects {
          nextToken
        }
        subcategoriesProjects {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProjectDepartments = /* GraphQL */ `
  subscription OnDeleteProjectDepartments {
    onDeleteProjectDepartments {
      id
      projectID
      departmentID
      project {
        id
        oldId
        name
        description
        location {
          id
          name
          address
          description
          latitude
          longitude
          createdAt
          updatedAt
        }
        locationString
        createdBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        lastUpdatedBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        featured
        link
        slug
        quote
        quoteAttribution
        quotes {
          nextToken
        }
        collaborators
        size
        gridOrder
        status
        gallery {
          id
          createdAt
          updatedAt
          galleryProjectId
        }
        departments {
          nextToken
        }
        subcategories {
          nextToken
        }
        building_type {
          nextToken
        }
        project_type {
          nextToken
        }
        displayOrder
        previewLocation
        featuredProjects {
          nextToken
        }
        subcategoryProjects {
          nextToken
        }
        createdAt
        updatedAt
        projectLocationId
        projectCreatedById
        projectLastUpdatedById
        projectGalleryId
      }
      department {
        id
        name
        projects {
          nextToken
        }
        subcategories {
          nextToken
        }
        displayOrder
        featuredProjects {
          nextToken
        }
        subcategoriesProjects {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProjectSubcategories = /* GraphQL */ `
  subscription OnCreateProjectSubcategories {
    onCreateProjectSubcategories {
      id
      projectID
      subcategoryID
      project {
        id
        oldId
        name
        description
        location {
          id
          name
          address
          description
          latitude
          longitude
          createdAt
          updatedAt
        }
        locationString
        createdBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        lastUpdatedBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        featured
        link
        slug
        quote
        quoteAttribution
        quotes {
          nextToken
        }
        collaborators
        size
        gridOrder
        status
        gallery {
          id
          createdAt
          updatedAt
          galleryProjectId
        }
        departments {
          nextToken
        }
        subcategories {
          nextToken
        }
        building_type {
          nextToken
        }
        project_type {
          nextToken
        }
        displayOrder
        previewLocation
        featuredProjects {
          nextToken
        }
        subcategoryProjects {
          nextToken
        }
        createdAt
        updatedAt
        projectLocationId
        projectCreatedById
        projectLastUpdatedById
        projectGalleryId
      }
      subcategory {
        id
        name
        projects {
          nextToken
        }
        subcategoryProjects {
          nextToken
        }
        departments {
          nextToken
        }
        displayOrder
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProjectSubcategories = /* GraphQL */ `
  subscription OnUpdateProjectSubcategories {
    onUpdateProjectSubcategories {
      id
      projectID
      subcategoryID
      project {
        id
        oldId
        name
        description
        location {
          id
          name
          address
          description
          latitude
          longitude
          createdAt
          updatedAt
        }
        locationString
        createdBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        lastUpdatedBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        featured
        link
        slug
        quote
        quoteAttribution
        quotes {
          nextToken
        }
        collaborators
        size
        gridOrder
        status
        gallery {
          id
          createdAt
          updatedAt
          galleryProjectId
        }
        departments {
          nextToken
        }
        subcategories {
          nextToken
        }
        building_type {
          nextToken
        }
        project_type {
          nextToken
        }
        displayOrder
        previewLocation
        featuredProjects {
          nextToken
        }
        subcategoryProjects {
          nextToken
        }
        createdAt
        updatedAt
        projectLocationId
        projectCreatedById
        projectLastUpdatedById
        projectGalleryId
      }
      subcategory {
        id
        name
        projects {
          nextToken
        }
        subcategoryProjects {
          nextToken
        }
        departments {
          nextToken
        }
        displayOrder
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProjectSubcategories = /* GraphQL */ `
  subscription OnDeleteProjectSubcategories {
    onDeleteProjectSubcategories {
      id
      projectID
      subcategoryID
      project {
        id
        oldId
        name
        description
        location {
          id
          name
          address
          description
          latitude
          longitude
          createdAt
          updatedAt
        }
        locationString
        createdBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        lastUpdatedBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        featured
        link
        slug
        quote
        quoteAttribution
        quotes {
          nextToken
        }
        collaborators
        size
        gridOrder
        status
        gallery {
          id
          createdAt
          updatedAt
          galleryProjectId
        }
        departments {
          nextToken
        }
        subcategories {
          nextToken
        }
        building_type {
          nextToken
        }
        project_type {
          nextToken
        }
        displayOrder
        previewLocation
        featuredProjects {
          nextToken
        }
        subcategoryProjects {
          nextToken
        }
        createdAt
        updatedAt
        projectLocationId
        projectCreatedById
        projectLastUpdatedById
        projectGalleryId
      }
      subcategory {
        id
        name
        projects {
          nextToken
        }
        subcategoryProjects {
          nextToken
        }
        departments {
          nextToken
        }
        displayOrder
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProjectBuildingTypes = /* GraphQL */ `
  subscription OnCreateProjectBuildingTypes {
    onCreateProjectBuildingTypes {
      id
      projectID
      buildingTypeID
      project {
        id
        oldId
        name
        description
        location {
          id
          name
          address
          description
          latitude
          longitude
          createdAt
          updatedAt
        }
        locationString
        createdBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        lastUpdatedBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        featured
        link
        slug
        quote
        quoteAttribution
        quotes {
          nextToken
        }
        collaborators
        size
        gridOrder
        status
        gallery {
          id
          createdAt
          updatedAt
          galleryProjectId
        }
        departments {
          nextToken
        }
        subcategories {
          nextToken
        }
        building_type {
          nextToken
        }
        project_type {
          nextToken
        }
        displayOrder
        previewLocation
        featuredProjects {
          nextToken
        }
        subcategoryProjects {
          nextToken
        }
        createdAt
        updatedAt
        projectLocationId
        projectCreatedById
        projectLastUpdatedById
        projectGalleryId
      }
      buildingType {
        id
        name
        projects {
          nextToken
        }
        displayOrder
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProjectBuildingTypes = /* GraphQL */ `
  subscription OnUpdateProjectBuildingTypes {
    onUpdateProjectBuildingTypes {
      id
      projectID
      buildingTypeID
      project {
        id
        oldId
        name
        description
        location {
          id
          name
          address
          description
          latitude
          longitude
          createdAt
          updatedAt
        }
        locationString
        createdBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        lastUpdatedBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        featured
        link
        slug
        quote
        quoteAttribution
        quotes {
          nextToken
        }
        collaborators
        size
        gridOrder
        status
        gallery {
          id
          createdAt
          updatedAt
          galleryProjectId
        }
        departments {
          nextToken
        }
        subcategories {
          nextToken
        }
        building_type {
          nextToken
        }
        project_type {
          nextToken
        }
        displayOrder
        previewLocation
        featuredProjects {
          nextToken
        }
        subcategoryProjects {
          nextToken
        }
        createdAt
        updatedAt
        projectLocationId
        projectCreatedById
        projectLastUpdatedById
        projectGalleryId
      }
      buildingType {
        id
        name
        projects {
          nextToken
        }
        displayOrder
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProjectBuildingTypes = /* GraphQL */ `
  subscription OnDeleteProjectBuildingTypes {
    onDeleteProjectBuildingTypes {
      id
      projectID
      buildingTypeID
      project {
        id
        oldId
        name
        description
        location {
          id
          name
          address
          description
          latitude
          longitude
          createdAt
          updatedAt
        }
        locationString
        createdBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        lastUpdatedBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        featured
        link
        slug
        quote
        quoteAttribution
        quotes {
          nextToken
        }
        collaborators
        size
        gridOrder
        status
        gallery {
          id
          createdAt
          updatedAt
          galleryProjectId
        }
        departments {
          nextToken
        }
        subcategories {
          nextToken
        }
        building_type {
          nextToken
        }
        project_type {
          nextToken
        }
        displayOrder
        previewLocation
        featuredProjects {
          nextToken
        }
        subcategoryProjects {
          nextToken
        }
        createdAt
        updatedAt
        projectLocationId
        projectCreatedById
        projectLastUpdatedById
        projectGalleryId
      }
      buildingType {
        id
        name
        projects {
          nextToken
        }
        displayOrder
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProjectProjectTypes = /* GraphQL */ `
  subscription OnCreateProjectProjectTypes {
    onCreateProjectProjectTypes {
      id
      projectID
      projectTypeID
      project {
        id
        oldId
        name
        description
        location {
          id
          name
          address
          description
          latitude
          longitude
          createdAt
          updatedAt
        }
        locationString
        createdBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        lastUpdatedBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        featured
        link
        slug
        quote
        quoteAttribution
        quotes {
          nextToken
        }
        collaborators
        size
        gridOrder
        status
        gallery {
          id
          createdAt
          updatedAt
          galleryProjectId
        }
        departments {
          nextToken
        }
        subcategories {
          nextToken
        }
        building_type {
          nextToken
        }
        project_type {
          nextToken
        }
        displayOrder
        previewLocation
        featuredProjects {
          nextToken
        }
        subcategoryProjects {
          nextToken
        }
        createdAt
        updatedAt
        projectLocationId
        projectCreatedById
        projectLastUpdatedById
        projectGalleryId
      }
      projectType {
        id
        name
        projects {
          nextToken
        }
        displayOrder
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProjectProjectTypes = /* GraphQL */ `
  subscription OnUpdateProjectProjectTypes {
    onUpdateProjectProjectTypes {
      id
      projectID
      projectTypeID
      project {
        id
        oldId
        name
        description
        location {
          id
          name
          address
          description
          latitude
          longitude
          createdAt
          updatedAt
        }
        locationString
        createdBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        lastUpdatedBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        featured
        link
        slug
        quote
        quoteAttribution
        quotes {
          nextToken
        }
        collaborators
        size
        gridOrder
        status
        gallery {
          id
          createdAt
          updatedAt
          galleryProjectId
        }
        departments {
          nextToken
        }
        subcategories {
          nextToken
        }
        building_type {
          nextToken
        }
        project_type {
          nextToken
        }
        displayOrder
        previewLocation
        featuredProjects {
          nextToken
        }
        subcategoryProjects {
          nextToken
        }
        createdAt
        updatedAt
        projectLocationId
        projectCreatedById
        projectLastUpdatedById
        projectGalleryId
      }
      projectType {
        id
        name
        projects {
          nextToken
        }
        displayOrder
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProjectProjectTypes = /* GraphQL */ `
  subscription OnDeleteProjectProjectTypes {
    onDeleteProjectProjectTypes {
      id
      projectID
      projectTypeID
      project {
        id
        oldId
        name
        description
        location {
          id
          name
          address
          description
          latitude
          longitude
          createdAt
          updatedAt
        }
        locationString
        createdBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        lastUpdatedBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        featured
        link
        slug
        quote
        quoteAttribution
        quotes {
          nextToken
        }
        collaborators
        size
        gridOrder
        status
        gallery {
          id
          createdAt
          updatedAt
          galleryProjectId
        }
        departments {
          nextToken
        }
        subcategories {
          nextToken
        }
        building_type {
          nextToken
        }
        project_type {
          nextToken
        }
        displayOrder
        previewLocation
        featuredProjects {
          nextToken
        }
        subcategoryProjects {
          nextToken
        }
        createdAt
        updatedAt
        projectLocationId
        projectCreatedById
        projectLastUpdatedById
        projectGalleryId
      }
      projectType {
        id
        name
        projects {
          nextToken
        }
        displayOrder
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateDepartmentSubcategories = /* GraphQL */ `
  subscription OnCreateDepartmentSubcategories {
    onCreateDepartmentSubcategories {
      id
      departmentID
      subcategoryID
      department {
        id
        name
        projects {
          nextToken
        }
        subcategories {
          nextToken
        }
        displayOrder
        featuredProjects {
          nextToken
        }
        subcategoriesProjects {
          nextToken
        }
        createdAt
        updatedAt
      }
      subcategory {
        id
        name
        projects {
          nextToken
        }
        subcategoryProjects {
          nextToken
        }
        departments {
          nextToken
        }
        displayOrder
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDepartmentSubcategories = /* GraphQL */ `
  subscription OnUpdateDepartmentSubcategories {
    onUpdateDepartmentSubcategories {
      id
      departmentID
      subcategoryID
      department {
        id
        name
        projects {
          nextToken
        }
        subcategories {
          nextToken
        }
        displayOrder
        featuredProjects {
          nextToken
        }
        subcategoriesProjects {
          nextToken
        }
        createdAt
        updatedAt
      }
      subcategory {
        id
        name
        projects {
          nextToken
        }
        subcategoryProjects {
          nextToken
        }
        departments {
          nextToken
        }
        displayOrder
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDepartmentSubcategories = /* GraphQL */ `
  subscription OnDeleteDepartmentSubcategories {
    onDeleteDepartmentSubcategories {
      id
      departmentID
      subcategoryID
      department {
        id
        name
        projects {
          nextToken
        }
        subcategories {
          nextToken
        }
        displayOrder
        featuredProjects {
          nextToken
        }
        subcategoriesProjects {
          nextToken
        }
        createdAt
        updatedAt
      }
      subcategory {
        id
        name
        projects {
          nextToken
        }
        subcategoryProjects {
          nextToken
        }
        departments {
          nextToken
        }
        displayOrder
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
