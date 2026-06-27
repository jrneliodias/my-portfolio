import { getTranslations } from 'next-intl/server';

export default async function Services() {
  const t = await getTranslations('services');
  const services = [
    { name: t('spa.title'), desc: t('spa.description') },
    { name: t('api.title'), desc: t('api.description') },
    { name: t('database.title'), desc: t('database.description') },
  ];

  return (
    <section
      id="Services"
      className="flex flex-col items-center bg-background min-h-screen text-slate-900 dark:text-white py-16 lg:py-24"
    >
      <div className="flex flex-col w-5/6 lg:w-4/5 flex-1">
        <h2 className="font-display font-bold text-4xl lg:text-5xl mb-16">
          {t('title')}
        </h2>
        <div className="flex flex-col">
          {services.map((s) => (
            <div
              key={s.name}
              className="border-t border-slate-200 dark:border-slate-700 py-10 lg:py-14 flex flex-col lg:flex-row lg:gap-16"
            >
              <div className="lg:w-2/5 mb-4 lg:mb-0">
                <h3 className="font-display font-bold text-2xl lg:text-3xl">{s.name}</h3>
              </div>
              <div className="lg:w-3/5">
                <p className="text-base leading-relaxed text-slate-700 dark:text-slate-200">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
          <div className="border-t border-slate-200 dark:border-slate-700 pt-10 flex justify-end">
            <a
              href="#Contact"
              className="px-8 py-3 rounded-full bg-violet-600 hover:bg-violet-700 text-white font-display font-semibold text-lg transition-colors duration-200"
            >
              {t('cta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
