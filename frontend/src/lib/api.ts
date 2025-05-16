import axios from 'axios';
console.log("API URL:")
console.log(process.env.NEXT_PUBLIC_API_URL);
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8001/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Types
export interface PersonalInfo {
  id: string;
  name: string;
  headline: string;
  bio: string | null;
  profile_image_url: string | null;
  banner_image_url: string | null;
}

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  start_date: string;
  end_date: string | null;
  description: string;
  company_url: string | null;
  location: string;
  display_order: number;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  major: string;
  start_date: string;
  end_date: string | null;
  details: string | null;
  gpa: number | null;
  institution_url: string | null;
  location: string;
  display_order: number;
}

export interface Technology {
  id: string;
  name: string;
  category: string;
  icon_url: string | null;
  proficiency: number;
}

export interface Project {
  id: string;
  title: string;
  short_description: string;
  long_description: string;
  github_url: string | null;
  live_demo_url: string | null;
  image_urls: string[];
  featured: boolean;
  status: 'completed' | 'in-progress' | 'planned';
  start_date: string;
  end_date: string | null;
  display_order: number;
  technologies?: Technology[];
}

// API functions
export const getPersonalInfo = async (): Promise<PersonalInfo> => {
  const response = await api.get('/personal-info');
  return response.data.data;
};

export const getWorkExperiences = async (): Promise<WorkExperience[]> => {
  const response = await api.get('/work-experience');
  return response.data.data;
};

export const getEducation = async (): Promise<Education[]> => {
  const response = await api.get('/education');
  return response.data.data;
};

export const getProjects = async (): Promise<Project[]> => {
  const response = await api.get('/projects');
  return response.data.data;
};

export const getFeaturedProjects = async (): Promise<Project[]> => {
  const response = await api.get('/projects/featured');
  return response.data.data;
};

export const getTechnologies = async (): Promise<Technology[]> => {
  const response = await api.get('/technologies');
  return response.data.data;
};

export const getTechnologiesByCategory = async (category: string): Promise<Technology[]> => {
  const response = await api.get(`/technologies/${category}`);
  return response.data.data;
}; 