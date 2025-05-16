'use client';

import { Experience } from '@/components/sections/experience';
import { useEffect, useState } from 'react';
import type { WorkExperience } from '@/lib/api';

export default function ExperiencePage() {
  const [experiences, setExperiences] = useState<WorkExperience[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:8001/api/work-experience')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch work experience');
        }
        return res.json();
      })
      .then((response) => {
        // Ensure we're getting an array from the response
        const data = Array.isArray(response.data) ? response.data : [];
        setExperiences(data);
      })
      .catch((err) => {
        console.error('Error fetching work experience:', err);
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
      <Experience experiences={experiences} />
    </div>
  );
} 