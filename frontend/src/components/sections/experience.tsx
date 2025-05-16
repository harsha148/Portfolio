import { WorkExperience } from '@/lib/api';
import { formatDate, calculateDuration } from '@/lib/utils';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Building2, MapPin, Calendar } from 'lucide-react';

interface ExperienceProps {
  experiences: WorkExperience[];
}

export function Experience({ experiences }: ExperienceProps) {
  return (
    <section className="py-20">
      <div className="container">
        <SectionHeader
          title="Work Experience"
          subtitle="My professional journey and roles"
          className="mb-10"
        />

        <div className="space-y-6">
          {experiences.map((experience) => (
            <Card key={experience.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle>{experience.role}</CardTitle>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Building2 className="h-4 w-4" />
                      {experience.company_url ? (
                        <a
                          href={experience.company_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary hover:underline"
                        >
                          {experience.company}
                        </a>
                      ) : (
                        <span>{experience.company}</span>
                      )}
                    </div>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {formatDate(experience.start_date)} -{' '}
                        {formatDate(experience.end_date)}
                      </span>
                    </div>
                    <div className="mt-1 flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{experience.location}</span>
                    </div>
                    <div className="mt-1 text-xs">
                      {calculateDuration(experience.start_date, experience.end_date)}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="whitespace-pre-line">
                  {experience.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 