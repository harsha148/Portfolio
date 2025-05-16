'use client';

import Image from 'next/image';
import { motion as m } from 'framer-motion';
import type { PersonalInfo } from '@/lib/api';
import { getInitials } from '@/lib/utils';

interface HeroProps {
  personalInfo: PersonalInfo | null;
}

export function Hero({ personalInfo }: HeroProps) {
  if (!personalInfo?.name) {
    return (
      <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="text-white">Loading...</div>
      </section>
    );
  }

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-4">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          {/* Profile Image */}
          <m.div 
            className="mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            {personalInfo.profile_image_url ? (
              <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white/10 shadow-xl backdrop-blur-sm">
                <Image
                  src={personalInfo.profile_image_url}
                  alt={personalInfo.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                  priority
                />
              </div>
            ) : (
              <div className="flex h-40 w-40 items-center justify-center rounded-full border-4 border-white/10 bg-gradient-to-br from-blue-500 to-purple-600 text-4xl font-bold text-white shadow-xl">
                {getInitials(personalInfo.name)}
              </div>
            )}
          </m.div>

          {/* Name and Headline */}
          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl"
          >
            {personalInfo.name}
          </m.h1>
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 max-w-2xl text-xl font-light text-slate-300"
          >
            {personalInfo.headline}
          </m.p>

          {/* Bio */}
          {personalInfo.bio && (
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 max-w-2xl text-lg text-slate-400"
            >
              {personalInfo.bio}
            </m.p>
          )}

          {/* Call to Action */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex gap-4"
          >
            <a
              href="/experience"
              className="rounded-full bg-white px-8 py-3 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-100"
            >
              View Experience
            </a>
            <a
              href="/projects"
              className="rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              View Projects
            </a>
          </m.div>
        </m.div>
      </div>
    </section>
  );
} 