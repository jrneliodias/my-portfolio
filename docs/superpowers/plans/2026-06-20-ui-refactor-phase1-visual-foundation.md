# Portfolio UI Refactoring — Phase 1: Visual Foundation

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Establish the visual foundation: Space Grotesk display typography, dark/light mode toggle via `next-themes`, violet accent replacing blue throughout, and `IntersectionObserver`-driven active-section nav indicator.

**Architecture:** `next-themes` adds a `.dark` class to `<html>` on client; all section backgrounds migrate from hardcoded `slate-*` colours to `dark:` Tailwind variants so light/dark mode works without extra CSS-var changes. Space Grotesk is loaded via `next/font/google` as CSS variable `--font-display` and applied via a `font-display` Tailwind utility. A `useActiveSection` hook (IntersectionObserver) drives per-item violet highlighting in the Navbar.

**Tech Stack:** Next.js 14, next-themes ^0.3, Space Grotesk (Google Fonts via `next/font`), Tailwind CSS class dark mode, lucide-react (already installed)

## Global Constraints

- No test framework — verify with `npm run dev` (visual) and `npm run build` (TypeScript)
- All next-intl keys and structure stay intact; new keys go into **both** `messages/en.json` and `messages/pt.json`
- Dark mode is the default; light is opt-in via toggle button in the Navbar
- Section IDs stay unchanged: `"Hero"`, `"About"`, `"Projects"`, `"Services"`, `"Footer"`
- Primary accent colour: `violet-500` (light) / `violet-400` (dark) — replaces `blue-500` everywhere
- Phase 2 = GSAP animations | Phase 3 = Bento layout | Phase 4 = SEO/analytics (separate plans)

---

### Task 1: Install next-themes

**Files:**
- Modify: `package.json` (via npm install)

- [ ] **Step 1: Install the package**

```bash
npm install next-themes
```

Expected output: `added 1 package` — next-themes has no extra runtime dependencies.

- [ ] **Step 2: Verify it landed**

```bash
grep '"next-themes"' package.json
```

Expected: a line like `"next-themes": "^0.x.y"` inside `"dependencies"`.

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: add next-themes dependency"
```

---

### Task 2: Add Space Grotesk Display Font + Extend Tailwind Config

**Files:**
- Modify: `app/[locale]/layout.tsx`
- Modify: `tailwind.config.ts`

- [ ] **Step 1: Import Space Grotesk in layout**

In `app/[locale]/layout.tsx`, replace the existing font import section at the top of the file:

```tsx
// Before:
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

// After:
import { Inter, Space_Grotesk } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});
```

- [ ] **Step 2: Add the CSS variable to the body element**

In the same file, update `<body>`:

```tsx
// Before:
<body className={cn(inter.className)}>
// After:
<body className={cn(inter.className, spaceGrotesk.variable)}>
```

- [ ] **Step 3: Add display font family to tailwind.config.ts**

Inside `theme.extend` in `tailwind.config.ts`, add:

```ts
fontFamily: {
  display: ['var(--font-display)', 'sans-serif'],
},
```

The full `theme.extend` block should now start with `fontFamily`, followed by the existing `colors`, `borderRadius`, `keyframes`, `animation` keys.

- [ ] **Step 4: Verify build passes**

```bash
npm run build
```

Expected: Build succeeds with 0 TypeScript errors. A `fontFamily` error means it was placed outside `theme.extend`.

- [ ] **Step 5: Commit**

```bash
git add app/[locale]/layout.tsx tailwind.config.ts
git commit -m "feat: add Space Grotesk display font via next/font"
```

---

### Task 3: Create ThemeProvider and ThemeToggle

**Files:**
- Create: `app/components/ThemeProvider.tsx`
- Create: `components/ui/theme-toggle.tsx`

- [ ] **Step 1: Create the ThemeProvider wrapper**

Create `app/components/ThemeProvider.tsx`:

```tsx
'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
```

- [ ] **Step 2: Create the ThemeToggle button**

Create `components/ui/theme-toggle.tsx`:

```tsx
'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button } from './button';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative text-slate-400 hover:text-slate-900 dark:hover:text-white"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add app/components/ThemeProvider.tsx components/ui/theme-toggle.tsx
git commit -m "feat: create ThemeProvider wrapper and ThemeToggle button"
```

---

### Task 4: Wire ThemeProvider into the Locale Layout

**Files:**
- Modify: `app/[locale]/layout.tsx`

- [ ] **Step 1: Import ThemeProvider**

Add to the imports in `app/[locale]/layout.tsx`:

```tsx
import { ThemeProvider } from '@/app/components/ThemeProvider';
```

- [ ] **Step 2: Add suppressHydrationWarning + wrap with ThemeProvider**

Replace the return statement with:

```tsx
return (
  <html lang={locale} suppressHydrationWarning>
    <body className={cn(inter.className, spaceGrotesk.variable)}>
      <NextIntlClientProvider messages={messages}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          {children}
        </ThemeProvider>
      </NextIntlClientProvider>
    </body>
  </html>
);
```

`suppressHydrationWarning` is required on `<html>`: next-themes sets `class="dark"` on mount client-side, which differs from the server-rendered attribute and would otherwise trigger a React hydration warning.

- [ ] **Step 3: Run dev and verify**

```bash
npm run dev
```

Open `http://localhost:3000/pt`. Site should look identical to before (dark mode is default). No console errors.

