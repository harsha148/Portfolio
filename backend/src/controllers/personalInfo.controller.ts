import { Request, Response } from 'express';
import { supabase } from '../config/supabase';
import { AppError } from '../middleware/errorHandler';
import { PersonalInfo } from '../types';

export const getPersonalInfo = async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase
      .from('personal_info')
      .select('*')
      .single();

    if (error) throw new AppError(error.message, 500);
    if (!data) throw new AppError('Personal info not found', 404);

    res.json({
      status: 'success',
      data: data as PersonalInfo
    });
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw new AppError('Error fetching personal info', 500);
  }
}; 