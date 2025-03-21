/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
  email: string,
  role: Role,
};

export enum Role {
  ADMIN = "ADMIN",
  EDITOR = "EDITOR",
  VIEWER = "VIEWER",
}


export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  role?: ModelRoleInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelRoleInput = {
  eq?: Role | null,
  ne?: Role | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  email: string,
  role: Role,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  role?: Role | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateLocationInput = {
  id?: string | null,
  name?: string | null,
  address?: string | null,
  description?: string | null,
  latitude: number,
  longitude: number,
};

export type ModelLocationConditionInput = {
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  description?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  and?: Array< ModelLocationConditionInput | null > | null,
  or?: Array< ModelLocationConditionInput | null > | null,
  not?: ModelLocationConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Location = {
  __typename: "Location",
  id: string,
  name?: string | null,
  address?: string | null,
  description?: string | null,
  latitude: number,
  longitude: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateLocationInput = {
  id: string,
  name?: string | null,
  address?: string | null,
  description?: string | null,
  latitude?: number | null,
  longitude?: number | null,
};

export type DeleteLocationInput = {
  id: string,
};

export type CreateGalleryInput = {
  id?: string | null,
  galleryProjectId?: string | null,
};

export type ModelGalleryConditionInput = {
  and?: Array< ModelGalleryConditionInput | null > | null,
  or?: Array< ModelGalleryConditionInput | null > | null,
  not?: ModelGalleryConditionInput | null,
  galleryProjectId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Gallery = {
  __typename: "Gallery",
  id: string,
  images?: ModelImageObjectConnection | null,
  project?: Project | null,
  createdAt: string,
  updatedAt: string,
  galleryProjectId?: string | null,
};

export type ModelImageObjectConnection = {
  __typename: "ModelImageObjectConnection",
  items:  Array<ImageObject | null >,
  nextToken?: string | null,
};

export type ImageObject = {
  __typename: "ImageObject",
  id: string,
  url: string,
  alt: string,
  caption?: string | null,
  gallery?: Gallery | null,
  order?: number | null,
  createdAt: string,
  updatedAt: string,
  galleryImagesId?: string | null,
};

export type Project = {
  __typename: "Project",
  id: string,
  oldId?: string | null,
  name: string,
  description?: string | null,
  location?: Location | null,
  locationString?: string | null,
  createdBy?: User | null,
  lastUpdatedBy?: User | null,
  featured?: boolean | null,
  link: string,
  quote?: string | null,
  quoteAttribution?: string | null,
  collaborators?: string | null,
  size?: string | null,
  gridOrder?: number | null,
  status: Status,
  gallery?: Gallery | null,
  department: Department,
  subcategories?: ModelProjectSubcategoriesConnection | null,
  building_type?: ModelProjectBuildingTypesConnection | null,
  project_type?: ModelProjectProjectTypesConnection | null,
  createdAt: string,
  updatedAt: string,
  departmentProjectsId?: string | null,
  projectLocationId?: string | null,
  projectCreatedById?: string | null,
  projectLastUpdatedById?: string | null,
  projectGalleryId?: string | null,
};

export enum Status {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
  ARCHIVED = "ARCHIVED",
}


export type Department = {
  __typename: "Department",
  id: string,
  name: string,
  projects?: ModelProjectConnection | null,
  subcategories?: ModelDepartmentSubcategoriesConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelProjectConnection = {
  __typename: "ModelProjectConnection",
  items:  Array<Project | null >,
  nextToken?: string | null,
};

export type ModelDepartmentSubcategoriesConnection = {
  __typename: "ModelDepartmentSubcategoriesConnection",
  items:  Array<DepartmentSubcategories | null >,
  nextToken?: string | null,
};

export type DepartmentSubcategories = {
  __typename: "DepartmentSubcategories",
  id: string,
  departmentID: string,
  subcategoryID: string,
  department: Department,
  subcategory: Subcategory,
  createdAt: string,
  updatedAt: string,
};

export type Subcategory = {
  __typename: "Subcategory",
  id: string,
  name: string,
  projects?: ModelProjectSubcategoriesConnection | null,
  departments?: ModelDepartmentSubcategoriesConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelProjectSubcategoriesConnection = {
  __typename: "ModelProjectSubcategoriesConnection",
  items:  Array<ProjectSubcategories | null >,
  nextToken?: string | null,
};

export type ProjectSubcategories = {
  __typename: "ProjectSubcategories",
  id: string,
  projectID: string,
  subcategoryID: string,
  project: Project,
  subcategory: Subcategory,
  createdAt: string,
  updatedAt: string,
};

export type ModelProjectBuildingTypesConnection = {
  __typename: "ModelProjectBuildingTypesConnection",
  items:  Array<ProjectBuildingTypes | null >,
  nextToken?: string | null,
};

export type ProjectBuildingTypes = {
  __typename: "ProjectBuildingTypes",
  id: string,
  projectID: string,
  buildingTypeID: string,
  project: Project,
  buildingType: BuildingType,
  createdAt: string,
  updatedAt: string,
};

export type BuildingType = {
  __typename: "BuildingType",
  id: string,
  name: string,
  projects?: ModelProjectBuildingTypesConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelProjectProjectTypesConnection = {
  __typename: "ModelProjectProjectTypesConnection",
  items:  Array<ProjectProjectTypes | null >,
  nextToken?: string | null,
};

export type ProjectProjectTypes = {
  __typename: "ProjectProjectTypes",
  id: string,
  projectID: string,
  projectTypeID: string,
  project: Project,
  projectType: ProjectType,
  createdAt: string,
  updatedAt: string,
};

export type ProjectType = {
  __typename: "ProjectType",
  id: string,
  name: string,
  projects?: ModelProjectProjectTypesConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateGalleryInput = {
  id: string,
  galleryProjectId?: string | null,
};

export type DeleteGalleryInput = {
  id: string,
};

export type CreateProjectInput = {
  id?: string | null,
  oldId?: string | null,
  name: string,
  description?: string | null,
  locationString?: string | null,
  featured?: boolean | null,
  link: string,
  quote?: string | null,
  quoteAttribution?: string | null,
  collaborators?: string | null,
  size?: string | null,
  gridOrder?: number | null,
  status: Status,
  departmentProjectsId?: string | null,
  projectLocationId?: string | null,
  projectCreatedById?: string | null,
  projectLastUpdatedById?: string | null,
  projectGalleryId?: string | null,
};

export type ModelProjectConditionInput = {
  oldId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  locationString?: ModelStringInput | null,
  featured?: ModelBooleanInput | null,
  link?: ModelStringInput | null,
  quote?: ModelStringInput | null,
  quoteAttribution?: ModelStringInput | null,
  collaborators?: ModelStringInput | null,
  size?: ModelStringInput | null,
  gridOrder?: ModelIntInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelProjectConditionInput | null > | null,
  or?: Array< ModelProjectConditionInput | null > | null,
  not?: ModelProjectConditionInput | null,
  departmentProjectsId?: ModelIDInput | null,
  projectLocationId?: ModelIDInput | null,
  projectCreatedById?: ModelIDInput | null,
  projectLastUpdatedById?: ModelIDInput | null,
  projectGalleryId?: ModelIDInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelStatusInput = {
  eq?: Status | null,
  ne?: Status | null,
};

export type UpdateProjectInput = {
  id: string,
  oldId?: string | null,
  name?: string | null,
  description?: string | null,
  locationString?: string | null,
  featured?: boolean | null,
  link?: string | null,
  quote?: string | null,
  quoteAttribution?: string | null,
  collaborators?: string | null,
  size?: string | null,
  gridOrder?: number | null,
  status?: Status | null,
  departmentProjectsId?: string | null,
  projectLocationId?: string | null,
  projectCreatedById?: string | null,
  projectLastUpdatedById?: string | null,
  projectGalleryId?: string | null,
};

export type DeleteProjectInput = {
  id: string,
};

export type CreateDepartmentInput = {
  id?: string | null,
  name: string,
};

export type ModelDepartmentConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelDepartmentConditionInput | null > | null,
  or?: Array< ModelDepartmentConditionInput | null > | null,
  not?: ModelDepartmentConditionInput | null,
};

export type UpdateDepartmentInput = {
  id: string,
  name?: string | null,
};

export type DeleteDepartmentInput = {
  id: string,
};

export type CreateImageObjectInput = {
  id?: string | null,
  url: string,
  alt: string,
  caption?: string | null,
  order?: number | null,
  galleryImagesId?: string | null,
};

export type ModelImageObjectConditionInput = {
  url?: ModelStringInput | null,
  alt?: ModelStringInput | null,
  caption?: ModelStringInput | null,
  order?: ModelIntInput | null,
  and?: Array< ModelImageObjectConditionInput | null > | null,
  or?: Array< ModelImageObjectConditionInput | null > | null,
  not?: ModelImageObjectConditionInput | null,
  galleryImagesId?: ModelIDInput | null,
};

export type UpdateImageObjectInput = {
  id: string,
  url?: string | null,
  alt?: string | null,
  caption?: string | null,
  order?: number | null,
  galleryImagesId?: string | null,
};

export type DeleteImageObjectInput = {
  id: string,
};

export type CreateSubcategoryInput = {
  id?: string | null,
  name: string,
};

export type ModelSubcategoryConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelSubcategoryConditionInput | null > | null,
  or?: Array< ModelSubcategoryConditionInput | null > | null,
  not?: ModelSubcategoryConditionInput | null,
};

export type UpdateSubcategoryInput = {
  id: string,
  name?: string | null,
};

export type DeleteSubcategoryInput = {
  id: string,
};

export type CreateBuildingTypeInput = {
  id?: string | null,
  name: string,
};

export type ModelBuildingTypeConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelBuildingTypeConditionInput | null > | null,
  or?: Array< ModelBuildingTypeConditionInput | null > | null,
  not?: ModelBuildingTypeConditionInput | null,
};

export type UpdateBuildingTypeInput = {
  id: string,
  name?: string | null,
};

export type DeleteBuildingTypeInput = {
  id: string,
};

export type CreateProjectTypeInput = {
  id?: string | null,
  name: string,
};

export type ModelProjectTypeConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelProjectTypeConditionInput | null > | null,
  or?: Array< ModelProjectTypeConditionInput | null > | null,
  not?: ModelProjectTypeConditionInput | null,
};

export type UpdateProjectTypeInput = {
  id: string,
  name?: string | null,
};

export type DeleteProjectTypeInput = {
  id: string,
};

export type CreateProjectSubcategoriesInput = {
  id?: string | null,
  projectID: string,
  subcategoryID: string,
};

export type ModelProjectSubcategoriesConditionInput = {
  projectID?: ModelIDInput | null,
  subcategoryID?: ModelIDInput | null,
  and?: Array< ModelProjectSubcategoriesConditionInput | null > | null,
  or?: Array< ModelProjectSubcategoriesConditionInput | null > | null,
  not?: ModelProjectSubcategoriesConditionInput | null,
};

export type UpdateProjectSubcategoriesInput = {
  id: string,
  projectID?: string | null,
  subcategoryID?: string | null,
};

export type DeleteProjectSubcategoriesInput = {
  id: string,
};

export type CreateProjectBuildingTypesInput = {
  id?: string | null,
  projectID: string,
  buildingTypeID: string,
};

export type ModelProjectBuildingTypesConditionInput = {
  projectID?: ModelIDInput | null,
  buildingTypeID?: ModelIDInput | null,
  and?: Array< ModelProjectBuildingTypesConditionInput | null > | null,
  or?: Array< ModelProjectBuildingTypesConditionInput | null > | null,
  not?: ModelProjectBuildingTypesConditionInput | null,
};

export type UpdateProjectBuildingTypesInput = {
  id: string,
  projectID?: string | null,
  buildingTypeID?: string | null,
};

export type DeleteProjectBuildingTypesInput = {
  id: string,
};

export type CreateProjectProjectTypesInput = {
  id?: string | null,
  projectID: string,
  projectTypeID: string,
};

export type ModelProjectProjectTypesConditionInput = {
  projectID?: ModelIDInput | null,
  projectTypeID?: ModelIDInput | null,
  and?: Array< ModelProjectProjectTypesConditionInput | null > | null,
  or?: Array< ModelProjectProjectTypesConditionInput | null > | null,
  not?: ModelProjectProjectTypesConditionInput | null,
};

export type UpdateProjectProjectTypesInput = {
  id: string,
  projectID?: string | null,
  projectTypeID?: string | null,
};

export type DeleteProjectProjectTypesInput = {
  id: string,
};

export type CreateDepartmentSubcategoriesInput = {
  id?: string | null,
  departmentID: string,
  subcategoryID: string,
};

export type ModelDepartmentSubcategoriesConditionInput = {
  departmentID?: ModelIDInput | null,
  subcategoryID?: ModelIDInput | null,
  and?: Array< ModelDepartmentSubcategoriesConditionInput | null > | null,
  or?: Array< ModelDepartmentSubcategoriesConditionInput | null > | null,
  not?: ModelDepartmentSubcategoriesConditionInput | null,
};

export type UpdateDepartmentSubcategoriesInput = {
  id: string,
  departmentID?: string | null,
  subcategoryID?: string | null,
};

export type DeleteDepartmentSubcategoriesInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  role?: ModelRoleInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelLocationFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  description?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  and?: Array< ModelLocationFilterInput | null > | null,
  or?: Array< ModelLocationFilterInput | null > | null,
  not?: ModelLocationFilterInput | null,
};

export type ModelLocationConnection = {
  __typename: "ModelLocationConnection",
  items:  Array<Location | null >,
  nextToken?: string | null,
};

export type ModelGalleryFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelGalleryFilterInput | null > | null,
  or?: Array< ModelGalleryFilterInput | null > | null,
  not?: ModelGalleryFilterInput | null,
  galleryProjectId?: ModelIDInput | null,
};

export type ModelGalleryConnection = {
  __typename: "ModelGalleryConnection",
  items:  Array<Gallery | null >,
  nextToken?: string | null,
};

export type ModelProjectFilterInput = {
  id?: ModelIDInput | null,
  oldId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  locationString?: ModelStringInput | null,
  featured?: ModelBooleanInput | null,
  link?: ModelStringInput | null,
  quote?: ModelStringInput | null,
  quoteAttribution?: ModelStringInput | null,
  collaborators?: ModelStringInput | null,
  size?: ModelStringInput | null,
  gridOrder?: ModelIntInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelProjectFilterInput | null > | null,
  or?: Array< ModelProjectFilterInput | null > | null,
  not?: ModelProjectFilterInput | null,
  departmentProjectsId?: ModelIDInput | null,
  projectLocationId?: ModelIDInput | null,
  projectCreatedById?: ModelIDInput | null,
  projectLastUpdatedById?: ModelIDInput | null,
  projectGalleryId?: ModelIDInput | null,
};

export type ModelDepartmentFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelDepartmentFilterInput | null > | null,
  or?: Array< ModelDepartmentFilterInput | null > | null,
  not?: ModelDepartmentFilterInput | null,
};

export type ModelDepartmentConnection = {
  __typename: "ModelDepartmentConnection",
  items:  Array<Department | null >,
  nextToken?: string | null,
};

export type ModelImageObjectFilterInput = {
  id?: ModelIDInput | null,
  url?: ModelStringInput | null,
  alt?: ModelStringInput | null,
  caption?: ModelStringInput | null,
  order?: ModelIntInput | null,
  and?: Array< ModelImageObjectFilterInput | null > | null,
  or?: Array< ModelImageObjectFilterInput | null > | null,
  not?: ModelImageObjectFilterInput | null,
  galleryImagesId?: ModelIDInput | null,
};

export type ModelSubcategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelSubcategoryFilterInput | null > | null,
  or?: Array< ModelSubcategoryFilterInput | null > | null,
  not?: ModelSubcategoryFilterInput | null,
};

export type ModelSubcategoryConnection = {
  __typename: "ModelSubcategoryConnection",
  items:  Array<Subcategory | null >,
  nextToken?: string | null,
};

export type ModelBuildingTypeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelBuildingTypeFilterInput | null > | null,
  or?: Array< ModelBuildingTypeFilterInput | null > | null,
  not?: ModelBuildingTypeFilterInput | null,
};