- [ ] **Step 4: Commit**

```bash
git add app/[locale]/layout.tsx
git commit -m "feat: wire ThemeProvider into locale layout with dark default"
```

---

### Task 5: Create useActiveSection Hook + Update MenuItem

**Files:**
- Create: `hooks/useActiveSection.tsx`
- Modify: `app/components/menu/elements/MenuItem.tsx`

- [ ] **Step 1: Create the hook**

Create `hooks/useActiveSection.tsx`:

```tsx
'use client';

import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds: string[]): string {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return activeSection;
}
```

`rootMargin: '-40% 0px -55% 0px'` means a section becomes "active" only when its top edge is between 40 % and 55 % down from the viewport top — so exactly one section highlights at a time while scrolling.

- [ ] **Step 2: Update MenuItem to accept an isActive prop**

Replace the full content of `app/components/menu/elements/MenuItem.tsx`:

```tsx
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
```

- [ ] **Step 3: Commit**

```bash
git add hooks/useActiveSection.tsx app/components/menu/elements/MenuItem.tsx
git commit -m "feat: add useActiveSection hook and active-state styling to MenuItem"
```

---

### Task 6: Update Navbar — ThemeToggle + Active Section

**Files:**
- Modify: `app/components/Navbar.tsx`

- [ ] **Step 1: Replace Navbar.tsx with the updated version**

```tsx
'use client';

import { cn } from '@/lib/utils';
import MenuItem from './menu/elements/MenuItem';
import UseScrollPos from '@/hooks/useScrollPos';
import { useState } from 'react';
import useDeviceSize from '@/hooks/useDeviceSize';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import SocialMedia from '../static/SocialMedia';
import { useTranslations } from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useActiveSection } from '@/hooks/useActiveSection';

const NAV_SECTIONS = ['About', 'Projects', 'Services'];

export default function Navbar() {
  const isAtTop = UseScrollPos();
  const [isOpen, setIsOpen] = useState(false);
  const [windowsWidth] = useDeviceSize();
  const t = useTranslations('navbar');
  const activeSection = useActiveSection(NAV_SECTIONS);

  const handleOpenSheet = () => setIsOpen(!isOpen);

  return (
    <>
      {windowsWidth > 500 ? (
        <nav
          className={cn(
            'sticky -mt-14 top-0 z-50 flex justify-around items-center h-14',
            'bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-slate-200/80 dark:border-slate-800/80',
            'text-slate-900 dark:text-white',
            isAtTop ? 'opacity-100' : 'opacity-0 hover:opacity-100 transition-opacity duration-500'
          )}
        >
          <div />
          <div />
          <MenuItem title={t('about')} sectionId="About" isActive={activeSection === 'About'} />
          <MenuItem title={t('projects')} sectionId="Projects" isActive={activeSection === 'Projects'} />
          <MenuItem title={t('services')} sectionId="Services" isActive={activeSection === 'Services'} />
          <LocaleSwitcher />
          <ThemeToggle />
        </nav>
      ) : (
        <nav className="sticky -mt-14 top-0 z-50 flex justify-end items-center px-3 bg-white/40 dark:bg-black/40 backdrop-blur-sm h-14">
          <Button
            onClick={handleOpenSheet}
            size="icon"
            variant="ghost"
            className="text-slate-900 dark:text-white"
          >
            <Menu />
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetContent className="flex flex-col justify-between pt-12 bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
              <div className="flex flex-col gap-4">
                <Button variant="ghost" className="justify-start" onClick={handleOpenSheet}>
                  <MenuItem title={t('about')} sectionId="About" isActive={activeSection === 'About'} />
                </Button>
                <Button variant="ghost" className="justify-start" onClick={handleOpenSheet}>
                  <MenuItem title={t('projects')} sectionId="Projects" isActive={activeSection === 'Projects'} />
                </Button>
                <Button variant="ghost" className="justify-start" onClick={handleOpenSheet}>
                  <MenuItem title={t('services')} sectionId="Services" isActive={activeSection === 'Services'} />
                </Button>
              </div>
              <div className="flex flex-col gap-4 items-start">
                <div className="flex items-center gap-3">
                  <LocaleSwitcher />
                  <ThemeToggle />
                </div>
                <SocialMedia size={20} />
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      )}
    </>
  );
}
```

