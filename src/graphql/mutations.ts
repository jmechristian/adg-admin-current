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
        quote
        quoteAttribution
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
        department {
          id
          name
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        departmentProjectsId
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
        quote
        quoteAttribution
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
        department {
          id
          name
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        departmentProjectsId
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
        quote
        quoteAttribution
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
        department {
          id
          name
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        departmentProjectsId
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
      quote
      quoteAttribution
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
          quote
          quoteAttribution
          collaborators
          size
          gridOrder
          status
          createdAt
          updatedAt
          departmentProjectsId
          projectLocationId
          projectCreatedById
          projectLastUpdatedById
          projectGalleryId
        }
        createdAt
        updatedAt
        galleryProjectId
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
        createdAt
        updatedAt
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
      createdAt
      updatedAt
      departmentProjectsId
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
      quote
      quoteAttribution
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
          quote
          quoteAttribution
          collaborators
          size
          gridOrder
          status
          createdAt
          updatedAt
          departmentProjectsId
          projectLocationId
          projectCreatedById
          projectLastUpdatedById
          projectGalleryId
        }
        createdAt
        updatedAt
        galleryProjectId
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
        createdAt
        updatedAt
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
      createdAt
      updatedAt
      departmentProjectsId
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
      quote
      quoteAttribution
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
          quote
          quoteAttribution
          collaborators
          size
          gridOrder
          status
          createdAt
          updatedAt
          departmentProjectsId
          projectLocationId
          projectCreatedById
          projectLastUpdatedById
          projectGalleryId
        }
        createdAt
        updatedAt
        galleryProjectId
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
        createdAt
        updatedAt
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
      createdAt
      updatedAt
      departmentProjectsId
      projectLocationId
      projectCreatedById
      projectLastUpdatedById
      projectGalleryId
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
          oldId
          name
          description
          locationString
          featured
          link
          quote
          quoteAttribution
          collaborators
          size
          gridOrder
          status
          createdAt
          updatedAt
          departmentProjectsId
          projectLocationId
          projectCreatedById
          projectLastUpdatedById
          projectGalleryId
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
          oldId
          name
          description
          locationString
          featured
          link
          quote
          quoteAttribution
          collaborators
          size
          gridOrder
          status
          createdAt
          updatedAt
          departmentProjectsId
          projectLocationId
          projectCreatedById
          projectLastUpdatedById
          projectGalleryId
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
          oldId
          name
          description
          locationString
          featured
          link
          quote
          quoteAttribution
          collaborators
          size
          gridOrder
          status
          createdAt
          updatedAt
          departmentProjectsId
          projectLocationId
          projectCreatedById
          projectLastUpdatedById
          projectGalleryId
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
          quote
          quoteAttribution
          collaborators
          size
          gridOrder
          status
          createdAt
          updatedAt
          departmentProjectsId
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
          quote
          quoteAttribution
          collaborators
          size
          gridOrder
          status
          createdAt
          updatedAt
          departmentProjectsId
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
          quote
          quoteAttribution
          collaborators
          size
          gridOrder
          status
          createdAt
          updatedAt
          departmentProjectsId
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
      createdAt
      updatedAt
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
        quote
        quoteAttribution
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
        department {
          id
          name
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        departmentProjectsId
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
        departments {
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
        quote
        quoteAttribution
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
        department {
          id
          name
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        departmentProjectsId
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
        departments {
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
        quote
        quoteAttribution
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
        department {
          id
          name
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        departmentProjectsId
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
        departments {
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
        quote
        quoteAttribution
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
        department {
          id
          name
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        departmentProjectsId
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
        quote
        quoteAttribution
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
        department {
          id
          name
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        departmentProjectsId
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
        quote
        quoteAttribution
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
        department {
          id
          name
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        departmentProjectsId
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
        quote
        quoteAttribution
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
        department {
          id
          name
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        departmentProjectsId
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
        quote
        quoteAttribution
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
        department {
          id
          name
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        departmentProjectsId
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
        quote
        quoteAttribution
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
        department {
          id
          name
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        departmentProjectsId
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
        createdAt
        updatedAt
      }
      subcategory {
        id
        name
        projects {
          nextToken
        }
        departments {
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
        createdAt
        updatedAt
      }
      subcategory {
        id
        name
        projects {
          nextToken
        }
        departments {
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
        createdAt
        updatedAt
      }
      subcategory {
        id
        name
        projects {
          nextToken
        }
        departments {
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
