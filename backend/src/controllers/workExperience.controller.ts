import { Request, Response } from 'express';
import { supabase } from '../config/supabase';
import { AppError } from '../middleware/errorHandler';
import { WorkExperience } from '../types';

export const getWorkExperiences = async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase
      .from('work_experience')
      .select('*')
      .order('display_order', { ascending: true });

    if (error) throw new AppError(error.message, 500);
    if (!data) throw new AppError('No work experiences found', 404);

    res.json({
      status: 'success',
      data: data as WorkExperience[]
    });
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw new AppError('Error fetching work experiences', 500);
  }
}; 