/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      role
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        role
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
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
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        address
        description
        latitude
        longitude
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGallery = /* GraphQL */ `
  query GetGallery($id: ID!) {
    getGallery(id: $id) {
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
export const listGalleries = /* GraphQL */ `
  query ListGalleries(
    $filter: ModelGalleryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGalleries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          displayOrder
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
      nextToken
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
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
          quote
          quoteAttribution
          collaborators
          size
          gridOrder
          status
          displayOrder
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
      createdAt
      updatedAt
      projectLocationId
      projectCreatedById
      projectLastUpdatedById
      projectGalleryId
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        createdAt
        updatedAt
        projectLocationId
        projectCreatedById
        projectLastUpdatedById
        projectGalleryId
      }
      nextToken
    }
  }
`;
export const getQuote = /* GraphQL */ `
  query GetQuote($id: ID!) {
    getQuote(id: $id) {
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
export const listQuotes = /* GraphQL */ `
  query ListQuotes(
    $filter: ModelQuoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        attribution
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
          displayOrder
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
      nextToken
    }
  }
`;
export const getDepartment = /* GraphQL */ `
  query GetDepartment($id: ID!) {
    getDepartment(id: $id) {
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
      createdAt
      updatedAt
    }
  }
`;
export const listDepartments = /* GraphQL */ `
  query ListDepartments(
    $filter: ModelDepartmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDepartments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        projects {
          nextToken
        }
        subcategories {
          nextToken
        }
        displayOrder
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getImageObject = /* GraphQL */ `
  query GetImageObject($id: ID!) {
    getImageObject(id: $id) {
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
          displayOrder
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
export const listImageObjects = /* GraphQL */ `
  query ListImageObjects(
    $filter: ModelImageObjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImageObjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        url
        alt
        caption
        gallery {
          id
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
      nextToken
    }
  }
`;
export const getSubcategory = /* GraphQL */ `
  query GetSubcategory($id: ID!) {
    getSubcategory(id: $id) {
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
      displayOrder
      createdAt
      updatedAt
    }
  }
`;
export const listSubcategories = /* GraphQL */ `
  query ListSubcategories(
    $filter: ModelSubcategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubcategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        projects {
          nextToken
        }
        departments {
          nextToken
        }
        displayOrder
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBuildingType = /* GraphQL */ `
  query GetBuildingType($id: ID!) {
    getBuildingType(id: $id) {
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
export const listBuildingTypes = /* GraphQL */ `
  query ListBuildingTypes(
    $filter: ModelBuildingTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBuildingTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        projects {
          nextToken
        }
        displayOrder
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProjectType = /* GraphQL */ `
  query GetProjectType($id: ID!) {
    getProjectType(id: $id) {
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
export const listProjectTypes = /* GraphQL */ `
  query ListProjectTypes(
    $filter: ModelProjectTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        projects {
          nextToken
        }
        displayOrder
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProjectDepartments = /* GraphQL */ `
  query GetProjectDepartments($id: ID!) {
    getProjectDepartments(id: $id) {
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listProjectDepartments = /* GraphQL */ `
  query ListProjectDepartments(
    $filter: ModelProjectDepartmentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectDepartments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectID
        departmentID
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
          displayOrder
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
          displayOrder
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProjectSubcategories = /* GraphQL */ `
  query GetProjectSubcategories($id: ID!) {
    getProjectSubcategories(id: $id) {
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
export const listProjectSubcategories = /* GraphQL */ `
  query ListProjectSubcategories(
    $filter: ModelProjectSubcategoriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectSubcategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectID
        subcategoryID
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
          displayOrder
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
          displayOrder
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProjectBuildingTypes = /* GraphQL */ `
  query GetProjectBuildingTypes($id: ID!) {
    getProjectBuildingTypes(id: $id) {
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
export const listProjectBuildingTypes = /* GraphQL */ `
  query ListProjectBuildingTypes(
    $filter: ModelProjectBuildingTypesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectBuildingTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectID
        buildingTypeID
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
          displayOrder
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
          displayOrder
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProjectProjectTypes = /* GraphQL */ `
  query GetProjectProjectTypes($id: ID!) {
    getProjectProjectTypes(id: $id) {
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
export const listProjectProjectTypes = /* GraphQL */ `
  query ListProjectProjectTypes(
    $filter: ModelProjectProjectTypesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectProjectTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectID
        projectTypeID
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
          displayOrder
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
          displayOrder
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDepartmentSubcategories = /* GraphQL */ `
  query GetDepartmentSubcategories($id: ID!) {
    getDepartmentSubcategories(id: $id) {
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
        displayOrder
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listDepartmentSubcategories = /* GraphQL */ `
  query ListDepartmentSubcategories(
    $filter: ModelDepartmentSubcategoriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDepartmentSubcategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        departmentID
        subcategoryID
        department {
          id
          name
          displayOrder
          createdAt
          updatedAt
        }
        subcategory {
          id
          name
          displayOrder
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
