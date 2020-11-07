import dotenv from 'dotenv';

/**
 * Load environment variable from .env
 */
dotenv.config();

export const portNumber = process.env.PORT || 3000;
export const env = process.env.NODE_ENV || 'development';
