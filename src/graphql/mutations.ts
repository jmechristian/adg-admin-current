/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      email
      role
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      email
      role
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      email
      role
      createdAt
      updatedAt
    }
  }
`;
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
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
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
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
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
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
export const createFeaturedProject = /* GraphQL */ `
  mutation CreateFeaturedProject(
    $input: CreateFeaturedProjectInput!
    $condition: ModelFeaturedProjectConditionInput
  ) {
    createFeaturedProject(input: $input, condition: $condition) {
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
export const updateFeaturedProject = /* GraphQL */ `
  mutation UpdateFeaturedProject(
    $input: UpdateFeaturedProjectInput!
    $condition: ModelFeaturedProjectConditionInput
  ) {
    updateFeaturedProject(input: $input, condition: $condition) {
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
export const deleteFeaturedProject = /* GraphQL */ `
  mutation DeleteFeaturedProject(
    $input: DeleteFeaturedProjectInput!
    $condition: ModelFeaturedProjectConditionInput
  ) {
    deleteFeaturedProject(input: $input, condition: $condition) {
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
export const createGallery = /* GraphQL */ `
  mutation CreateGallery(
    $input: CreateGalleryInput!
    $condition: ModelGalleryConditionInput
  ) {
    createGallery(input: $input, condition: $condition) {
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
          type
          createdAt
          updatedAt
          galleryImagesId
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
export const updateGallery = /* GraphQL */ `
  mutation UpdateGallery(
    $input: UpdateGalleryInput!
    $condition: ModelGalleryConditionInput
  ) {
    updateGallery(input: $input, condition: $condition) {
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
          type
          createdAt
          updatedAt
          galleryImagesId
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
export const deleteGallery = /* GraphQL */ `
  mutation DeleteGallery(
    $input: DeleteGalleryInput!
    $condition: ModelGalleryConditionInput
  ) {
    deleteGallery(input: $input, condition: $condition) {
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
          type
          createdAt
          updatedAt
          galleryImagesId
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
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
export const createQuote = /* GraphQL */ `
  mutation CreateQuote(
    $input: CreateQuoteInput!
    $condition: ModelQuoteConditionInput
  ) {
    createQuote(input: $input, condition: $condition) {
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
export const updateQuote = /* GraphQL */ `
  mutation UpdateQuote(
    $input: UpdateQuoteInput!
    $condition: ModelQuoteConditionInput
  ) {
    updateQuote(input: $input, condition: $condition) {
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
export const deleteQuote = /* GraphQL */ `
  mutation DeleteQuote(
    $input: DeleteQuoteInput!
    $condition: ModelQuoteConditionInput
  ) {
    deleteQuote(input: $input, condition: $condition) {
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
export const createDepartment = /* GraphQL */ `
  mutation CreateDepartment(
    $input: CreateDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    createDepartment(input: $input, condition: $condition) {
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
export const updateDepartment = /* GraphQL */ `
  mutation UpdateDepartment(
    $input: UpdateDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    updateDepartment(input: $input, condition: $condition) {
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
export const deleteDepartment = /* GraphQL */ `
  mutation DeleteDepartment(
    $input: DeleteDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    deleteDepartment(input: $input, condition: $condition) {
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
export const createImageObject = /* GraphQL */ `
  mutation CreateImageObject(
    $input: CreateImageObjectInput!
    $condition: ModelImageObjectConditionInput
  ) {
    createImageObject(input: $input, condition: $condition) {
      id
      url
      alt
      caption
      gallery {
        id
        images {
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
      type
      createdAt
      updatedAt
      galleryImagesId
    }
  }
`;
export const updateImageObject = /* GraphQL */ `
  mutation UpdateImageObject(
    $input: UpdateImageObjectInput!
    $condition: ModelImageObjectConditionInput
  ) {
    updateImageObject(input: $input, condition: $condition) {
      id
      url
      alt
      caption
      gallery {
        id
        images {
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
      type
      createdAt
      updatedAt
      galleryImagesId
    }
  }
`;
export const deleteImageObject = /* GraphQL */ `
  mutation DeleteImageObject(
    $input: DeleteImageObjectInput!
    $condition: ModelImageObjectConditionInput
  ) {
    deleteImageObject(input: $input, condition: $condition) {
      id
      url
      alt
      caption
      gallery {
        id
        images {
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
      type
      createdAt
      updatedAt
      galleryImagesId
    }
  }
`;
export const createSubcategory = /* GraphQL */ `
  mutation CreateSubcategory(
    $input: CreateSubcategoryInput!
    $condition: ModelSubcategoryConditionInput
  ) {
    createSubcategory(input: $input, condition: $condition) {
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
export const updateSubcategory = /* GraphQL */ `
  mutation UpdateSubcategory(
    $input: UpdateSubcategoryInput!
    $condition: ModelSubcategoryConditionInput
  ) {
    updateSubcategory(input: $input, condition: $condition) {
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
export const deleteSubcategory = /* GraphQL */ `
  mutation DeleteSubcategory(
    $input: DeleteSubcategoryInput!
    $condition: ModelSubcategoryConditionInput
  ) {
    deleteSubcategory(input: $input, condition: $condition) {
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
export const createSubcategoryProject = /* GraphQL */ `
  mutation CreateSubcategoryProject(
    $input: CreateSubcategoryProjectInput!
    $condition: ModelSubcategoryProjectConditionInput
  ) {
    createSubcategoryProject(input: $input, condition: $condition) {
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
export const updateSubcategoryProject = /* GraphQL */ `
  mutation UpdateSubcategoryProject(
    $input: UpdateSubcategoryProjectInput!
    $condition: ModelSubcategoryProjectConditionInput
  ) {
    updateSubcategoryProject(input: $input, condition: $condition) {
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
export const deleteSubcategoryProject = /* GraphQL */ `
  mutation DeleteSubcategoryProject(
    $input: DeleteSubcategoryProjectInput!
    $condition: ModelSubcategoryProjectConditionInput
  ) {
    deleteSubcategoryProject(input: $input, condition: $condition) {
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
export const createBuildingType = /* GraphQL */ `
  mutation CreateBuildingType(
    $input: CreateBuildingTypeInput!
    $condition: ModelBuildingTypeConditionInput
  ) {
    createBuildingType(input: $input, condition: $condition) {
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
export const updateBuildingType = /* GraphQL */ `
  mutation UpdateBuildingType(
    $input: UpdateBuildingTypeInput!
    $condition: ModelBuildingTypeConditionInput
  ) {
    updateBuildingType(input: $input, condition: $condition) {
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
export const deleteBuildingType = /* GraphQL */ `
  mutation DeleteBuildingType(
    $input: DeleteBuildingTypeInput!
    $condition: ModelBuildingTypeConditionInput
  ) {
    deleteBuildingType(input: $input, condition: $condition) {
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
export const createProjectType = /* GraphQL */ `
  mutation CreateProjectType(
    $input: CreateProjectTypeInput!
    $condition: ModelProjectTypeConditionInput
  ) {
    createProjectType(input: $input, condition: $condition) {
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
export const updateProjectType = /* GraphQL */ `
  mutation UpdateProjectType(
    $input: UpdateProjectTypeInput!
    $condition: ModelProjectTypeConditionInput
  ) {
    updateProjectType(input: $input, condition: $condition) {
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
export const deleteProjectType = /* GraphQL */ `
  mutation DeleteProjectType(
    $input: DeleteProjectTypeInput!
    $condition: ModelProjectTypeConditionInput
  ) {
    deleteProjectType(input: $input, condition: $condition) {
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
export const createServicesPage = /* GraphQL */ `
  mutation CreateServicesPage(
    $input: CreateServicesPageInput!
    $condition: ModelServicesPageConditionInput
  ) {
    createServicesPage(input: $input, condition: $condition) {
      id
      title
      hero
      heroQuote
      departments {
        items {
          id
          title
          image
          description
          link
          split
          order
          hidden
          createdAt
          updatedAt
          servicesPageDepartmentsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateServicesPage = /* GraphQL */ `
  mutation UpdateServicesPage(
    $input: UpdateServicesPageInput!
    $condition: ModelServicesPageConditionInput
  ) {
    updateServicesPage(input: $input, condition: $condition) {
      id
      title
      hero
      heroQuote
      departments {
        items {
          id
          title
          image
          description
          link
          split
          order
          hidden
          createdAt
          updatedAt
          servicesPageDepartmentsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteServicesPage = /* GraphQL */ `
  mutation DeleteServicesPage(
    $input: DeleteServicesPageInput!
    $condition: ModelServicesPageConditionInput
  ) {
    deleteServicesPage(input: $input, condition: $condition) {
      id
      title
      hero
      heroQuote
      departments {
        items {
          id
          title
          image
          description
          link
          split
          order
          hidden
          createdAt
          updatedAt
          servicesPageDepartmentsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createDepartmentSummary = /* GraphQL */ `
  mutation CreateDepartmentSummary(
    $input: CreateDepartmentSummaryInput!
    $condition: ModelDepartmentSummaryConditionInput
  ) {
    createDepartmentSummary(input: $input, condition: $condition) {
      id
      title
      image
      description
      link
      split
      envision {
        items {
          id
          content
          order
          createdAt
          updatedAt
          departmentSummaryEnvisionId
          departmentSummaryDesignId
          departmentSummaryExecuteId
        }
        nextToken
      }
      design {
        items {
          id
          content
          order
          createdAt
          updatedAt
          departmentSummaryEnvisionId
          departmentSummaryDesignId
          departmentSummaryExecuteId
        }
        nextToken
      }
      execute {
        items {
          id
          content
          order
          createdAt
          updatedAt
          departmentSummaryEnvisionId
          departmentSummaryDesignId
          departmentSummaryExecuteId
        }
        nextToken
      }
      order
      hidden
      createdAt
      updatedAt
      servicesPageDepartmentsId
    }
  }
`;
export const updateDepartmentSummary = /* GraphQL */ `
  mutation UpdateDepartmentSummary(
    $input: UpdateDepartmentSummaryInput!
    $condition: ModelDepartmentSummaryConditionInput
  ) {
    updateDepartmentSummary(input: $input, condition: $condition) {
      id
      title
      image
      description
      link
      split
      envision {
        items {
          id
          content
          order
          createdAt
          updatedAt
          departmentSummaryEnvisionId
          departmentSummaryDesignId
          departmentSummaryExecuteId
        }
        nextToken
      }
      design {
        items {
          id
          content
          order
          createdAt
          updatedAt
          departmentSummaryEnvisionId
          departmentSummaryDesignId
          departmentSummaryExecuteId
        }
        nextToken
      }
      execute {
        items {
          id
          content
          order
          createdAt
          updatedAt
          departmentSummaryEnvisionId
          departmentSummaryDesignId
          departmentSummaryExecuteId
        }
        nextToken
      }
      order
      hidden
      createdAt
      updatedAt
      servicesPageDepartmentsId
    }
  }
`;
export const deleteDepartmentSummary = /* GraphQL */ `
  mutation DeleteDepartmentSummary(
    $input: DeleteDepartmentSummaryInput!
    $condition: ModelDepartmentSummaryConditionInput
  ) {
    deleteDepartmentSummary(input: $input, condition: $condition) {
      id
      title
      image
      description
      link
      split
      envision {
        items {
          id
          content
          order
          createdAt
          updatedAt
          departmentSummaryEnvisionId
          departmentSummaryDesignId
          departmentSummaryExecuteId
        }
        nextToken
      }
      design {
        items {
          id
          content
          order
          createdAt
          updatedAt
          departmentSummaryEnvisionId
          departmentSummaryDesignId
          departmentSummaryExecuteId
        }
        nextToken
      }
      execute {
        items {
          id
          content
          order
          createdAt
          updatedAt
          departmentSummaryEnvisionId
          departmentSummaryDesignId
          departmentSummaryExecuteId
        }
        nextToken
      }
      order
      hidden
      createdAt
      updatedAt
      servicesPageDepartmentsId
    }
  }
`;
export const createDepartmentSummaryItem = /* GraphQL */ `
  mutation CreateDepartmentSummaryItem(
    $input: CreateDepartmentSummaryItemInput!
    $condition: ModelDepartmentSummaryItemConditionInput
  ) {
    createDepartmentSummaryItem(input: $input, condition: $condition) {
      id
      content
      order
      createdAt
      updatedAt
      departmentSummaryEnvisionId
      departmentSummaryDesignId
      departmentSummaryExecuteId
    }
  }
`;
export const updateDepartmentSummaryItem = /* GraphQL */ `
  mutation UpdateDepartmentSummaryItem(
    $input: UpdateDepartmentSummaryItemInput!
    $condition: ModelDepartmentSummaryItemConditionInput
  ) {
    updateDepartmentSummaryItem(input: $input, condition: $condition) {
      id
      content
      order
      createdAt
      updatedAt
      departmentSummaryEnvisionId
      departmentSummaryDesignId
      departmentSummaryExecuteId
    }
  }
`;
export const deleteDepartmentSummaryItem = /* GraphQL */ `
  mutation DeleteDepartmentSummaryItem(
    $input: DeleteDepartmentSummaryItemInput!
    $condition: ModelDepartmentSummaryItemConditionInput
  ) {
    deleteDepartmentSummaryItem(input: $input, condition: $condition) {
      id
      content
      order
      createdAt
      updatedAt
      departmentSummaryEnvisionId
      departmentSummaryDesignId
      departmentSummaryExecuteId
    }
  }
`;
export const createStudioPage = /* GraphQL */ `
  mutation CreateStudioPage(
    $input: CreateStudioPageInput!
    $condition: ModelStudioPageConditionInput
  ) {
    createStudioPage(input: $input, condition: $condition) {
      id
      title
      hero
      heroQuote
      leadership {
        items {
          id
          name
          image
          title
          order
          extra
          hidden
          createdAt
          updatedAt
          studioPageLeadershipId
          studioPageStaffId
        }
        nextToken
      }
      staff {
        items {
          id
          name
          image
          title
          order
          extra
          hidden
          createdAt
          updatedAt
          studioPageLeadershipId
          studioPageStaffId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateStudioPage = /* GraphQL */ `
  mutation UpdateStudioPage(
    $input: UpdateStudioPageInput!
    $condition: ModelStudioPageConditionInput
  ) {
    updateStudioPage(input: $input, condition: $condition) {
      id
      title
      hero
      heroQuote
      leadership {
        items {
          id
          name
          image
          title
          order
          extra
          hidden
          createdAt
          updatedAt
          studioPageLeadershipId
          studioPageStaffId
        }
        nextToken
      }
      staff {
        items {
          id
          name
          image
          title
          order
          extra
          hidden
          createdAt
          updatedAt
          studioPageLeadershipId
          studioPageStaffId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteStudioPage = /* GraphQL */ `
  mutation DeleteStudioPage(
    $input: DeleteStudioPageInput!
    $condition: ModelStudioPageConditionInput
  ) {
    deleteStudioPage(input: $input, condition: $condition) {
      id
      title
      hero
      heroQuote
      leadership {
        items {
          id
          name
          image
          title
          order
          extra
          hidden
          createdAt
          updatedAt
          studioPageLeadershipId
          studioPageStaffId
        }
        nextToken
      }
      staff {
        items {
          id
          name
          image
          title
          order
          extra
          hidden
          createdAt
          updatedAt
          studioPageLeadershipId
          studioPageStaffId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createStaffMember = /* GraphQL */ `
  mutation CreateStaffMember(
    $input: CreateStaffMemberInput!
    $condition: ModelStaffMemberConditionInput
  ) {
    createStaffMember(input: $input, condition: $condition) {
      id
      name
      image
      title
      order
      extra
      hidden
      createdAt
      updatedAt
      studioPageLeadershipId
      studioPageStaffId
    }
  }
`;
export const updateStaffMember = /* GraphQL */ `
  mutation UpdateStaffMember(
    $input: UpdateStaffMemberInput!
    $condition: ModelStaffMemberConditionInput
  ) {
    updateStaffMember(input: $input, condition: $condition) {
      id
      name
      image
      title
      order
      extra
      hidden
      createdAt
      updatedAt
      studioPageLeadershipId
      studioPageStaffId
    }
  }
`;
export const deleteStaffMember = /* GraphQL */ `
  mutation DeleteStaffMember(
    $input: DeleteStaffMemberInput!
    $condition: ModelStaffMemberConditionInput
  ) {
    deleteStaffMember(input: $input, condition: $condition) {
      id
      name
      image
      title
      order
      extra
      hidden
      createdAt
      updatedAt
      studioPageLeadershipId
      studioPageStaffId
    }
  }
`;
export const createInquirePage = /* GraphQL */ `
  mutation CreateInquirePage(
    $input: CreateInquirePageInput!
    $condition: ModelInquirePageConditionInput
  ) {
    createInquirePage(input: $input, condition: $condition) {
      id
      title
      hero
      heroQuote
      createdAt
      updatedAt
    }
  }
`;
export const updateInquirePage = /* GraphQL */ `
  mutation UpdateInquirePage(
    $input: UpdateInquirePageInput!
    $condition: ModelInquirePageConditionInput
  ) {
    updateInquirePage(input: $input, condition: $condition) {
      id
      title
      hero
      heroQuote
      createdAt
      updatedAt
    }
  }
`;
export const deleteInquirePage = /* GraphQL */ `
  mutation DeleteInquirePage(
    $input: DeleteInquirePageInput!
    $condition: ModelInquirePageConditionInput
  ) {
    deleteInquirePage(input: $input, condition: $condition) {
      id
      title
      hero
      heroQuote
      createdAt
      updatedAt
    }
  }
`;
export const createHomePageFeature = /* GraphQL */ `
  mutation CreateHomePageFeature(
    $input: CreateHomePageFeatureInput!
    $condition: ModelHomePageFeatureConditionInput
  ) {
    createHomePageFeature(input: $input, condition: $condition) {
      id
      title
      image
      link
      linkText
      callout
      order
      createdAt
      updatedAt
      homePageFeaturesId
    }
  }
`;
export const updateHomePageFeature = /* GraphQL */ `
  mutation UpdateHomePageFeature(
    $input: UpdateHomePageFeatureInput!
    $condition: ModelHomePageFeatureConditionInput
  ) {
    updateHomePageFeature(input: $input, condition: $condition) {
      id
      title
      image
      link
      linkText
      callout
      order
      createdAt
      updatedAt
      homePageFeaturesId
    }
  }
`;
export const deleteHomePageFeature = /* GraphQL */ `
  mutation DeleteHomePageFeature(
    $input: DeleteHomePageFeatureInput!
    $condition: ModelHomePageFeatureConditionInput
  ) {
    deleteHomePageFeature(input: $input, condition: $condition) {
      id
      title
      image
      link
      linkText
      callout
      order
      createdAt
      updatedAt
      homePageFeaturesId
    }
  }
`;
export const createHomePage = /* GraphQL */ `
  mutation CreateHomePage(
    $input: CreateHomePageInput!
    $condition: ModelHomePageConditionInput
  ) {
    createHomePage(input: $input, condition: $condition) {
      id
      title
      hero
      heroQuote
      introText
      features {
        items {
          id
          title
          image
          link
          linkText
          callout
          order
          createdAt
          updatedAt
          homePageFeaturesId
        }
        nextToken
      }
      featureProjects {
        items {
          id
          projectTitle
          projectLink
          projectImage
          projectLocation
          order
          createdAt
          updatedAt
          homePageFeatureProjectsId
        }
        nextToken
      }
      studioText
      studioLink
      studioImage
      createdAt
      updatedAt
    }
  }
`;
export const updateHomePage = /* GraphQL */ `
  mutation UpdateHomePage(
    $input: UpdateHomePageInput!
    $condition: ModelHomePageConditionInput
  ) {
    updateHomePage(input: $input, condition: $condition) {
      id
      title
      hero
      heroQuote
      introText
      features {
        items {
          id
          title
          image
          link
          linkText
          callout
          order
          createdAt
          updatedAt
          homePageFeaturesId
        }
        nextToken
      }
      featureProjects {
        items {
          id
          projectTitle
          projectLink
          projectImage
          projectLocation
          order
          createdAt
          updatedAt
          homePageFeatureProjectsId
        }
        nextToken
      }
      studioText
      studioLink
      studioImage
      createdAt
      updatedAt
    }
  }
`;
export const deleteHomePage = /* GraphQL */ `
  mutation DeleteHomePage(
    $input: DeleteHomePageInput!
    $condition: ModelHomePageConditionInput
  ) {
    deleteHomePage(input: $input, condition: $condition) {
      id
      title
      hero
      heroQuote
      introText
      features {
        items {
          id
          title
          image
          link
          linkText
          callout
          order
          createdAt
          updatedAt
          homePageFeaturesId
        }
        nextToken
      }
      featureProjects {
        items {
          id
          projectTitle
          projectLink
          projectImage
          projectLocation
          order
          createdAt
          updatedAt
          homePageFeatureProjectsId
        }
        nextToken
      }
      studioText
      studioLink
      studioImage
      createdAt
      updatedAt
    }
  }
`;
export const createHomePageFeatureProject = /* GraphQL */ `
  mutation CreateHomePageFeatureProject(
    $input: CreateHomePageFeatureProjectInput!
    $condition: ModelHomePageFeatureProjectConditionInput
  ) {
    createHomePageFeatureProject(input: $input, condition: $condition) {
      id
      projectTitle
      projectLink
      projectImage
      projectLocation
      order
      createdAt
      updatedAt
      homePageFeatureProjectsId
    }
  }
`;
export const updateHomePageFeatureProject = /* GraphQL */ `
  mutation UpdateHomePageFeatureProject(
    $input: UpdateHomePageFeatureProjectInput!
    $condition: ModelHomePageFeatureProjectConditionInput
  ) {
    updateHomePageFeatureProject(input: $input, condition: $condition) {
      id
      projectTitle
      projectLink
      projectImage
      projectLocation
      order
      createdAt
      updatedAt
      homePageFeatureProjectsId
    }
  }
`;
export const deleteHomePageFeatureProject = /* GraphQL */ `
  mutation DeleteHomePageFeatureProject(
    $input: DeleteHomePageFeatureProjectInput!
    $condition: ModelHomePageFeatureProjectConditionInput
  ) {
    deleteHomePageFeatureProject(input: $input, condition: $condition) {
      id
      projectTitle
      projectLink
      projectImage
      projectLocation
      order
      createdAt
      updatedAt
      homePageFeatureProjectsId
    }
  }
`;
export const createProjectDepartments = /* GraphQL */ `
  mutation CreateProjectDepartments(
    $input: CreateProjectDepartmentsInput!
    $condition: ModelProjectDepartmentsConditionInput
  ) {
    createProjectDepartments(input: $input, condition: $condition) {
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
export const updateProjectDepartments = /* GraphQL */ `
  mutation UpdateProjectDepartments(
    $input: UpdateProjectDepartmentsInput!
    $condition: ModelProjectDepartmentsConditionInput
  ) {
    updateProjectDepartments(input: $input, condition: $condition) {
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
export const deleteProjectDepartments = /* GraphQL */ `
  mutation DeleteProjectDepartments(
    $input: DeleteProjectDepartmentsInput!
    $condition: ModelProjectDepartmentsConditionInput
  ) {
    deleteProjectDepartments(input: $input, condition: $condition) {
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
export const createProjectSubcategories = /* GraphQL */ `
  mutation CreateProjectSubcategories(
    $input: CreateProjectSubcategoriesInput!
    $condition: ModelProjectSubcategoriesConditionInput
  ) {
    createProjectSubcategories(input: $input, condition: $condition) {
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
export const updateProjectSubcategories = /* GraphQL */ `
  mutation UpdateProjectSubcategories(
    $input: UpdateProjectSubcategoriesInput!
    $condition: ModelProjectSubcategoriesConditionInput
  ) {
    updateProjectSubcategories(input: $input, condition: $condition) {
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
export const deleteProjectSubcategories = /* GraphQL */ `
  mutation DeleteProjectSubcategories(
    $input: DeleteProjectSubcategoriesInput!
    $condition: ModelProjectSubcategoriesConditionInput
  ) {
    deleteProjectSubcategories(input: $input, condition: $condition) {
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
export const createProjectBuildingTypes = /* GraphQL */ `
  mutation CreateProjectBuildingTypes(
    $input: CreateProjectBuildingTypesInput!
    $condition: ModelProjectBuildingTypesConditionInput
  ) {
    createProjectBuildingTypes(input: $input, condition: $condition) {
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
export const updateProjectBuildingTypes = /* GraphQL */ `
  mutation UpdateProjectBuildingTypes(
    $input: UpdateProjectBuildingTypesInput!
    $condition: ModelProjectBuildingTypesConditionInput
  ) {
    updateProjectBuildingTypes(input: $input, condition: $condition) {
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
export const deleteProjectBuildingTypes = /* GraphQL */ `
  mutation DeleteProjectBuildingTypes(
    $input: DeleteProjectBuildingTypesInput!
    $condition: ModelProjectBuildingTypesConditionInput
  ) {
    deleteProjectBuildingTypes(input: $input, condition: $condition) {
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
export const createProjectProjectTypes = /* GraphQL */ `
  mutation CreateProjectProjectTypes(
    $input: CreateProjectProjectTypesInput!
    $condition: ModelProjectProjectTypesConditionInput
  ) {
    createProjectProjectTypes(input: $input, condition: $condition) {
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
export const updateProjectProjectTypes = /* GraphQL */ `
  mutation UpdateProjectProjectTypes(
    $input: UpdateProjectProjectTypesInput!
    $condition: ModelProjectProjectTypesConditionInput
  ) {
    updateProjectProjectTypes(input: $input, condition: $condition) {
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
export const deleteProjectProjectTypes = /* GraphQL */ `
  mutation DeleteProjectProjectTypes(
    $input: DeleteProjectProjectTypesInput!
    $condition: ModelProjectProjectTypesConditionInput
  ) {
    deleteProjectProjectTypes(input: $input, condition: $condition) {
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
export const createDepartmentSubcategories = /* GraphQL */ `
  mutation CreateDepartmentSubcategories(
    $input: CreateDepartmentSubcategoriesInput!
    $condition: ModelDepartmentSubcategoriesConditionInput
  ) {
    createDepartmentSubcategories(input: $input, condition: $condition) {
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
export const updateDepartmentSubcategories = /* GraphQL */ `
  mutation UpdateDepartmentSubcategories(
    $input: UpdateDepartmentSubcategoriesInput!
    $condition: ModelDepartmentSubcategoriesConditionInput
  ) {
    updateDepartmentSubcategories(input: $input, condition: $condition) {
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
export const deleteDepartmentSubcategories = /* GraphQL */ `
  mutation DeleteDepartmentSubcategories(
    $input: DeleteDepartmentSubcategoriesInput!
    $condition: ModelDepartmentSubcategoriesConditionInput
  ) {
    deleteDepartmentSubcategories(input: $input, condition: $condition) {
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
