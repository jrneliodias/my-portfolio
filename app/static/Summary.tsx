import { getTranslations } from 'next-intl/server';

const Summary = async () => {
  const t = await getTranslations('about');

  return (
    <>
      <p className="text-4xl text-center lg:text-left mb-8 font-bold uppercase">
        {t('title')}
      </p>
      <article className="text-md lg:text-xl" itemScope itemType="https://schema.org/author">
        <p className="mb-5">{t('summary')}</p>
      </article>
    </>
  );
};

export default Summary;
