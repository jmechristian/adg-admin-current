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

export type CreateFeaturedProjectInput = {
  id?: string | null,
  displayOrder?: number | null,
  projectFeaturedProjectsId?: string | null,
  departmentFeaturedProjectsId?: string | null,
};

export type ModelFeaturedProjectConditionInput = {
  displayOrder?: ModelIntInput | null,
  and?: Array< ModelFeaturedProjectConditionInput | null > | null,
  or?: Array< ModelFeaturedProjectConditionInput | null > | null,
  not?: ModelFeaturedProjectConditionInput | null,
  projectFeaturedProjectsId?: ModelIDInput | null,
  departmentFeaturedProjectsId?: ModelIDInput | null,
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

export type FeaturedProject = {
  __typename: "FeaturedProject",
  id: string,
  project?: Project | null,
  displayOrder?: number | null,
  department?: Department | null,
  createdAt: string,
  updatedAt: string,
  projectFeaturedProjectsId?: string | null,
  departmentFeaturedProjectsId?: string | null,
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
  link?: string | null,
  slug?: string | null,
  quote?: string | null,
  quoteAttribution?: string | null,
  quotes?: ModelQuoteConnection | null,
  collaborators?: string | null,
  size?: string | null,
  gridOrder?: number | null,
  status: Status,
  gallery?: Gallery | null,
  departments?: ModelProjectDepartmentsConnection | null,
  subcategories?: ModelProjectSubcategoriesConnection | null,
  building_type?: ModelProjectBuildingTypesConnection | null,
  project_type?: ModelProjectProjectTypesConnection | null,
  displayOrder?: number | null,
  previewLocation?: string | null,
  featuredProjects?: ModelFeaturedProjectConnection | null,
  subcategoryProjects?: ModelSubcategoryProjectConnection | null,
  createdAt: string,
  updatedAt: string,
  projectLocationId?: string | null,
  projectCreatedById?: string | null,
  projectLastUpdatedById?: string | null,
  projectGalleryId?: string | null,
};

export type ModelQuoteConnection = {
  __typename: "ModelQuoteConnection",
  items:  Array<Quote | null >,
  nextToken?: string | null,
};

export type Quote = {
  __typename: "Quote",
  id: string,
  text: string,
  attribution?: string | null,
  project?: Project | null,
  displayOrder?: number | null,
  createdAt: string,
  updatedAt: string,
  projectQuotesId?: string | null,
};

export enum Status {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
  ARCHIVED = "ARCHIVED",
}


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
  centerX?: number | null,
  centerY?: number | null,
  zoom?: number | null,
  type?: string | null,
  createdAt: string,
  updatedAt: string,
  galleryImagesId?: string | null,
};

export type ModelProjectDepartmentsConnection = {
  __typename: "ModelProjectDepartmentsConnection",
  items:  Array<ProjectDepartments | null >,
  nextToken?: string | null,
};

export type ProjectDepartments = {
  __typename: "ProjectDepartments",
  id: string,
  projectID: string,
  departmentID: string,
  project: Project,
  department: Department,
  createdAt: string,
  updatedAt: string,
};

