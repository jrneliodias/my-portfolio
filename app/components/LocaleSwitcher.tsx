'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { cn } from '@/lib/utils';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: 'pt' | 'en') => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex gap-1 text-sm font-medium">
      <button
        onClick={() => switchLocale('pt')}
        className={cn(
          'transition-colors',
          locale === 'pt'
            ? 'text-violet-500 font-bold'
            : 'text-slate-400 hover:text-slate-900 dark:hover:text-white'
        )}
      >
        PT
      </button>
      <span className="text-slate-500">|</span>
      <button
        onClick={() => switchLocale('en')}
        className={cn(
          'transition-colors',
          locale === 'en'
            ? 'text-violet-500 font-bold'
            : 'text-slate-400 hover:text-slate-900 dark:hover:text-white'
        )}
      >
        EN
      </button>
    </div>
  );
}
