import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { errorHandler } from './middleware/errorHandler';
import { requestLogger } from './middleware/requestLogger';
import routes from './routes';
import logger from './config/logger';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(helmet()); // Security headers
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true,
}));

// Request logging
app.use(requestLogger);
app.use(morgan('dev')); // HTTP request logging
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/api', routes);

// Error handling
app.use(errorHandler);

// Start server
app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
  logger.info(`Environment: ${process.env.NODE_ENV}`);
  logger.info(`CORS origin: ${process.env.CORS_ORIGIN || 'http://localhost:3000'}`);
}); 