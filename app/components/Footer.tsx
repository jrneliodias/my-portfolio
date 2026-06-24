import SocialMedia from '@/app/static/SocialMedia';
import { getTranslations } from 'next-intl/server';

export default async function Footer() {
  const t = await getTranslations('footer');

  return (
    <footer className="bg-gradient-to-r from-amber-500 to-violet-600 dark:from-amber-600 dark:to-slate-500">
      <div
        id="Footer"
        className="flex flex-col gap-2 justify-center items-center p-8 bg-gradient-to-b from-slate-100 to-white dark:from-slate-900 dark:to-slate-800 h-max text-slate-900 dark:text-white"
      >
        <p className="font-display font-semibold text-lg">{t('contact')}</p>
        <SocialMedia size={30} />
      </div>
    </footer>
  );
}
