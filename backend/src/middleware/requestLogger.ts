import { Request, Response, NextFunction } from 'express';
import logger from '../config/logger';

export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  // Log request details
  logger.http(`${req.method} ${req.url}`);
  logger.debug(`Request Body: ${JSON.stringify(req.body)}`);
  logger.debug(`Request Query: ${JSON.stringify(req.query)}`);
  logger.debug(`Request Params: ${JSON.stringify(req.params)}`);

  // Get the current timestamp
  const start = Date.now();

  // Once the request is processed, log the response
  res.on('finish', () => {
    const duration = Date.now() - start;
    const logMessage = `${req.method} ${req.url} ${res.statusCode} - ${duration}ms`;
    
    if (res.statusCode >= 500) {
      logger.error(logMessage);
    } else if (res.statusCode >= 400) {
      logger.warn(logMessage);
    } else {
      logger.info(logMessage);
    }
  });

  next();
}; 