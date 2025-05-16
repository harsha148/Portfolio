export interface PersonalInfo {
  id: string;
  name: string;
  headline: string;
  bio: string | null;
  profile_image_url: string | null;
  banner_image_url: string | null;
  created_at: string;
  updated_at: string;
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
  created_at: string;
  updated_at: string;
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
  created_at: string;
  updated_at: string;
}

export interface Technology {
  id: string;
  name: string;
  category: string;
  icon_url: string | null;
  proficiency: number;
  created_at: string;
  updated_at: string;
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
  created_at: string;
  updated_at: string;
  technologies?: Technology[];
} 