Key changes vs original: navbar bg becomes `bg-white/95 dark:bg-black/95 backdrop-blur-sm` with subtle border; `ThemeToggle` placed after `LocaleSwitcher`; `useActiveSection` drives `isActive` on each `MenuItem`; unused `_` alias removed from `useDeviceSize` destructuring.

- [ ] **Step 2: Test in dev**

```bash
npm run dev
```

Check:
- [ ] ThemeToggle (sun/moon icon) appears to the right of the locale switcher
- [ ] Clicking it switches between light and dark mode
- [ ] Scrolling to the About section makes "About me" turn violet
- [ ] Scrolling to Projects and Services follows correctly

- [ ] **Step 3: Commit**

```bash
git add app/components/Navbar.tsx
git commit -m "feat: add ThemeToggle and active-section indicator to Navbar"
```

---

### Task 7: Update LocaleSwitcher — Violet Accent

**Files:**
- Modify: `app/components/LocaleSwitcher.tsx`

- [ ] **Step 1: Replace LocaleSwitcher.tsx**

```tsx
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
```

Only change: `text-blue-500` → `text-violet-500` on both active-locale buttons.

- [ ] **Step 2: Commit**

```bash
git add app/components/LocaleSwitcher.tsx
git commit -m "feat: update LocaleSwitcher accent from blue to violet"
```

---

### Task 8: Update Hero — Display Font + Light Mode

**Files:**
- Modify: `app/components/Hero.tsx`

- [ ] **Step 1: Replace Hero.tsx**

```tsx
import SocialMedia from "@/app/static/SocialMedia";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section
      id="Hero"
      className="flex flex-col items-center px-2 py-10 lg:px-20 bg-gradient-to-b from-white to-slate-100 dark:from-slate-950 dark:to-slate-900 min-h-screen text-slate-900 dark:text-white"
    >
      <div className="flex flex-col-reverse gap-5 justify-center lg:flex-row items-center lg:w-5/6 lg:gap-10 flex-1">
        <div className="flex flex-col z-20 gap-3 pointer-events-none w-5/6 lg:w-3/5 items-start lg:flex-1 animate-fade-right animate-ease-in-out">
          <p className="font-display text-5xl lg:text-7xl font-bold w-full leading-tight tracking-tight">
            {t("greeting")}{" "}
            <span className="font-black text-violet-600 dark:text-violet-400">
              Nélio Dias
            </span>
          </p>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 font-medium">
            {t("role")}
          </p>
          <div className="flex mt-6 justify-start">
            <SocialMedia size={30} />
          </div>
        </div>
        <div className="relative w-[20rem] h-[30rem] md:w-[30rem] lg:min-h-[calc(100vh-20rem)] rounded-xl animate-fade-left animate-ease-in-out">
          <Image
            className="w-3/5 sm:w-2/5 max-h-[700px] object-cover rounded-xl"
            fill
            alt="dev-image"
            sizes="100vw"
            priority
            src="/perfil.png"
          />
        </div>
      </div>
    </section>
  );
}
```

