export type Language = 'en' | 'ar';

export interface Project {
  id: string;
  title: string;
  titleAr: string;
  tagline: string;
  taglineAr: string;
  description: string;
  descriptionAr: string;
  longDescription: string;
  longDescriptionAr: string;
  url: string;
  techStack: string[];
  features: string[];
  featuresAr: string[];
  image: string;
  category: string;
  categoryAr: string;
}

export interface PhotoItem {
  id: string;
  title: string;
  titleAr: string;
  location: string;
  locationAr: string;
  category: 'landscape' | 'documentary' | 'architecture';
  aspectRatio: '16:9' | '4:3' | '3:4' | '1:1';
  image: string;
  cameraInfo: string;
  cameraInfoAr: string;
  year: string;
  description: string;
  descriptionAr: string;
}

export interface DeveloperSkill {
  name: string;
  nameAr: string;
  category: 'core' | 'framework' | 'language' | 'platform';
  description: string;
  descriptionAr: string;
}
