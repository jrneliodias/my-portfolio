import ProjectCard from './menu/elements/ProjectCard';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import type { ProjectItem } from '@/constants';

type ProjectsProps = {
  data: ProjectItem[];
};

export default async function Projects({ data }: ProjectsProps) {
  const t = await getTranslations('projects');

  return (
    <section
      id="Projects"
      className="flex flex-col justify-evenly gap-4 py-12 items-center bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 min-h-screen text-slate-900 dark:text-white"
    >
      <h1 className="font-display font-bold text-4xl lg:text-5xl uppercase tracking-tight pt-10">
        {t('title')}
      </h1>
      <div className="flex flex-1 items-center h-11/12 overflow-x-auto gap-4 w-full lg:w-full [&::-webkit-scrollbar]:hidden">
        <Carousel className="flex items-center w-full lg:w-full h-11/12">
          <CarouselContent className="pl-5 lg:px-20 py-4 w-full">
            {data.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 xl:basis-1/3">
                <Link href={`/projects/${index}`}>
                  <ProjectCard title={project.title} text={project.resume} image={project.image} tags={project.tags} />
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
