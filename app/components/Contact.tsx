import { getTranslations } from 'next-intl/server';
import SocialMedia from '@/app/static/SocialMedia';
import CopyEmailButton from './CopyEmailButton';

const EMAIL = 'jrneliodias@gmail.com';

export default async function Contact() {
  const t = await getTranslations('contact');

  return (
    <section id="Contact" className="bg-secondary py-16 lg:py-24">
      <div className="w-5/6 lg:w-4/5 mx-auto flex flex-col items-center text-center gap-6">
        <h2 className="font-display font-bold text-4xl lg:text-5xl">
          {t('title')}
        </h2>

        <p className="text-muted-foreground text-lg lg:text-xl">
          {t('subtitle')}
        </p>

        <div className="flex items-center gap-3 flex-wrap justify-center">
          <a
            href={`mailto:${EMAIL}`}
            className="font-display font-semibold text-xl lg:text-2xl text-violet-600 dark:text-violet-400 hover:underline"
          >
            {EMAIL}
          </a>
          <CopyEmailButton
            email={EMAIL}
            copyLabel={t('copy')}
            copiedLabel={t('copied')}
          />
        </div>

        <SocialMedia size={28} />
      </div>
    </section>
  );
}
