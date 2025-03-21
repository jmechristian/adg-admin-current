export enum Role {
  ADMIN = 'ADMIN',
  EDITOR = 'EDITOR',
  VIEWER = 'VIEWER',
}

export enum Status {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
  ARCHIVED = 'ARCHIVED',
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}

export interface Location {
  id: string;
  name?: string;
  address?: string;
  description?: string;
  latitude: number;
  longitude: number;
}

export interface GalleryResponse {
  data: {
    getGallery: Gallery;
  };
}

export interface LocationResponse {
  data: {
    createLocation: Location;
  };
}

export interface Gallery {
  id: string;
  images: {
    items: Image[];
  };
  project: Project;
}

export interface Project {
  createdAt: string;
  updatedAt: string;
  id: string;
  oldId: string;
  name: string;
  description?: string;
  location?: Location;
  locationString?: string;
  projectLocationId?: string;
  createdBy: User;
  lastUpdatedBy?: User | null;
  featured: boolean;
  link: string;
  quote?: string | null;
  quoteAttribution?: string | null;
  collaborators?: string | null;
  size?: string;
  gridOrder?: number;
  status: Status;
  hero?: ImageObject;
  gallery: Gallery;
  department: Department;
  subcategories: {
    items: {
      subcategory: {
        id: string;
        name: string;
      };
    }[];
  };
  building_type: {
    items: {
      buildingType: {
        id: string;
        name: string;
      };
    }[];
  };
  project_type: {
    items: {
      projectType: {
        id: string;
        name: string;
      };
    }[];
  };
  onDescriptionChange?: (description: string) => void;
  onNameChange?: (name: string) => void;
  onSizeChange?: (size: string) => void;
  onLocationChange?: (location: string) => void;
  onQuoteChange?: (quote: string) => void;
  onQuoteAttributionChange?: (quoteAttribution: string) => void;
}

export interface Department {
  id: string;
  name: string;
}

export interface ImageObject {
  id: string;
  url: string;
  alt: string;
  caption?: string;
}

export interface Subcategory {
  id: string;
  name: string;
  projects?: Project[];
}

export interface BuildingType {
  id: string;
  name: string;
  projects?: Project[];
}

export interface ProjectType {
  id: string;
  name: string;
  projects?: Project[];
}

export interface Image {
  id: string;
  url: string;
  alt?: string;
  caption?: string;
  order: number;
}

export interface DepartmentFilters {
  architecture: boolean;
  'commercial interiors': boolean;
  branding: boolean;
  akres: boolean;
}

export interface ProjectObject {
  id?: string;
  name: string;
  description: string;
  projectLocationId: string;
  locationString: string;
  departmentProjectsId: string;
  link: string;
  status: Status;
  projectCreatedById: string;
  size: string;
  quote: string;
  quoteAttribution: string;
  collaborators: string;
}
