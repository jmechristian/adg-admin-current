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
      collaborators {
        items {
          id
          projectID
          collaboratorID
          createdAt
          updatedAt
        }
        nextToken
      }
      size
      gridOrder
      status
      hero {
        id
        url
        alt
        caption
        createdAt
        updatedAt
        projectGalleryId
      }
      gallery {
        items {
          id
          url
          alt
          caption
          createdAt
          updatedAt
          projectGalleryId
        }
        nextToken
      }
      department {
        id
        name
        projects {
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
      projectHeroId
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
        collaborators {
          nextToken
        }
        size
        gridOrder
        status
        hero {
          id
          url
          alt
          caption
          createdAt
          updatedAt
          projectGalleryId
        }
        gallery {
          nextToken
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
        projectHeroId
      }
      nextToken
    }
  }
`;
export const getCollaborator = /* GraphQL */ `
  query GetCollaborator($id: ID!) {
    getCollaborator(id: $id) {
      id
      name
      email
      company
      title
      projects {
        items {
          id
          projectID
          collaboratorID
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
export const listCollaborators = /* GraphQL */ `
  query ListCollaborators(
    $filter: ModelCollaboratorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCollaborators(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        company
        title
        projects {
          nextToken
        }
        createdAt
        updatedAt
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
          oldId
          name
          description
          locationString
          featured
          link
          quote
          quoteAttribution
          size
          gridOrder
          status
          createdAt
          updatedAt
          departmentProjectsId
          projectLocationId
          projectCreatedById
          projectLastUpdatedById
          projectHeroId
        }
        nextToken
      }
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
      createdAt
      updatedAt
      projectGalleryId
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
        createdAt
        updatedAt
        projectGalleryId
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProjectCollaborators = /* GraphQL */ `
  query GetProjectCollaborators($id: ID!) {
    getProjectCollaborators(id: $id) {
      id
      projectID
      collaboratorID
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
        collaborators {
          nextToken
        }
        size
        gridOrder
        status
        hero {
          id
          url
          alt
          caption
          createdAt
          updatedAt
          projectGalleryId
        }
        gallery {
          nextToken
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
        projectHeroId
      }
      collaborator {
        id
        name
        email
        company
        title
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
export const listProjectCollaborators = /* GraphQL */ `
  query ListProjectCollaborators(
    $filter: ModelProjectCollaboratorsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectCollaborators(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectID
        collaboratorID
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
          size
          gridOrder
          status
          createdAt
          updatedAt
          departmentProjectsId
          projectLocationId
          projectCreatedById
          projectLastUpdatedById
          projectHeroId
        }
        collaborator {
          id
          name
          email
          company
          title
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
        collaborators {
          nextToken
        }
        size
        gridOrder
        status
        hero {
          id
          url
          alt
          caption
          createdAt
          updatedAt
          projectGalleryId
        }
        gallery {
          nextToken
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
        projectHeroId
      }
      subcategory {
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
          size
          gridOrder
          status
          createdAt
          updatedAt
          departmentProjectsId
          projectLocationId
          projectCreatedById
          projectLastUpdatedById
          projectHeroId
        }
        subcategory {
          id
          name
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
        collaborators {
          nextToken
        }
        size
        gridOrder
        status
        hero {
          id
          url
          alt
          caption
          createdAt
          updatedAt
          projectGalleryId
        }
        gallery {
          nextToken
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
        projectHeroId
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
          size
          gridOrder
          status
          createdAt
          updatedAt
          departmentProjectsId
          projectLocationId
          projectCreatedById
          projectLastUpdatedById
          projectHeroId
        }
        buildingType {
          id
          name
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
        collaborators {
          nextToken
        }
        size
        gridOrder
        status
        hero {
          id
          url
          alt
          caption
          createdAt
          updatedAt
          projectGalleryId
        }
        gallery {
          nextToken
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
        projectHeroId
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
          size
          gridOrder
          status
          createdAt
          updatedAt
          departmentProjectsId
          projectLocationId
          projectCreatedById
          projectLastUpdatedById
          projectHeroId
        }
        projectType {
          id
          name
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
