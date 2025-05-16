'use client';

import { Technologies } from '@/components/sections/technologies';
import { useEffect, useState } from 'react';
import type { Technology } from '@/lib/api';

export default function TechnologiesPage() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:8001/api/technologies')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch technologies');
        }
        return res.json();
      })
      .then((response) => {
        // Ensure we're getting an array from the response
        const data = Array.isArray(response.data) ? response.data : [];
        setTechnologies(data);
      })
      .catch((err) => {
        console.error('Error fetching technologies:', err);
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
      <Technologies technologies={technologies} />
    </div>
  );
} 