Changes vs original:
- Light mode: `from-white to-slate-100`; dark mode: `dark:from-slate-950 dark:to-slate-900` (original look)
- `font-display text-5xl lg:text-7xl leading-tight tracking-tight` on heading (was `text-5xl lg:text-6xl`)
- `text-violet-600 dark:text-violet-400` on name (was `text-blue-500`)
- Role line: `text-xl lg:text-2xl text-slate-600 dark:text-slate-300 font-medium`

- [ ] **Step 2: Verify**

```bash
npm run dev
```

Dark mode: heading larger, violet "Nélio Dias". Light mode: white background, dark text.

- [ ] **Step 3: Commit**

```bash
git add app/components/Hero.tsx
git commit -m "feat: update Hero with display font, larger heading, and light mode"
```

---

### Task 9: Update Projects — Display Font + Light Mode

**Files:**
- Modify: `app/components/Projects.tsx`
- Modify: `app/components/menu/elements/ProjectCard.tsx`

- [ ] **Step 1: Update section element and h1 in Projects.tsx**

Replace the opening `<section>` tag and `<h1>` in `app/components/Projects.tsx`:

```tsx
<section
  id="Projects"
  className="flex flex-col justify-evenly gap-4 py-12 items-center bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 min-h-screen text-slate-900 dark:text-white"
>
  <h1 className="font-display font-bold text-4xl lg:text-5xl uppercase tracking-tight pt-10">
    {t('title')}
  </h1>
```

Everything else (Carousel, CarouselContent, etc.) stays identical.

- [ ] **Step 2: Replace ProjectCard.tsx**

```tsx
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Tag from "@/app/static/Tag";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  text: string;
  image: string[];
  tags: string[];
};

const ProjectCard = ({ title, text, image, tags }: ProjectCardProps) => {
  return (
    <Card className="bg-white dark:bg-black/40 border border-slate-200 dark:border-slate-700/50 shadow-sm text-slate-900 dark:text-white max-w-5xl min-w-[22rem] scale-100 transition-all hover:scale-[101%] overflow-hidden flex flex-col">
      <Image
        src={image[0]}
        height={0}
        width={0}
        alt={title}
        className="flex-grow w-full object-cover"
        sizes="100vw"
      />
      <CardHeader>
        <CardTitle className="font-display font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-slate-600 dark:text-slate-300 text-sm">{text}</p>
      </CardContent>
      <CardFooter>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <div key={"t" + index}>
              <Tag title={tag} />
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
```

Changes: `bg-white dark:bg-black/40` with border, display font on title, subdued description text.

- [ ] **Step 3: Commit**

```bash
git add app/components/Projects.tsx app/components/menu/elements/ProjectCard.tsx
git commit -m "feat: update Projects and ProjectCard with display font and light mode"
```

---

### Task 10: Update About, Summary and Timeline — Light Mode

**Files:**
- Modify: `app/components/About.tsx`
- Modify: `app/static/Summary.tsx`
- Modify: `app/static/Timeline.tsx`

- [ ] **Step 1: Update About.tsx section className**

In `app/components/About.tsx`, change only the `<section>` opening tag:

```tsx
// Before:
<section id="About" className="flex justify-center items-center bg-slate-800 min-h-screen py-12 text-white">
// After:
<section id="About" className="flex justify-center items-center bg-slate-100 dark:bg-slate-800 min-h-screen py-12 text-slate-900 dark:text-white">
```

Everything inside remains identical.

- [ ] **Step 2: Replace Summary.tsx**

```tsx
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
```

Changes: `font-display lg:text-5xl tracking-tight` on title; `leading-relaxed text-slate-600 dark:text-slate-300` on body.

- [ ] **Step 3: Replace Timeline.tsx**

