import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn('space-y-1', className)}>
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
} 