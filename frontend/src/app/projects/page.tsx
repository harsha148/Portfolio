'use client';

import { Projects } from '@/components/sections/projects';
import { useEffect, useState } from 'react';
import type { Project } from '@/lib/api';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:8001/api/projects')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch projects');
        }
        return res.json();
      })
      .then((response) => {
        // Ensure we're getting an array from the response
        const data = Array.isArray(response.data) ? response.data : [];
        setProjects(data);
      })
      .catch((err) => {
        console.error('Error fetching projects:', err);
        setError(err.message);
      });
  }, []);

  if (error) {
    return (
      <div className="container mx-auto flex min-h-screen items-center justify-center">
        <div className="text-center text-red-500">
          <h2 className="text-2xl font-bold">Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <Projects projects={projects} />
    </div>
  );
} 