export type ModelBuildingTypeConnection = {
  __typename: "ModelBuildingTypeConnection",
  items:  Array<BuildingType | null >,
  nextToken?: string | null,
};

export type ModelProjectTypeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelProjectTypeFilterInput | null > | null,
  or?: Array< ModelProjectTypeFilterInput | null > | null,
  not?: ModelProjectTypeFilterInput | null,
};

export type ModelProjectTypeConnection = {
  __typename: "ModelProjectTypeConnection",
  items:  Array<ProjectType | null >,
  nextToken?: string | null,
};

export type ModelProjectSubcategoriesFilterInput = {
  id?: ModelIDInput | null,
  projectID?: ModelIDInput | null,
  subcategoryID?: ModelIDInput | null,
  and?: Array< ModelProjectSubcategoriesFilterInput | null > | null,
  or?: Array< ModelProjectSubcategoriesFilterInput | null > | null,
  not?: ModelProjectSubcategoriesFilterInput | null,
};

export type ModelProjectBuildingTypesFilterInput = {
  id?: ModelIDInput | null,
  projectID?: ModelIDInput | null,
  buildingTypeID?: ModelIDInput | null,
  and?: Array< ModelProjectBuildingTypesFilterInput | null > | null,
  or?: Array< ModelProjectBuildingTypesFilterInput | null > | null,
  not?: ModelProjectBuildingTypesFilterInput | null,
};

export type ModelProjectProjectTypesFilterInput = {
  id?: ModelIDInput | null,
  projectID?: ModelIDInput | null,
  projectTypeID?: ModelIDInput | null,
  and?: Array< ModelProjectProjectTypesFilterInput | null > | null,
  or?: Array< ModelProjectProjectTypesFilterInput | null > | null,
  not?: ModelProjectProjectTypesFilterInput | null,
};

