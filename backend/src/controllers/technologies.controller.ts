import { Request, Response } from 'express';
import { supabase } from '../config/supabase';
import { AppError } from '../middleware/errorHandler';
import { Technology } from '../types';

export const getTechnologies = async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase
      .from('technologies')
      .select('*')
      .order('category', { ascending: true });

    if (error) throw new AppError(error.message, 500);
    if (!data) throw new AppError('No technologies found', 404);

    res.json({
      status: 'success',
      data: data as Technology[]
    });
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw new AppError('Error fetching technologies', 500);
  }
};

export const getTechnologiesByCategory = async (req: Request, res: Response) => {
  try {
    const { category } = req.params;
    
    const { data, error } = await supabase
      .from('technologies')
      .select('*')
      .eq('category', category)
      .order('proficiency', { ascending: false });

    if (error) throw new AppError(error.message, 500);
    if (!data) throw new AppError(`No technologies found for category: ${category}`, 404);

    res.json({
      status: 'success',
      data: data as Technology[]
    });
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw new AppError('Error fetching technologies by category', 500);
  }
}; 