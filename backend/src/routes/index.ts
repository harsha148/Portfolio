import { Router } from 'express';
import { getPersonalInfo } from '../controllers/personalInfo.controller';
import { getWorkExperiences } from '../controllers/workExperience.controller';
import { getEducation } from '../controllers/education.controller';
import { getProjects, getFeaturedProjects } from '../controllers/projects.controller';
import { getTechnologies, getTechnologiesByCategory } from '../controllers/technologies.controller';

const router = Router();

// Personal Info routes
router.get('/personal-info', getPersonalInfo);

// Work Experience routes
router.get('/work-experience', getWorkExperiences);

// Education routes
router.get('/education', getEducation);

// Project routes
router.get('/projects', getProjects);
router.get('/projects/featured', getFeaturedProjects);

// Technology routes
router.get('/technologies', getTechnologies);
router.get('/technologies/:category', getTechnologiesByCategory);

export default router; 