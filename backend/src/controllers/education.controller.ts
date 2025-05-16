import { Request, Response } from 'express';
import { supabase } from '../config/supabase';
import { AppError } from '../middleware/errorHandler';
import { Education } from '../types';

export const getEducation = async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase
      .from('education')
      .select('*')
      .order('display_order', { ascending: true });

    if (error) throw new AppError(error.message, 500);
    if (!data) throw new AppError('No education records found', 404);

    res.json({
      status: 'success',
      data: data as Education[]
    });
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw new AppError('Error fetching education records', 500);
  }
}; 