export type ModelDepartmentSubcategoriesFilterInput = {
  id?: ModelIDInput | null,
  departmentID?: ModelIDInput | null,
  subcategoryID?: ModelIDInput | null,
  and?: Array< ModelDepartmentSubcategoriesFilterInput | null > | null,
  or?: Array< ModelDepartmentSubcategoriesFilterInput | null > | null,
  not?: ModelDepartmentSubcategoriesFilterInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    role: Role,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    role: Role,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    role: Role,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLocationMutationVariables = {
  input: CreateLocationInput,
  condition?: ModelLocationConditionInput | null,
};

export type CreateLocationMutation = {
  createLocation?:  {
    __typename: "Location",
    id: string,
    name?: string | null,
    address?: string | null,
    description?: string | null,
    latitude: number,
    longitude: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLocationMutationVariables = {
  input: UpdateLocationInput,
  condition?: ModelLocationConditionInput | null,
};

export type UpdateLocationMutation = {
  updateLocation?:  {
    __typename: "Location",
    id: string,
    name?: string | null,
    address?: string | null,
    description?: string | null,
    latitude: number,
    longitude: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLocationMutationVariables = {
  input: DeleteLocationInput,
  condition?: ModelLocationConditionInput | null,
};

export type DeleteLocationMutation = {
  deleteLocation?:  {
    __typename: "Location",
    id: string,
    name?: string | null,
    address?: string | null,
    description?: string | null,
    latitude: number,
    longitude: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGalleryMutationVariables = {
  input: CreateGalleryInput,
  condition?: ModelGalleryConditionInput | null,
};

export type CreateGalleryMutation = {
  createGallery?:  {
    __typename: "Gallery",
    id: string,
    images?:  {
      __typename: "ModelImageObjectConnection",
      items:  Array< {
        __typename: "ImageObject",
        id: string,
        url: string,
        alt: string,
        caption?: string | null,
        order?: number | null,
        createdAt: string,
        updatedAt: string,
        galleryImagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    project?:  {
      __typename: "Project",
      id: string,
      oldId?: string | null,
      name: string,
      description?: string | null,
      location?:  {
        __typename: "Location",
        id: string,
        name?: string | null,
        address?: string | null,
        description?: string | null,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      locationString?: string | null,
      createdBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      lastUpdatedBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      featured?: boolean | null,
      link: string,
      quote?: string | null,
      quoteAttribution?: string | null,
      collaborators?: string | null,
      size?: string | null,
      gridOrder?: number | null,
      status: Status,
      gallery?:  {
        __typename: "Gallery",
        id: string,
        createdAt: string,
        updatedAt: string,
        galleryProjectId?: string | null,
      } | null,
      department:  {
        __typename: "Department",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      subcategories?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      building_type?:  {
        __typename: "ModelProjectBuildingTypesConnection",
        nextToken?: string | null,
      } | null,
      project_type?:  {
        __typename: "ModelProjectProjectTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      departmentProjectsId?: string | null,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    galleryProjectId?: string | null,
  } | null,
};

export type UpdateGalleryMutationVariables = {
  input: UpdateGalleryInput,
  condition?: ModelGalleryConditionInput | null,
};

export type UpdateGalleryMutation = {
  updateGallery?:  {
    __typename: "Gallery",
    id: string,
    images?:  {
      __typename: "ModelImageObjectConnection",
      items:  Array< {
        __typename: "ImageObject",
        id: string,
        url: string,
        alt: string,
        caption?: string | null,
        order?: number | null,
        createdAt: string,
        updatedAt: string,
        galleryImagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    project?:  {
      __typename: "Project",
      id: string,
      oldId?: string | null,
      name: string,
      description?: string | null,
      location?:  {
        __typename: "Location",
        id: string,
        name?: string | null,
        address?: string | null,
        description?: string | null,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      locationString?: string | null,
      createdBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      lastUpdatedBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      featured?: boolean | null,
      link: string,
      quote?: string | null,
      quoteAttribution?: string | null,
      collaborators?: string | null,
      size?: string | null,
      gridOrder?: number | null,
      status: Status,
      gallery?:  {
        __typename: "Gallery",
        id: string,
        createdAt: string,
        updatedAt: string,
        galleryProjectId?: string | null,
      } | null,
      department:  {
        __typename: "Department",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      subcategories?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      building_type?:  {
        __typename: "ModelProjectBuildingTypesConnection",
        nextToken?: string | null,
      } | null,
      project_type?:  {
        __typename: "ModelProjectProjectTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      departmentProjectsId?: string | null,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    galleryProjectId?: string | null,
  } | null,
};

export type DeleteGalleryMutationVariables = {
  input: DeleteGalleryInput,
  condition?: ModelGalleryConditionInput | null,
};

export type DeleteGalleryMutation = {
  deleteGallery?:  {
    __typename: "Gallery",
    id: string,
    images?:  {
      __typename: "ModelImageObjectConnection",
      items:  Array< {
        __typename: "ImageObject",
        id: string,
        url: string,
        alt: string,
        caption?: string | null,
        order?: number | null,
        createdAt: string,
        updatedAt: string,
        galleryImagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    project?:  {
      __typename: "Project",
      id: string,
      oldId?: string | null,
      name: string,
      description?: string | null,
      location?:  {
        __typename: "Location",
        id: string,
        name?: string | null,
        address?: string | null,
        description?: string | null,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      locationString?: string | null,
      createdBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      lastUpdatedBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      featured?: boolean | null,
      link: string,
      quote?: string | null,
      quoteAttribution?: string | null,
      collaborators?: string | null,
      size?: string | null,
      gridOrder?: number | null,
      status: Status,
      gallery?:  {
        __typename: "Gallery",
        id: string,
        createdAt: string,
        updatedAt: string,
        galleryProjectId?: string | null,
      } | null,
      department:  {
        __typename: "Department",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      subcategories?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      building_type?:  {
        __typename: "ModelProjectBuildingTypesConnection",
        nextToken?: string | null,
      } | null,
      project_type?:  {
        __typename: "ModelProjectProjectTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      departmentProjectsId?: string | null,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    galleryProjectId?: string | null,
  } | null,
};

export type CreateProjectMutationVariables = {
  input: CreateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type CreateProjectMutation = {
  createProject?:  {
    __typename: "Project",
    id: string,
    oldId?: string | null,
    name: string,
    description?: string | null,
    location?:  {
      __typename: "Location",
      id: string,
      name?: string | null,
      address?: string | null,
      description?: string | null,
      latitude: number,
      longitude: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    locationString?: string | null,
    createdBy?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      role: Role,
      createdAt: string,
      updatedAt: string,
    } | null,
    lastUpdatedBy?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      role: Role,
      createdAt: string,
      updatedAt: string,
    } | null,
    featured?: boolean | null,
    link: string,
    quote?: string | null,
    quoteAttribution?: string | null,
    collaborators?: string | null,
    size?: string | null,
    gridOrder?: number | null,
    status: Status,
    gallery?:  {
      __typename: "Gallery",
      id: string,
      images?:  {
        __typename: "ModelImageObjectConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "Project",
        id: string,
        oldId?: string | null,
        name: string,
        description?: string | null,
        locationString?: string | null,
        featured?: boolean | null,
        link: string,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        createdAt: string,
        updatedAt: string,
        departmentProjectsId?: string | null,
        projectLocationId?: string | null,
        projectCreatedById?: string | null,
        projectLastUpdatedById?: string | null,
        projectGalleryId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      galleryProjectId?: string | null,
    } | null,
    department:  {
      __typename: "Department",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    subcategories?:  {
      __typename: "ModelProjectSubcategoriesConnection",
      items:  Array< {
        __typename: "ProjectSubcategories",
        id: string,
        projectID: string,
        subcategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    building_type?:  {
      __typename: "ModelProjectBuildingTypesConnection",
      items:  Array< {
        __typename: "ProjectBuildingTypes",
        id: string,
        projectID: string,
        buildingTypeID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    project_type?:  {
      __typename: "ModelProjectProjectTypesConnection",
      items:  Array< {
        __typename: "ProjectProjectTypes",
        id: string,
        projectID: string,
        projectTypeID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    departmentProjectsId?: string | null,
    projectLocationId?: string | null,
    projectCreatedById?: string | null,
    projectLastUpdatedById?: string | null,
    projectGalleryId?: string | null,
  } | null,
};

export type UpdateProjectMutationVariables = {
  input: UpdateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type UpdateProjectMutation = {
  updateProject?:  {
    __typename: "Project",
    id: string,
    oldId?: string | null,
    name: string,
    description?: string | null,
    location?:  {
      __typename: "Location",
      id: string,
      name?: string | null,
      address?: string | null,
      description?: string | null,
      latitude: number,
      longitude: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    locationString?: string | null,
    createdBy?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      role: Role,
      createdAt: string,
      updatedAt: string,
    } | null,
    lastUpdatedBy?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      role: Role,
      createdAt: string,
      updatedAt: string,
    } | null,
    featured?: boolean | null,
    link: string,
    quote?: string | null,
    quoteAttribution?: string | null,
    collaborators?: string | null,
    size?: string | null,
    gridOrder?: number | null,
    status: Status,
    gallery?:  {
      __typename: "Gallery",
      id: string,
      images?:  {
        __typename: "ModelImageObjectConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "Project",
        id: string,
        oldId?: string | null,
        name: string,
        description?: string | null,
        locationString?: string | null,
        featured?: boolean | null,
        link: string,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        createdAt: string,
        updatedAt: string,
        departmentProjectsId?: string | null,
        projectLocationId?: string | null,
        projectCreatedById?: string | null,
        projectLastUpdatedById?: string | null,
        projectGalleryId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      galleryProjectId?: string | null,
    } | null,
    department:  {
      __typename: "Department",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    subcategories?:  {
      __typename: "ModelProjectSubcategoriesConnection",
      items:  Array< {
        __typename: "ProjectSubcategories",
        id: string,
        projectID: string,
        subcategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    building_type?:  {
      __typename: "ModelProjectBuildingTypesConnection",
      items:  Array< {
        __typename: "ProjectBuildingTypes",
        id: string,
        projectID: string,
        buildingTypeID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    project_type?:  {
      __typename: "ModelProjectProjectTypesConnection",
      items:  Array< {
        __typename: "ProjectProjectTypes",
        id: string,
        projectID: string,
        projectTypeID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    departmentProjectsId?: string | null,
    projectLocationId?: string | null,
    projectCreatedById?: string | null,
    projectLastUpdatedById?: string | null,
    projectGalleryId?: string | null,
  } | null,
};

export type DeleteProjectMutationVariables = {
  input: DeleteProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type DeleteProjectMutation = {
  deleteProject?:  {
    __typename: "Project",
    id: string,
    oldId?: string | null,
    name: string,
    description?: string | null,
    location?:  {
      __typename: "Location",
      id: string,
      name?: string | null,
      address?: string | null,
      description?: string | null,
      latitude: number,
      longitude: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    locationString?: string | null,
    createdBy?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      role: Role,
      createdAt: string,
      updatedAt: string,
    } | null,
    lastUpdatedBy?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      role: Role,
      createdAt: string,
      updatedAt: string,
    } | null,
    featured?: boolean | null,
    link: string,
    quote?: string | null,
    quoteAttribution?: string | null,
    collaborators?: string | null,
    size?: string | null,
    gridOrder?: number | null,
    status: Status,
    gallery?:  {
      __typename: "Gallery",
      id: string,
      images?:  {
        __typename: "ModelImageObjectConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "Project",
        id: string,
        oldId?: string | null,
        name: string,
        description?: string | null,
        locationString?: string | null,
        featured?: boolean | null,
        link: string,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        createdAt: string,
        updatedAt: string,
        departmentProjectsId?: string | null,
        projectLocationId?: string | null,
        projectCreatedById?: string | null,
        projectLastUpdatedById?: string | null,
        projectGalleryId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      galleryProjectId?: string | null,
    } | null,
    department:  {
      __typename: "Department",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    subcategories?:  {
      __typename: "ModelProjectSubcategoriesConnection",
      items:  Array< {
        __typename: "ProjectSubcategories",
        id: string,
        projectID: string,
        subcategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    building_type?:  {
      __typename: "ModelProjectBuildingTypesConnection",
      items:  Array< {
        __typename: "ProjectBuildingTypes",
        id: string,
        projectID: string,
        buildingTypeID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    project_type?:  {
      __typename: "ModelProjectProjectTypesConnection",
      items:  Array< {
        __typename: "ProjectProjectTypes",
        id: string,
        projectID: string,
        projectTypeID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    departmentProjectsId?: string | null,
    projectLocationId?: string | null,
    projectCreatedById?: string | null,
    projectLastUpdatedById?: string | null,
    projectGalleryId?: string | null,
  } | null,
};

export type CreateDepartmentMutationVariables = {
  input: CreateDepartmentInput,
  condition?: ModelDepartmentConditionInput | null,
};

export type CreateDepartmentMutation = {
  createDepartment?:  {
    __typename: "Department",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectConnection",
      items:  Array< {
        __typename: "Project",
        id: string,
        oldId?: string | null,
        name: string,
        description?: string | null,
        locationString?: string | null,
        featured?: boolean | null,
        link: string,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        createdAt: string,
        updatedAt: string,
        departmentProjectsId?: string | null,
        projectLocationId?: string | null,
        projectCreatedById?: string | null,
        projectLastUpdatedById?: string | null,
        projectGalleryId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    subcategories?:  {
      __typename: "ModelDepartmentSubcategoriesConnection",
      items:  Array< {
        __typename: "DepartmentSubcategories",
        id: string,
        departmentID: string,
        subcategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDepartmentMutationVariables = {
  input: UpdateDepartmentInput,
  condition?: ModelDepartmentConditionInput | null,
};

export type UpdateDepartmentMutation = {
  updateDepartment?:  {
    __typename: "Department",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectConnection",
      items:  Array< {
        __typename: "Project",
        id: string,
        oldId?: string | null,
        name: string,
        description?: string | null,
        locationString?: string | null,
        featured?: boolean | null,
        link: string,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        createdAt: string,
        updatedAt: string,
        departmentProjectsId?: string | null,
        projectLocationId?: string | null,
        projectCreatedById?: string | null,
        projectLastUpdatedById?: string | null,
        projectGalleryId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    subcategories?:  {
      __typename: "ModelDepartmentSubcategoriesConnection",
      items:  Array< {
        __typename: "DepartmentSubcategories",
        id: string,
        departmentID: string,
        subcategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDepartmentMutationVariables = {
  input: DeleteDepartmentInput,
  condition?: ModelDepartmentConditionInput | null,
};

export type DeleteDepartmentMutation = {
  deleteDepartment?:  {
    __typename: "Department",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectConnection",
      items:  Array< {
        __typename: "Project",
        id: string,
        oldId?: string | null,
        name: string,
        description?: string | null,
        locationString?: string | null,
        featured?: boolean | null,
        link: string,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        createdAt: string,
        updatedAt: string,
        departmentProjectsId?: string | null,
        projectLocationId?: string | null,
        projectCreatedById?: string | null,
        projectLastUpdatedById?: string | null,
        projectGalleryId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    subcategories?:  {
      __typename: "ModelDepartmentSubcategoriesConnection",
      items:  Array< {
        __typename: "DepartmentSubcategories",
        id: string,
        departmentID: string,
        subcategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateImageObjectMutationVariables = {
  input: CreateImageObjectInput,
  condition?: ModelImageObjectConditionInput | null,
};

export type CreateImageObjectMutation = {
  createImageObject?:  {
    __typename: "ImageObject",
    id: string,
    url: string,
    alt: string,
    caption?: string | null,
    gallery?:  {
      __typename: "Gallery",
      id: string,
      images?:  {
        __typename: "ModelImageObjectConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "Project",
        id: string,
        oldId?: string | null,
        name: string,
        description?: string | null,
        locationString?: string | null,
        featured?: boolean | null,
        link: string,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        createdAt: string,
        updatedAt: string,
        departmentProjectsId?: string | null,
        projectLocationId?: string | null,
        projectCreatedById?: string | null,
        projectLastUpdatedById?: string | null,
        projectGalleryId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      galleryProjectId?: string | null,
    } | null,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    galleryImagesId?: string | null,
  } | null,
};

export type UpdateImageObjectMutationVariables = {
  input: UpdateImageObjectInput,
  condition?: ModelImageObjectConditionInput | null,
};

export type UpdateImageObjectMutation = {
  updateImageObject?:  {
    __typename: "ImageObject",
    id: string,
    url: string,
    alt: string,
    caption?: string | null,
    gallery?:  {
      __typename: "Gallery",
      id: string,
      images?:  {
        __typename: "ModelImageObjectConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "Project",
        id: string,
        oldId?: string | null,
        name: string,
        description?: string | null,
        locationString?: string | null,
        featured?: boolean | null,
        link: string,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        createdAt: string,
        updatedAt: string,
        departmentProjectsId?: string | null,
        projectLocationId?: string | null,
        projectCreatedById?: string | null,
        projectLastUpdatedById?: string | null,
        projectGalleryId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      galleryProjectId?: string | null,
    } | null,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    galleryImagesId?: string | null,
  } | null,
};

export type DeleteImageObjectMutationVariables = {
  input: DeleteImageObjectInput,
  condition?: ModelImageObjectConditionInput | null,
};

export type DeleteImageObjectMutation = {
  deleteImageObject?:  {
    __typename: "ImageObject",
    id: string,
    url: string,
    alt: string,
    caption?: string | null,
    gallery?:  {
      __typename: "Gallery",
      id: string,
      images?:  {
        __typename: "ModelImageObjectConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "Project",
        id: string,
        oldId?: string | null,
        name: string,
        description?: string | null,
        locationString?: string | null,
        featured?: boolean | null,
        link: string,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        createdAt: string,
        updatedAt: string,
        departmentProjectsId?: string | null,
        projectLocationId?: string | null,
        projectCreatedById?: string | null,
        projectLastUpdatedById?: string | null,
        projectGalleryId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      galleryProjectId?: string | null,
    } | null,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    galleryImagesId?: string | null,
  } | null,
};

export type CreateSubcategoryMutationVariables = {
  input: CreateSubcategoryInput,
  condition?: ModelSubcategoryConditionInput | null,
};

export type CreateSubcategoryMutation = {
  createSubcategory?:  {
    __typename: "Subcategory",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectSubcategoriesConnection",
      items:  Array< {
        __typename: "ProjectSubcategories",
        id: string,
        projectID: string,
        subcategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    departments?:  {
      __typename: "ModelDepartmentSubcategoriesConnection",
      items:  Array< {
        __typename: "DepartmentSubcategories",
        id: string,
        departmentID: string,
        subcategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSubcategoryMutationVariables = {
  input: UpdateSubcategoryInput,
  condition?: ModelSubcategoryConditionInput | null,
};

export type UpdateSubcategoryMutation = {
  updateSubcategory?:  {
    __typename: "Subcategory",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectSubcategoriesConnection",
      items:  Array< {
        __typename: "ProjectSubcategories",
        id: string,
        projectID: string,
        subcategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    departments?:  {
      __typename: "ModelDepartmentSubcategoriesConnection",
      items:  Array< {
        __typename: "DepartmentSubcategories",
        id: string,
        departmentID: string,
        subcategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSubcategoryMutationVariables = {
  input: DeleteSubcategoryInput,
  condition?: ModelSubcategoryConditionInput | null,
};

export type DeleteSubcategoryMutation = {
  deleteSubcategory?:  {
    __typename: "Subcategory",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectSubcategoriesConnection",
      items:  Array< {
        __typename: "ProjectSubcategories",
        id: string,
        projectID: string,
        subcategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    departments?:  {
      __typename: "ModelDepartmentSubcategoriesConnection",
      items:  Array< {
        __typename: "DepartmentSubcategories",
        id: string,
        departmentID: string,
        subcategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBuildingTypeMutationVariables = {
  input: CreateBuildingTypeInput,
  condition?: ModelBuildingTypeConditionInput | null,
};

export type CreateBuildingTypeMutation = {
  createBuildingType?:  {
    __typename: "BuildingType",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectBuildingTypesConnection",
      items:  Array< {
        __typename: "ProjectBuildingTypes",
        id: string,
        projectID: string,
        buildingTypeID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBuildingTypeMutationVariables = {
  input: UpdateBuildingTypeInput,
  condition?: ModelBuildingTypeConditionInput | null,
};

export type UpdateBuildingTypeMutation = {
  updateBuildingType?:  {
    __typename: "BuildingType",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectBuildingTypesConnection",
      items:  Array< {
        __typename: "ProjectBuildingTypes",
        id: string,
        projectID: string,
        buildingTypeID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBuildingTypeMutationVariables = {
  input: DeleteBuildingTypeInput,
  condition?: ModelBuildingTypeConditionInput | null,
};

export type DeleteBuildingTypeMutation = {
  deleteBuildingType?:  {
    __typename: "BuildingType",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectBuildingTypesConnection",
      items:  Array< {
        __typename: "ProjectBuildingTypes",
        id: string,
        projectID: string,
        buildingTypeID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProjectTypeMutationVariables = {
  input: CreateProjectTypeInput,
  condition?: ModelProjectTypeConditionInput | null,
};

export type CreateProjectTypeMutation = {
  createProjectType?:  {
    __typename: "ProjectType",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectProjectTypesConnection",
      items:  Array< {
        __typename: "ProjectProjectTypes",
        id: string,
        projectID: string,
        projectTypeID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProjectTypeMutationVariables = {
  input: UpdateProjectTypeInput,
  condition?: ModelProjectTypeConditionInput | null,
};

export type UpdateProjectTypeMutation = {
  updateProjectType?:  {
    __typename: "ProjectType",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectProjectTypesConnection",
      items:  Array< {
        __typename: "ProjectProjectTypes",
        id: string,
        projectID: string,
        projectTypeID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProjectTypeMutationVariables = {
  input: DeleteProjectTypeInput,
  condition?: ModelProjectTypeConditionInput | null,
};

export type DeleteProjectTypeMutation = {
  deleteProjectType?:  {
    __typename: "ProjectType",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectProjectTypesConnection",
      items:  Array< {
        __typename: "ProjectProjectTypes",
        id: string,
        projectID: string,
        projectTypeID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProjectSubcategoriesMutationVariables = {
  input: CreateProjectSubcategoriesInput,
  condition?: ModelProjectSubcategoriesConditionInput | null,
};

export type CreateProjectSubcategoriesMutation = {
  createProjectSubcategories?:  {
    __typename: "ProjectSubcategories",
    id: string,
    projectID: string,
    subcategoryID: string,
    project:  {
      __typename: "Project",
      id: string,
      oldId?: string | null,
      name: string,
      description?: string | null,
      location?:  {
        __typename: "Location",
        id: string,
        name?: string | null,
        address?: string | null,
        description?: string | null,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      locationString?: string | null,
      createdBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      lastUpdatedBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      featured?: boolean | null,
      link: string,
      quote?: string | null,
      quoteAttribution?: string | null,
      collaborators?: string | null,
      size?: string | null,
      gridOrder?: number | null,
      status: Status,
      gallery?:  {
        __typename: "Gallery",
        id: string,
        createdAt: string,
        updatedAt: string,
        galleryProjectId?: string | null,
      } | null,
      department:  {
        __typename: "Department",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      subcategories?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      building_type?:  {
        __typename: "ModelProjectBuildingTypesConnection",
        nextToken?: string | null,
      } | null,
      project_type?:  {
        __typename: "ModelProjectProjectTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      departmentProjectsId?: string | null,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    },
    subcategory:  {
      __typename: "Subcategory",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      departments?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProjectSubcategoriesMutationVariables = {
  input: UpdateProjectSubcategoriesInput,
  condition?: ModelProjectSubcategoriesConditionInput | null,
};

export type UpdateProjectSubcategoriesMutation = {
  updateProjectSubcategories?:  {
    __typename: "ProjectSubcategories",
    id: string,
    projectID: string,
    subcategoryID: string,
    project:  {
      __typename: "Project",
      id: string,
      oldId?: string | null,
      name: string,
      description?: string | null,
      location?:  {
        __typename: "Location",
        id: string,
        name?: string | null,
        address?: string | null,
        description?: string | null,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      locationString?: string | null,
      createdBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      lastUpdatedBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      featured?: boolean | null,
      link: string,
      quote?: string | null,
      quoteAttribution?: string | null,
      collaborators?: string | null,
      size?: string | null,
      gridOrder?: number | null,
      status: Status,
      gallery?:  {
        __typename: "Gallery",
        id: string,
        createdAt: string,
        updatedAt: string,
        galleryProjectId?: string | null,
      } | null,
      department:  {
        __typename: "Department",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      subcategories?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      building_type?:  {
        __typename: "ModelProjectBuildingTypesConnection",
        nextToken?: string | null,
      } | null,
      project_type?:  {
        __typename: "ModelProjectProjectTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      departmentProjectsId?: string | null,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    },
    subcategory:  {
      __typename: "Subcategory",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      departments?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProjectSubcategoriesMutationVariables = {
  input: DeleteProjectSubcategoriesInput,
  condition?: ModelProjectSubcategoriesConditionInput | null,
};

export type DeleteProjectSubcategoriesMutation = {
  deleteProjectSubcategories?:  {
    __typename: "ProjectSubcategories",
    id: string,
    projectID: string,
    subcategoryID: string,
    project:  {
      __typename: "Project",
      id: string,
      oldId?: string | null,
      name: string,
      description?: string | null,
      location?:  {
        __typename: "Location",
        id: string,
        name?: string | null,
        address?: string | null,
        description?: string | null,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      locationString?: string | null,
      createdBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      lastUpdatedBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      featured?: boolean | null,
      link: string,
      quote?: string | null,
      quoteAttribution?: string | null,
      collaborators?: string | null,
      size?: string | null,
      gridOrder?: number | null,
      status: Status,
      gallery?:  {
        __typename: "Gallery",
        id: string,
        createdAt: string,
        updatedAt: string,
        galleryProjectId?: string | null,
      } | null,
      department:  {
        __typename: "Department",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      subcategories?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      building_type?:  {
        __typename: "ModelProjectBuildingTypesConnection",
        nextToken?: string | null,
      } | null,
      project_type?:  {
        __typename: "ModelProjectProjectTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      departmentProjectsId?: string | null,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    },
    subcategory:  {
      __typename: "Subcategory",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      departments?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProjectBuildingTypesMutationVariables = {
  input: CreateProjectBuildingTypesInput,
  condition?: ModelProjectBuildingTypesConditionInput | null,
};

export type CreateProjectBuildingTypesMutation = {
  createProjectBuildingTypes?:  {
    __typename: "ProjectBuildingTypes",
    id: string,
    projectID: string,
    buildingTypeID: string,
    project:  {
      __typename: "Project",
      id: string,
      oldId?: string | null,
      name: string,
      description?: string | null,
      location?:  {
        __typename: "Location",
        id: string,
        name?: string | null,
        address?: string | null,
        description?: string | null,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      locationString?: string | null,
      createdBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      lastUpdatedBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      featured?: boolean | null,
      link: string,
      quote?: string | null,
      quoteAttribution?: string | null,
      collaborators?: string | null,
      size?: string | null,
      gridOrder?: number | null,
      status: Status,
      gallery?:  {
        __typename: "Gallery",
        id: string,
        createdAt: string,
        updatedAt: string,
        galleryProjectId?: string | null,
      } | null,
      department:  {
        __typename: "Department",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      subcategories?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      building_type?:  {
        __typename: "ModelProjectBuildingTypesConnection",
        nextToken?: string | null,
      } | null,
      project_type?:  {
        __typename: "ModelProjectProjectTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      departmentProjectsId?: string | null,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    },
    buildingType:  {
      __typename: "BuildingType",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectBuildingTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProjectBuildingTypesMutationVariables = {
  input: UpdateProjectBuildingTypesInput,
  condition?: ModelProjectBuildingTypesConditionInput | null,
};

export type UpdateProjectBuildingTypesMutation = {
  updateProjectBuildingTypes?:  {
    __typename: "ProjectBuildingTypes",
    id: string,
    projectID: string,
    buildingTypeID: string,
    project:  {
      __typename: "Project",
      id: string,
      oldId?: string | null,
      name: string,
      description?: string | null,
      location?:  {
        __typename: "Location",
        id: string,
        name?: string | null,
        address?: string | null,
        description?: string | null,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      locationString?: string | null,
      createdBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      lastUpdatedBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      featured?: boolean | null,
      link: string,
      quote?: string | null,
      quoteAttribution?: string | null,
      collaborators?: string | null,
      size?: string | null,
      gridOrder?: number | null,
      status: Status,
      gallery?:  {
        __typename: "Gallery",
        id: string,
        createdAt: string,
        updatedAt: string,
        galleryProjectId?: string | null,
      } | null,
      department:  {
        __typename: "Department",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      subcategories?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      building_type?:  {
        __typename: "ModelProjectBuildingTypesConnection",
        nextToken?: string | null,
      } | null,
      project_type?:  {
        __typename: "ModelProjectProjectTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      departmentProjectsId?: string | null,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    },
    buildingType:  {
      __typename: "BuildingType",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectBuildingTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProjectBuildingTypesMutationVariables = {
  input: DeleteProjectBuildingTypesInput,
  condition?: ModelProjectBuildingTypesConditionInput | null,
};

export type DeleteProjectBuildingTypesMutation = {
  deleteProjectBuildingTypes?:  {
    __typename: "ProjectBuildingTypes",
    id: string,
    projectID: string,
    buildingTypeID: string,
    project:  {
      __typename: "Project",
      id: string,
      oldId?: string | null,
      name: string,
      description?: string | null,
      location?:  {
        __typename: "Location",
        id: string,
        name?: string | null,
        address?: string | null,
        description?: string | null,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      locationString?: string | null,
      createdBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      lastUpdatedBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      featured?: boolean | null,
      link: string,
      quote?: string | null,
      quoteAttribution?: string | null,
      collaborators?: string | null,
      size?: string | null,
      gridOrder?: number | null,
      status: Status,
      gallery?:  {
        __typename: "Gallery",
        id: string,
        createdAt: string,
        updatedAt: string,
        galleryProjectId?: string | null,
      } | null,
      department:  {
        __typename: "Department",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      subcategories?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      building_type?:  {
        __typename: "ModelProjectBuildingTypesConnection",
        nextToken?: string | null,
      } | null,
      project_type?:  {
        __typename: "ModelProjectProjectTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      departmentProjectsId?: string | null,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    },
    buildingType:  {
      __typename: "BuildingType",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectBuildingTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProjectProjectTypesMutationVariables = {
  input: CreateProjectProjectTypesInput,
  condition?: ModelProjectProjectTypesConditionInput | null,
};

export type CreateProjectProjectTypesMutation = {
  createProjectProjectTypes?:  {
    __typename: "ProjectProjectTypes",
    id: string,
    projectID: string,
    projectTypeID: string,
    project:  {
      __typename: "Project",
      id: string,
      oldId?: string | null,
      name: string,
      description?: string | null,
      location?:  {
        __typename: "Location",
        id: string,
        name?: string | null,
        address?: string | null,
        description?: string | null,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      locationString?: string | null,
      createdBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      lastUpdatedBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      featured?: boolean | null,
      link: string,
      quote?: string | null,
      quoteAttribution?: string | null,
      collaborators?: string | null,
      size?: string | null,
      gridOrder?: number | null,
      status: Status,
      gallery?:  {
        __typename: "Gallery",
        id: string,
        createdAt: string,
        updatedAt: string,
        galleryProjectId?: string | null,
      } | null,
      department:  {
        __typename: "Department",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      subcategories?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      building_type?:  {
        __typename: "ModelProjectBuildingTypesConnection",
        nextToken?: string | null,
      } | null,
      project_type?:  {
        __typename: "ModelProjectProjectTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      departmentProjectsId?: string | null,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    },
    projectType:  {
      __typename: "ProjectType",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectProjectTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProjectProjectTypesMutationVariables = {
  input: UpdateProjectProjectTypesInput,
  condition?: ModelProjectProjectTypesConditionInput | null,
};

export type UpdateProjectProjectTypesMutation = {
  updateProjectProjectTypes?:  {
    __typename: "ProjectProjectTypes",
    id: string,
    projectID: string,
    projectTypeID: string,
    project:  {
      __typename: "Project",
      id: string,
      oldId?: string | null,
      name: string,
      description?: string | null,
      location?:  {
        __typename: "Location",
        id: string,
        name?: string | null,
        address?: string | null,
        description?: string | null,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      locationString?: string | null,
      createdBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      lastUpdatedBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      featured?: boolean | null,
      link: string,
      quote?: string | null,
      quoteAttribution?: string | null,
      collaborators?: string | null,
      size?: string | null,
      gridOrder?: number | null,
      status: Status,
      gallery?:  {
        __typename: "Gallery",
        id: string,
        createdAt: string,
        updatedAt: string,
        galleryProjectId?: string | null,
      } | null,
      department:  {
        __typename: "Department",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      subcategories?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      building_type?:  {
        __typename: "ModelProjectBuildingTypesConnection",
        nextToken?: string | null,
      } | null,
      project_type?:  {
        __typename: "ModelProjectProjectTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      departmentProjectsId?: string | null,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    },
    projectType:  {
      __typename: "ProjectType",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectProjectTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProjectProjectTypesMutationVariables = {
  input: DeleteProjectProjectTypesInput,
  condition?: ModelProjectProjectTypesConditionInput | null,
};

export type DeleteProjectProjectTypesMutation = {
  deleteProjectProjectTypes?:  {
    __typename: "ProjectProjectTypes",
    id: string,
    projectID: string,
    projectTypeID: string,
    project:  {
      __typename: "Project",
      id: string,
      oldId?: string | null,
      name: string,
      description?: string | null,
      location?:  {
        __typename: "Location",
        id: string,
        name?: string | null,
        address?: string | null,
        description?: string | null,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      locationString?: string | null,
      createdBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      lastUpdatedBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      featured?: boolean | null,
      link: string,
      quote?: string | null,
      quoteAttribution?: string | null,
      collaborators?: string | null,
      size?: string | null,
      gridOrder?: number | null,
      status: Status,
      gallery?:  {
        __typename: "Gallery",
        id: string,
        createdAt: string,
        updatedAt: string,
        galleryProjectId?: string | null,
      } | null,
      department:  {
        __typename: "Department",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      subcategories?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      building_type?:  {
        __typename: "ModelProjectBuildingTypesConnection",
        nextToken?: string | null,
      } | null,
      project_type?:  {
        __typename: "ModelProjectProjectTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      departmentProjectsId?: string | null,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    },
    projectType:  {
      __typename: "ProjectType",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectProjectTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDepartmentSubcategoriesMutationVariables = {
  input: CreateDepartmentSubcategoriesInput,
  condition?: ModelDepartmentSubcategoriesConditionInput | null,
};

export type CreateDepartmentSubcategoriesMutation = {
  createDepartmentSubcategories?:  {
    __typename: "DepartmentSubcategories",
    id: string,
    departmentID: string,
    subcategoryID: string,
    department:  {
      __typename: "Department",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    subcategory:  {
      __typename: "Subcategory",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      departments?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDepartmentSubcategoriesMutationVariables = {
  input: UpdateDepartmentSubcategoriesInput,
  condition?: ModelDepartmentSubcategoriesConditionInput | null,
};

export type UpdateDepartmentSubcategoriesMutation = {
  updateDepartmentSubcategories?:  {
    __typename: "DepartmentSubcategories",
    id: string,
    departmentID: string,
    subcategoryID: string,
    department:  {
      __typename: "Department",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    subcategory:  {
      __typename: "Subcategory",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      departments?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDepartmentSubcategoriesMutationVariables = {
  input: DeleteDepartmentSubcategoriesInput,
  condition?: ModelDepartmentSubcategoriesConditionInput | null,
};

export type DeleteDepartmentSubcategoriesMutation = {
  deleteDepartmentSubcategories?:  {
    __typename: "DepartmentSubcategories",
    id: string,
    departmentID: string,
    subcategoryID: string,
    department:  {
      __typename: "Department",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    subcategory:  {
      __typename: "Subcategory",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      departments?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    role: Role,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      role: Role,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLocationQueryVariables = {
  id: string,
};

export type GetLocationQuery = {
  getLocation?:  {
    __typename: "Location",
    id: string,
    name?: string | null,
    address?: string | null,
    description?: string | null,
    latitude: number,
    longitude: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLocationsQueryVariables = {
  filter?: ModelLocationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLocationsQuery = {
  listLocations?:  {
    __typename: "ModelLocationConnection",
    items:  Array< {
      __typename: "Location",
      id: string,
      name?: string | null,
      address?: string | null,
      description?: string | null,
      latitude: number,
      longitude: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGalleryQueryVariables = {
  id: string,
};

export type GetGalleryQuery = {
  getGallery?:  {
    __typename: "Gallery",
    id: string,
    images?:  {
      __typename: "ModelImageObjectConnection",
      items:  Array< {
        __typename: "ImageObject",
        id: string,
        url: string,
        alt: string,
        caption?: string | null,
        order?: number | null,
        createdAt: string,
        updatedAt: string,
        galleryImagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    project?:  {
      __typename: "Project",
      id: string,
      oldId?: string | null,
      name: string,
      description?: string | null,
      location?:  {
        __typename: "Location",
        id: string,
        name?: string | null,
        address?: string | null,
        description?: string | null,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      locationString?: string | null,
      createdBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      lastUpdatedBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      featured?: boolean | null,
      link: string,
      quote?: string | null,
      quoteAttribution?: string | null,
      collaborators?: string | null,
      size?: string | null,
      gridOrder?: number | null,
      status: Status,
      gallery?:  {
        __typename: "Gallery",
        id: string,
        createdAt: string,
        updatedAt: string,
        galleryProjectId?: string | null,
      } | null,
      department:  {
        __typename: "Department",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      subcategories?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      building_type?:  {
        __typename: "ModelProjectBuildingTypesConnection",
        nextToken?: string | null,
      } | null,
      project_type?:  {
        __typename: "ModelProjectProjectTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      departmentProjectsId?: string | null,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    galleryProjectId?: string | null,
  } | null,
};

export type ListGalleriesQueryVariables = {
  filter?: ModelGalleryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGalleriesQuery = {
  listGalleries?:  {
    __typename: "ModelGalleryConnection",
    items:  Array< {
      __typename: "Gallery",
      id: string,
      images?:  {
        __typename: "ModelImageObjectConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "Project",
        id: string,
        oldId?: string | null,
        name: string,
        description?: string | null,
        locationString?: string | null,
        featured?: boolean | null,
        link: string,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        createdAt: string,
        updatedAt: string,
        departmentProjectsId?: string | null,
        projectLocationId?: string | null,
        projectCreatedById?: string | null,
        projectLastUpdatedById?: string | null,
        projectGalleryId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      galleryProjectId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProjectQueryVariables = {
  id: string,
};

export type GetProjectQuery = {
  getProject?:  {
    __typename: "Project",
    id: string,
    oldId?: string | null,
    name: string,
    description?: string | null,
    location?:  {
      __typename: "Location",
      id: string,
      name?: string | null,
      address?: string | null,
      description?: string | null,
      latitude: number,
      longitude: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    locationString?: string | null,
    createdBy?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      role: Role,
      createdAt: string,
      updatedAt: string,
    } | null,
    lastUpdatedBy?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      role: Role,
      createdAt: string,
      updatedAt: string,
    } | null,
    featured?: boolean | null,
    link: string,
    quote?: string | null,
    quoteAttribution?: string | null,
    collaborators?: string | null,
    size?: string | null,
    gridOrder?: number | null,
    status: Status,
    gallery?:  {
      __typename: "Gallery",
      id: string,
      images?:  {
        __typename: "ModelImageObjectConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "Project",
        id: string,
        oldId?: string | null,
        name: string,
        description?: string | null,
        locationString?: string | null,
        featured?: boolean | null,
        link: string,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        createdAt: string,
        updatedAt: string,
        departmentProjectsId?: string | null,
        projectLocationId?: string | null,
        projectCreatedById?: string | null,
        projectLastUpdatedById?: string | null,
        projectGalleryId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      galleryProjectId?: string | null,
    } | null,
    department:  {
      __typename: "Department",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    subcategories?:  {
      __typename: "ModelProjectSubcategoriesConnection",
      items:  Array< {
        __typename: "ProjectSubcategories",
        id: string,
        projectID: string,
        subcategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    building_type?:  {
      __typename: "ModelProjectBuildingTypesConnection",
      items:  Array< {
        __typename: "ProjectBuildingTypes",
        id: string,
        projectID: string,
        buildingTypeID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    project_type?:  {
      __typename: "ModelProjectProjectTypesConnection",
      items:  Array< {
        __typename: "ProjectProjectTypes",
        id: string,
        projectID: string,
        projectTypeID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    departmentProjectsId?: string | null,
    projectLocationId?: string | null,
    projectCreatedById?: string | null,
    projectLastUpdatedById?: string | null,
    projectGalleryId?: string | null,
  } | null,
};

export type ListProjectsQueryVariables = {
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProjectsQuery = {
  listProjects?:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      oldId?: string | null,
      name: string,
      description?: string | null,
      location?:  {
        __typename: "Location",
        id: string,
        name?: string | null,
        address?: string | null,
        description?: string | null,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      locationString?: string | null,
      createdBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      lastUpdatedBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      featured?: boolean | null,
      link: string,
      quote?: string | null,
      quoteAttribution?: string | null,
      collaborators?: string | null,
      size?: string | null,
      gridOrder?: number | null,
      status: Status,
      gallery?:  {
        __typename: "Gallery",
        id: string,
        createdAt: string,
        updatedAt: string,
        galleryProjectId?: string | null,
      } | null,
      department:  {
        __typename: "Department",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      subcategories?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      building_type?:  {
        __typename: "ModelProjectBuildingTypesConnection",
        nextToken?: string | null,
      } | null,
      project_type?:  {
        __typename: "ModelProjectProjectTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      departmentProjectsId?: string | null,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDepartmentQueryVariables = {
  id: string,
};

export type GetDepartmentQuery = {
  getDepartment?:  {
    __typename: "Department",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectConnection",
      items:  Array< {
        __typename: "Project",
        id: string,
        oldId?: string | null,
        name: string,
        description?: string | null,
        locationString?: string | null,
        featured?: boolean | null,
        link: string,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        createdAt: string,
        updatedAt: string,
        departmentProjectsId?: string | null,
        projectLocationId?: string | null,
        projectCreatedById?: string | null,
        projectLastUpdatedById?: string | null,
        projectGalleryId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    subcategories?:  {
      __typename: "ModelDepartmentSubcategoriesConnection",
      items:  Array< {
        __typename: "DepartmentSubcategories",
        id: string,
        departmentID: string,
        subcategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDepartmentsQueryVariables = {
  filter?: ModelDepartmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDepartmentsQuery = {
  listDepartments?:  {
    __typename: "ModelDepartmentConnection",
    items:  Array< {
      __typename: "Department",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetImageObjectQueryVariables = {
  id: string,
};

export type GetImageObjectQuery = {
  getImageObject?:  {
    __typename: "ImageObject",
    id: string,
    url: string,
    alt: string,
    caption?: string | null,
    gallery?:  {
      __typename: "Gallery",
      id: string,
      images?:  {
        __typename: "ModelImageObjectConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "Project",
        id: string,
        oldId?: string | null,
        name: string,
        description?: string | null,
        locationString?: string | null,
        featured?: boolean | null,
        link: string,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        createdAt: string,
        updatedAt: string,
        departmentProjectsId?: string | null,
        projectLocationId?: string | null,
        projectCreatedById?: string | null,
        projectLastUpdatedById?: string | null,
        projectGalleryId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      galleryProjectId?: string | null,
    } | null,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    galleryImagesId?: string | null,
  } | null,
};

export type ListImageObjectsQueryVariables = {
  filter?: ModelImageObjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListImageObjectsQuery = {
  listImageObjects?:  {
    __typename: "ModelImageObjectConnection",
    items:  Array< {
      __typename: "ImageObject",
      id: string,
      url: string,
      alt: string,
      caption?: string | null,
      gallery?:  {
        __typename: "Gallery",
        id: string,
        createdAt: string,
        updatedAt: string,
        galleryProjectId?: string | null,
      } | null,
      order?: number | null,
      createdAt: string,
      updatedAt: string,
      galleryImagesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSubcategoryQueryVariables = {
  id: string,
};

export type GetSubcategoryQuery = {
  getSubcategory?:  {
    __typename: "Subcategory",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectSubcategoriesConnection",
      items:  Array< {
        __typename: "ProjectSubcategories",
        id: string,
        projectID: string,
        subcategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    departments?:  {
      __typename: "ModelDepartmentSubcategoriesConnection",
      items:  Array< {
        __typename: "DepartmentSubcategories",
        id: string,
        departmentID: string,
        subcategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSubcategoriesQueryVariables = {
  filter?: ModelSubcategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSubcategoriesQuery = {
  listSubcategories?:  {
    __typename: "ModelSubcategoryConnection",
    items:  Array< {
      __typename: "Subcategory",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      departments?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBuildingTypeQueryVariables = {
  id: string,
};

export type GetBuildingTypeQuery = {
  getBuildingType?:  {
    __typename: "BuildingType",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectBuildingTypesConnection",
      items:  Array< {
        __typename: "ProjectBuildingTypes",
        id: string,
        projectID: string,
        buildingTypeID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBuildingTypesQueryVariables = {
  filter?: ModelBuildingTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBuildingTypesQuery = {
  listBuildingTypes?:  {
    __typename: "ModelBuildingTypeConnection",
    items:  Array< {
      __typename: "BuildingType",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectBuildingTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProjectTypeQueryVariables = {
  id: string,
};

export type GetProjectTypeQuery = {
  getProjectType?:  {
    __typename: "ProjectType",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectProjectTypesConnection",
      items:  Array< {
        __typename: "ProjectProjectTypes",
        id: string,
        projectID: string,
        projectTypeID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProjectTypesQueryVariables = {
  filter?: ModelProjectTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProjectTypesQuery = {
  listProjectTypes?:  {
    __typename: "ModelProjectTypeConnection",
    items:  Array< {
      __typename: "ProjectType",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectProjectTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProjectSubcategoriesQueryVariables = {
  id: string,
};

export type GetProjectSubcategoriesQuery = {
  getProjectSubcategories?:  {
    __typename: "ProjectSubcategories",
    id: string,
    projectID: string,
    subcategoryID: string,
    project:  {
      __typename: "Project",
      id: string,
      oldId?: string | null,
      name: string,
      description?: string | null,
      location?:  {
        __typename: "Location",
        id: string,
        name?: string | null,
        address?: string | null,
        description?: string | null,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      locationString?: string | null,
      createdBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      lastUpdatedBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      featured?: boolean | null,
      link: string,
      quote?: string | null,
      quoteAttribution?: string | null,
      collaborators?: string | null,
      size?: string | null,
      gridOrder?: number | null,
      status: Status,
      gallery?:  {
        __typename: "Gallery",
        id: string,
        createdAt: string,
        updatedAt: string,
        galleryProjectId?: string | null,
      } | null,
      department:  {
        __typename: "Department",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      subcategories?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      building_type?:  {
        __typename: "ModelProjectBuildingTypesConnection",
        nextToken?: string | null,
      } | null,
      project_type?:  {
        __typename: "ModelProjectProjectTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      departmentProjectsId?: string | null,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    },
    subcategory:  {
      __typename: "Subcategory",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      departments?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProjectSubcategoriesQueryVariables = {
  filter?: ModelProjectSubcategoriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProjectSubcategoriesQuery = {
  listProjectSubcategories?:  {
    __typename: "ModelProjectSubcategoriesConnection",
    items:  Array< {
      __typename: "ProjectSubcategories",
      id: string,
      projectID: string,
      subcategoryID: string,
      project:  {
        __typename: "Project",
        id: string,
        oldId?: string | null,
        name: string,
        description?: string | null,
        locationString?: string | null,
        featured?: boolean | null,
        link: string,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        createdAt: string,
        updatedAt: string,
        departmentProjectsId?: string | null,
        projectLocationId?: string | null,
        projectCreatedById?: string | null,
        projectLastUpdatedById?: string | null,
        projectGalleryId?: string | null,
      },
      subcategory:  {
        __typename: "Subcategory",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProjectBuildingTypesQueryVariables = {
  id: string,
};

export type GetProjectBuildingTypesQuery = {
  getProjectBuildingTypes?:  {
    __typename: "ProjectBuildingTypes",
    id: string,
    projectID: string,
    buildingTypeID: string,
    project:  {
      __typename: "Project",
      id: string,
      oldId?: string | null,
      name: string,
      description?: string | null,
      location?:  {
        __typename: "Location",
        id: string,
        name?: string | null,
        address?: string | null,
        description?: string | null,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      locationString?: string | null,
      createdBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      lastUpdatedBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      featured?: boolean | null,
      link: string,
      quote?: string | null,
      quoteAttribution?: string | null,
      collaborators?: string | null,
      size?: string | null,
      gridOrder?: number | null,
      status: Status,
      gallery?:  {
        __typename: "Gallery",
        id: string,
        createdAt: string,
        updatedAt: string,
        galleryProjectId?: string | null,
      } | null,
      department:  {
        __typename: "Department",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      subcategories?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      building_type?:  {
        __typename: "ModelProjectBuildingTypesConnection",
        nextToken?: string | null,
      } | null,
      project_type?:  {
        __typename: "ModelProjectProjectTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      departmentProjectsId?: string | null,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    },
    buildingType:  {
      __typename: "BuildingType",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectBuildingTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProjectBuildingTypesQueryVariables = {
  filter?: ModelProjectBuildingTypesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProjectBuildingTypesQuery = {
  listProjectBuildingTypes?:  {
    __typename: "ModelProjectBuildingTypesConnection",
    items:  Array< {
      __typename: "ProjectBuildingTypes",
      id: string,
      projectID: string,
      buildingTypeID: string,
      project:  {
        __typename: "Project",
        id: string,
        oldId?: string | null,
        name: string,
        description?: string | null,
        locationString?: string | null,
        featured?: boolean | null,
        link: string,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        createdAt: string,
        updatedAt: string,
        departmentProjectsId?: string | null,
        projectLocationId?: string | null,
        projectCreatedById?: string | null,
        projectLastUpdatedById?: string | null,
        projectGalleryId?: string | null,
      },
      buildingType:  {
        __typename: "BuildingType",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProjectProjectTypesQueryVariables = {
  id: string,
};

export type GetProjectProjectTypesQuery = {
  getProjectProjectTypes?:  {
    __typename: "ProjectProjectTypes",
    id: string,
    projectID: string,
    projectTypeID: string,
    project:  {
      __typename: "Project",
      id: string,
      oldId?: string | null,
      name: string,
      description?: string | null,
      location?:  {
        __typename: "Location",
        id: string,
        name?: string | null,
        address?: string | null,
        description?: string | null,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      locationString?: string | null,
      createdBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      lastUpdatedBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      featured?: boolean | null,
      link: string,
      quote?: string | null,
      quoteAttribution?: string | null,
      collaborators?: string | null,
      size?: string | null,
      gridOrder?: number | null,
      status: Status,
      gallery?:  {
        __typename: "Gallery",
        id: string,
        createdAt: string,
        updatedAt: string,
        galleryProjectId?: string | null,
      } | null,
      department:  {
        __typename: "Department",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      subcategories?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      building_type?:  {
        __typename: "ModelProjectBuildingTypesConnection",
        nextToken?: string | null,
      } | null,
      project_type?:  {
        __typename: "ModelProjectProjectTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      departmentProjectsId?: string | null,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    },
    projectType:  {
      __typename: "ProjectType",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectProjectTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProjectProjectTypesQueryVariables = {
  filter?: ModelProjectProjectTypesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProjectProjectTypesQuery = {
  listProjectProjectTypes?:  {
    __typename: "ModelProjectProjectTypesConnection",
    items:  Array< {
      __typename: "ProjectProjectTypes",
      id: string,
      projectID: string,
      projectTypeID: string,
      project:  {
        __typename: "Project",
        id: string,
        oldId?: string | null,
        name: string,
        description?: string | null,
        locationString?: string | null,
        featured?: boolean | null,
        link: string,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        createdAt: string,
        updatedAt: string,
        departmentProjectsId?: string | null,
        projectLocationId?: string | null,
        projectCreatedById?: string | null,
        projectLastUpdatedById?: string | null,
        projectGalleryId?: string | null,
      },
      projectType:  {
        __typename: "ProjectType",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDepartmentSubcategoriesQueryVariables = {
  id: string,
};

export type GetDepartmentSubcategoriesQuery = {
  getDepartmentSubcategories?:  {
    __typename: "DepartmentSubcategories",
    id: string,
    departmentID: string,
    subcategoryID: string,
    department:  {
      __typename: "Department",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    subcategory:  {
      __typename: "Subcategory",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      departments?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDepartmentSubcategoriesQueryVariables = {
  filter?: ModelDepartmentSubcategoriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDepartmentSubcategoriesQuery = {
  listDepartmentSubcategories?:  {
    __typename: "ModelDepartmentSubcategoriesConnection",
    items:  Array< {
      __typename: "DepartmentSubcategories",
      id: string,
      departmentID: string,
      subcategoryID: string,
      department:  {
        __typename: "Department",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      subcategory:  {
        __typename: "Subcategory",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    role: Role,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    role: Role,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    role: Role,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLocationSubscription = {
  onCreateLocation?:  {
    __typename: "Location",
    id: string,
    name?: string | null,
    address?: string | null,
    description?: string | null,
    latitude: number,
    longitude: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLocationSubscription = {
  onUpdateLocation?:  {
    __typename: "Location",
    id: string,
    name?: string | null,
    address?: string | null,
    description?: string | null,
    latitude: number,
    longitude: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLocationSubscription = {
  onDeleteLocation?:  {
    __typename: "Location",
    id: string,
    name?: string | null,
    address?: string | null,
    description?: string | null,
    latitude: number,
    longitude: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGallerySubscription = {
  onCreateGallery?:  {
    __typename: "Gallery",
    id: string,
    images?:  {
      __typename: "ModelImageObjectConnection",
      items:  Array< {
        __typename: "ImageObject",
        id: string,
        url: string,
        alt: string,
        caption?: string | null,
        order?: number | null,
        createdAt: string,
        updatedAt: string,
        galleryImagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    project?:  {
      __typename: "Project",
      id: string,
      oldId?: string | null,
      name: string,
      description?: string | null,
      location?:  {
        __typename: "Location",
        id: string,
        name?: string | null,
        address?: string | null,
        description?: string | null,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      locationString?: string | null,
      createdBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      lastUpdatedBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      featured?: boolean | null,
      link: string,
      quote?: string | null,
      quoteAttribution?: string | null,
      collaborators?: string | null,
      size?: string | null,
      gridOrder?: number | null,
      status: Status,
      gallery?:  {
        __typename: "Gallery",
        id: string,
        createdAt: string,
        updatedAt: string,
        galleryProjectId?: string | null,
      } | null,
      department:  {
        __typename: "Department",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      subcategories?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      building_type?:  {
        __typename: "ModelProjectBuildingTypesConnection",
        nextToken?: string | null,
      } | null,
      project_type?:  {
        __typename: "ModelProjectProjectTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      departmentProjectsId?: string | null,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    galleryProjectId?: string | null,
  } | null,
};

export type OnUpdateGallerySubscription = {
  onUpdateGallery?:  {
    __typename: "Gallery",
    id: string,
    images?:  {
      __typename: "ModelImageObjectConnection",
      items:  Array< {
        __typename: "ImageObject",
        id: string,
        url: string,
        alt: string,
        caption?: string | null,
        order?: number | null,
        createdAt: string,
        updatedAt: string,
        galleryImagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    project?:  {
      __typename: "Project",
      id: string,
      oldId?: string | null,
      name: string,
      description?: string | null,
      location?:  {
        __typename: "Location",
        id: string,
        name?: string | null,
        address?: string | null,
        description?: string | null,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      locationString?: string | null,
      createdBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      lastUpdatedBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      featured?: boolean | null,
      link: string,
      quote?: string | null,
      quoteAttribution?: string | null,
      collaborators?: string | null,
      size?: string | null,
      gridOrder?: number | null,
      status: Status,
      gallery?:  {
        __typename: "Gallery",
        id: string,
        createdAt: string,
        updatedAt: string,
        galleryProjectId?: string | null,
      } | null,
      department:  {
        __typename: "Department",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      subcategories?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      building_type?:  {
        __typename: "ModelProjectBuildingTypesConnection",
        nextToken?: string | null,
      } | null,
      project_type?:  {
        __typename: "ModelProjectProjectTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      departmentProjectsId?: string | null,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    galleryProjectId?: string | null,
  } | null,
};

export type OnDeleteGallerySubscription = {
  onDeleteGallery?:  {
    __typename: "Gallery",
    id: string,
    images?:  {
      __typename: "ModelImageObjectConnection",
      items:  Array< {
        __typename: "ImageObject",
        id: string,
        url: string,
        alt: string,
        caption?: string | null,
        order?: number | null,
        createdAt: string,
        updatedAt: string,
        galleryImagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    project?:  {
      __typename: "Project",
      id: string,
      oldId?: string | null,
      name: string,
      description?: string | null,
      location?:  {
        __typename: "Location",
        id: string,
        name?: string | null,
        address?: string | null,
        description?: string | null,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      locationString?: string | null,
      createdBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      lastUpdatedBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      featured?: boolean | null,
      link: string,
      quote?: string | null,
      quoteAttribution?: string | null,
      collaborators?: string | null,
      size?: string | null,
      gridOrder?: number | null,
      status: Status,
      gallery?:  {
        __typename: "Gallery",
        id: string,
        createdAt: string,
        updatedAt: string,
        galleryProjectId?: string | null,
      } | null,
      department:  {
        __typename: "Department",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      subcategories?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      building_type?:  {
        __typename: "ModelProjectBuildingTypesConnection",
        nextToken?: string | null,
      } | null,
      project_type?:  {
        __typename: "ModelProjectProjectTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      departmentProjectsId?: string | null,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    galleryProjectId?: string | null,
  } | null,
};

export type OnCreateProjectSubscription = {
  onCreateProject?:  {
    __typename: "Project",
    id: string,
    oldId?: string | null,
    name: string,
    description?: string | null,
    location?:  {
      __typename: "Location",
      id: string,
      name?: string | null,
      address?: string | null,
      description?: string | null,
      latitude: number,
      longitude: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    locationString?: string | null,
    createdBy?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      role: Role,
      createdAt: string,
      updatedAt: string,
    } | null,
    lastUpdatedBy?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      role: Role,
      createdAt: string,
      updatedAt: string,
    } | null,
    featured?: boolean | null,
    link: string,
    quote?: string | null,
    quoteAttribution?: string | null,
    collaborators?: string | null,
    size?: string | null,
    gridOrder?: number | null,
    status: Status,
    gallery?:  {
      __typename: "Gallery",
      id: string,
      images?:  {
        __typename: "ModelImageObjectConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "Project",
        id: string,
        oldId?: string | null,
        name: string,
        description?: string | null,
        locationString?: string | null,
        featured?: boolean | null,
        link: string,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        createdAt: string,
        updatedAt: string,
        departmentProjectsId?: string | null,
        projectLocationId?: string | null,
        projectCreatedById?: string | null,
        projectLastUpdatedById?: string | null,
        projectGalleryId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      galleryProjectId?: string | null,
    } | null,
    department:  {
      __typename: "Department",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    subcategories?:  {
      __typename: "ModelProjectSubcategoriesConnection",
      items:  Array< {
        __typename: "ProjectSubcategories",
        id: string,
        projectID: string,
        subcategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    building_type?:  {
      __typename: "ModelProjectBuildingTypesConnection",
      items:  Array< {
        __typename: "ProjectBuildingTypes",
        id: string,
        projectID: string,
        buildingTypeID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    project_type?:  {
      __typename: "ModelProjectProjectTypesConnection",
      items:  Array< {
        __typename: "ProjectProjectTypes",
        id: string,
        projectID: string,
        projectTypeID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    departmentProjectsId?: string | null,
    projectLocationId?: string | null,
    projectCreatedById?: string | null,
    projectLastUpdatedById?: string | null,
    projectGalleryId?: string | null,
  } | null,
};

export type OnUpdateProjectSubscription = {
  onUpdateProject?:  {
    __typename: "Project",
    id: string,
    oldId?: string | null,
    name: string,
    description?: string | null,
    location?:  {
      __typename: "Location",
      id: string,
      name?: string | null,
      address?: string | null,
      description?: string | null,
      latitude: number,
      longitude: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    locationString?: string | null,
    createdBy?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      role: Role,
      createdAt: string,
      updatedAt: string,
    } | null,
    lastUpdatedBy?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      role: Role,
      createdAt: string,
      updatedAt: string,
    } | null,
    featured?: boolean | null,
    link: string,
    quote?: string | null,
    quoteAttribution?: string | null,
    collaborators?: string | null,
    size?: string | null,
    gridOrder?: number | null,
    status: Status,
    gallery?:  {
      __typename: "Gallery",
      id: string,
      images?:  {
        __typename: "ModelImageObjectConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "Project",
        id: string,
        oldId?: string | null,
        name: string,
        description?: string | null,
        locationString?: string | null,
        featured?: boolean | null,
        link: string,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        createdAt: string,
        updatedAt: string,
        departmentProjectsId?: string | null,
        projectLocationId?: string | null,
        projectCreatedById?: string | null,
        projectLastUpdatedById?: string | null,
        projectGalleryId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      galleryProjectId?: string | null,
    } | null,
    department:  {
      __typename: "Department",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    subcategories?:  {
      __typename: "ModelProjectSubcategoriesConnection",
      items:  Array< {
        __typename: "ProjectSubcategories",
        id: string,
        projectID: string,
        subcategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    building_type?:  {
      __typename: "ModelProjectBuildingTypesConnection",
      items:  Array< {
        __typename: "ProjectBuildingTypes",
        id: string,
        projectID: string,
        buildingTypeID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    project_type?:  {
      __typename: "ModelProjectProjectTypesConnection",
      items:  Array< {
        __typename: "ProjectProjectTypes",
        id: string,
        projectID: string,
        projectTypeID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    departmentProjectsId?: string | null,
    projectLocationId?: string | null,
    projectCreatedById?: string | null,
    projectLastUpdatedById?: string | null,
    projectGalleryId?: string | null,
  } | null,
};

export type OnDeleteProjectSubscription = {
  onDeleteProject?:  {
    __typename: "Project",
    id: string,
    oldId?: string | null,
    name: string,
    description?: string | null,
    location?:  {
      __typename: "Location",
      id: string,
      name?: string | null,
      address?: string | null,
      description?: string | null,
      latitude: number,
      longitude: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    locationString?: string | null,
    createdBy?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      role: Role,
      createdAt: string,
      updatedAt: string,
    } | null,
    lastUpdatedBy?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      role: Role,
      createdAt: string,
      updatedAt: string,
    } | null,
    featured?: boolean | null,
    link: string,
    quote?: string | null,
    quoteAttribution?: string | null,
    collaborators?: string | null,
    size?: string | null,
    gridOrder?: number | null,
    status: Status,
    gallery?:  {
      __typename: "Gallery",
      id: string,
      images?:  {
        __typename: "ModelImageObjectConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "Project",
        id: string,
        oldId?: string | null,
        name: string,
        description?: string | null,
        locationString?: string | null,
        featured?: boolean | null,
        link: string,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        createdAt: string,
        updatedAt: string,
        departmentProjectsId?: string | null,
        projectLocationId?: string | null,
        projectCreatedById?: string | null,
        projectLastUpdatedById?: string | null,
        projectGalleryId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      galleryProjectId?: string | null,
    } | null,
    department:  {
      __typename: "Department",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    subcategories?:  {
      __typename: "ModelProjectSubcategoriesConnection",
      items:  Array< {
        __typename: "ProjectSubcategories",
        id: string,
        projectID: string,
        subcategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    building_type?:  {
      __typename: "ModelProjectBuildingTypesConnection",
      items:  Array< {
        __typename: "ProjectBuildingTypes",
        id: string,
        projectID: string,
        buildingTypeID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    project_type?:  {
      __typename: "ModelProjectProjectTypesConnection",
      items:  Array< {
        __typename: "ProjectProjectTypes",
        id: string,
        projectID: string,
        projectTypeID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    departmentProjectsId?: string | null,
    projectLocationId?: string | null,
    projectCreatedById?: string | null,
    projectLastUpdatedById?: string | null,
    projectGalleryId?: string | null,
  } | null,
};

export type OnCreateDepartmentSubscription = {
  onCreateDepartment?:  {
    __typename: "Department",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectConnection",
      items:  Array< {
        __typename: "Project",
        id: string,
        oldId?: string | null,
        name: string,
        description?: string | null,
        locationString?: string | null,
        featured?: boolean | null,
        link: string,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        createdAt: string,
        updatedAt: string,
        departmentProjectsId?: string | null,
        projectLocationId?: string | null,
        projectCreatedById?: string | null,
        projectLastUpdatedById?: string | null,
        projectGalleryId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    subcategories?:  {
      __typename: "ModelDepartmentSubcategoriesConnection",
      items:  Array< {
        __typename: "DepartmentSubcategories",
        id: string,
        departmentID: string,
        subcategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDepartmentSubscription = {
  onUpdateDepartment?:  {
    __typename: "Department",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectConnection",
      items:  Array< {
        __typename: "Project",
        id: string,
        oldId?: string | null,
        name: string,
        description?: string | null,
        locationString?: string | null,
        featured?: boolean | null,
        link: string,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        createdAt: string,
        updatedAt: string,
        departmentProjectsId?: string | null,
        projectLocationId?: string | null,
        projectCreatedById?: string | null,
        projectLastUpdatedById?: string | null,
        projectGalleryId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    subcategories?:  {
      __typename: "ModelDepartmentSubcategoriesConnection",
      items:  Array< {
        __typename: "DepartmentSubcategories",
        id: string,
        departmentID: string,
        subcategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDepartmentSubscription = {
  onDeleteDepartment?:  {
    __typename: "Department",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectConnection",
      items:  Array< {
        __typename: "Project",
        id: string,
        oldId?: string | null,
        name: string,
        description?: string | null,
        locationString?: string | null,
        featured?: boolean | null,
        link: string,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        createdAt: string,
        updatedAt: string,
        departmentProjectsId?: string | null,
        projectLocationId?: string | null,
        projectCreatedById?: string | null,
        projectLastUpdatedById?: string | null,
        projectGalleryId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    subcategories?:  {
      __typename: "ModelDepartmentSubcategoriesConnection",
      items:  Array< {
        __typename: "DepartmentSubcategories",
        id: string,
        departmentID: string,
        subcategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateImageObjectSubscription = {
  onCreateImageObject?:  {
    __typename: "ImageObject",
    id: string,
    url: string,
    alt: string,
    caption?: string | null,
    gallery?:  {
      __typename: "Gallery",
      id: string,
      images?:  {
        __typename: "ModelImageObjectConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "Project",
        id: string,
        oldId?: string | null,
        name: string,
        description?: string | null,
        locationString?: string | null,
        featured?: boolean | null,
        link: string,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        createdAt: string,
        updatedAt: string,
        departmentProjectsId?: string | null,
        projectLocationId?: string | null,
        projectCreatedById?: string | null,
        projectLastUpdatedById?: string | null,
        projectGalleryId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      galleryProjectId?: string | null,
    } | null,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    galleryImagesId?: string | null,
  } | null,
};

export type OnUpdateImageObjectSubscription = {
  onUpdateImageObject?:  {
    __typename: "ImageObject",
    id: string,
    url: string,
    alt: string,
    caption?: string | null,
    gallery?:  {
      __typename: "Gallery",
      id: string,
      images?:  {
        __typename: "ModelImageObjectConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "Project",
        id: string,
        oldId?: string | null,
        name: string,
        description?: string | null,
        locationString?: string | null,
        featured?: boolean | null,
        link: string,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        createdAt: string,
        updatedAt: string,
        departmentProjectsId?: string | null,
        projectLocationId?: string | null,
        projectCreatedById?: string | null,
        projectLastUpdatedById?: string | null,
        projectGalleryId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      galleryProjectId?: string | null,
    } | null,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    galleryImagesId?: string | null,
  } | null,
};

export type OnDeleteImageObjectSubscription = {
  onDeleteImageObject?:  {
    __typename: "ImageObject",
    id: string,
    url: string,
    alt: string,
    caption?: string | null,
    gallery?:  {
      __typename: "Gallery",
      id: string,
      images?:  {
        __typename: "ModelImageObjectConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "Project",
        id: string,
        oldId?: string | null,
        name: string,
        description?: string | null,
        locationString?: string | null,
        featured?: boolean | null,
        link: string,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        createdAt: string,
        updatedAt: string,
        departmentProjectsId?: string | null,
        projectLocationId?: string | null,
        projectCreatedById?: string | null,
        projectLastUpdatedById?: string | null,
        projectGalleryId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      galleryProjectId?: string | null,
    } | null,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    galleryImagesId?: string | null,
  } | null,
};

export type OnCreateSubcategorySubscription = {
  onCreateSubcategory?:  {
    __typename: "Subcategory",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectSubcategoriesConnection",
      items:  Array< {
        __typename: "ProjectSubcategories",
        id: string,
        projectID: string,
        subcategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    departments?:  {
      __typename: "ModelDepartmentSubcategoriesConnection",
      items:  Array< {
        __typename: "DepartmentSubcategories",
        id: string,
        departmentID: string,
        subcategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSubcategorySubscription = {
  onUpdateSubcategory?:  {
    __typename: "Subcategory",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectSubcategoriesConnection",
      items:  Array< {
        __typename: "ProjectSubcategories",
        id: string,
        projectID: string,
        subcategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    departments?:  {
      __typename: "ModelDepartmentSubcategoriesConnection",
      items:  Array< {
        __typename: "DepartmentSubcategories",
        id: string,
        departmentID: string,
        subcategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSubcategorySubscription = {
  onDeleteSubcategory?:  {
    __typename: "Subcategory",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectSubcategoriesConnection",
      items:  Array< {
        __typename: "ProjectSubcategories",
        id: string,
        projectID: string,
        subcategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    departments?:  {
      __typename: "ModelDepartmentSubcategoriesConnection",
      items:  Array< {
        __typename: "DepartmentSubcategories",
        id: string,
        departmentID: string,
        subcategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBuildingTypeSubscription = {
  onCreateBuildingType?:  {
    __typename: "BuildingType",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectBuildingTypesConnection",
      items:  Array< {
        __typename: "ProjectBuildingTypes",
        id: string,
        projectID: string,
        buildingTypeID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBuildingTypeSubscription = {
  onUpdateBuildingType?:  {
    __typename: "BuildingType",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectBuildingTypesConnection",
      items:  Array< {
        __typename: "ProjectBuildingTypes",
        id: string,
        projectID: string,
        buildingTypeID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBuildingTypeSubscription = {
  onDeleteBuildingType?:  {
    __typename: "BuildingType",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectBuildingTypesConnection",
      items:  Array< {
        __typename: "ProjectBuildingTypes",
        id: string,
        projectID: string,
        buildingTypeID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProjectTypeSubscription = {
  onCreateProjectType?:  {
    __typename: "ProjectType",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectProjectTypesConnection",
      items:  Array< {
        __typename: "ProjectProjectTypes",
        id: string,
        projectID: string,
        projectTypeID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProjectTypeSubscription = {
  onUpdateProjectType?:  {
    __typename: "ProjectType",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectProjectTypesConnection",
      items:  Array< {
        __typename: "ProjectProjectTypes",
        id: string,
        projectID: string,
        projectTypeID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProjectTypeSubscription = {
  onDeleteProjectType?:  {
    __typename: "ProjectType",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectProjectTypesConnection",
      items:  Array< {
        __typename: "ProjectProjectTypes",
        id: string,
        projectID: string,
        projectTypeID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProjectSubcategoriesSubscription = {
  onCreateProjectSubcategories?:  {
    __typename: "ProjectSubcategories",
    id: string,
    projectID: string,
    subcategoryID: string,
    project:  {
      __typename: "Project",
      id: string,
      oldId?: string | null,
      name: string,
      description?: string | null,
      location?:  {
        __typename: "Location",
        id: string,
        name?: string | null,
        address?: string | null,
        description?: string | null,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      locationString?: string | null,
      createdBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      lastUpdatedBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      featured?: boolean | null,
      link: string,
      quote?: string | null,
      quoteAttribution?: string | null,
      collaborators?: string | null,
      size?: string | null,
      gridOrder?: number | null,
      status: Status,
      gallery?:  {
        __typename: "Gallery",
        id: string,
        createdAt: string,
        updatedAt: string,
        galleryProjectId?: string | null,
      } | null,
      department:  {
        __typename: "Department",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      subcategories?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      building_type?:  {
        __typename: "ModelProjectBuildingTypesConnection",
        nextToken?: string | null,
      } | null,
      project_type?:  {
        __typename: "ModelProjectProjectTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      departmentProjectsId?: string | null,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    },
    subcategory:  {
      __typename: "Subcategory",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      departments?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProjectSubcategoriesSubscription = {
  onUpdateProjectSubcategories?:  {
    __typename: "ProjectSubcategories",
    id: string,
    projectID: string,
    subcategoryID: string,
    project:  {
      __typename: "Project",
      id: string,
      oldId?: string | null,
      name: string,
      description?: string | null,
      location?:  {
        __typename: "Location",
        id: string,
        name?: string | null,
        address?: string | null,
        description?: string | null,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      locationString?: string | null,
      createdBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      lastUpdatedBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      featured?: boolean | null,
      link: string,
      quote?: string | null,
      quoteAttribution?: string | null,
      collaborators?: string | null,
      size?: string | null,
      gridOrder?: number | null,
      status: Status,
      gallery?:  {
        __typename: "Gallery",
        id: string,
        createdAt: string,
        updatedAt: string,
        galleryProjectId?: string | null,
      } | null,
      department:  {
        __typename: "Department",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      subcategories?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      building_type?:  {
        __typename: "ModelProjectBuildingTypesConnection",
        nextToken?: string | null,
      } | null,
      project_type?:  {
        __typename: "ModelProjectProjectTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      departmentProjectsId?: string | null,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    },
    subcategory:  {
      __typename: "Subcategory",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      departments?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProjectSubcategoriesSubscription = {
  onDeleteProjectSubcategories?:  {
    __typename: "ProjectSubcategories",
    id: string,
    projectID: string,
    subcategoryID: string,
    project:  {
      __typename: "Project",
      id: string,
      oldId?: string | null,
      name: string,
      description?: string | null,
      location?:  {
        __typename: "Location",
        id: string,
        name?: string | null,
        address?: string | null,
        description?: string | null,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      locationString?: string | null,
      createdBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      lastUpdatedBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      featured?: boolean | null,
      link: string,
      quote?: string | null,
      quoteAttribution?: string | null,
      collaborators?: string | null,
      size?: string | null,
      gridOrder?: number | null,
      status: Status,
      gallery?:  {
        __typename: "Gallery",
        id: string,
        createdAt: string,
        updatedAt: string,
        galleryProjectId?: string | null,
      } | null,
      department:  {
        __typename: "Department",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      subcategories?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      building_type?:  {
        __typename: "ModelProjectBuildingTypesConnection",
        nextToken?: string | null,
      } | null,
      project_type?:  {
        __typename: "ModelProjectProjectTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      departmentProjectsId?: string | null,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    },
    subcategory:  {
      __typename: "Subcategory",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      departments?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProjectBuildingTypesSubscription = {
  onCreateProjectBuildingTypes?:  {
    __typename: "ProjectBuildingTypes",
    id: string,
    projectID: string,
    buildingTypeID: string,
    project:  {
      __typename: "Project",
      id: string,
      oldId?: string | null,
      name: string,
      description?: string | null,
      location?:  {
        __typename: "Location",
        id: string,
        name?: string | null,
        address?: string | null,
        description?: string | null,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      locationString?: string | null,
      createdBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      lastUpdatedBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      featured?: boolean | null,
      link: string,
      quote?: string | null,
      quoteAttribution?: string | null,
      collaborators?: string | null,
      size?: string | null,
      gridOrder?: number | null,
      status: Status,
      gallery?:  {
        __typename: "Gallery",
        id: string,
        createdAt: string,
        updatedAt: string,
        galleryProjectId?: string | null,
      } | null,
      department:  {
        __typename: "Department",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      subcategories?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      building_type?:  {
        __typename: "ModelProjectBuildingTypesConnection",
        nextToken?: string | null,
      } | null,
      project_type?:  {
        __typename: "ModelProjectProjectTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      departmentProjectsId?: string | null,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    },
    buildingType:  {
      __typename: "BuildingType",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectBuildingTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProjectBuildingTypesSubscription = {
  onUpdateProjectBuildingTypes?:  {
    __typename: "ProjectBuildingTypes",
    id: string,
    projectID: string,
    buildingTypeID: string,
    project:  {
      __typename: "Project",
      id: string,
      oldId?: string | null,
      name: string,
      description?: string | null,
      location?:  {
        __typename: "Location",
        id: string,
        name?: string | null,
        address?: string | null,
        description?: string | null,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      locationString?: string | null,
      createdBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      lastUpdatedBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      featured?: boolean | null,
      link: string,
      quote?: string | null,
      quoteAttribution?: string | null,
      collaborators?: string | null,
      size?: string | null,
      gridOrder?: number | null,
      status: Status,
      gallery?:  {
        __typename: "Gallery",
        id: string,
        createdAt: string,
        updatedAt: string,
        galleryProjectId?: string | null,
      } | null,
      department:  {
        __typename: "Department",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      subcategories?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      building_type?:  {
        __typename: "ModelProjectBuildingTypesConnection",
        nextToken?: string | null,
      } | null,
      project_type?:  {
        __typename: "ModelProjectProjectTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      departmentProjectsId?: string | null,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    },
    buildingType:  {
      __typename: "BuildingType",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectBuildingTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProjectBuildingTypesSubscription = {
  onDeleteProjectBuildingTypes?:  {
    __typename: "ProjectBuildingTypes",
    id: string,
    projectID: string,
    buildingTypeID: string,
    project:  {
      __typename: "Project",
      id: string,
      oldId?: string | null,
      name: string,
      description?: string | null,
      location?:  {
        __typename: "Location",
        id: string,
        name?: string | null,
        address?: string | null,
        description?: string | null,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      locationString?: string | null,
      createdBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      lastUpdatedBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      featured?: boolean | null,
      link: string,
      quote?: string | null,
      quoteAttribution?: string | null,
      collaborators?: string | null,
      size?: string | null,
      gridOrder?: number | null,
      status: Status,
      gallery?:  {
        __typename: "Gallery",
        id: string,
        createdAt: string,
        updatedAt: string,
        galleryProjectId?: string | null,
      } | null,
      department:  {
        __typename: "Department",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      subcategories?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      building_type?:  {
        __typename: "ModelProjectBuildingTypesConnection",
        nextToken?: string | null,
      } | null,
      project_type?:  {
        __typename: "ModelProjectProjectTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      departmentProjectsId?: string | null,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    },
    buildingType:  {
      __typename: "BuildingType",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectBuildingTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProjectProjectTypesSubscription = {
  onCreateProjectProjectTypes?:  {
    __typename: "ProjectProjectTypes",
    id: string,
    projectID: string,
    projectTypeID: string,
    project:  {
      __typename: "Project",
      id: string,
      oldId?: string | null,
      name: string,
      description?: string | null,
      location?:  {
        __typename: "Location",
        id: string,
        name?: string | null,
        address?: string | null,
        description?: string | null,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      locationString?: string | null,
      createdBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      lastUpdatedBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      featured?: boolean | null,
      link: string,
      quote?: string | null,
      quoteAttribution?: string | null,
      collaborators?: string | null,
      size?: string | null,
      gridOrder?: number | null,
      status: Status,
      gallery?:  {
        __typename: "Gallery",
        id: string,
        createdAt: string,
        updatedAt: string,
        galleryProjectId?: string | null,
      } | null,
      department:  {
        __typename: "Department",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      subcategories?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      building_type?:  {
        __typename: "ModelProjectBuildingTypesConnection",
        nextToken?: string | null,
      } | null,
      project_type?:  {
        __typename: "ModelProjectProjectTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      departmentProjectsId?: string | null,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    },
    projectType:  {
      __typename: "ProjectType",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectProjectTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProjectProjectTypesSubscription = {
  onUpdateProjectProjectTypes?:  {
    __typename: "ProjectProjectTypes",
    id: string,
    projectID: string,
    projectTypeID: string,
    project:  {
      __typename: "Project",
      id: string,
      oldId?: string | null,
      name: string,
      description?: string | null,
      location?:  {
        __typename: "Location",
        id: string,
        name?: string | null,
        address?: string | null,
        description?: string | null,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      locationString?: string | null,
      createdBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      lastUpdatedBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      featured?: boolean | null,
      link: string,
      quote?: string | null,
      quoteAttribution?: string | null,
      collaborators?: string | null,
      size?: string | null,
      gridOrder?: number | null,
      status: Status,
      gallery?:  {
        __typename: "Gallery",
        id: string,
        createdAt: string,
        updatedAt: string,
        galleryProjectId?: string | null,
      } | null,
      department:  {
        __typename: "Department",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      subcategories?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      building_type?:  {
        __typename: "ModelProjectBuildingTypesConnection",
        nextToken?: string | null,
      } | null,
      project_type?:  {
        __typename: "ModelProjectProjectTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      departmentProjectsId?: string | null,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    },
    projectType:  {
      __typename: "ProjectType",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectProjectTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProjectProjectTypesSubscription = {
  onDeleteProjectProjectTypes?:  {
    __typename: "ProjectProjectTypes",
    id: string,
    projectID: string,
    projectTypeID: string,
    project:  {
      __typename: "Project",
      id: string,
      oldId?: string | null,
      name: string,
      description?: string | null,
      location?:  {
        __typename: "Location",
        id: string,
        name?: string | null,
        address?: string | null,
        description?: string | null,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      locationString?: string | null,
      createdBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      lastUpdatedBy?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        role: Role,
        createdAt: string,
        updatedAt: string,
      } | null,
      featured?: boolean | null,
      link: string,
      quote?: string | null,
      quoteAttribution?: string | null,
      collaborators?: string | null,
      size?: string | null,
      gridOrder?: number | null,
      status: Status,
      gallery?:  {
        __typename: "Gallery",
        id: string,
        createdAt: string,
        updatedAt: string,
        galleryProjectId?: string | null,
      } | null,
      department:  {
        __typename: "Department",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      subcategories?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      building_type?:  {
        __typename: "ModelProjectBuildingTypesConnection",
        nextToken?: string | null,
      } | null,
      project_type?:  {
        __typename: "ModelProjectProjectTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      departmentProjectsId?: string | null,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    },
    projectType:  {
      __typename: "ProjectType",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectProjectTypesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDepartmentSubcategoriesSubscription = {
  onCreateDepartmentSubcategories?:  {
    __typename: "DepartmentSubcategories",
    id: string,
    departmentID: string,
    subcategoryID: string,
    department:  {
      __typename: "Department",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    subcategory:  {
      __typename: "Subcategory",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      departments?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDepartmentSubcategoriesSubscription = {
  onUpdateDepartmentSubcategories?:  {
    __typename: "DepartmentSubcategories",
    id: string,
    departmentID: string,
    subcategoryID: string,
    department:  {
      __typename: "Department",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    subcategory:  {
      __typename: "Subcategory",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      departments?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDepartmentSubcategoriesSubscription = {
  onDeleteDepartmentSubcategories?:  {
    __typename: "DepartmentSubcategories",
    id: string,
    departmentID: string,
    subcategoryID: string,
    department:  {
      __typename: "Department",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    subcategory:  {
      __typename: "Subcategory",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      departments?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