export type Department = {
  __typename: "Department",
  id: string,
  name: string,
  projects?: ModelProjectDepartmentsConnection | null,
  subcategories?: ModelDepartmentSubcategoriesConnection | null,
  displayOrder?: number | null,
  featuredProjects?: ModelFeaturedProjectConnection | null,
  subcategoriesProjects?: ModelSubcategoryProjectConnection | null,
  createdAt: string,
  updatedAt: string,
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
  subcategoryProjects?: ModelSubcategoryProjectConnection | null,
  departments?: ModelDepartmentSubcategoriesConnection | null,
  displayOrder?: number | null,
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

export type ModelSubcategoryProjectConnection = {
  __typename: "ModelSubcategoryProjectConnection",
  items:  Array<SubcategoryProject | null >,
  nextToken?: string | null,
};

export type SubcategoryProject = {
  __typename: "SubcategoryProject",
  id: string,
  project?: Project | null,
  subcategory?: Subcategory | null,
  department?: Department | null,
  displayOrder?: number | null,
  createdAt: string,
  updatedAt: string,
  projectSubcategoryProjectsId?: string | null,
  departmentSubcategoriesProjectsId?: string | null,
  subcategorySubcategoryProjectsId?: string | null,
};

export type ModelFeaturedProjectConnection = {
  __typename: "ModelFeaturedProjectConnection",
  items:  Array<FeaturedProject | null >,
  nextToken?: string | null,
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
  displayOrder?: number | null,
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
  displayOrder?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateFeaturedProjectInput = {
  id: string,
  displayOrder?: number | null,
  projectFeaturedProjectsId?: string | null,
  departmentFeaturedProjectsId?: string | null,
};

export type DeleteFeaturedProjectInput = {
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
  link?: string | null,
  slug?: string | null,
  quote?: string | null,
  quoteAttribution?: string | null,
  collaborators?: string | null,
  size?: string | null,
  gridOrder?: number | null,
  status: Status,
  displayOrder?: number | null,
  previewLocation?: string | null,
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
  slug?: ModelStringInput | null,
  quote?: ModelStringInput | null,
  quoteAttribution?: ModelStringInput | null,
  collaborators?: ModelStringInput | null,
  size?: ModelStringInput | null,
  gridOrder?: ModelIntInput | null,
  status?: ModelStatusInput | null,
  displayOrder?: ModelIntInput | null,
  previewLocation?: ModelStringInput | null,
  and?: Array< ModelProjectConditionInput | null > | null,
  or?: Array< ModelProjectConditionInput | null > | null,
  not?: ModelProjectConditionInput | null,
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
  slug?: string | null,
  quote?: string | null,
  quoteAttribution?: string | null,
  collaborators?: string | null,
  size?: string | null,
  gridOrder?: number | null,
  status?: Status | null,
  displayOrder?: number | null,
  previewLocation?: string | null,
  projectLocationId?: string | null,
  projectCreatedById?: string | null,
  projectLastUpdatedById?: string | null,
  projectGalleryId?: string | null,
};

export type DeleteProjectInput = {
  id: string,
};

export type CreateQuoteInput = {
  id?: string | null,
  text: string,
  attribution?: string | null,
  displayOrder?: number | null,
  projectQuotesId?: string | null,
};

export type ModelQuoteConditionInput = {
  text?: ModelStringInput | null,
  attribution?: ModelStringInput | null,
  displayOrder?: ModelIntInput | null,
  and?: Array< ModelQuoteConditionInput | null > | null,
  or?: Array< ModelQuoteConditionInput | null > | null,
  not?: ModelQuoteConditionInput | null,
  projectQuotesId?: ModelIDInput | null,
};

export type UpdateQuoteInput = {
  id: string,
  text?: string | null,
  attribution?: string | null,
  displayOrder?: number | null,
  projectQuotesId?: string | null,
};

export type DeleteQuoteInput = {
  id: string,
};

export type CreateDepartmentInput = {
  id?: string | null,
  name: string,
  displayOrder?: number | null,
};

export type ModelDepartmentConditionInput = {
  name?: ModelStringInput | null,
  displayOrder?: ModelIntInput | null,
  and?: Array< ModelDepartmentConditionInput | null > | null,
  or?: Array< ModelDepartmentConditionInput | null > | null,
  not?: ModelDepartmentConditionInput | null,
};

export type UpdateDepartmentInput = {
  id: string,
  name?: string | null,
  displayOrder?: number | null,
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
  centerX?: number | null,
  centerY?: number | null,
  zoom?: number | null,
  type?: string | null,
  galleryImagesId?: string | null,
};

export type ModelImageObjectConditionInput = {
  url?: ModelStringInput | null,
  alt?: ModelStringInput | null,
  caption?: ModelStringInput | null,
  order?: ModelIntInput | null,
  centerX?: ModelFloatInput | null,
  centerY?: ModelFloatInput | null,
  zoom?: ModelFloatInput | null,
  type?: ModelStringInput | null,
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
  centerX?: number | null,
  centerY?: number | null,
  zoom?: number | null,
  type?: string | null,
  galleryImagesId?: string | null,
};

export type DeleteImageObjectInput = {
  id: string,
};

export type CreateSubcategoryInput = {
  id?: string | null,
  name: string,
  displayOrder?: number | null,
};

export type ModelSubcategoryConditionInput = {
  name?: ModelStringInput | null,
  displayOrder?: ModelIntInput | null,
  and?: Array< ModelSubcategoryConditionInput | null > | null,
  or?: Array< ModelSubcategoryConditionInput | null > | null,
  not?: ModelSubcategoryConditionInput | null,
};

export type UpdateSubcategoryInput = {
  id: string,
  name?: string | null,
  displayOrder?: number | null,
};

export type DeleteSubcategoryInput = {
  id: string,
};

export type CreateSubcategoryProjectInput = {
  id?: string | null,
  displayOrder?: number | null,
  projectSubcategoryProjectsId?: string | null,
  departmentSubcategoriesProjectsId?: string | null,
  subcategorySubcategoryProjectsId?: string | null,
};

export type ModelSubcategoryProjectConditionInput = {
  displayOrder?: ModelIntInput | null,
  and?: Array< ModelSubcategoryProjectConditionInput | null > | null,
  or?: Array< ModelSubcategoryProjectConditionInput | null > | null,
  not?: ModelSubcategoryProjectConditionInput | null,
  projectSubcategoryProjectsId?: ModelIDInput | null,
  departmentSubcategoriesProjectsId?: ModelIDInput | null,
  subcategorySubcategoryProjectsId?: ModelIDInput | null,
};

export type UpdateSubcategoryProjectInput = {
  id: string,
  displayOrder?: number | null,
  projectSubcategoryProjectsId?: string | null,
  departmentSubcategoriesProjectsId?: string | null,
  subcategorySubcategoryProjectsId?: string | null,
};

export type DeleteSubcategoryProjectInput = {
  id: string,
};

export type CreateBuildingTypeInput = {
  id?: string | null,
  name: string,
  displayOrder?: number | null,
};

export type ModelBuildingTypeConditionInput = {
  name?: ModelStringInput | null,
  displayOrder?: ModelIntInput | null,
  and?: Array< ModelBuildingTypeConditionInput | null > | null,
  or?: Array< ModelBuildingTypeConditionInput | null > | null,
  not?: ModelBuildingTypeConditionInput | null,
};

export type UpdateBuildingTypeInput = {
  id: string,
  name?: string | null,
  displayOrder?: number | null,
};

export type DeleteBuildingTypeInput = {
  id: string,
};

export type CreateProjectTypeInput = {
  id?: string | null,
  name: string,
  displayOrder?: number | null,
};

export type ModelProjectTypeConditionInput = {
  name?: ModelStringInput | null,
  displayOrder?: ModelIntInput | null,
  and?: Array< ModelProjectTypeConditionInput | null > | null,
  or?: Array< ModelProjectTypeConditionInput | null > | null,
  not?: ModelProjectTypeConditionInput | null,
};

export type UpdateProjectTypeInput = {
  id: string,
  name?: string | null,
  displayOrder?: number | null,
};

export type DeleteProjectTypeInput = {
  id: string,
};

export type CreateServicesPageInput = {
  id?: string | null,
  title: string,
  hero?: string | null,
  heroQuote?: string | null,
};

export type ModelServicesPageConditionInput = {
  title?: ModelStringInput | null,
  hero?: ModelStringInput | null,
  heroQuote?: ModelStringInput | null,
  and?: Array< ModelServicesPageConditionInput | null > | null,
  or?: Array< ModelServicesPageConditionInput | null > | null,
  not?: ModelServicesPageConditionInput | null,
};

export type ServicesPage = {
  __typename: "ServicesPage",
  id: string,
  title: string,
  hero?: string | null,
  heroQuote?: string | null,
  departments?: ModelDepartmentSummaryConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelDepartmentSummaryConnection = {
  __typename: "ModelDepartmentSummaryConnection",
  items:  Array<DepartmentSummary | null >,
  nextToken?: string | null,
};

export type DepartmentSummary = {
  __typename: "DepartmentSummary",
  id: string,
  title: string,
  image?: string | null,
  description?: string | null,
  link?: string | null,
  split?: string | null,
  envision?: ModelDepartmentSummaryItemConnection | null,
  design?: ModelDepartmentSummaryItemConnection | null,
  execute?: ModelDepartmentSummaryItemConnection | null,
  order?: number | null,
  hidden?: boolean | null,
  createdAt: string,
  updatedAt: string,
  servicesPageDepartmentsId?: string | null,
};

export type ModelDepartmentSummaryItemConnection = {
  __typename: "ModelDepartmentSummaryItemConnection",
  items:  Array<DepartmentSummaryItem | null >,
  nextToken?: string | null,
};

export type DepartmentSummaryItem = {
  __typename: "DepartmentSummaryItem",
  id: string,
  content: string,
  order?: number | null,
  createdAt: string,
  updatedAt: string,
  departmentSummaryEnvisionId?: string | null,
  departmentSummaryDesignId?: string | null,
  departmentSummaryExecuteId?: string | null,
};

export type UpdateServicesPageInput = {
  id: string,
  title?: string | null,
  hero?: string | null,
  heroQuote?: string | null,
};

export type DeleteServicesPageInput = {
  id: string,
};

export type CreateDepartmentSummaryInput = {
  id?: string | null,
  title: string,
  image?: string | null,
  description?: string | null,
  link?: string | null,
  split?: string | null,
  order?: number | null,
  hidden?: boolean | null,
  servicesPageDepartmentsId?: string | null,
};

export type ModelDepartmentSummaryConditionInput = {
  title?: ModelStringInput | null,
  image?: ModelStringInput | null,
  description?: ModelStringInput | null,
  link?: ModelStringInput | null,
  split?: ModelStringInput | null,
  order?: ModelIntInput | null,
  hidden?: ModelBooleanInput | null,
  and?: Array< ModelDepartmentSummaryConditionInput | null > | null,
  or?: Array< ModelDepartmentSummaryConditionInput | null > | null,
  not?: ModelDepartmentSummaryConditionInput | null,
  servicesPageDepartmentsId?: ModelIDInput | null,
};

export type UpdateDepartmentSummaryInput = {
  id: string,
  title?: string | null,
  image?: string | null,
  description?: string | null,
  link?: string | null,
  split?: string | null,
  order?: number | null,
  hidden?: boolean | null,
  servicesPageDepartmentsId?: string | null,
};

export type DeleteDepartmentSummaryInput = {
  id: string,
};

export type CreateDepartmentSummaryItemInput = {
  id?: string | null,
  content: string,
  order?: number | null,
  departmentSummaryEnvisionId?: string | null,
  departmentSummaryDesignId?: string | null,
  departmentSummaryExecuteId?: string | null,
};

export type ModelDepartmentSummaryItemConditionInput = {
  content?: ModelStringInput | null,
  order?: ModelIntInput | null,
  and?: Array< ModelDepartmentSummaryItemConditionInput | null > | null,
  or?: Array< ModelDepartmentSummaryItemConditionInput | null > | null,
  not?: ModelDepartmentSummaryItemConditionInput | null,
  departmentSummaryEnvisionId?: ModelIDInput | null,
  departmentSummaryDesignId?: ModelIDInput | null,
  departmentSummaryExecuteId?: ModelIDInput | null,
};

export type UpdateDepartmentSummaryItemInput = {
  id: string,
  content?: string | null,
  order?: number | null,
  departmentSummaryEnvisionId?: string | null,
  departmentSummaryDesignId?: string | null,
  departmentSummaryExecuteId?: string | null,
};

export type DeleteDepartmentSummaryItemInput = {
  id: string,
};

export type CreateStudioPageInput = {
  id?: string | null,
  title: string,
  hero?: string | null,
  heroQuote?: string | null,
};

export type ModelStudioPageConditionInput = {
  title?: ModelStringInput | null,
  hero?: ModelStringInput | null,
  heroQuote?: ModelStringInput | null,
  and?: Array< ModelStudioPageConditionInput | null > | null,
  or?: Array< ModelStudioPageConditionInput | null > | null,
  not?: ModelStudioPageConditionInput | null,
};

export type StudioPage = {
  __typename: "StudioPage",
  id: string,
  title: string,
  hero?: string | null,
  heroQuote?: string | null,
  leadership?: ModelStaffMemberConnection | null,
  staff?: ModelStaffMemberConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelStaffMemberConnection = {
  __typename: "ModelStaffMemberConnection",
  items:  Array<StaffMember | null >,
  nextToken?: string | null,
};

export type StaffMember = {
  __typename: "StaffMember",
  id: string,
  name: string,
  image?: string | null,
  title?: string | null,
  order?: number | null,
  extra?: string | null,
  hidden?: boolean | null,
  createdAt: string,
  updatedAt: string,
  studioPageLeadershipId?: string | null,
  studioPageStaffId?: string | null,
};

export type UpdateStudioPageInput = {
  id: string,
  title?: string | null,
  hero?: string | null,
  heroQuote?: string | null,
};

export type DeleteStudioPageInput = {
  id: string,
};

export type CreateStaffMemberInput = {
  id?: string | null,
  name: string,
  image?: string | null,
  title?: string | null,
  order?: number | null,
  extra?: string | null,
  hidden?: boolean | null,
  studioPageLeadershipId?: string | null,
  studioPageStaffId?: string | null,
};

export type ModelStaffMemberConditionInput = {
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  title?: ModelStringInput | null,
  order?: ModelIntInput | null,
  extra?: ModelStringInput | null,
  hidden?: ModelBooleanInput | null,
  and?: Array< ModelStaffMemberConditionInput | null > | null,
  or?: Array< ModelStaffMemberConditionInput | null > | null,
  not?: ModelStaffMemberConditionInput | null,
  studioPageLeadershipId?: ModelIDInput | null,
  studioPageStaffId?: ModelIDInput | null,
};

export type UpdateStaffMemberInput = {
  id: string,
  name?: string | null,
  image?: string | null,
  title?: string | null,
  order?: number | null,
  extra?: string | null,
  hidden?: boolean | null,
  studioPageLeadershipId?: string | null,
  studioPageStaffId?: string | null,
};

export type DeleteStaffMemberInput = {
  id: string,
};

export type CreateInquirePageInput = {
  id?: string | null,
  title: string,
  hero?: string | null,
  heroQuote?: string | null,
};

export type ModelInquirePageConditionInput = {
  title?: ModelStringInput | null,
  hero?: ModelStringInput | null,
  heroQuote?: ModelStringInput | null,
  and?: Array< ModelInquirePageConditionInput | null > | null,
  or?: Array< ModelInquirePageConditionInput | null > | null,
  not?: ModelInquirePageConditionInput | null,
};

export type InquirePage = {
  __typename: "InquirePage",
  id: string,
  title: string,
  hero?: string | null,
  heroQuote?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateInquirePageInput = {
  id: string,
  title?: string | null,
  hero?: string | null,
  heroQuote?: string | null,
};

export type DeleteInquirePageInput = {
  id: string,
};

export type CreateHomePageFeatureInput = {
  id?: string | null,
  title: string,
  image?: string | null,
  link?: string | null,
  linkText?: string | null,
  callout?: string | null,
  order?: number | null,
  homePageFeaturesId?: string | null,
};

export type ModelHomePageFeatureConditionInput = {
  title?: ModelStringInput | null,
  image?: ModelStringInput | null,
  link?: ModelStringInput | null,
  linkText?: ModelStringInput | null,
  callout?: ModelStringInput | null,
  order?: ModelIntInput | null,
  and?: Array< ModelHomePageFeatureConditionInput | null > | null,
  or?: Array< ModelHomePageFeatureConditionInput | null > | null,
  not?: ModelHomePageFeatureConditionInput | null,
  homePageFeaturesId?: ModelIDInput | null,
};

export type HomePageFeature = {
  __typename: "HomePageFeature",
  id: string,
  title: string,
  image?: string | null,
  link?: string | null,
  linkText?: string | null,
  callout?: string | null,
  order?: number | null,
  createdAt: string,
  updatedAt: string,
  homePageFeaturesId?: string | null,
};

export type UpdateHomePageFeatureInput = {
  id: string,
  title?: string | null,
  image?: string | null,
  link?: string | null,
  linkText?: string | null,
  callout?: string | null,
  order?: number | null,
  homePageFeaturesId?: string | null,
};

export type DeleteHomePageFeatureInput = {
  id: string,
};

export type CreateHomePageInput = {
  id?: string | null,
  title: string,
  hero?: string | null,
  heroQuote?: string | null,
  introText?: string | null,
  studioText?: string | null,
  studioLink?: string | null,
  studioImage?: string | null,
};

export type ModelHomePageConditionInput = {
  title?: ModelStringInput | null,
  hero?: ModelStringInput | null,
  heroQuote?: ModelStringInput | null,
  introText?: ModelStringInput | null,
  studioText?: ModelStringInput | null,
  studioLink?: ModelStringInput | null,
  studioImage?: ModelStringInput | null,
  and?: Array< ModelHomePageConditionInput | null > | null,
  or?: Array< ModelHomePageConditionInput | null > | null,
  not?: ModelHomePageConditionInput | null,
};

export type HomePage = {
  __typename: "HomePage",
  id: string,
  title: string,
  hero?: string | null,
  heroQuote?: string | null,
  introText?: string | null,
  features?: ModelHomePageFeatureConnection | null,
  featureProjects?: ModelHomePageFeatureProjectConnection | null,
  studioText?: string | null,
  studioLink?: string | null,
  studioImage?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelHomePageFeatureConnection = {
  __typename: "ModelHomePageFeatureConnection",
  items:  Array<HomePageFeature | null >,
  nextToken?: string | null,
};

export type ModelHomePageFeatureProjectConnection = {
  __typename: "ModelHomePageFeatureProjectConnection",
  items:  Array<HomePageFeatureProject | null >,
  nextToken?: string | null,
};

export type HomePageFeatureProject = {
  __typename: "HomePageFeatureProject",
  id: string,
  projectTitle?: string | null,
  projectLink?: string | null,
  projectImage?: string | null,
  projectLocation?: string | null,
  order?: number | null,
  createdAt: string,
  updatedAt: string,
  homePageFeatureProjectsId?: string | null,
};

export type UpdateHomePageInput = {
  id: string,
  title?: string | null,
  hero?: string | null,
  heroQuote?: string | null,
  introText?: string | null,
  studioText?: string | null,
  studioLink?: string | null,
  studioImage?: string | null,
};

export type DeleteHomePageInput = {
  id: string,
};

export type CreateHomePageFeatureProjectInput = {
  id?: string | null,
  projectTitle?: string | null,
  projectLink?: string | null,
  projectImage?: string | null,
  projectLocation?: string | null,
  order?: number | null,
  homePageFeatureProjectsId?: string | null,
};

export type ModelHomePageFeatureProjectConditionInput = {
  projectTitle?: ModelStringInput | null,
  projectLink?: ModelStringInput | null,
  projectImage?: ModelStringInput | null,
  projectLocation?: ModelStringInput | null,
  order?: ModelIntInput | null,
  and?: Array< ModelHomePageFeatureProjectConditionInput | null > | null,
  or?: Array< ModelHomePageFeatureProjectConditionInput | null > | null,
  not?: ModelHomePageFeatureProjectConditionInput | null,
  homePageFeatureProjectsId?: ModelIDInput | null,
};

export type UpdateHomePageFeatureProjectInput = {
  id: string,
  projectTitle?: string | null,
  projectLink?: string | null,
  projectImage?: string | null,
  projectLocation?: string | null,
  order?: number | null,
  homePageFeatureProjectsId?: string | null,
};

export type DeleteHomePageFeatureProjectInput = {
  id: string,
};

export type CreateProjectDepartmentsInput = {
  id?: string | null,
  projectID: string,
  departmentID: string,
};

export type ModelProjectDepartmentsConditionInput = {
  projectID?: ModelIDInput | null,
  departmentID?: ModelIDInput | null,
  and?: Array< ModelProjectDepartmentsConditionInput | null > | null,
  or?: Array< ModelProjectDepartmentsConditionInput | null > | null,
  not?: ModelProjectDepartmentsConditionInput | null,
};

export type UpdateProjectDepartmentsInput = {
  id: string,
  projectID?: string | null,
  departmentID?: string | null,
};

export type DeleteProjectDepartmentsInput = {
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

export type ModelFeaturedProjectFilterInput = {
  id?: ModelIDInput | null,
  displayOrder?: ModelIntInput | null,
  and?: Array< ModelFeaturedProjectFilterInput | null > | null,
  or?: Array< ModelFeaturedProjectFilterInput | null > | null,
  not?: ModelFeaturedProjectFilterInput | null,
  projectFeaturedProjectsId?: ModelIDInput | null,
  departmentFeaturedProjectsId?: ModelIDInput | null,
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
  slug?: ModelStringInput | null,
  quote?: ModelStringInput | null,
  quoteAttribution?: ModelStringInput | null,
  collaborators?: ModelStringInput | null,
  size?: ModelStringInput | null,
  gridOrder?: ModelIntInput | null,
  status?: ModelStatusInput | null,
  displayOrder?: ModelIntInput | null,
  previewLocation?: ModelStringInput | null,
  and?: Array< ModelProjectFilterInput | null > | null,
  or?: Array< ModelProjectFilterInput | null > | null,
  not?: ModelProjectFilterInput | null,
  projectLocationId?: ModelIDInput | null,
  projectCreatedById?: ModelIDInput | null,
  projectLastUpdatedById?: ModelIDInput | null,
  projectGalleryId?: ModelIDInput | null,
};

export type ModelProjectConnection = {
  __typename: "ModelProjectConnection",
  items:  Array<Project | null >,
  nextToken?: string | null,
};

export type ModelQuoteFilterInput = {
  id?: ModelIDInput | null,
  text?: ModelStringInput | null,
  attribution?: ModelStringInput | null,
  displayOrder?: ModelIntInput | null,
  and?: Array< ModelQuoteFilterInput | null > | null,
  or?: Array< ModelQuoteFilterInput | null > | null,
  not?: ModelQuoteFilterInput | null,
  projectQuotesId?: ModelIDInput | null,
};

export type ModelDepartmentFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  displayOrder?: ModelIntInput | null,
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
  centerX?: ModelFloatInput | null,
  centerY?: ModelFloatInput | null,
  zoom?: ModelFloatInput | null,
  type?: ModelStringInput | null,
  and?: Array< ModelImageObjectFilterInput | null > | null,
  or?: Array< ModelImageObjectFilterInput | null > | null,
  not?: ModelImageObjectFilterInput | null,
  galleryImagesId?: ModelIDInput | null,
};

export type ModelSubcategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  displayOrder?: ModelIntInput | null,
  and?: Array< ModelSubcategoryFilterInput | null > | null,
  or?: Array< ModelSubcategoryFilterInput | null > | null,
  not?: ModelSubcategoryFilterInput | null,
};

export type ModelSubcategoryConnection = {
  __typename: "ModelSubcategoryConnection",
  items:  Array<Subcategory | null >,
  nextToken?: string | null,
};

export type ModelSubcategoryProjectFilterInput = {
  id?: ModelIDInput | null,
  displayOrder?: ModelIntInput | null,
  and?: Array< ModelSubcategoryProjectFilterInput | null > | null,
  or?: Array< ModelSubcategoryProjectFilterInput | null > | null,
  not?: ModelSubcategoryProjectFilterInput | null,
  projectSubcategoryProjectsId?: ModelIDInput | null,
  departmentSubcategoriesProjectsId?: ModelIDInput | null,
  subcategorySubcategoryProjectsId?: ModelIDInput | null,
};

export type ModelBuildingTypeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  displayOrder?: ModelIntInput | null,
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
  displayOrder?: ModelIntInput | null,
  and?: Array< ModelProjectTypeFilterInput | null > | null,
  or?: Array< ModelProjectTypeFilterInput | null > | null,
  not?: ModelProjectTypeFilterInput | null,
};

export type ModelProjectTypeConnection = {
  __typename: "ModelProjectTypeConnection",
  items:  Array<ProjectType | null >,
  nextToken?: string | null,
};

export type ModelServicesPageFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  hero?: ModelStringInput | null,
  heroQuote?: ModelStringInput | null,
  and?: Array< ModelServicesPageFilterInput | null > | null,
  or?: Array< ModelServicesPageFilterInput | null > | null,
  not?: ModelServicesPageFilterInput | null,
};

export type ModelServicesPageConnection = {
  __typename: "ModelServicesPageConnection",
  items:  Array<ServicesPage | null >,
  nextToken?: string | null,
};

export type ModelDepartmentSummaryFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  image?: ModelStringInput | null,
  description?: ModelStringInput | null,
  link?: ModelStringInput | null,
  split?: ModelStringInput | null,
  order?: ModelIntInput | null,
  hidden?: ModelBooleanInput | null,
  and?: Array< ModelDepartmentSummaryFilterInput | null > | null,
  or?: Array< ModelDepartmentSummaryFilterInput | null > | null,
  not?: ModelDepartmentSummaryFilterInput | null,
  servicesPageDepartmentsId?: ModelIDInput | null,
};

export type ModelDepartmentSummaryItemFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  order?: ModelIntInput | null,
  and?: Array< ModelDepartmentSummaryItemFilterInput | null > | null,
  or?: Array< ModelDepartmentSummaryItemFilterInput | null > | null,
  not?: ModelDepartmentSummaryItemFilterInput | null,
  departmentSummaryEnvisionId?: ModelIDInput | null,
  departmentSummaryDesignId?: ModelIDInput | null,
  departmentSummaryExecuteId?: ModelIDInput | null,
};

export type ModelStudioPageFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  hero?: ModelStringInput | null,
  heroQuote?: ModelStringInput | null,
  and?: Array< ModelStudioPageFilterInput | null > | null,
  or?: Array< ModelStudioPageFilterInput | null > | null,
  not?: ModelStudioPageFilterInput | null,
};

export type ModelStudioPageConnection = {
  __typename: "ModelStudioPageConnection",
  items:  Array<StudioPage | null >,
  nextToken?: string | null,
};

export type ModelStaffMemberFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  title?: ModelStringInput | null,
  order?: ModelIntInput | null,
  extra?: ModelStringInput | null,
  hidden?: ModelBooleanInput | null,
  and?: Array< ModelStaffMemberFilterInput | null > | null,
  or?: Array< ModelStaffMemberFilterInput | null > | null,
  not?: ModelStaffMemberFilterInput | null,
  studioPageLeadershipId?: ModelIDInput | null,
  studioPageStaffId?: ModelIDInput | null,
};

export type ModelInquirePageFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  hero?: ModelStringInput | null,
  heroQuote?: ModelStringInput | null,
  and?: Array< ModelInquirePageFilterInput | null > | null,
  or?: Array< ModelInquirePageFilterInput | null > | null,
  not?: ModelInquirePageFilterInput | null,
};

export type ModelInquirePageConnection = {
  __typename: "ModelInquirePageConnection",
  items:  Array<InquirePage | null >,
  nextToken?: string | null,
};

