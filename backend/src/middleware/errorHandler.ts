import { Request, Response, NextFunction } from 'express';
import logger from '../config/logger';

export class AppError extends Error {
  statusCode: number;
  status: string;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    Error.captureStackTrace(this, this.constructor);
  }
}

export const errorHandler = (
  err: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Log error details
  logger.error(`Error occurred while processing ${req.method} ${req.url}`);
  logger.error(`Error message: ${err.message}`);
  logger.error(`Stack trace: ${err.stack}`);

  if (err instanceof AppError) {
    logger.warn(`AppError: ${err.message} (${err.statusCode})`);
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }

  // Handle unknown errors
  logger.error(`Unhandled error: ${err.message}`);
  return res.status(500).json({
    status: 'error',
    message: 'Something went wrong!',
  });
}; 