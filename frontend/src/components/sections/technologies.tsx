import Image from 'next/image';
import { Technology } from '@/lib/api';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';

interface TechnologiesProps {
  technologies: Technology[];
}

export function Technologies({ technologies }: TechnologiesProps) {
  // Group technologies by category
  const groupedTechnologies = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {} as Record<string, Technology[]>);

  return (
    <section className="py-20 bg-slate-900">
      <div className="container">
        <SectionHeader
          title="Technologies"
          subtitle="Tools and technologies I work with"
          className="mb-10 text-white"
        />

        <div className="space-y-10">
          {Object.entries(groupedTechnologies).map(([category, techs]) => (
            <div key={category}>
              <h3 className="mb-4 text-xl font-semibold text-white">{category}</h3>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {techs.map((tech) => (
                  <Card key={tech.id} className="overflow-hidden bg-slate-800 border-slate-700">
                    <CardContent className="flex items-center space-x-4 p-4">
                      {tech.icon_url ? (
                        <div className="relative h-8 w-8 flex-shrink-0">
                          <Image
                            src={tech.icon_url}
                            alt={tech.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      ) : (
                        <div className="h-8 w-8 flex-shrink-0 rounded-full bg-slate-700" />
                      )}
                      <div className="flex-1">
                        <p className="font-medium text-white">{tech.name}</p>
                        <div className="mt-1 h-1.5 w-full rounded-full bg-slate-700">
                          <div
                            className="h-full rounded-full bg-blue-500 transition-all"
                            style={{
                              width: `${(tech.proficiency / 5) * 100}%`,
                            }}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 