export type ModelHomePageFeatureFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  image?: ModelStringInput | null,
  link?: ModelStringInput | null,
  linkText?: ModelStringInput | null,
  callout?: ModelStringInput | null,
  order?: ModelIntInput | null,
  and?: Array< ModelHomePageFeatureFilterInput | null > | null,
  or?: Array< ModelHomePageFeatureFilterInput | null > | null,
  not?: ModelHomePageFeatureFilterInput | null,
  homePageFeaturesId?: ModelIDInput | null,
};

export type ModelHomePageFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  hero?: ModelStringInput | null,
  heroQuote?: ModelStringInput | null,
  introText?: ModelStringInput | null,
  studioText?: ModelStringInput | null,
  studioLink?: ModelStringInput | null,
  studioImage?: ModelStringInput | null,
  and?: Array< ModelHomePageFilterInput | null > | null,
  or?: Array< ModelHomePageFilterInput | null > | null,
  not?: ModelHomePageFilterInput | null,
};

export type ModelHomePageConnection = {
  __typename: "ModelHomePageConnection",
  items:  Array<HomePage | null >,
  nextToken?: string | null,
};

export type ModelHomePageFeatureProjectFilterInput = {
  id?: ModelIDInput | null,
  projectTitle?: ModelStringInput | null,
  projectLink?: ModelStringInput | null,
  projectImage?: ModelStringInput | null,
  projectLocation?: ModelStringInput | null,
  order?: ModelIntInput | null,
  and?: Array< ModelHomePageFeatureProjectFilterInput | null > | null,
  or?: Array< ModelHomePageFeatureProjectFilterInput | null > | null,
  not?: ModelHomePageFeatureProjectFilterInput | null,
  homePageFeatureProjectsId?: ModelIDInput | null,
};

