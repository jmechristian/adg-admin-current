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
export const onCreateCollaborator = /* GraphQL */ `
  subscription OnCreateCollaborator {
    onCreateCollaborator {
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
export const onUpdateCollaborator = /* GraphQL */ `
  subscription OnUpdateCollaborator {
    onUpdateCollaborator {
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
export const onDeleteCollaborator = /* GraphQL */ `
  subscription OnDeleteCollaborator {
    onDeleteCollaborator {
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
export const onCreateDepartment = /* GraphQL */ `
  subscription OnCreateDepartment {
    onCreateDepartment {
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
export const onUpdateDepartment = /* GraphQL */ `
  subscription OnUpdateDepartment {
    onUpdateDepartment {
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
export const onDeleteDepartment = /* GraphQL */ `
  subscription OnDeleteDepartment {
    onDeleteDepartment {
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
export const onCreateImageObject = /* GraphQL */ `
  subscription OnCreateImageObject {
    onCreateImageObject {
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
export const onUpdateImageObject = /* GraphQL */ `
  subscription OnUpdateImageObject {
    onUpdateImageObject {
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
export const onDeleteImageObject = /* GraphQL */ `
  subscription OnDeleteImageObject {
    onDeleteImageObject {
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProjectCollaborators = /* GraphQL */ `
  subscription OnCreateProjectCollaborators {
    onCreateProjectCollaborators {
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
export const onUpdateProjectCollaborators = /* GraphQL */ `
  subscription OnUpdateProjectCollaborators {
    onUpdateProjectCollaborators {
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
export const onDeleteProjectCollaborators = /* GraphQL */ `
  subscription OnDeleteProjectCollaborators {
    onDeleteProjectCollaborators {
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
