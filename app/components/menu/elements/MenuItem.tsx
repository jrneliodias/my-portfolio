import { cn } from '@/lib/utils';

type MenuProps = {
  title: string;
  sectionId: string;
  isActive?: boolean;
};

export default function MenuItem({ title, sectionId, isActive }: MenuProps) {
  return (
    <a
      href={`/#${sectionId}`}
      className={cn(
        'text-sm font-medium transition-colors duration-200',
        isActive
          ? 'text-violet-400'
          : 'text-slate-400 hover:text-slate-900 dark:hover:text-white'
      )}
    >
      {title}
    </a>
  );
}
