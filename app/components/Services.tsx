import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

export default async function Services() {
  const t = await getTranslations('services');

  return (
    <section
      id="Services"
      className="flex flex-col items-center bg-gradient-to-b from-slate-200 to-slate-100 dark:from-slate-800 dark:via-slate-900 dark:to-slate-900 min-h-screen text-slate-900 dark:text-white py-16"
    >
      <div className="flex flex-col gap-5 justify-start items-center w-5/6 lg:gap-10 flex-1">
        <h1 className="font-display font-bold text-4xl lg:text-5xl uppercase tracking-tight">
          {t('title')}
        </h1>
        <div className="flex flex-col lg:flex-row w-11/12 h-full gap-4">
          <Card className="flex-1 hover:bg-slate-200 dark:hover:bg-slate-700/80 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white">
            <div className="flex-1">
              <Image
                src="/website-program-svgrepo-com.svg"
                height={0}
                width={0}
                alt="spa"
                className="h-auto w-5/6 lg:w-11/12 p-6 mx-auto dark:invert"
              />
            </div>
            <CardHeader>
              <CardTitle className="font-display">{t('spa.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-300">{t('spa.description')}</p>
            </CardContent>
          </Card>

          <Card className="flex-1 hover:bg-slate-200 dark:hover:bg-slate-700/80 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 flex flex-col justify-between text-slate-900 dark:text-white">
            <Image
              src="/platform-program-svgrepo-com.svg"
              height={0}
              width={0}
              alt="api"
              className="w-5/6 lg:w-11/12 p-6 mx-auto dark:invert"
            />
            <CardHeader>
              <CardTitle className="font-display">{t('api.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-300">{t('api.description')}</p>
            </CardContent>
          </Card>

          <Card className="flex-1 hover:bg-slate-200 dark:hover:bg-slate-700/80 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white">
            <Image
              src="/database-svgrepo-com.svg"
              height={0}
              width={0}
              alt="database"
              className="h-auto w-5/6 lg:w-11/12 p-6 mx-auto dark:invert"
            />
            <CardHeader>
              <CardTitle className="font-display">{t('database.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-300">{t('database.description')}</p>
            </CardContent>
          </Card>
        </div>

        <a
          href="/#Footer"
          className="mt-4 px-8 py-3 rounded-full bg-violet-600 hover:bg-violet-700 text-white font-display font-semibold text-lg transition-colors duration-200"
        >
          {t('cta')}
        </a>
      </div>
    </section>
  );
}
