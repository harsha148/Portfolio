import { Request, Response } from 'express';
import { supabase } from '../config/supabase';
import { AppError } from '../middleware/errorHandler';
import { Project, Technology } from '../types';

export const getProjects = async (req: Request, res: Response) => {
  try {
    // First get all projects
    const { data: projects, error: projectsError } = await supabase
      .from('projects')
      .select('*')
      .order('display_order', { ascending: true });

    if (projectsError) throw new AppError(projectsError.message, 500);
    if (!projects) throw new AppError('No projects found', 404);

    // Get project technologies
    const { data: projectTechnologies, error: techError } = await supabase
      .from('project_technologies')
      .select(`
        project_id,
        technology_id,
        technologies (*)
      `);

    if (techError) throw new AppError(techError.message, 500);

    // Map technologies to projects
    const projectsWithTech = projects.map(project => {
      const techs = projectTechnologies
        ?.filter(pt => pt.project_id === project.id)
        .map(pt => pt.technologies as Technology[]);

      return {
        ...project,
        technologies: techs || []
      };
    });

    res.json({
      status: 'success',
      data: projectsWithTech as Project[]
    });
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw new AppError('Error fetching projects', 500);
  }
};

export const getFeaturedProjects = async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('featured', true)
      .order('display_order', { ascending: true });

    if (error) throw new AppError(error.message, 500);
    if (!data) throw new AppError('No featured projects found', 404);

    res.json({
      status: 'success',
      data: data as Project[]
    });
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw new AppError('Error fetching featured projects', 500);
  }
}; 