```tsx
import type { TimelineItem } from '@/constants';
import Tag from './Tag';

type TimelineProps = {
  data: TimelineItem[];
};

const Timeline = ({ data }: TimelineProps) => {
  return (
    <div className="text-sm lg:text-lg">
      {data.map((item, index) => (
        <div key={'W' + index} className="flex gap-5 py-2">
          <div>
            <div className="flex justify-center items-center text-white rounded-full w-16 h-16 lg:w-20 lg:h-20 bg-slate-400 dark:bg-slate-600">
              <div className="flex justify-center items-center w-14 h-14 lg:h-[72px] lg:w-[72px] font-bold bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white rounded-full">
                {item.year}
              </div>
            </div>
            {index < data.length - 1 ? (
              <div className="w-1 bg-slate-400 dark:bg-slate-600 m-auto h-full" />
            ) : (
              <div className="h-1" />
            )}
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-bold text-slate-900 dark:text-white">
              {item.title + '@'}
              <span className="text-teal-600 dark:text-teal-400 font-bold">{item.company}</span>
            </div>
            <ul className="text-slate-600 dark:text-slate-300">
              {item.tasks.map((task, i) => (
                <li className="mr-1.5" key={'t' + i}>{task}</li>
              ))}
            </ul>
            <ul className="mt-1 flex flex-wrap gap-y-2" aria-label="Technologies used:">
              {item.tags.map((tag, i) => (
                <li className="mr-1.5" key={'tag' + i}>
                  <Tag title={tag} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
```

Changes: year-circle outer/inner use `dark:` variants; task text `text-slate-600 dark:text-slate-300`; company name `text-teal-600 dark:text-teal-400`.

- [ ] **Step 4: Commit**

```bash
git add app/components/About.tsx app/static/Summary.tsx app/static/Timeline.tsx
git commit -m "feat: update About, Summary, and Timeline with display font and light mode"
```

---

### Task 11: Update Services — Display Font + Light Mode + CTA

**Files:**
- Modify: `messages/en.json`
- Modify: `messages/pt.json`
- Modify: `app/components/Services.tsx`

- [ ] **Step 1: Add CTA key to en.json**

Inside the `"services"` object in `messages/en.json`, add:

```json
"cta": "Get in touch"
```

- [ ] **Step 2: Add CTA key to pt.json**

Inside the `"services"` object in `messages/pt.json`, add:

```json
"cta": "Entre em contato"
```

- [ ] **Step 3: Replace Services.tsx**

```tsx
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
```

Key changes: light-mode bg `from-slate-200 to-slate-100`; display font on title and card titles; `dark:invert` on SVGs (black icons invert to white in dark mode); card bg `bg-slate-50 dark:bg-slate-700`; description text subdued; CTA button links to `/#Footer`.

- [ ] **Step 4: Commit**

```bash
git add app/components/Services.tsx messages/en.json messages/pt.json
git commit -m "feat: update Services with display font, light mode, and CTA button"
```

---

### Task 12: Update Footer — Light Mode

**Files:**
- Modify: `app/components/Footer.tsx`

- [ ] **Step 1: Replace Footer.tsx**

```tsx
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
```

Changes: outer gradient `from-amber-500 to-violet-600` in light (ties the two brand accents together), `dark:from-amber-600 dark:to-slate-500` preserves original dark look; inner div `from-slate-100 to-white dark:from-slate-900 dark:to-slate-800`; contact label uses display font.

- [ ] **Step 2: Commit**

```bash
git add app/components/Footer.tsx
git commit -m "feat: update Footer gradient and light mode styles"
```

---

### Task 13: Update Tag — Light Mode Contrast

**Files:**
- Modify: `app/static/Tag.tsx`

- [ ] **Step 1: Replace Tag.tsx**

```tsx
const Tag = ({ title }: { title: string }) => {
  return (
    <div className="bg-teal-500/10 hover:bg-teal-500/20 dark:bg-teal-400/10 dark:hover:bg-teal-400/40 scale-100 hover:scale-105 flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 text-teal-700 dark:text-teal-300 md:text-base transition-all duration-150">
      {title}
    </div>
  );
};

export default Tag;
```

Changes: `text-teal-700 dark:text-teal-300` for proper contrast on white in light mode; light bg `bg-teal-500/10 hover:bg-teal-500/20`; removed unused `ReactNode` import.

- [ ] **Step 2: Commit**

```bash
git add app/static/Tag.tsx
git commit -m "feat: update Tag contrast for light mode"
```

---

### Task 14: Update SocialMedia — Fix Icon Contrast in Light Mode

**Files:**
- Modify: `app/static/SocialMedia.tsx`

The Linkedin and Github icons inherit the parent's `text-color`. In light mode parents use `text-slate-900`, meaning dark icons on a dark (`bg-black/50`) background — poor contrast. Fix: pin icon links to `text-white` explicitly.

- [ ] **Step 1: Replace SocialMedia.tsx**

