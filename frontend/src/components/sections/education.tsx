import type { Education } from '@/lib/api';
import { formatDate } from '@/lib/utils';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

interface EducationProps {
  education: Education[];
}

export function Education({ education }: EducationProps) {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container">
        <SectionHeader
          title="Education"
          subtitle="My academic background and achievements"
          className="mb-10 text-white"
        />

        <div className="space-y-6">
          {education.map((edu) => (
            <Card key={edu.id} className="bg-slate-800 border-slate-700">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-white">{edu.degree}</CardTitle>
                    <div className="flex items-center space-x-2 text-slate-400">
                      <GraduationCap className="h-4 w-4" />
                      {edu.institution_url ? (
                        <a
                          href={edu.institution_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-white hover:underline"
                        >
                          {edu.institution}
                        </a>
                      ) : (
                        <span>{edu.institution}</span>
                      )}
                    </div>
                    <div className="text-sm text-slate-400">
                      Major: {edu.major}
                      {edu.gpa && ` | GPA: ${edu.gpa.toFixed(2)}`}
                    </div>
                  </div>
                  <div className="text-right text-sm text-slate-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {formatDate(edu.start_date)} - {formatDate(edu.end_date)}
                      </span>
                    </div>
                    <div className="mt-1 flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              {edu.details && (
                <CardContent>
                  <CardDescription className="whitespace-pre-line text-slate-300">
                    {edu.details}
                  </CardDescription>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 