import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

export default async function Services() {
  const t = await getTranslations('services');

  return (
    <section id="Services" className="flex flex-col items-center bg-gradient-to-b from-slate-800 via-slate-900 to-slate-900 min-h-screen text-white py-16">
      <div className="flex flex-col gap-5 justify-start items-center w-5/6 lg:gap-10 flex-1">
        <h1 className="font-bold text-4xl uppercase">{t('title')}</h1>
        <div className="flex flex-col lg:flex-row w-11/12 h-full gap-4">
          <Card className="flex-1 hover:bg-slate-700/80 bg-slate-700 text-white">
            <div className="flex-1">
              <Image src="/website-program-svgrepo-com.svg" height={0} width={0} alt="spa" className="h-auto w-5/6 lg:w-11/12 p-6 mx-auto" />
            </div>
            <CardHeader>
              <CardTitle>{t('spa.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t('spa.description')}</p>
            </CardContent>
          </Card>

          <Card className="flex-1 hover:bg-slate-700/80 bg-slate-700 flex flex-col justify-between text-white">
            <Image src="/platform-program-svgrepo-com.svg" height={0} width={0} alt="api" className="w-5/6 lg:w-11/12 p-6 mx-auto fill-white" />
            <CardHeader>
              <CardTitle>{t('api.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t('api.description')}</p>
            </CardContent>
          </Card>

          <Card className="flex-1 hover:bg-slate-700/80 bg-slate-700 text-white">
            <Image src="/database-svgrepo-com.svg" height={0} width={0} alt="database" className="h-auto w-5/6 lg:w-11/12 p-6 mx-auto" />
            <CardHeader>
              <CardTitle>{t('database.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t('database.description')}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