```tsx
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SocialMedia = ({ size }: { size: number }) => {
  return (
    <div className="flex justify-center gap-2 pb-4" style={{ pointerEvents: "auto" }}>
      <Link
        className="bg-black/50 text-white aspect-square p-4 rounded-full transition-all hover:scale-110 scale-100"
        href="https://www.linkedin.com/in/neliodias"
      >
        <Linkedin size={size} />
      </Link>
      <Link
        className="bg-black/50 text-white p-4 rounded-full transition-all hover:scale-110 scale-100"
        href="https://www.github.com/jrneliodias"
      >
        <Github size={size} />
      </Link>
      <Link
        className="bg-black/50 p-4 rounded-full transition-all hover:scale-110 scale-100"
        href="https://api.whatsapp.com/send?phone=5591989079292"
      >
        <Image src="/whatsapp-icon.svg" height={size} width={size} alt="whatsapp" />
      </Link>
    </div>
  );
};

export default SocialMedia;
```

Only change: added `text-white` to the LinkedIn and GitHub links; collapsed `bg-black bg-opacity-50` to the shorthand `bg-black/50`.

- [ ] **Step 2: Commit**

```bash
git add app/static/SocialMedia.tsx
git commit -m "fix: pin SocialMedia icon color to white for light mode contrast"
```

---

### Task 15: Update globals.css — Dark Scrollbar + Reduced Motion

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Append dark-mode scrollbar + reduce-motion rules**

Add these rules at the **end** of `app/globals.css`:

```css
/* Dark mode scrollbar */
.dark *::-webkit-scrollbar-track {
  background: #1e293b;
}
.dark *::-webkit-scrollbar-thumb {
  background-color: #475569;
  border: 3px solid #1e293b;
}
.dark *::-webkit-scrollbar-thumb:hover {
  background: #64748b;
}
.dark html {
  scrollbar-color: #475569 #1e293b;
}

/* Respect user motion preferences (Phase 2 GSAP animations must also check this) */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- [ ] **Step 2: Verify scrollbar in dev**

```bash
npm run dev
```

Toggle dark mode. Scrollbar track should switch to dark slate; thumb to medium grey.

- [ ] **Step 3: Commit**

```bash
git add app/globals.css
git commit -m "feat: dark scrollbar styles and prefers-reduced-motion support"
```

---

### Task 16: Final Build Verification

**Files:** None (read-only verification)

- [ ] **Step 1: Run production build**

```bash
npm run build
```

Expected: 0 TypeScript errors. Fix any type errors before marking Phase 1 complete.

- [ ] **Step 2: Full visual pass in dev**

```bash
npm run dev
```

Go through the checklist at `http://localhost:3000/pt`:

**Dark mode (default):**
- [ ] Hero heading uses Space Grotesk (visibly bolder, larger than Inter)
- [ ] "Nélio Dias" is violet, not blue
- [ ] Projects section heading uses display font
- [ ] Project cards have dark semi-transparent background
- [ ] About section: dark slate background, Summary uses display font
- [ ] Services: dark background, SVG icons visible (white), CTA button at bottom
- [ ] Footer: amber-to-slate gradient border visible, social icons present

**Light mode (after toggle):**
- [ ] Hero: white-to-light-gray gradient, dark text, violet "Nélio Dias"
- [ ] Projects: light gray background, white cards
- [ ] About: light gray background, dark readable text
- [ ] Services: light gradient, card borders, SVG icons visible (dark), CTA button present
- [ ] Footer: amber-to-violet gradient border, light inner area

**Navigation:**
- [ ] Scrolling through sections: exactly one nav item turns violet at a time
- [ ] Active locale in LocaleSwitcher is violet (not blue)
- [ ] Mobile hamburger sheet contains ThemeToggle

- [ ] **Step 3: Commit any remaining fixes**

```bash
git add -A
git commit -m "chore: phase 1 visual foundation complete"
```

---

## Verification Summary

Full end-to-end test of Phase 1:

1. `npm run build` — must succeed with 0 errors
2. `npm run dev` → `http://localhost:3000/pt`
3. Verify dark mode default — all sections correct dark backgrounds
4. Click ThemeToggle → all sections switch to light backgrounds, text stays readable
5. Scroll down page → nav item highlights change correctly section by section
6. Check Services CTA "Entre em contato" / "Get in touch" button scrolls to Footer
7. Check `/en` locale — same behaviour in English
