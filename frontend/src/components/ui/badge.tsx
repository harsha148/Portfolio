import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'success' | 'warning';
  className?: string;
}

export function Badge({ 
  children, 
  variant = 'default', 
  className,
  ...props 
}: BadgeProps) {
  const variantClasses = {
    default: 'bg-primary/10 text-primary hover:bg-primary/20',
    secondary: 'bg-secondary/10 text-secondary hover:bg-secondary/20',
    success: 'bg-green-500/10 text-green-500 hover:bg-green-500/20',
    warning: 'bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset transition-colors',
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
} 