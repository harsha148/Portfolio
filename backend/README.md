# Portfolio Backend

This is the backend service for the personal portfolio website. It provides RESTful APIs to fetch personal information, work experience, education details, projects, and technologies.

## Tech Stack

- Node.js with TypeScript
- Express.js for REST API
- Supabase for database
- Various middleware for security and logging

## Available Endpoints

### Personal Information
- `GET /api/personal-info` - Get personal information

### Work Experience
- `GET /api/work-experience` - Get all work experiences

### Education
- `GET /api/education` - Get all education records

### Projects
- `GET /api/projects` - Get all projects with their technologies
- `GET /api/projects/featured` - Get featured projects

### Technologies
- `GET /api/technologies` - Get all technologies
- `GET /api/technologies/:category` - Get technologies by category

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the root directory with the following variables:
   ```env
   PORT=3000
   NODE_ENV=development
   SUPABASE_URL=your_supabase_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   CORS_ORIGIN=http://localhost:3000
   ```

3. Build the project:
   ```bash
   npm run build
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Development

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run linter 