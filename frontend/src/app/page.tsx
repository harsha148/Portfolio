'use client';

import { Hero } from '@/components/sections/hero';
import { useEffect, useState } from 'react';
import type { PersonalInfo } from '@/lib/api';

export default function Home() {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:8001/api/personal-info')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch personal info');
        }
        return res.json();
      })
      .then((response) => {
        // Ensure we're getting the correct data structure
        const data = response.data || null;
        setPersonalInfo(data);
      })
      .catch((err) => {
        console.error('Error fetching personal info:', err);
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
    <div className="container mx-auto">
      <Hero personalInfo={personalInfo} />
    </div>
  );
}