export type ModelProjectDepartmentsFilterInput = {
  id?: ModelIDInput | null,
  projectID?: ModelIDInput | null,
  departmentID?: ModelIDInput | null,
  and?: Array< ModelProjectDepartmentsFilterInput | null > | null,
  or?: Array< ModelProjectDepartmentsFilterInput | null > | null,
  not?: ModelProjectDepartmentsFilterInput | null,
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

export type CreateFeaturedProjectMutationVariables = {
  input: CreateFeaturedProjectInput,
  condition?: ModelFeaturedProjectConditionInput | null,
};

export type CreateFeaturedProjectMutation = {
  createFeaturedProject?:  {
    __typename: "FeaturedProject",
    id: string,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    } | null,
    displayOrder?: number | null,
    department?:  {
      __typename: "Department",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoriesProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectFeaturedProjectsId?: string | null,
    departmentFeaturedProjectsId?: string | null,
  } | null,
};

export type UpdateFeaturedProjectMutationVariables = {
  input: UpdateFeaturedProjectInput,
  condition?: ModelFeaturedProjectConditionInput | null,
};

export type UpdateFeaturedProjectMutation = {
  updateFeaturedProject?:  {
    __typename: "FeaturedProject",
    id: string,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    } | null,
    displayOrder?: number | null,
    department?:  {
      __typename: "Department",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoriesProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectFeaturedProjectsId?: string | null,
    departmentFeaturedProjectsId?: string | null,
  } | null,
};

export type DeleteFeaturedProjectMutationVariables = {
  input: DeleteFeaturedProjectInput,
  condition?: ModelFeaturedProjectConditionInput | null,
};

export type DeleteFeaturedProjectMutation = {
  deleteFeaturedProject?:  {
    __typename: "FeaturedProject",
    id: string,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    } | null,
    displayOrder?: number | null,
    department?:  {
      __typename: "Department",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoriesProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectFeaturedProjectsId?: string | null,
    departmentFeaturedProjectsId?: string | null,
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
        centerX?: number | null,
        centerY?: number | null,
        zoom?: number | null,
        type?: string | null,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
        centerX?: number | null,
        centerY?: number | null,
        zoom?: number | null,
        type?: string | null,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
        centerX?: number | null,
        centerY?: number | null,
        zoom?: number | null,
        type?: string | null,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
    link?: string | null,
    slug?: string | null,
    quote?: string | null,
    quoteAttribution?: string | null,
    quotes?:  {
      __typename: "ModelQuoteConnection",
      items:  Array< {
        __typename: "Quote",
        id: string,
        text: string,
        attribution?: string | null,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        projectQuotesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
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
        link?: string | null,
        slug?: string | null,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        displayOrder?: number | null,
        previewLocation?: string | null,
        createdAt: string,
        updatedAt: string,
        projectLocationId?: string | null,
        projectCreatedById?: string | null,
        projectLastUpdatedById?: string | null,
        projectGalleryId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      galleryProjectId?: string | null,
    } | null,
    departments?:  {
      __typename: "ModelProjectDepartmentsConnection",
      items:  Array< {
        __typename: "ProjectDepartments",
        id: string,
        projectID: string,
        departmentID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
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
    displayOrder?: number | null,
    previewLocation?: string | null,
    featuredProjects?:  {
      __typename: "ModelFeaturedProjectConnection",
      items:  Array< {
        __typename: "FeaturedProject",
        id: string,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        projectFeaturedProjectsId?: string | null,
        departmentFeaturedProjectsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    subcategoryProjects?:  {
      __typename: "ModelSubcategoryProjectConnection",
      items:  Array< {
        __typename: "SubcategoryProject",
        id: string,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        projectSubcategoryProjectsId?: string | null,
        departmentSubcategoriesProjectsId?: string | null,
        subcategorySubcategoryProjectsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    link?: string | null,
    slug?: string | null,
    quote?: string | null,
    quoteAttribution?: string | null,
    quotes?:  {
      __typename: "ModelQuoteConnection",
      items:  Array< {
        __typename: "Quote",
        id: string,
        text: string,
        attribution?: string | null,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        projectQuotesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
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
        link?: string | null,
        slug?: string | null,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        displayOrder?: number | null,
        previewLocation?: string | null,
        createdAt: string,
        updatedAt: string,
        projectLocationId?: string | null,
        projectCreatedById?: string | null,
        projectLastUpdatedById?: string | null,
        projectGalleryId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      galleryProjectId?: string | null,
    } | null,
    departments?:  {
      __typename: "ModelProjectDepartmentsConnection",
      items:  Array< {
        __typename: "ProjectDepartments",
        id: string,
        projectID: string,
        departmentID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
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
    displayOrder?: number | null,
    previewLocation?: string | null,
    featuredProjects?:  {
      __typename: "ModelFeaturedProjectConnection",
      items:  Array< {
        __typename: "FeaturedProject",
        id: string,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        projectFeaturedProjectsId?: string | null,
        departmentFeaturedProjectsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    subcategoryProjects?:  {
      __typename: "ModelSubcategoryProjectConnection",
      items:  Array< {
        __typename: "SubcategoryProject",
        id: string,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        projectSubcategoryProjectsId?: string | null,
        departmentSubcategoriesProjectsId?: string | null,
        subcategorySubcategoryProjectsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    link?: string | null,
    slug?: string | null,
    quote?: string | null,
    quoteAttribution?: string | null,
    quotes?:  {
      __typename: "ModelQuoteConnection",
      items:  Array< {
        __typename: "Quote",
        id: string,
        text: string,
        attribution?: string | null,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        projectQuotesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
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
        link?: string | null,
        slug?: string | null,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        displayOrder?: number | null,
        previewLocation?: string | null,
        createdAt: string,
        updatedAt: string,
        projectLocationId?: string | null,
        projectCreatedById?: string | null,
        projectLastUpdatedById?: string | null,
        projectGalleryId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      galleryProjectId?: string | null,
    } | null,
    departments?:  {
      __typename: "ModelProjectDepartmentsConnection",
      items:  Array< {
        __typename: "ProjectDepartments",
        id: string,
        projectID: string,
        departmentID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
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
    displayOrder?: number | null,
    previewLocation?: string | null,
    featuredProjects?:  {
      __typename: "ModelFeaturedProjectConnection",
      items:  Array< {
        __typename: "FeaturedProject",
        id: string,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        projectFeaturedProjectsId?: string | null,
        departmentFeaturedProjectsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    subcategoryProjects?:  {
      __typename: "ModelSubcategoryProjectConnection",
      items:  Array< {
        __typename: "SubcategoryProject",
        id: string,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        projectSubcategoryProjectsId?: string | null,
        departmentSubcategoriesProjectsId?: string | null,
        subcategorySubcategoryProjectsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectLocationId?: string | null,
    projectCreatedById?: string | null,
    projectLastUpdatedById?: string | null,
    projectGalleryId?: string | null,
  } | null,
};

export type CreateQuoteMutationVariables = {
  input: CreateQuoteInput,
  condition?: ModelQuoteConditionInput | null,
};

export type CreateQuoteMutation = {
  createQuote?:  {
    __typename: "Quote",
    id: string,
    text: string,
    attribution?: string | null,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    } | null,
    displayOrder?: number | null,
    createdAt: string,
    updatedAt: string,
    projectQuotesId?: string | null,
  } | null,
};

export type UpdateQuoteMutationVariables = {
  input: UpdateQuoteInput,
  condition?: ModelQuoteConditionInput | null,
};

export type UpdateQuoteMutation = {
  updateQuote?:  {
    __typename: "Quote",
    id: string,
    text: string,
    attribution?: string | null,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    } | null,
    displayOrder?: number | null,
    createdAt: string,
    updatedAt: string,
    projectQuotesId?: string | null,
  } | null,
};

export type DeleteQuoteMutationVariables = {
  input: DeleteQuoteInput,
  condition?: ModelQuoteConditionInput | null,
};

export type DeleteQuoteMutation = {
  deleteQuote?:  {
    __typename: "Quote",
    id: string,
    text: string,
    attribution?: string | null,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    } | null,
    displayOrder?: number | null,
    createdAt: string,
    updatedAt: string,
    projectQuotesId?: string | null,
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
      __typename: "ModelProjectDepartmentsConnection",
      items:  Array< {
        __typename: "ProjectDepartments",
        id: string,
        projectID: string,
        departmentID: string,
        createdAt: string,
        updatedAt: string,
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
    displayOrder?: number | null,
    featuredProjects?:  {
      __typename: "ModelFeaturedProjectConnection",
      items:  Array< {
        __typename: "FeaturedProject",
        id: string,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        projectFeaturedProjectsId?: string | null,
        departmentFeaturedProjectsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    subcategoriesProjects?:  {
      __typename: "ModelSubcategoryProjectConnection",
      items:  Array< {
        __typename: "SubcategoryProject",
        id: string,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        projectSubcategoryProjectsId?: string | null,
        departmentSubcategoriesProjectsId?: string | null,
        subcategorySubcategoryProjectsId?: string | null,
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
      __typename: "ModelProjectDepartmentsConnection",
      items:  Array< {
        __typename: "ProjectDepartments",
        id: string,
        projectID: string,
        departmentID: string,
        createdAt: string,
        updatedAt: string,
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
    displayOrder?: number | null,
    featuredProjects?:  {
      __typename: "ModelFeaturedProjectConnection",
      items:  Array< {
        __typename: "FeaturedProject",
        id: string,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        projectFeaturedProjectsId?: string | null,
        departmentFeaturedProjectsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    subcategoriesProjects?:  {
      __typename: "ModelSubcategoryProjectConnection",
      items:  Array< {
        __typename: "SubcategoryProject",
        id: string,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        projectSubcategoryProjectsId?: string | null,
        departmentSubcategoriesProjectsId?: string | null,
        subcategorySubcategoryProjectsId?: string | null,
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
      __typename: "ModelProjectDepartmentsConnection",
      items:  Array< {
        __typename: "ProjectDepartments",
        id: string,
        projectID: string,
        departmentID: string,
        createdAt: string,
        updatedAt: string,
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
    displayOrder?: number | null,
    featuredProjects?:  {
      __typename: "ModelFeaturedProjectConnection",
      items:  Array< {
        __typename: "FeaturedProject",
        id: string,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        projectFeaturedProjectsId?: string | null,
        departmentFeaturedProjectsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    subcategoriesProjects?:  {
      __typename: "ModelSubcategoryProjectConnection",
      items:  Array< {
        __typename: "SubcategoryProject",
        id: string,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        projectSubcategoryProjectsId?: string | null,
        departmentSubcategoriesProjectsId?: string | null,
        subcategorySubcategoryProjectsId?: string | null,
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
        link?: string | null,
        slug?: string | null,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        displayOrder?: number | null,
        previewLocation?: string | null,
        createdAt: string,
        updatedAt: string,
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
    centerX?: number | null,
    centerY?: number | null,
    zoom?: number | null,
    type?: string | null,
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
        link?: string | null,
        slug?: string | null,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        displayOrder?: number | null,
        previewLocation?: string | null,
        createdAt: string,
        updatedAt: string,
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
    centerX?: number | null,
    centerY?: number | null,
    zoom?: number | null,
    type?: string | null,
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
        link?: string | null,
        slug?: string | null,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        displayOrder?: number | null,
        previewLocation?: string | null,
        createdAt: string,
        updatedAt: string,
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
    centerX?: number | null,
    centerY?: number | null,
    zoom?: number | null,
    type?: string | null,
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
    subcategoryProjects?:  {
      __typename: "ModelSubcategoryProjectConnection",
      items:  Array< {
        __typename: "SubcategoryProject",
        id: string,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        projectSubcategoryProjectsId?: string | null,
        departmentSubcategoriesProjectsId?: string | null,
        subcategorySubcategoryProjectsId?: string | null,
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
    displayOrder?: number | null,
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
    subcategoryProjects?:  {
      __typename: "ModelSubcategoryProjectConnection",
      items:  Array< {
        __typename: "SubcategoryProject",
        id: string,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        projectSubcategoryProjectsId?: string | null,
        departmentSubcategoriesProjectsId?: string | null,
        subcategorySubcategoryProjectsId?: string | null,
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
    displayOrder?: number | null,
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
    subcategoryProjects?:  {
      __typename: "ModelSubcategoryProjectConnection",
      items:  Array< {
        __typename: "SubcategoryProject",
        id: string,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        projectSubcategoryProjectsId?: string | null,
        departmentSubcategoriesProjectsId?: string | null,
        subcategorySubcategoryProjectsId?: string | null,
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
    displayOrder?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSubcategoryProjectMutationVariables = {
  input: CreateSubcategoryProjectInput,
  condition?: ModelSubcategoryProjectConditionInput | null,
};

export type CreateSubcategoryProjectMutation = {
  createSubcategoryProject?:  {
    __typename: "SubcategoryProject",
    id: string,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    } | null,
    subcategory?:  {
      __typename: "Subcategory",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      departments?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    department?:  {
      __typename: "Department",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoriesProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    displayOrder?: number | null,
    createdAt: string,
    updatedAt: string,
    projectSubcategoryProjectsId?: string | null,
    departmentSubcategoriesProjectsId?: string | null,
    subcategorySubcategoryProjectsId?: string | null,
  } | null,
};

export type UpdateSubcategoryProjectMutationVariables = {
  input: UpdateSubcategoryProjectInput,
  condition?: ModelSubcategoryProjectConditionInput | null,
};

export type UpdateSubcategoryProjectMutation = {
  updateSubcategoryProject?:  {
    __typename: "SubcategoryProject",
    id: string,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    } | null,
    subcategory?:  {
      __typename: "Subcategory",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      departments?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    department?:  {
      __typename: "Department",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoriesProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    displayOrder?: number | null,
    createdAt: string,
    updatedAt: string,
    projectSubcategoryProjectsId?: string | null,
    departmentSubcategoriesProjectsId?: string | null,
    subcategorySubcategoryProjectsId?: string | null,
  } | null,
};

export type DeleteSubcategoryProjectMutationVariables = {
  input: DeleteSubcategoryProjectInput,
  condition?: ModelSubcategoryProjectConditionInput | null,
};

export type DeleteSubcategoryProjectMutation = {
  deleteSubcategoryProject?:  {
    __typename: "SubcategoryProject",
    id: string,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    } | null,
    subcategory?:  {
      __typename: "Subcategory",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      departments?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    department?:  {
      __typename: "Department",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoriesProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    displayOrder?: number | null,
    createdAt: string,
    updatedAt: string,
    projectSubcategoryProjectsId?: string | null,
    departmentSubcategoriesProjectsId?: string | null,
    subcategorySubcategoryProjectsId?: string | null,
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
    displayOrder?: number | null,
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
    displayOrder?: number | null,
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
    displayOrder?: number | null,
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
    displayOrder?: number | null,
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
    displayOrder?: number | null,
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
    displayOrder?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateServicesPageMutationVariables = {
  input: CreateServicesPageInput,
  condition?: ModelServicesPageConditionInput | null,
};

export type CreateServicesPageMutation = {
  createServicesPage?:  {
    __typename: "ServicesPage",
    id: string,
    title: string,
    hero?: string | null,
    heroQuote?: string | null,
    departments?:  {
      __typename: "ModelDepartmentSummaryConnection",
      items:  Array< {
        __typename: "DepartmentSummary",
        id: string,
        title: string,
        image?: string | null,
        description?: string | null,
        link?: string | null,
        split?: string | null,
        order?: number | null,
        hidden?: boolean | null,
        createdAt: string,
        updatedAt: string,
        servicesPageDepartmentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateServicesPageMutationVariables = {
  input: UpdateServicesPageInput,
  condition?: ModelServicesPageConditionInput | null,
};

export type UpdateServicesPageMutation = {
  updateServicesPage?:  {
    __typename: "ServicesPage",
    id: string,
    title: string,
    hero?: string | null,
    heroQuote?: string | null,
    departments?:  {
      __typename: "ModelDepartmentSummaryConnection",
      items:  Array< {
        __typename: "DepartmentSummary",
        id: string,
        title: string,
        image?: string | null,
        description?: string | null,
        link?: string | null,
        split?: string | null,
        order?: number | null,
        hidden?: boolean | null,
        createdAt: string,
        updatedAt: string,
        servicesPageDepartmentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteServicesPageMutationVariables = {
  input: DeleteServicesPageInput,
  condition?: ModelServicesPageConditionInput | null,
};

export type DeleteServicesPageMutation = {
  deleteServicesPage?:  {
    __typename: "ServicesPage",
    id: string,
    title: string,
    hero?: string | null,
    heroQuote?: string | null,
    departments?:  {
      __typename: "ModelDepartmentSummaryConnection",
      items:  Array< {
        __typename: "DepartmentSummary",
        id: string,
        title: string,
        image?: string | null,
        description?: string | null,
        link?: string | null,
        split?: string | null,
        order?: number | null,
        hidden?: boolean | null,
        createdAt: string,
        updatedAt: string,
        servicesPageDepartmentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDepartmentSummaryMutationVariables = {
  input: CreateDepartmentSummaryInput,
  condition?: ModelDepartmentSummaryConditionInput | null,
};

export type CreateDepartmentSummaryMutation = {
  createDepartmentSummary?:  {
    __typename: "DepartmentSummary",
    id: string,
    title: string,
    image?: string | null,
    description?: string | null,
    link?: string | null,
    split?: string | null,
    envision?:  {
      __typename: "ModelDepartmentSummaryItemConnection",
      items:  Array< {
        __typename: "DepartmentSummaryItem",
        id: string,
        content: string,
        order?: number | null,
        createdAt: string,
        updatedAt: string,
        departmentSummaryEnvisionId?: string | null,
        departmentSummaryDesignId?: string | null,
        departmentSummaryExecuteId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    design?:  {
      __typename: "ModelDepartmentSummaryItemConnection",
      items:  Array< {
        __typename: "DepartmentSummaryItem",
        id: string,
        content: string,
        order?: number | null,
        createdAt: string,
        updatedAt: string,
        departmentSummaryEnvisionId?: string | null,
        departmentSummaryDesignId?: string | null,
        departmentSummaryExecuteId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    execute?:  {
      __typename: "ModelDepartmentSummaryItemConnection",
      items:  Array< {
        __typename: "DepartmentSummaryItem",
        id: string,
        content: string,
        order?: number | null,
        createdAt: string,
        updatedAt: string,
        departmentSummaryEnvisionId?: string | null,
        departmentSummaryDesignId?: string | null,
        departmentSummaryExecuteId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    order?: number | null,
    hidden?: boolean | null,
    createdAt: string,
    updatedAt: string,
    servicesPageDepartmentsId?: string | null,
  } | null,
};

export type UpdateDepartmentSummaryMutationVariables = {
  input: UpdateDepartmentSummaryInput,
  condition?: ModelDepartmentSummaryConditionInput | null,
};

export type UpdateDepartmentSummaryMutation = {
  updateDepartmentSummary?:  {
    __typename: "DepartmentSummary",
    id: string,
    title: string,
    image?: string | null,
    description?: string | null,
    link?: string | null,
    split?: string | null,
    envision?:  {
      __typename: "ModelDepartmentSummaryItemConnection",
      items:  Array< {
        __typename: "DepartmentSummaryItem",
        id: string,
        content: string,
        order?: number | null,
        createdAt: string,
        updatedAt: string,
        departmentSummaryEnvisionId?: string | null,
        departmentSummaryDesignId?: string | null,
        departmentSummaryExecuteId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    design?:  {
      __typename: "ModelDepartmentSummaryItemConnection",
      items:  Array< {
        __typename: "DepartmentSummaryItem",
        id: string,
        content: string,
        order?: number | null,
        createdAt: string,
        updatedAt: string,
        departmentSummaryEnvisionId?: string | null,
        departmentSummaryDesignId?: string | null,
        departmentSummaryExecuteId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    execute?:  {
      __typename: "ModelDepartmentSummaryItemConnection",
      items:  Array< {
        __typename: "DepartmentSummaryItem",
        id: string,
        content: string,
        order?: number | null,
        createdAt: string,
        updatedAt: string,
        departmentSummaryEnvisionId?: string | null,
        departmentSummaryDesignId?: string | null,
        departmentSummaryExecuteId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    order?: number | null,
    hidden?: boolean | null,
    createdAt: string,
    updatedAt: string,
    servicesPageDepartmentsId?: string | null,
  } | null,
};

export type DeleteDepartmentSummaryMutationVariables = {
  input: DeleteDepartmentSummaryInput,
  condition?: ModelDepartmentSummaryConditionInput | null,
};

export type DeleteDepartmentSummaryMutation = {
  deleteDepartmentSummary?:  {
    __typename: "DepartmentSummary",
    id: string,
    title: string,
    image?: string | null,
    description?: string | null,
    link?: string | null,
    split?: string | null,
    envision?:  {
      __typename: "ModelDepartmentSummaryItemConnection",
      items:  Array< {
        __typename: "DepartmentSummaryItem",
        id: string,
        content: string,
        order?: number | null,
        createdAt: string,
        updatedAt: string,
        departmentSummaryEnvisionId?: string | null,
        departmentSummaryDesignId?: string | null,
        departmentSummaryExecuteId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    design?:  {
      __typename: "ModelDepartmentSummaryItemConnection",
      items:  Array< {
        __typename: "DepartmentSummaryItem",
        id: string,
        content: string,
        order?: number | null,
        createdAt: string,
        updatedAt: string,
        departmentSummaryEnvisionId?: string | null,
        departmentSummaryDesignId?: string | null,
        departmentSummaryExecuteId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    execute?:  {
      __typename: "ModelDepartmentSummaryItemConnection",
      items:  Array< {
        __typename: "DepartmentSummaryItem",
        id: string,
        content: string,
        order?: number | null,
        createdAt: string,
        updatedAt: string,
        departmentSummaryEnvisionId?: string | null,
        departmentSummaryDesignId?: string | null,
        departmentSummaryExecuteId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    order?: number | null,
    hidden?: boolean | null,
    createdAt: string,
    updatedAt: string,
    servicesPageDepartmentsId?: string | null,
  } | null,
};

export type CreateDepartmentSummaryItemMutationVariables = {
  input: CreateDepartmentSummaryItemInput,
  condition?: ModelDepartmentSummaryItemConditionInput | null,
};

export type CreateDepartmentSummaryItemMutation = {
  createDepartmentSummaryItem?:  {
    __typename: "DepartmentSummaryItem",
    id: string,
    content: string,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    departmentSummaryEnvisionId?: string | null,
    departmentSummaryDesignId?: string | null,
    departmentSummaryExecuteId?: string | null,
  } | null,
};

export type UpdateDepartmentSummaryItemMutationVariables = {
  input: UpdateDepartmentSummaryItemInput,
  condition?: ModelDepartmentSummaryItemConditionInput | null,
};

export type UpdateDepartmentSummaryItemMutation = {
  updateDepartmentSummaryItem?:  {
    __typename: "DepartmentSummaryItem",
    id: string,
    content: string,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    departmentSummaryEnvisionId?: string | null,
    departmentSummaryDesignId?: string | null,
    departmentSummaryExecuteId?: string | null,
  } | null,
};

export type DeleteDepartmentSummaryItemMutationVariables = {
  input: DeleteDepartmentSummaryItemInput,
  condition?: ModelDepartmentSummaryItemConditionInput | null,
};

export type DeleteDepartmentSummaryItemMutation = {
  deleteDepartmentSummaryItem?:  {
    __typename: "DepartmentSummaryItem",
    id: string,
    content: string,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    departmentSummaryEnvisionId?: string | null,
    departmentSummaryDesignId?: string | null,
    departmentSummaryExecuteId?: string | null,
  } | null,
};

export type CreateStudioPageMutationVariables = {
  input: CreateStudioPageInput,
  condition?: ModelStudioPageConditionInput | null,
};

export type CreateStudioPageMutation = {
  createStudioPage?:  {
    __typename: "StudioPage",
    id: string,
    title: string,
    hero?: string | null,
    heroQuote?: string | null,
    leadership?:  {
      __typename: "ModelStaffMemberConnection",
      items:  Array< {
        __typename: "StaffMember",
        id: string,
        name: string,
        image?: string | null,
        title?: string | null,
        order?: number | null,
        extra?: string | null,
        hidden?: boolean | null,
        createdAt: string,
        updatedAt: string,
        studioPageLeadershipId?: string | null,
        studioPageStaffId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    staff?:  {
      __typename: "ModelStaffMemberConnection",
      items:  Array< {
        __typename: "StaffMember",
        id: string,
        name: string,
        image?: string | null,
        title?: string | null,
        order?: number | null,
        extra?: string | null,
        hidden?: boolean | null,
        createdAt: string,
        updatedAt: string,
        studioPageLeadershipId?: string | null,
        studioPageStaffId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStudioPageMutationVariables = {
  input: UpdateStudioPageInput,
  condition?: ModelStudioPageConditionInput | null,
};

export type UpdateStudioPageMutation = {
  updateStudioPage?:  {
    __typename: "StudioPage",
    id: string,
    title: string,
    hero?: string | null,
    heroQuote?: string | null,
    leadership?:  {
      __typename: "ModelStaffMemberConnection",
      items:  Array< {
        __typename: "StaffMember",
        id: string,
        name: string,
        image?: string | null,
        title?: string | null,
        order?: number | null,
        extra?: string | null,
        hidden?: boolean | null,
        createdAt: string,
        updatedAt: string,
        studioPageLeadershipId?: string | null,
        studioPageStaffId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    staff?:  {
      __typename: "ModelStaffMemberConnection",
      items:  Array< {
        __typename: "StaffMember",
        id: string,
        name: string,
        image?: string | null,
        title?: string | null,
        order?: number | null,
        extra?: string | null,
        hidden?: boolean | null,
        createdAt: string,
        updatedAt: string,
        studioPageLeadershipId?: string | null,
        studioPageStaffId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStudioPageMutationVariables = {
  input: DeleteStudioPageInput,
  condition?: ModelStudioPageConditionInput | null,
};

export type DeleteStudioPageMutation = {
  deleteStudioPage?:  {
    __typename: "StudioPage",
    id: string,
    title: string,
    hero?: string | null,
    heroQuote?: string | null,
    leadership?:  {
      __typename: "ModelStaffMemberConnection",
      items:  Array< {
        __typename: "StaffMember",
        id: string,
        name: string,
        image?: string | null,
        title?: string | null,
        order?: number | null,
        extra?: string | null,
        hidden?: boolean | null,
        createdAt: string,
        updatedAt: string,
        studioPageLeadershipId?: string | null,
        studioPageStaffId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    staff?:  {
      __typename: "ModelStaffMemberConnection",
      items:  Array< {
        __typename: "StaffMember",
        id: string,
        name: string,
        image?: string | null,
        title?: string | null,
        order?: number | null,
        extra?: string | null,
        hidden?: boolean | null,
        createdAt: string,
        updatedAt: string,
        studioPageLeadershipId?: string | null,
        studioPageStaffId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateStaffMemberMutationVariables = {
  input: CreateStaffMemberInput,
  condition?: ModelStaffMemberConditionInput | null,
};

export type CreateStaffMemberMutation = {
  createStaffMember?:  {
    __typename: "StaffMember",
    id: string,
    name: string,
    image?: string | null,
    title?: string | null,
    order?: number | null,
    extra?: string | null,
    hidden?: boolean | null,
    createdAt: string,
    updatedAt: string,
    studioPageLeadershipId?: string | null,
    studioPageStaffId?: string | null,
  } | null,
};

export type UpdateStaffMemberMutationVariables = {
  input: UpdateStaffMemberInput,
  condition?: ModelStaffMemberConditionInput | null,
};

export type UpdateStaffMemberMutation = {
  updateStaffMember?:  {
    __typename: "StaffMember",
    id: string,
    name: string,
    image?: string | null,
    title?: string | null,
    order?: number | null,
    extra?: string | null,
    hidden?: boolean | null,
    createdAt: string,
    updatedAt: string,
    studioPageLeadershipId?: string | null,
    studioPageStaffId?: string | null,
  } | null,
};

export type DeleteStaffMemberMutationVariables = {
  input: DeleteStaffMemberInput,
  condition?: ModelStaffMemberConditionInput | null,
};

export type DeleteStaffMemberMutation = {
  deleteStaffMember?:  {
    __typename: "StaffMember",
    id: string,
    name: string,
    image?: string | null,
    title?: string | null,
    order?: number | null,
    extra?: string | null,
    hidden?: boolean | null,
    createdAt: string,
    updatedAt: string,
    studioPageLeadershipId?: string | null,
    studioPageStaffId?: string | null,
  } | null,
};

export type CreateInquirePageMutationVariables = {
  input: CreateInquirePageInput,
  condition?: ModelInquirePageConditionInput | null,
};

export type CreateInquirePageMutation = {
  createInquirePage?:  {
    __typename: "InquirePage",
    id: string,
    title: string,
    hero?: string | null,
    heroQuote?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateInquirePageMutationVariables = {
  input: UpdateInquirePageInput,
  condition?: ModelInquirePageConditionInput | null,
};

export type UpdateInquirePageMutation = {
  updateInquirePage?:  {
    __typename: "InquirePage",
    id: string,
    title: string,
    hero?: string | null,
    heroQuote?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteInquirePageMutationVariables = {
  input: DeleteInquirePageInput,
  condition?: ModelInquirePageConditionInput | null,
};

export type DeleteInquirePageMutation = {
  deleteInquirePage?:  {
    __typename: "InquirePage",
    id: string,
    title: string,
    hero?: string | null,
    heroQuote?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateHomePageFeatureMutationVariables = {
  input: CreateHomePageFeatureInput,
  condition?: ModelHomePageFeatureConditionInput | null,
};

export type CreateHomePageFeatureMutation = {
  createHomePageFeature?:  {
    __typename: "HomePageFeature",
    id: string,
    title: string,
    image?: string | null,
    link?: string | null,
    linkText?: string | null,
    callout?: string | null,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    homePageFeaturesId?: string | null,
  } | null,
};

export type UpdateHomePageFeatureMutationVariables = {
  input: UpdateHomePageFeatureInput,
  condition?: ModelHomePageFeatureConditionInput | null,
};

export type UpdateHomePageFeatureMutation = {
  updateHomePageFeature?:  {
    __typename: "HomePageFeature",
    id: string,
    title: string,
    image?: string | null,
    link?: string | null,
    linkText?: string | null,
    callout?: string | null,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    homePageFeaturesId?: string | null,
  } | null,
};

export type DeleteHomePageFeatureMutationVariables = {
  input: DeleteHomePageFeatureInput,
  condition?: ModelHomePageFeatureConditionInput | null,
};

export type DeleteHomePageFeatureMutation = {
  deleteHomePageFeature?:  {
    __typename: "HomePageFeature",
    id: string,
    title: string,
    image?: string | null,
    link?: string | null,
    linkText?: string | null,
    callout?: string | null,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    homePageFeaturesId?: string | null,
  } | null,
};

export type CreateHomePageMutationVariables = {
  input: CreateHomePageInput,
  condition?: ModelHomePageConditionInput | null,
};

export type CreateHomePageMutation = {
  createHomePage?:  {
    __typename: "HomePage",
    id: string,
    title: string,
    hero?: string | null,
    heroQuote?: string | null,
    introText?: string | null,
    features?:  {
      __typename: "ModelHomePageFeatureConnection",
      items:  Array< {
        __typename: "HomePageFeature",
        id: string,
        title: string,
        image?: string | null,
        link?: string | null,
        linkText?: string | null,
        callout?: string | null,
        order?: number | null,
        createdAt: string,
        updatedAt: string,
        homePageFeaturesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    featureProjects?:  {
      __typename: "ModelHomePageFeatureProjectConnection",
      items:  Array< {
        __typename: "HomePageFeatureProject",
        id: string,
        projectTitle?: string | null,
        projectLink?: string | null,
        projectImage?: string | null,
        projectLocation?: string | null,
        order?: number | null,
        createdAt: string,
        updatedAt: string,
        homePageFeatureProjectsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    studioText?: string | null,
    studioLink?: string | null,
    studioImage?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateHomePageMutationVariables = {
  input: UpdateHomePageInput,
  condition?: ModelHomePageConditionInput | null,
};

export type UpdateHomePageMutation = {
  updateHomePage?:  {
    __typename: "HomePage",
    id: string,
    title: string,
    hero?: string | null,
    heroQuote?: string | null,
    introText?: string | null,
    features?:  {
      __typename: "ModelHomePageFeatureConnection",
      items:  Array< {
        __typename: "HomePageFeature",
        id: string,
        title: string,
        image?: string | null,
        link?: string | null,
        linkText?: string | null,
        callout?: string | null,
        order?: number | null,
        createdAt: string,
        updatedAt: string,
        homePageFeaturesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    featureProjects?:  {
      __typename: "ModelHomePageFeatureProjectConnection",
      items:  Array< {
        __typename: "HomePageFeatureProject",
        id: string,
        projectTitle?: string | null,
        projectLink?: string | null,
        projectImage?: string | null,
        projectLocation?: string | null,
        order?: number | null,
        createdAt: string,
        updatedAt: string,
        homePageFeatureProjectsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    studioText?: string | null,
    studioLink?: string | null,
    studioImage?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteHomePageMutationVariables = {
  input: DeleteHomePageInput,
  condition?: ModelHomePageConditionInput | null,
};

export type DeleteHomePageMutation = {
  deleteHomePage?:  {
    __typename: "HomePage",
    id: string,
    title: string,
    hero?: string | null,
    heroQuote?: string | null,
    introText?: string | null,
    features?:  {
      __typename: "ModelHomePageFeatureConnection",
      items:  Array< {
        __typename: "HomePageFeature",
        id: string,
        title: string,
        image?: string | null,
        link?: string | null,
        linkText?: string | null,
        callout?: string | null,
        order?: number | null,
        createdAt: string,
        updatedAt: string,
        homePageFeaturesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    featureProjects?:  {
      __typename: "ModelHomePageFeatureProjectConnection",
      items:  Array< {
        __typename: "HomePageFeatureProject",
        id: string,
        projectTitle?: string | null,
        projectLink?: string | null,
        projectImage?: string | null,
        projectLocation?: string | null,
        order?: number | null,
        createdAt: string,
        updatedAt: string,
        homePageFeatureProjectsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    studioText?: string | null,
    studioLink?: string | null,
    studioImage?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateHomePageFeatureProjectMutationVariables = {
  input: CreateHomePageFeatureProjectInput,
  condition?: ModelHomePageFeatureProjectConditionInput | null,
};

export type CreateHomePageFeatureProjectMutation = {
  createHomePageFeatureProject?:  {
    __typename: "HomePageFeatureProject",
    id: string,
    projectTitle?: string | null,
    projectLink?: string | null,
    projectImage?: string | null,
    projectLocation?: string | null,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    homePageFeatureProjectsId?: string | null,
  } | null,
};

export type UpdateHomePageFeatureProjectMutationVariables = {
  input: UpdateHomePageFeatureProjectInput,
  condition?: ModelHomePageFeatureProjectConditionInput | null,
};

export type UpdateHomePageFeatureProjectMutation = {
  updateHomePageFeatureProject?:  {
    __typename: "HomePageFeatureProject",
    id: string,
    projectTitle?: string | null,
    projectLink?: string | null,
    projectImage?: string | null,
    projectLocation?: string | null,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    homePageFeatureProjectsId?: string | null,
  } | null,
};

export type DeleteHomePageFeatureProjectMutationVariables = {
  input: DeleteHomePageFeatureProjectInput,
  condition?: ModelHomePageFeatureProjectConditionInput | null,
};

export type DeleteHomePageFeatureProjectMutation = {
  deleteHomePageFeatureProject?:  {
    __typename: "HomePageFeatureProject",
    id: string,
    projectTitle?: string | null,
    projectLink?: string | null,
    projectImage?: string | null,
    projectLocation?: string | null,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    homePageFeatureProjectsId?: string | null,
  } | null,
};

export type CreateProjectDepartmentsMutationVariables = {
  input: CreateProjectDepartmentsInput,
  condition?: ModelProjectDepartmentsConditionInput | null,
};

export type CreateProjectDepartmentsMutation = {
  createProjectDepartments?:  {
    __typename: "ProjectDepartments",
    id: string,
    projectID: string,
    departmentID: string,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    },
    department:  {
      __typename: "Department",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoriesProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProjectDepartmentsMutationVariables = {
  input: UpdateProjectDepartmentsInput,
  condition?: ModelProjectDepartmentsConditionInput | null,
};

export type UpdateProjectDepartmentsMutation = {
  updateProjectDepartments?:  {
    __typename: "ProjectDepartments",
    id: string,
    projectID: string,
    departmentID: string,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    },
    department:  {
      __typename: "Department",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoriesProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProjectDepartmentsMutationVariables = {
  input: DeleteProjectDepartmentsInput,
  condition?: ModelProjectDepartmentsConditionInput | null,
};

export type DeleteProjectDepartmentsMutation = {
  deleteProjectDepartments?:  {
    __typename: "ProjectDepartments",
    id: string,
    projectID: string,
    departmentID: string,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    },
    department:  {
      __typename: "Department",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoriesProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      departments?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      departments?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      departments?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      displayOrder?: number | null,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      displayOrder?: number | null,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      displayOrder?: number | null,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      displayOrder?: number | null,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      displayOrder?: number | null,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      displayOrder?: number | null,
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
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoriesProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
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
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      departments?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
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
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoriesProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
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
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      departments?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
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
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoriesProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
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
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      departments?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
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

export type GetFeaturedProjectQueryVariables = {
  id: string,
};

export type GetFeaturedProjectQuery = {
  getFeaturedProject?:  {
    __typename: "FeaturedProject",
    id: string,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    } | null,
    displayOrder?: number | null,
    department?:  {
      __typename: "Department",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoriesProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectFeaturedProjectsId?: string | null,
    departmentFeaturedProjectsId?: string | null,
  } | null,
};

export type ListFeaturedProjectsQueryVariables = {
  filter?: ModelFeaturedProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFeaturedProjectsQuery = {
  listFeaturedProjects?:  {
    __typename: "ModelFeaturedProjectConnection",
    items:  Array< {
      __typename: "FeaturedProject",
      id: string,
      project?:  {
        __typename: "Project",
        id: string,
        oldId?: string | null,
        name: string,
        description?: string | null,
        locationString?: string | null,
        featured?: boolean | null,
        link?: string | null,
        slug?: string | null,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        displayOrder?: number | null,
        previewLocation?: string | null,
        createdAt: string,
        updatedAt: string,
        projectLocationId?: string | null,
        projectCreatedById?: string | null,
        projectLastUpdatedById?: string | null,
        projectGalleryId?: string | null,
      } | null,
      displayOrder?: number | null,
      department?:  {
        __typename: "Department",
        id: string,
        name: string,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      projectFeaturedProjectsId?: string | null,
      departmentFeaturedProjectsId?: string | null,
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
        centerX?: number | null,
        centerY?: number | null,
        zoom?: number | null,
        type?: string | null,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
        link?: string | null,
        slug?: string | null,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        displayOrder?: number | null,
        previewLocation?: string | null,
        createdAt: string,
        updatedAt: string,
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
    link?: string | null,
    slug?: string | null,
    quote?: string | null,
    quoteAttribution?: string | null,
    quotes?:  {
      __typename: "ModelQuoteConnection",
      items:  Array< {
        __typename: "Quote",
        id: string,
        text: string,
        attribution?: string | null,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        projectQuotesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
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
        link?: string | null,
        slug?: string | null,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        displayOrder?: number | null,
        previewLocation?: string | null,
        createdAt: string,
        updatedAt: string,
        projectLocationId?: string | null,
        projectCreatedById?: string | null,
        projectLastUpdatedById?: string | null,
        projectGalleryId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      galleryProjectId?: string | null,
    } | null,
    departments?:  {
      __typename: "ModelProjectDepartmentsConnection",
      items:  Array< {
        __typename: "ProjectDepartments",
        id: string,
        projectID: string,
        departmentID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
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
    displayOrder?: number | null,
    previewLocation?: string | null,
    featuredProjects?:  {
      __typename: "ModelFeaturedProjectConnection",
      items:  Array< {
        __typename: "FeaturedProject",
        id: string,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        projectFeaturedProjectsId?: string | null,
        departmentFeaturedProjectsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    subcategoryProjects?:  {
      __typename: "ModelSubcategoryProjectConnection",
      items:  Array< {
        __typename: "SubcategoryProject",
        id: string,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        projectSubcategoryProjectsId?: string | null,
        departmentSubcategoriesProjectsId?: string | null,
        subcategorySubcategoryProjectsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetQuoteQueryVariables = {
  id: string,
};

export type GetQuoteQuery = {
  getQuote?:  {
    __typename: "Quote",
    id: string,
    text: string,
    attribution?: string | null,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    } | null,
    displayOrder?: number | null,
    createdAt: string,
    updatedAt: string,
    projectQuotesId?: string | null,
  } | null,
};

export type ListQuotesQueryVariables = {
  filter?: ModelQuoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuotesQuery = {
  listQuotes?:  {
    __typename: "ModelQuoteConnection",
    items:  Array< {
      __typename: "Quote",
      id: string,
      text: string,
      attribution?: string | null,
      project?:  {
        __typename: "Project",
        id: string,
        oldId?: string | null,
        name: string,
        description?: string | null,
        locationString?: string | null,
        featured?: boolean | null,
        link?: string | null,
        slug?: string | null,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        displayOrder?: number | null,
        previewLocation?: string | null,
        createdAt: string,
        updatedAt: string,
        projectLocationId?: string | null,
        projectCreatedById?: string | null,
        projectLastUpdatedById?: string | null,
        projectGalleryId?: string | null,
      } | null,
      displayOrder?: number | null,
      createdAt: string,
      updatedAt: string,
      projectQuotesId?: string | null,
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
      __typename: "ModelProjectDepartmentsConnection",
      items:  Array< {
        __typename: "ProjectDepartments",
        id: string,
        projectID: string,
        departmentID: string,
        createdAt: string,
        updatedAt: string,
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
    displayOrder?: number | null,
    featuredProjects?:  {
      __typename: "ModelFeaturedProjectConnection",
      items:  Array< {
        __typename: "FeaturedProject",
        id: string,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        projectFeaturedProjectsId?: string | null,
        departmentFeaturedProjectsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    subcategoriesProjects?:  {
      __typename: "ModelSubcategoryProjectConnection",
      items:  Array< {
        __typename: "SubcategoryProject",
        id: string,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        projectSubcategoryProjectsId?: string | null,
        departmentSubcategoriesProjectsId?: string | null,
        subcategorySubcategoryProjectsId?: string | null,
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
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoriesProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
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
        link?: string | null,
        slug?: string | null,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        displayOrder?: number | null,
        previewLocation?: string | null,
        createdAt: string,
        updatedAt: string,
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
    centerX?: number | null,
    centerY?: number | null,
    zoom?: number | null,
    type?: string | null,
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
      centerX?: number | null,
      centerY?: number | null,
      zoom?: number | null,
      type?: string | null,
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
    subcategoryProjects?:  {
      __typename: "ModelSubcategoryProjectConnection",
      items:  Array< {
        __typename: "SubcategoryProject",
        id: string,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        projectSubcategoryProjectsId?: string | null,
        departmentSubcategoriesProjectsId?: string | null,
        subcategorySubcategoryProjectsId?: string | null,
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
    displayOrder?: number | null,
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
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      departments?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSubcategoryProjectQueryVariables = {
  id: string,
};

export type GetSubcategoryProjectQuery = {
  getSubcategoryProject?:  {
    __typename: "SubcategoryProject",
    id: string,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    } | null,
    subcategory?:  {
      __typename: "Subcategory",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      departments?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    department?:  {
      __typename: "Department",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoriesProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    displayOrder?: number | null,
    createdAt: string,
    updatedAt: string,
    projectSubcategoryProjectsId?: string | null,
    departmentSubcategoriesProjectsId?: string | null,
    subcategorySubcategoryProjectsId?: string | null,
  } | null,
};

export type ListSubcategoryProjectsQueryVariables = {
  filter?: ModelSubcategoryProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSubcategoryProjectsQuery = {
  listSubcategoryProjects?:  {
    __typename: "ModelSubcategoryProjectConnection",
    items:  Array< {
      __typename: "SubcategoryProject",
      id: string,
      project?:  {
        __typename: "Project",
        id: string,
        oldId?: string | null,
        name: string,
        description?: string | null,
        locationString?: string | null,
        featured?: boolean | null,
        link?: string | null,
        slug?: string | null,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        displayOrder?: number | null,
        previewLocation?: string | null,
        createdAt: string,
        updatedAt: string,
        projectLocationId?: string | null,
        projectCreatedById?: string | null,
        projectLastUpdatedById?: string | null,
        projectGalleryId?: string | null,
      } | null,
      subcategory?:  {
        __typename: "Subcategory",
        id: string,
        name: string,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      department?:  {
        __typename: "Department",
        id: string,
        name: string,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      displayOrder?: number | null,
      createdAt: string,
      updatedAt: string,
      projectSubcategoryProjectsId?: string | null,
      departmentSubcategoriesProjectsId?: string | null,
      subcategorySubcategoryProjectsId?: string | null,
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
    displayOrder?: number | null,
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
      displayOrder?: number | null,
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
    displayOrder?: number | null,
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
      displayOrder?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetServicesPageQueryVariables = {
  id: string,
};

export type GetServicesPageQuery = {
  getServicesPage?:  {
    __typename: "ServicesPage",
    id: string,
    title: string,
    hero?: string | null,
    heroQuote?: string | null,
    departments?:  {
      __typename: "ModelDepartmentSummaryConnection",
      items:  Array< {
        __typename: "DepartmentSummary",
        id: string,
        title: string,
        image?: string | null,
        description?: string | null,
        link?: string | null,
        split?: string | null,
        order?: number | null,
        hidden?: boolean | null,
        createdAt: string,
        updatedAt: string,
        servicesPageDepartmentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListServicesPagesQueryVariables = {
  filter?: ModelServicesPageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListServicesPagesQuery = {
  listServicesPages?:  {
    __typename: "ModelServicesPageConnection",
    items:  Array< {
      __typename: "ServicesPage",
      id: string,
      title: string,
      hero?: string | null,
      heroQuote?: string | null,
      departments?:  {
        __typename: "ModelDepartmentSummaryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDepartmentSummaryQueryVariables = {
  id: string,
};

export type GetDepartmentSummaryQuery = {
  getDepartmentSummary?:  {
    __typename: "DepartmentSummary",
    id: string,
    title: string,
    image?: string | null,
    description?: string | null,
    link?: string | null,
    split?: string | null,
    envision?:  {
      __typename: "ModelDepartmentSummaryItemConnection",
      items:  Array< {
        __typename: "DepartmentSummaryItem",
        id: string,
        content: string,
        order?: number | null,
        createdAt: string,
        updatedAt: string,
        departmentSummaryEnvisionId?: string | null,
        departmentSummaryDesignId?: string | null,
        departmentSummaryExecuteId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    design?:  {
      __typename: "ModelDepartmentSummaryItemConnection",
      items:  Array< {
        __typename: "DepartmentSummaryItem",
        id: string,
        content: string,
        order?: number | null,
        createdAt: string,
        updatedAt: string,
        departmentSummaryEnvisionId?: string | null,
        departmentSummaryDesignId?: string | null,
        departmentSummaryExecuteId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    execute?:  {
      __typename: "ModelDepartmentSummaryItemConnection",
      items:  Array< {
        __typename: "DepartmentSummaryItem",
        id: string,
        content: string,
        order?: number | null,
        createdAt: string,
        updatedAt: string,
        departmentSummaryEnvisionId?: string | null,
        departmentSummaryDesignId?: string | null,
        departmentSummaryExecuteId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    order?: number | null,
    hidden?: boolean | null,
    createdAt: string,
    updatedAt: string,
    servicesPageDepartmentsId?: string | null,
  } | null,
};

export type ListDepartmentSummariesQueryVariables = {
  filter?: ModelDepartmentSummaryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDepartmentSummariesQuery = {
  listDepartmentSummaries?:  {
    __typename: "ModelDepartmentSummaryConnection",
    items:  Array< {
      __typename: "DepartmentSummary",
      id: string,
      title: string,
      image?: string | null,
      description?: string | null,
      link?: string | null,
      split?: string | null,
      envision?:  {
        __typename: "ModelDepartmentSummaryItemConnection",
        nextToken?: string | null,
      } | null,
      design?:  {
        __typename: "ModelDepartmentSummaryItemConnection",
        nextToken?: string | null,
      } | null,
      execute?:  {
        __typename: "ModelDepartmentSummaryItemConnection",
        nextToken?: string | null,
      } | null,
      order?: number | null,
      hidden?: boolean | null,
      createdAt: string,
      updatedAt: string,
      servicesPageDepartmentsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDepartmentSummaryItemQueryVariables = {
  id: string,
};

export type GetDepartmentSummaryItemQuery = {
  getDepartmentSummaryItem?:  {
    __typename: "DepartmentSummaryItem",
    id: string,
    content: string,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    departmentSummaryEnvisionId?: string | null,
    departmentSummaryDesignId?: string | null,
    departmentSummaryExecuteId?: string | null,
  } | null,
};

export type ListDepartmentSummaryItemsQueryVariables = {
  filter?: ModelDepartmentSummaryItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDepartmentSummaryItemsQuery = {
  listDepartmentSummaryItems?:  {
    __typename: "ModelDepartmentSummaryItemConnection",
    items:  Array< {
      __typename: "DepartmentSummaryItem",
      id: string,
      content: string,
      order?: number | null,
      createdAt: string,
      updatedAt: string,
      departmentSummaryEnvisionId?: string | null,
      departmentSummaryDesignId?: string | null,
      departmentSummaryExecuteId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStudioPageQueryVariables = {
  id: string,
};

export type GetStudioPageQuery = {
  getStudioPage?:  {
    __typename: "StudioPage",
    id: string,
    title: string,
    hero?: string | null,
    heroQuote?: string | null,
    leadership?:  {
      __typename: "ModelStaffMemberConnection",
      items:  Array< {
        __typename: "StaffMember",
        id: string,
        name: string,
        image?: string | null,
        title?: string | null,
        order?: number | null,
        extra?: string | null,
        hidden?: boolean | null,
        createdAt: string,
        updatedAt: string,
        studioPageLeadershipId?: string | null,
        studioPageStaffId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    staff?:  {
      __typename: "ModelStaffMemberConnection",
      items:  Array< {
        __typename: "StaffMember",
        id: string,
        name: string,
        image?: string | null,
        title?: string | null,
        order?: number | null,
        extra?: string | null,
        hidden?: boolean | null,
        createdAt: string,
        updatedAt: string,
        studioPageLeadershipId?: string | null,
        studioPageStaffId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStudioPagesQueryVariables = {
  filter?: ModelStudioPageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStudioPagesQuery = {
  listStudioPages?:  {
    __typename: "ModelStudioPageConnection",
    items:  Array< {
      __typename: "StudioPage",
      id: string,
      title: string,
      hero?: string | null,
      heroQuote?: string | null,
      leadership?:  {
        __typename: "ModelStaffMemberConnection",
        nextToken?: string | null,
      } | null,
      staff?:  {
        __typename: "ModelStaffMemberConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStaffMemberQueryVariables = {
  id: string,
};

export type GetStaffMemberQuery = {
  getStaffMember?:  {
    __typename: "StaffMember",
    id: string,
    name: string,
    image?: string | null,
    title?: string | null,
    order?: number | null,
    extra?: string | null,
    hidden?: boolean | null,
    createdAt: string,
    updatedAt: string,
    studioPageLeadershipId?: string | null,
    studioPageStaffId?: string | null,
  } | null,
};

export type ListStaffMembersQueryVariables = {
  filter?: ModelStaffMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStaffMembersQuery = {
  listStaffMembers?:  {
    __typename: "ModelStaffMemberConnection",
    items:  Array< {
      __typename: "StaffMember",
      id: string,
      name: string,
      image?: string | null,
      title?: string | null,
      order?: number | null,
      extra?: string | null,
      hidden?: boolean | null,
      createdAt: string,
      updatedAt: string,
      studioPageLeadershipId?: string | null,
      studioPageStaffId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetInquirePageQueryVariables = {
  id: string,
};

export type GetInquirePageQuery = {
  getInquirePage?:  {
    __typename: "InquirePage",
    id: string,
    title: string,
    hero?: string | null,
    heroQuote?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListInquirePagesQueryVariables = {
  filter?: ModelInquirePageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInquirePagesQuery = {
  listInquirePages?:  {
    __typename: "ModelInquirePageConnection",
    items:  Array< {
      __typename: "InquirePage",
      id: string,
      title: string,
      hero?: string | null,
      heroQuote?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetHomePageFeatureQueryVariables = {
  id: string,
};

export type GetHomePageFeatureQuery = {
  getHomePageFeature?:  {
    __typename: "HomePageFeature",
    id: string,
    title: string,
    image?: string | null,
    link?: string | null,
    linkText?: string | null,
    callout?: string | null,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    homePageFeaturesId?: string | null,
  } | null,
};

export type ListHomePageFeaturesQueryVariables = {
  filter?: ModelHomePageFeatureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHomePageFeaturesQuery = {
  listHomePageFeatures?:  {
    __typename: "ModelHomePageFeatureConnection",
    items:  Array< {
      __typename: "HomePageFeature",
      id: string,
      title: string,
      image?: string | null,
      link?: string | null,
      linkText?: string | null,
      callout?: string | null,
      order?: number | null,
      createdAt: string,
      updatedAt: string,
      homePageFeaturesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetHomePageQueryVariables = {
  id: string,
};

export type GetHomePageQuery = {
  getHomePage?:  {
    __typename: "HomePage",
    id: string,
    title: string,
    hero?: string | null,
    heroQuote?: string | null,
    introText?: string | null,
    features?:  {
      __typename: "ModelHomePageFeatureConnection",
      items:  Array< {
        __typename: "HomePageFeature",
        id: string,
        title: string,
        image?: string | null,
        link?: string | null,
        linkText?: string | null,
        callout?: string | null,
        order?: number | null,
        createdAt: string,
        updatedAt: string,
        homePageFeaturesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    featureProjects?:  {
      __typename: "ModelHomePageFeatureProjectConnection",
      items:  Array< {
        __typename: "HomePageFeatureProject",
        id: string,
        projectTitle?: string | null,
        projectLink?: string | null,
        projectImage?: string | null,
        projectLocation?: string | null,
        order?: number | null,
        createdAt: string,
        updatedAt: string,
        homePageFeatureProjectsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    studioText?: string | null,
    studioLink?: string | null,
    studioImage?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListHomePagesQueryVariables = {
  filter?: ModelHomePageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHomePagesQuery = {
  listHomePages?:  {
    __typename: "ModelHomePageConnection",
    items:  Array< {
      __typename: "HomePage",
      id: string,
      title: string,
      hero?: string | null,
      heroQuote?: string | null,
      introText?: string | null,
      features?:  {
        __typename: "ModelHomePageFeatureConnection",
        nextToken?: string | null,
      } | null,
      featureProjects?:  {
        __typename: "ModelHomePageFeatureProjectConnection",
        nextToken?: string | null,
      } | null,
      studioText?: string | null,
      studioLink?: string | null,
      studioImage?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetHomePageFeatureProjectQueryVariables = {
  id: string,
};

export type GetHomePageFeatureProjectQuery = {
  getHomePageFeatureProject?:  {
    __typename: "HomePageFeatureProject",
    id: string,
    projectTitle?: string | null,
    projectLink?: string | null,
    projectImage?: string | null,
    projectLocation?: string | null,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    homePageFeatureProjectsId?: string | null,
  } | null,
};

export type ListHomePageFeatureProjectsQueryVariables = {
  filter?: ModelHomePageFeatureProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHomePageFeatureProjectsQuery = {
  listHomePageFeatureProjects?:  {
    __typename: "ModelHomePageFeatureProjectConnection",
    items:  Array< {
      __typename: "HomePageFeatureProject",
      id: string,
      projectTitle?: string | null,
      projectLink?: string | null,
      projectImage?: string | null,
      projectLocation?: string | null,
      order?: number | null,
      createdAt: string,
      updatedAt: string,
      homePageFeatureProjectsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProjectDepartmentsQueryVariables = {
  id: string,
};

export type GetProjectDepartmentsQuery = {
  getProjectDepartments?:  {
    __typename: "ProjectDepartments",
    id: string,
    projectID: string,
    departmentID: string,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    },
    department:  {
      __typename: "Department",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoriesProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProjectDepartmentsQueryVariables = {
  filter?: ModelProjectDepartmentsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProjectDepartmentsQuery = {
  listProjectDepartments?:  {
    __typename: "ModelProjectDepartmentsConnection",
    items:  Array< {
      __typename: "ProjectDepartments",
      id: string,
      projectID: string,
      departmentID: string,
      project:  {
        __typename: "Project",
        id: string,
        oldId?: string | null,
        name: string,
        description?: string | null,
        locationString?: string | null,
        featured?: boolean | null,
        link?: string | null,
        slug?: string | null,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        displayOrder?: number | null,
        previewLocation?: string | null,
        createdAt: string,
        updatedAt: string,
        projectLocationId?: string | null,
        projectCreatedById?: string | null,
        projectLastUpdatedById?: string | null,
        projectGalleryId?: string | null,
      },
      department:  {
        __typename: "Department",
        id: string,
        name: string,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
      },
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      departments?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
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
        link?: string | null,
        slug?: string | null,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        displayOrder?: number | null,
        previewLocation?: string | null,
        createdAt: string,
        updatedAt: string,
        projectLocationId?: string | null,
        projectCreatedById?: string | null,
        projectLastUpdatedById?: string | null,
        projectGalleryId?: string | null,
      },
      subcategory:  {
        __typename: "Subcategory",
        id: string,
        name: string,
        displayOrder?: number | null,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      displayOrder?: number | null,
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
        link?: string | null,
        slug?: string | null,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        displayOrder?: number | null,
        previewLocation?: string | null,
        createdAt: string,
        updatedAt: string,
        projectLocationId?: string | null,
        projectCreatedById?: string | null,
        projectLastUpdatedById?: string | null,
        projectGalleryId?: string | null,
      },
      buildingType:  {
        __typename: "BuildingType",
        id: string,
        name: string,
        displayOrder?: number | null,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      displayOrder?: number | null,
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
        link?: string | null,
        slug?: string | null,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        displayOrder?: number | null,
        previewLocation?: string | null,
        createdAt: string,
        updatedAt: string,
        projectLocationId?: string | null,
        projectCreatedById?: string | null,
        projectLastUpdatedById?: string | null,
        projectGalleryId?: string | null,
      },
      projectType:  {
        __typename: "ProjectType",
        id: string,
        name: string,
        displayOrder?: number | null,
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
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoriesProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
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
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      departments?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
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
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
      },
      subcategory:  {
        __typename: "Subcategory",
        id: string,
        name: string,
        displayOrder?: number | null,
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

export type OnCreateFeaturedProjectSubscription = {
  onCreateFeaturedProject?:  {
    __typename: "FeaturedProject",
    id: string,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    } | null,
    displayOrder?: number | null,
    department?:  {
      __typename: "Department",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoriesProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectFeaturedProjectsId?: string | null,
    departmentFeaturedProjectsId?: string | null,
  } | null,
};

export type OnUpdateFeaturedProjectSubscription = {
  onUpdateFeaturedProject?:  {
    __typename: "FeaturedProject",
    id: string,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    } | null,
    displayOrder?: number | null,
    department?:  {
      __typename: "Department",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoriesProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectFeaturedProjectsId?: string | null,
    departmentFeaturedProjectsId?: string | null,
  } | null,
};

export type OnDeleteFeaturedProjectSubscription = {
  onDeleteFeaturedProject?:  {
    __typename: "FeaturedProject",
    id: string,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    } | null,
    displayOrder?: number | null,
    department?:  {
      __typename: "Department",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoriesProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectFeaturedProjectsId?: string | null,
    departmentFeaturedProjectsId?: string | null,
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
        centerX?: number | null,
        centerY?: number | null,
        zoom?: number | null,
        type?: string | null,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
        centerX?: number | null,
        centerY?: number | null,
        zoom?: number | null,
        type?: string | null,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
        centerX?: number | null,
        centerY?: number | null,
        zoom?: number | null,
        type?: string | null,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
    link?: string | null,
    slug?: string | null,
    quote?: string | null,
    quoteAttribution?: string | null,
    quotes?:  {
      __typename: "ModelQuoteConnection",
      items:  Array< {
        __typename: "Quote",
        id: string,
        text: string,
        attribution?: string | null,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        projectQuotesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
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
        link?: string | null,
        slug?: string | null,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        displayOrder?: number | null,
        previewLocation?: string | null,
        createdAt: string,
        updatedAt: string,
        projectLocationId?: string | null,
        projectCreatedById?: string | null,
        projectLastUpdatedById?: string | null,
        projectGalleryId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      galleryProjectId?: string | null,
    } | null,
    departments?:  {
      __typename: "ModelProjectDepartmentsConnection",
      items:  Array< {
        __typename: "ProjectDepartments",
        id: string,
        projectID: string,
        departmentID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
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
    displayOrder?: number | null,
    previewLocation?: string | null,
    featuredProjects?:  {
      __typename: "ModelFeaturedProjectConnection",
      items:  Array< {
        __typename: "FeaturedProject",
        id: string,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        projectFeaturedProjectsId?: string | null,
        departmentFeaturedProjectsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    subcategoryProjects?:  {
      __typename: "ModelSubcategoryProjectConnection",
      items:  Array< {
        __typename: "SubcategoryProject",
        id: string,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        projectSubcategoryProjectsId?: string | null,
        departmentSubcategoriesProjectsId?: string | null,
        subcategorySubcategoryProjectsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    link?: string | null,
    slug?: string | null,
    quote?: string | null,
    quoteAttribution?: string | null,
    quotes?:  {
      __typename: "ModelQuoteConnection",
      items:  Array< {
        __typename: "Quote",
        id: string,
        text: string,
        attribution?: string | null,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        projectQuotesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
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
        link?: string | null,
        slug?: string | null,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        displayOrder?: number | null,
        previewLocation?: string | null,
        createdAt: string,
        updatedAt: string,
        projectLocationId?: string | null,
        projectCreatedById?: string | null,
        projectLastUpdatedById?: string | null,
        projectGalleryId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      galleryProjectId?: string | null,
    } | null,
    departments?:  {
      __typename: "ModelProjectDepartmentsConnection",
      items:  Array< {
        __typename: "ProjectDepartments",
        id: string,
        projectID: string,
        departmentID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
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
    displayOrder?: number | null,
    previewLocation?: string | null,
    featuredProjects?:  {
      __typename: "ModelFeaturedProjectConnection",
      items:  Array< {
        __typename: "FeaturedProject",
        id: string,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        projectFeaturedProjectsId?: string | null,
        departmentFeaturedProjectsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    subcategoryProjects?:  {
      __typename: "ModelSubcategoryProjectConnection",
      items:  Array< {
        __typename: "SubcategoryProject",
        id: string,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        projectSubcategoryProjectsId?: string | null,
        departmentSubcategoriesProjectsId?: string | null,
        subcategorySubcategoryProjectsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    link?: string | null,
    slug?: string | null,
    quote?: string | null,
    quoteAttribution?: string | null,
    quotes?:  {
      __typename: "ModelQuoteConnection",
      items:  Array< {
        __typename: "Quote",
        id: string,
        text: string,
        attribution?: string | null,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        projectQuotesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
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
        link?: string | null,
        slug?: string | null,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        displayOrder?: number | null,
        previewLocation?: string | null,
        createdAt: string,
        updatedAt: string,
        projectLocationId?: string | null,
        projectCreatedById?: string | null,
        projectLastUpdatedById?: string | null,
        projectGalleryId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      galleryProjectId?: string | null,
    } | null,
    departments?:  {
      __typename: "ModelProjectDepartmentsConnection",
      items:  Array< {
        __typename: "ProjectDepartments",
        id: string,
        projectID: string,
        departmentID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
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
    displayOrder?: number | null,
    previewLocation?: string | null,
    featuredProjects?:  {
      __typename: "ModelFeaturedProjectConnection",
      items:  Array< {
        __typename: "FeaturedProject",
        id: string,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        projectFeaturedProjectsId?: string | null,
        departmentFeaturedProjectsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    subcategoryProjects?:  {
      __typename: "ModelSubcategoryProjectConnection",
      items:  Array< {
        __typename: "SubcategoryProject",
        id: string,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        projectSubcategoryProjectsId?: string | null,
        departmentSubcategoriesProjectsId?: string | null,
        subcategorySubcategoryProjectsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectLocationId?: string | null,
    projectCreatedById?: string | null,
    projectLastUpdatedById?: string | null,
    projectGalleryId?: string | null,
  } | null,
};

export type OnCreateQuoteSubscription = {
  onCreateQuote?:  {
    __typename: "Quote",
    id: string,
    text: string,
    attribution?: string | null,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    } | null,
    displayOrder?: number | null,
    createdAt: string,
    updatedAt: string,
    projectQuotesId?: string | null,
  } | null,
};

export type OnUpdateQuoteSubscription = {
  onUpdateQuote?:  {
    __typename: "Quote",
    id: string,
    text: string,
    attribution?: string | null,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    } | null,
    displayOrder?: number | null,
    createdAt: string,
    updatedAt: string,
    projectQuotesId?: string | null,
  } | null,
};

export type OnDeleteQuoteSubscription = {
  onDeleteQuote?:  {
    __typename: "Quote",
    id: string,
    text: string,
    attribution?: string | null,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    } | null,
    displayOrder?: number | null,
    createdAt: string,
    updatedAt: string,
    projectQuotesId?: string | null,
  } | null,
};

export type OnCreateDepartmentSubscription = {
  onCreateDepartment?:  {
    __typename: "Department",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectDepartmentsConnection",
      items:  Array< {
        __typename: "ProjectDepartments",
        id: string,
        projectID: string,
        departmentID: string,
        createdAt: string,
        updatedAt: string,
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
    displayOrder?: number | null,
    featuredProjects?:  {
      __typename: "ModelFeaturedProjectConnection",
      items:  Array< {
        __typename: "FeaturedProject",
        id: string,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        projectFeaturedProjectsId?: string | null,
        departmentFeaturedProjectsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    subcategoriesProjects?:  {
      __typename: "ModelSubcategoryProjectConnection",
      items:  Array< {
        __typename: "SubcategoryProject",
        id: string,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        projectSubcategoryProjectsId?: string | null,
        departmentSubcategoriesProjectsId?: string | null,
        subcategorySubcategoryProjectsId?: string | null,
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
      __typename: "ModelProjectDepartmentsConnection",
      items:  Array< {
        __typename: "ProjectDepartments",
        id: string,
        projectID: string,
        departmentID: string,
        createdAt: string,
        updatedAt: string,
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
    displayOrder?: number | null,
    featuredProjects?:  {
      __typename: "ModelFeaturedProjectConnection",
      items:  Array< {
        __typename: "FeaturedProject",
        id: string,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        projectFeaturedProjectsId?: string | null,
        departmentFeaturedProjectsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    subcategoriesProjects?:  {
      __typename: "ModelSubcategoryProjectConnection",
      items:  Array< {
        __typename: "SubcategoryProject",
        id: string,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        projectSubcategoryProjectsId?: string | null,
        departmentSubcategoriesProjectsId?: string | null,
        subcategorySubcategoryProjectsId?: string | null,
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
      __typename: "ModelProjectDepartmentsConnection",
      items:  Array< {
        __typename: "ProjectDepartments",
        id: string,
        projectID: string,
        departmentID: string,
        createdAt: string,
        updatedAt: string,
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
    displayOrder?: number | null,
    featuredProjects?:  {
      __typename: "ModelFeaturedProjectConnection",
      items:  Array< {
        __typename: "FeaturedProject",
        id: string,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        projectFeaturedProjectsId?: string | null,
        departmentFeaturedProjectsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    subcategoriesProjects?:  {
      __typename: "ModelSubcategoryProjectConnection",
      items:  Array< {
        __typename: "SubcategoryProject",
        id: string,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        projectSubcategoryProjectsId?: string | null,
        departmentSubcategoriesProjectsId?: string | null,
        subcategorySubcategoryProjectsId?: string | null,
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
        link?: string | null,
        slug?: string | null,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        displayOrder?: number | null,
        previewLocation?: string | null,
        createdAt: string,
        updatedAt: string,
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
    centerX?: number | null,
    centerY?: number | null,
    zoom?: number | null,
    type?: string | null,
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
        link?: string | null,
        slug?: string | null,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        displayOrder?: number | null,
        previewLocation?: string | null,
        createdAt: string,
        updatedAt: string,
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
    centerX?: number | null,
    centerY?: number | null,
    zoom?: number | null,
    type?: string | null,
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
        link?: string | null,
        slug?: string | null,
        quote?: string | null,
        quoteAttribution?: string | null,
        collaborators?: string | null,
        size?: string | null,
        gridOrder?: number | null,
        status: Status,
        displayOrder?: number | null,
        previewLocation?: string | null,
        createdAt: string,
        updatedAt: string,
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
    centerX?: number | null,
    centerY?: number | null,
    zoom?: number | null,
    type?: string | null,
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
    subcategoryProjects?:  {
      __typename: "ModelSubcategoryProjectConnection",
      items:  Array< {
        __typename: "SubcategoryProject",
        id: string,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        projectSubcategoryProjectsId?: string | null,
        departmentSubcategoriesProjectsId?: string | null,
        subcategorySubcategoryProjectsId?: string | null,
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
    displayOrder?: number | null,
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
    subcategoryProjects?:  {
      __typename: "ModelSubcategoryProjectConnection",
      items:  Array< {
        __typename: "SubcategoryProject",
        id: string,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        projectSubcategoryProjectsId?: string | null,
        departmentSubcategoriesProjectsId?: string | null,
        subcategorySubcategoryProjectsId?: string | null,
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
    displayOrder?: number | null,
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
    subcategoryProjects?:  {
      __typename: "ModelSubcategoryProjectConnection",
      items:  Array< {
        __typename: "SubcategoryProject",
        id: string,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        projectSubcategoryProjectsId?: string | null,
        departmentSubcategoriesProjectsId?: string | null,
        subcategorySubcategoryProjectsId?: string | null,
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
    displayOrder?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSubcategoryProjectSubscription = {
  onCreateSubcategoryProject?:  {
    __typename: "SubcategoryProject",
    id: string,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    } | null,
    subcategory?:  {
      __typename: "Subcategory",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      departments?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    department?:  {
      __typename: "Department",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoriesProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    displayOrder?: number | null,
    createdAt: string,
    updatedAt: string,
    projectSubcategoryProjectsId?: string | null,
    departmentSubcategoriesProjectsId?: string | null,
    subcategorySubcategoryProjectsId?: string | null,
  } | null,
};

export type OnUpdateSubcategoryProjectSubscription = {
  onUpdateSubcategoryProject?:  {
    __typename: "SubcategoryProject",
    id: string,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    } | null,
    subcategory?:  {
      __typename: "Subcategory",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      departments?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    department?:  {
      __typename: "Department",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoriesProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    displayOrder?: number | null,
    createdAt: string,
    updatedAt: string,
    projectSubcategoryProjectsId?: string | null,
    departmentSubcategoriesProjectsId?: string | null,
    subcategorySubcategoryProjectsId?: string | null,
  } | null,
};

export type OnDeleteSubcategoryProjectSubscription = {
  onDeleteSubcategoryProject?:  {
    __typename: "SubcategoryProject",
    id: string,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    } | null,
    subcategory?:  {
      __typename: "Subcategory",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      departments?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    department?:  {
      __typename: "Department",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoriesProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    displayOrder?: number | null,
    createdAt: string,
    updatedAt: string,
    projectSubcategoryProjectsId?: string | null,
    departmentSubcategoriesProjectsId?: string | null,
    subcategorySubcategoryProjectsId?: string | null,
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
    displayOrder?: number | null,
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
    displayOrder?: number | null,
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
    displayOrder?: number | null,
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
    displayOrder?: number | null,
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
    displayOrder?: number | null,
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
    displayOrder?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateServicesPageSubscription = {
  onCreateServicesPage?:  {
    __typename: "ServicesPage",
    id: string,
    title: string,
    hero?: string | null,
    heroQuote?: string | null,
    departments?:  {
      __typename: "ModelDepartmentSummaryConnection",
      items:  Array< {
        __typename: "DepartmentSummary",
        id: string,
        title: string,
        image?: string | null,
        description?: string | null,
        link?: string | null,
        split?: string | null,
        order?: number | null,
        hidden?: boolean | null,
        createdAt: string,
        updatedAt: string,
        servicesPageDepartmentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateServicesPageSubscription = {
  onUpdateServicesPage?:  {
    __typename: "ServicesPage",
    id: string,
    title: string,
    hero?: string | null,
    heroQuote?: string | null,
    departments?:  {
      __typename: "ModelDepartmentSummaryConnection",
      items:  Array< {
        __typename: "DepartmentSummary",
        id: string,
        title: string,
        image?: string | null,
        description?: string | null,
        link?: string | null,
        split?: string | null,
        order?: number | null,
        hidden?: boolean | null,
        createdAt: string,
        updatedAt: string,
        servicesPageDepartmentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteServicesPageSubscription = {
  onDeleteServicesPage?:  {
    __typename: "ServicesPage",
    id: string,
    title: string,
    hero?: string | null,
    heroQuote?: string | null,
    departments?:  {
      __typename: "ModelDepartmentSummaryConnection",
      items:  Array< {
        __typename: "DepartmentSummary",
        id: string,
        title: string,
        image?: string | null,
        description?: string | null,
        link?: string | null,
        split?: string | null,
        order?: number | null,
        hidden?: boolean | null,
        createdAt: string,
        updatedAt: string,
        servicesPageDepartmentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDepartmentSummarySubscription = {
  onCreateDepartmentSummary?:  {
    __typename: "DepartmentSummary",
    id: string,
    title: string,
    image?: string | null,
    description?: string | null,
    link?: string | null,
    split?: string | null,
    envision?:  {
      __typename: "ModelDepartmentSummaryItemConnection",
      items:  Array< {
        __typename: "DepartmentSummaryItem",
        id: string,
        content: string,
        order?: number | null,
        createdAt: string,
        updatedAt: string,
        departmentSummaryEnvisionId?: string | null,
        departmentSummaryDesignId?: string | null,
        departmentSummaryExecuteId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    design?:  {
      __typename: "ModelDepartmentSummaryItemConnection",
      items:  Array< {
        __typename: "DepartmentSummaryItem",
        id: string,
        content: string,
        order?: number | null,
        createdAt: string,
        updatedAt: string,
        departmentSummaryEnvisionId?: string | null,
        departmentSummaryDesignId?: string | null,
        departmentSummaryExecuteId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    execute?:  {
      __typename: "ModelDepartmentSummaryItemConnection",
      items:  Array< {
        __typename: "DepartmentSummaryItem",
        id: string,
        content: string,
        order?: number | null,
        createdAt: string,
        updatedAt: string,
        departmentSummaryEnvisionId?: string | null,
        departmentSummaryDesignId?: string | null,
        departmentSummaryExecuteId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    order?: number | null,
    hidden?: boolean | null,
    createdAt: string,
    updatedAt: string,
    servicesPageDepartmentsId?: string | null,
  } | null,
};

export type OnUpdateDepartmentSummarySubscription = {
  onUpdateDepartmentSummary?:  {
    __typename: "DepartmentSummary",
    id: string,
    title: string,
    image?: string | null,
    description?: string | null,
    link?: string | null,
    split?: string | null,
    envision?:  {
      __typename: "ModelDepartmentSummaryItemConnection",
      items:  Array< {
        __typename: "DepartmentSummaryItem",
        id: string,
        content: string,
        order?: number | null,
        createdAt: string,
        updatedAt: string,
        departmentSummaryEnvisionId?: string | null,
        departmentSummaryDesignId?: string | null,
        departmentSummaryExecuteId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    design?:  {
      __typename: "ModelDepartmentSummaryItemConnection",
      items:  Array< {
        __typename: "DepartmentSummaryItem",
        id: string,
        content: string,
        order?: number | null,
        createdAt: string,
        updatedAt: string,
        departmentSummaryEnvisionId?: string | null,
        departmentSummaryDesignId?: string | null,
        departmentSummaryExecuteId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    execute?:  {
      __typename: "ModelDepartmentSummaryItemConnection",
      items:  Array< {
        __typename: "DepartmentSummaryItem",
        id: string,
        content: string,
        order?: number | null,
        createdAt: string,
        updatedAt: string,
        departmentSummaryEnvisionId?: string | null,
        departmentSummaryDesignId?: string | null,
        departmentSummaryExecuteId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    order?: number | null,
    hidden?: boolean | null,
    createdAt: string,
    updatedAt: string,
    servicesPageDepartmentsId?: string | null,
  } | null,
};

export type OnDeleteDepartmentSummarySubscription = {
  onDeleteDepartmentSummary?:  {
    __typename: "DepartmentSummary",
    id: string,
    title: string,
    image?: string | null,
    description?: string | null,
    link?: string | null,
    split?: string | null,
    envision?:  {
      __typename: "ModelDepartmentSummaryItemConnection",
      items:  Array< {
        __typename: "DepartmentSummaryItem",
        id: string,
        content: string,
        order?: number | null,
        createdAt: string,
        updatedAt: string,
        departmentSummaryEnvisionId?: string | null,
        departmentSummaryDesignId?: string | null,
        departmentSummaryExecuteId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    design?:  {
      __typename: "ModelDepartmentSummaryItemConnection",
      items:  Array< {
        __typename: "DepartmentSummaryItem",
        id: string,
        content: string,
        order?: number | null,
        createdAt: string,
        updatedAt: string,
        departmentSummaryEnvisionId?: string | null,
        departmentSummaryDesignId?: string | null,
        departmentSummaryExecuteId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    execute?:  {
      __typename: "ModelDepartmentSummaryItemConnection",
      items:  Array< {
        __typename: "DepartmentSummaryItem",
        id: string,
        content: string,
        order?: number | null,
        createdAt: string,
        updatedAt: string,
        departmentSummaryEnvisionId?: string | null,
        departmentSummaryDesignId?: string | null,
        departmentSummaryExecuteId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    order?: number | null,
    hidden?: boolean | null,
    createdAt: string,
    updatedAt: string,
    servicesPageDepartmentsId?: string | null,
  } | null,
};

export type OnCreateDepartmentSummaryItemSubscription = {
  onCreateDepartmentSummaryItem?:  {
    __typename: "DepartmentSummaryItem",
    id: string,
    content: string,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    departmentSummaryEnvisionId?: string | null,
    departmentSummaryDesignId?: string | null,
    departmentSummaryExecuteId?: string | null,
  } | null,
};

export type OnUpdateDepartmentSummaryItemSubscription = {
  onUpdateDepartmentSummaryItem?:  {
    __typename: "DepartmentSummaryItem",
    id: string,
    content: string,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    departmentSummaryEnvisionId?: string | null,
    departmentSummaryDesignId?: string | null,
    departmentSummaryExecuteId?: string | null,
  } | null,
};

export type OnDeleteDepartmentSummaryItemSubscription = {
  onDeleteDepartmentSummaryItem?:  {
    __typename: "DepartmentSummaryItem",
    id: string,
    content: string,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    departmentSummaryEnvisionId?: string | null,
    departmentSummaryDesignId?: string | null,
    departmentSummaryExecuteId?: string | null,
  } | null,
};

export type OnCreateStudioPageSubscription = {
  onCreateStudioPage?:  {
    __typename: "StudioPage",
    id: string,
    title: string,
    hero?: string | null,
    heroQuote?: string | null,
    leadership?:  {
      __typename: "ModelStaffMemberConnection",
      items:  Array< {
        __typename: "StaffMember",
        id: string,
        name: string,
        image?: string | null,
        title?: string | null,
        order?: number | null,
        extra?: string | null,
        hidden?: boolean | null,
        createdAt: string,
        updatedAt: string,
        studioPageLeadershipId?: string | null,
        studioPageStaffId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    staff?:  {
      __typename: "ModelStaffMemberConnection",
      items:  Array< {
        __typename: "StaffMember",
        id: string,
        name: string,
        image?: string | null,
        title?: string | null,
        order?: number | null,
        extra?: string | null,
        hidden?: boolean | null,
        createdAt: string,
        updatedAt: string,
        studioPageLeadershipId?: string | null,
        studioPageStaffId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStudioPageSubscription = {
  onUpdateStudioPage?:  {
    __typename: "StudioPage",
    id: string,
    title: string,
    hero?: string | null,
    heroQuote?: string | null,
    leadership?:  {
      __typename: "ModelStaffMemberConnection",
      items:  Array< {
        __typename: "StaffMember",
        id: string,
        name: string,
        image?: string | null,
        title?: string | null,
        order?: number | null,
        extra?: string | null,
        hidden?: boolean | null,
        createdAt: string,
        updatedAt: string,
        studioPageLeadershipId?: string | null,
        studioPageStaffId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    staff?:  {
      __typename: "ModelStaffMemberConnection",
      items:  Array< {
        __typename: "StaffMember",
        id: string,
        name: string,
        image?: string | null,
        title?: string | null,
        order?: number | null,
        extra?: string | null,
        hidden?: boolean | null,
        createdAt: string,
        updatedAt: string,
        studioPageLeadershipId?: string | null,
        studioPageStaffId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStudioPageSubscription = {
  onDeleteStudioPage?:  {
    __typename: "StudioPage",
    id: string,
    title: string,
    hero?: string | null,
    heroQuote?: string | null,
    leadership?:  {
      __typename: "ModelStaffMemberConnection",
      items:  Array< {
        __typename: "StaffMember",
        id: string,
        name: string,
        image?: string | null,
        title?: string | null,
        order?: number | null,
        extra?: string | null,
        hidden?: boolean | null,
        createdAt: string,
        updatedAt: string,
        studioPageLeadershipId?: string | null,
        studioPageStaffId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    staff?:  {
      __typename: "ModelStaffMemberConnection",
      items:  Array< {
        __typename: "StaffMember",
        id: string,
        name: string,
        image?: string | null,
        title?: string | null,
        order?: number | null,
        extra?: string | null,
        hidden?: boolean | null,
        createdAt: string,
        updatedAt: string,
        studioPageLeadershipId?: string | null,
        studioPageStaffId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateStaffMemberSubscription = {
  onCreateStaffMember?:  {
    __typename: "StaffMember",
    id: string,
    name: string,
    image?: string | null,
    title?: string | null,
    order?: number | null,
    extra?: string | null,
    hidden?: boolean | null,
    createdAt: string,
    updatedAt: string,
    studioPageLeadershipId?: string | null,
    studioPageStaffId?: string | null,
  } | null,
};

export type OnUpdateStaffMemberSubscription = {
  onUpdateStaffMember?:  {
    __typename: "StaffMember",
    id: string,
    name: string,
    image?: string | null,
    title?: string | null,
    order?: number | null,
    extra?: string | null,
    hidden?: boolean | null,
    createdAt: string,
    updatedAt: string,
    studioPageLeadershipId?: string | null,
    studioPageStaffId?: string | null,
  } | null,
};

export type OnDeleteStaffMemberSubscription = {
  onDeleteStaffMember?:  {
    __typename: "StaffMember",
    id: string,
    name: string,
    image?: string | null,
    title?: string | null,
    order?: number | null,
    extra?: string | null,
    hidden?: boolean | null,
    createdAt: string,
    updatedAt: string,
    studioPageLeadershipId?: string | null,
    studioPageStaffId?: string | null,
  } | null,
};

export type OnCreateInquirePageSubscription = {
  onCreateInquirePage?:  {
    __typename: "InquirePage",
    id: string,
    title: string,
    hero?: string | null,
    heroQuote?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateInquirePageSubscription = {
  onUpdateInquirePage?:  {
    __typename: "InquirePage",
    id: string,
    title: string,
    hero?: string | null,
    heroQuote?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteInquirePageSubscription = {
  onDeleteInquirePage?:  {
    __typename: "InquirePage",
    id: string,
    title: string,
    hero?: string | null,
    heroQuote?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateHomePageFeatureSubscription = {
  onCreateHomePageFeature?:  {
    __typename: "HomePageFeature",
    id: string,
    title: string,
    image?: string | null,
    link?: string | null,
    linkText?: string | null,
    callout?: string | null,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    homePageFeaturesId?: string | null,
  } | null,
};

export type OnUpdateHomePageFeatureSubscription = {
  onUpdateHomePageFeature?:  {
    __typename: "HomePageFeature",
    id: string,
    title: string,
    image?: string | null,
    link?: string | null,
    linkText?: string | null,
    callout?: string | null,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    homePageFeaturesId?: string | null,
  } | null,
};

export type OnDeleteHomePageFeatureSubscription = {
  onDeleteHomePageFeature?:  {
    __typename: "HomePageFeature",
    id: string,
    title: string,
    image?: string | null,
    link?: string | null,
    linkText?: string | null,
    callout?: string | null,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    homePageFeaturesId?: string | null,
  } | null,
};

export type OnCreateHomePageSubscription = {
  onCreateHomePage?:  {
    __typename: "HomePage",
    id: string,
    title: string,
    hero?: string | null,
    heroQuote?: string | null,
    introText?: string | null,
    features?:  {
      __typename: "ModelHomePageFeatureConnection",
      items:  Array< {
        __typename: "HomePageFeature",
        id: string,
        title: string,
        image?: string | null,
        link?: string | null,
        linkText?: string | null,
        callout?: string | null,
        order?: number | null,
        createdAt: string,
        updatedAt: string,
        homePageFeaturesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    featureProjects?:  {
      __typename: "ModelHomePageFeatureProjectConnection",
      items:  Array< {
        __typename: "HomePageFeatureProject",
        id: string,
        projectTitle?: string | null,
        projectLink?: string | null,
        projectImage?: string | null,
        projectLocation?: string | null,
        order?: number | null,
        createdAt: string,
        updatedAt: string,
        homePageFeatureProjectsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    studioText?: string | null,
    studioLink?: string | null,
    studioImage?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateHomePageSubscription = {
  onUpdateHomePage?:  {
    __typename: "HomePage",
    id: string,
    title: string,
    hero?: string | null,
    heroQuote?: string | null,
    introText?: string | null,
    features?:  {
      __typename: "ModelHomePageFeatureConnection",
      items:  Array< {
        __typename: "HomePageFeature",
        id: string,
        title: string,
        image?: string | null,
        link?: string | null,
        linkText?: string | null,
        callout?: string | null,
        order?: number | null,
        createdAt: string,
        updatedAt: string,
        homePageFeaturesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    featureProjects?:  {
      __typename: "ModelHomePageFeatureProjectConnection",
      items:  Array< {
        __typename: "HomePageFeatureProject",
        id: string,
        projectTitle?: string | null,
        projectLink?: string | null,
        projectImage?: string | null,
        projectLocation?: string | null,
        order?: number | null,
        createdAt: string,
        updatedAt: string,
        homePageFeatureProjectsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    studioText?: string | null,
    studioLink?: string | null,
    studioImage?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteHomePageSubscription = {
  onDeleteHomePage?:  {
    __typename: "HomePage",
    id: string,
    title: string,
    hero?: string | null,
    heroQuote?: string | null,
    introText?: string | null,
    features?:  {
      __typename: "ModelHomePageFeatureConnection",
      items:  Array< {
        __typename: "HomePageFeature",
        id: string,
        title: string,
        image?: string | null,
        link?: string | null,
        linkText?: string | null,
        callout?: string | null,
        order?: number | null,
        createdAt: string,
        updatedAt: string,
        homePageFeaturesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    featureProjects?:  {
      __typename: "ModelHomePageFeatureProjectConnection",
      items:  Array< {
        __typename: "HomePageFeatureProject",
        id: string,
        projectTitle?: string | null,
        projectLink?: string | null,
        projectImage?: string | null,
        projectLocation?: string | null,
        order?: number | null,
        createdAt: string,
        updatedAt: string,
        homePageFeatureProjectsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    studioText?: string | null,
    studioLink?: string | null,
    studioImage?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateHomePageFeatureProjectSubscription = {
  onCreateHomePageFeatureProject?:  {
    __typename: "HomePageFeatureProject",
    id: string,
    projectTitle?: string | null,
    projectLink?: string | null,
    projectImage?: string | null,
    projectLocation?: string | null,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    homePageFeatureProjectsId?: string | null,
  } | null,
};

export type OnUpdateHomePageFeatureProjectSubscription = {
  onUpdateHomePageFeatureProject?:  {
    __typename: "HomePageFeatureProject",
    id: string,
    projectTitle?: string | null,
    projectLink?: string | null,
    projectImage?: string | null,
    projectLocation?: string | null,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    homePageFeatureProjectsId?: string | null,
  } | null,
};

export type OnDeleteHomePageFeatureProjectSubscription = {
  onDeleteHomePageFeatureProject?:  {
    __typename: "HomePageFeatureProject",
    id: string,
    projectTitle?: string | null,
    projectLink?: string | null,
    projectImage?: string | null,
    projectLocation?: string | null,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    homePageFeatureProjectsId?: string | null,
  } | null,
};

export type OnCreateProjectDepartmentsSubscription = {
  onCreateProjectDepartments?:  {
    __typename: "ProjectDepartments",
    id: string,
    projectID: string,
    departmentID: string,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    },
    department:  {
      __typename: "Department",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoriesProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProjectDepartmentsSubscription = {
  onUpdateProjectDepartments?:  {
    __typename: "ProjectDepartments",
    id: string,
    projectID: string,
    departmentID: string,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    },
    department:  {
      __typename: "Department",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoriesProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProjectDepartmentsSubscription = {
  onDeleteProjectDepartments?:  {
    __typename: "ProjectDepartments",
    id: string,
    projectID: string,
    departmentID: string,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      projectLocationId?: string | null,
      projectCreatedById?: string | null,
      projectLastUpdatedById?: string | null,
      projectGalleryId?: string | null,
    },
    department:  {
      __typename: "Department",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoriesProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      departments?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      departments?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      departments?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      displayOrder?: number | null,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      displayOrder?: number | null,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      displayOrder?: number | null,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      displayOrder?: number | null,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      displayOrder?: number | null,
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
      link?: string | null,
      slug?: string | null,
      quote?: string | null,
      quoteAttribution?: string | null,
      quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
      } | null,
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
      departments?:  {
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
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
      displayOrder?: number | null,
      previewLocation?: string | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      displayOrder?: number | null,
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
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoriesProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
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
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      departments?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
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
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoriesProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
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
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      departments?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
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
        __typename: "ModelProjectDepartmentsConnection",
        nextToken?: string | null,
      } | null,
      subcategories?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
      featuredProjects?:  {
        __typename: "ModelFeaturedProjectConnection",
        nextToken?: string | null,
      } | null,
      subcategoriesProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
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
      subcategoryProjects?:  {
        __typename: "ModelSubcategoryProjectConnection",
        nextToken?: string | null,
      } | null,
      departments?:  {
        __typename: "ModelDepartmentSubcategoriesConnection",
        nextToken?: string | null,
      } | null,
      displayOrder?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
