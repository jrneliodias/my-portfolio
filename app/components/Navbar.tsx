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
