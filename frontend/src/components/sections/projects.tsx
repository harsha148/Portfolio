import Image from 'next/image';
import { Project } from '@/lib/api';
import { formatDate } from '@/lib/utils';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Calendar } from 'lucide-react';

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section className="py-20">
      <div className="container">
        <SectionHeader
          title="Projects"
          subtitle="Some of the projects I've worked on"
          className="mb-10"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id}>
              {project.image_urls?.[0] && (
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image_urls[0]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
              )}
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle>{project.title}</CardTitle>
                    <div className="flex items-center space-x-2">
                      <Badge variant={project.status === 'completed' ? 'success' : 'warning'}>
                        {project.status}
                      </Badge>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(project.start_date)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3">
                  {project.short_description}
                </CardDescription>
                {project.technologies && project.technologies.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech.id} variant="secondary">
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
              <CardFooter className="justify-end space-x-2">
                {project.github_url && (
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-sm text-muted-foreground hover:text-primary"
                  >
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>
                )}
                {project.live_demo_url && (
                  <a
                    href={project.live_demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-sm text-muted-foreground hover:text-primary"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 