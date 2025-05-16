-- Enable UUID extension for Supabase
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Drop existing tables if they exist (in correct order to handle foreign keys)
DROP TABLE IF EXISTS project_technologies CASCADE;
DROP TABLE IF EXISTS technologies CASCADE;
DROP TABLE IF EXISTS projects CASCADE;
DROP TABLE IF EXISTS education CASCADE;
DROP TABLE IF EXISTS work_experience CASCADE;
DROP TABLE IF EXISTS personal_info CASCADE;

-- Create personal_info table
CREATE TABLE personal_info (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    headline TEXT NOT NULL,
    bio TEXT,
    profile_image_url TEXT,
    banner_image_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create work_experience table
CREATE TABLE work_experience (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    company TEXT NOT NULL,
    role TEXT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE,
    description TEXT,
    company_url TEXT,
    company_logo_url TEXT,
    location TEXT,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create education table
CREATE TABLE education (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    institution TEXT NOT NULL,
    degree TEXT NOT NULL,
    major TEXT,
    start_date DATE NOT NULL,
    end_date DATE,
    details TEXT,
    gpa DECIMAL(3,2),
    institution_url TEXT,
    institution_logo_url TEXT,
    location TEXT,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create projects table
CREATE TABLE projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    short_description TEXT NOT NULL,
    long_description TEXT,
    github_url TEXT,
    live_demo_url TEXT,
    image_urls TEXT[], -- Array of image URLs
    featured BOOLEAN DEFAULT false,
    status TEXT CHECK (status IN ('completed', 'in-progress', 'planned')),
    start_date DATE,
    end_date DATE,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create technologies table
CREATE TABLE technologies (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT UNIQUE NOT NULL,
    category TEXT,
    icon_url TEXT,
    proficiency INTEGER CHECK (proficiency BETWEEN 1 AND 5),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create project_technologies junction table
CREATE TABLE project_technologies (
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    technology_id UUID REFERENCES technologies(id) ON DELETE CASCADE,
    PRIMARY KEY (project_id, technology_id),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for all tables
CREATE TRIGGER update_personal_info_updated_at
    BEFORE UPDATE ON personal_info
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_work_experience_updated_at
    BEFORE UPDATE ON work_experience
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_education_updated_at
    BEFORE UPDATE ON education
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_projects_updated_at
    BEFORE UPDATE ON projects
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_technologies_updated_at
    BEFORE UPDATE ON technologies
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Create indexes for better query performance
CREATE INDEX idx_projects_featured ON projects(featured) WHERE featured = true;
CREATE INDEX idx_projects_status ON projects(status);
CREATE INDEX idx_work_experience_dates ON work_experience(start_date, end_date);
CREATE INDEX idx_education_dates ON education(start_date, end_date);
CREATE INDEX idx_technologies_category ON technologies(category);

-- Grant necessary permissions if using Supabase
-- GRANT ALL ON ALL TABLES IN SCHEMA public TO postgres;
-- GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO postgres;
-- GRANT ALL ON ALL FUNCTIONS IN SCHEMA public TO postgres;