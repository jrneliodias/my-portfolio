import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Bricolage_Grotesque, Source_Sans_3 } from 'next/font/google';
import { cn } from '@/lib/utils';
import Navbar from '@/app/components/Navbar';
import { ThemeProvider } from '@/app/components/ThemeProvider';
import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['500', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});
const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nélio Dias',
  description: 'Portfolio de projetos do desenvolvedor Nélio Dias',
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!routing.locales.includes(locale as 'pt' | 'en')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn(sourceSans3.className, bricolageGrotesque.variable, sourceSans3.variable)}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            <Navbar />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
