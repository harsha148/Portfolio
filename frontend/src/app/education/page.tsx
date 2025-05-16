'use client';

import { Education } from '@/components/sections/education';
import { useEffect, useState } from 'react';
import type { Education as EducationType } from '@/lib/api';

export default function EducationPage() {
  const [education, setEducation] = useState<EducationType[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:8001/api/education')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch education data');
        }
        return res.json();
      })
      .then((response) => {
        // Ensure we're getting an array from the response
        const data = Array.isArray(response.data) ? response.data : [];
        setEducation(data);
      })
      .catch((err) => {
        console.error('Error fetching education:', err);
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
      <Education education={education} />
    </div>
  );
} 