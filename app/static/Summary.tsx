import { getTranslations } from 'next-intl/server';

const Summary = async () => {
  const t = await getTranslations('about');

  return (
    <>
      <p className="font-display text-4xl lg:text-5xl text-center lg:text-left mb-8 font-bold uppercase tracking-tight">
        {t('title')}
      </p>
      <article
        className="text-base lg:text-xl leading-relaxed text-slate-600 dark:text-slate-300"
        itemScope
        itemType="https://schema.org/author"
      >
        <p className="mb-5">{t('summary')}</p>
      </article>
    </>
  );
};

export default Summary;
