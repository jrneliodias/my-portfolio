'use client';

import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Tag from '@/app/static/Tag';
import { Github, Rocket } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import Markdown from '@/app/projects/components/markdown';
import type { ProjectItem } from '@/constants';

type ProjectViewProps = {
  project: ProjectItem;
};

export default function ProjectView({ project }: ProjectViewProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [carrouselImage, setCarrouselImage] = useState(project.image[0]);

  const handleImageClick = (srcImage: string) => {
    setIsOpen(true);
    setCarrouselImage(srcImage);
  };

  return (
    <div className="w-full min-h-screen px-5 py-20 flex flex-col lg:flex-row items-center justify-center gap-10 bg-slate-800 text-white">
      <div className="flex flex-col lg:w-5/6 gap-8">
        <h1 className="text-3xl lg:text-4xl font-extrabold">{project.title}</h1>

        <div className="flex gap-2 flex-wrap">
          {project.tags.map((tag, index) => (
            <Tag key={index} title={tag} />
          ))}
        </div>

        <div className="flex flex-col-reverse gap-10 lg:flex-row">
          <div className="flex flex-col lg:w-1/2 gap-10">
            <div className="flex items-center gap-5">
              {project.link?.repository && (
                <Button variant="default" asChild className="flex gap-2 max-w-40">
                  <Link href={project.link.repository}>
                    <Github />
                    Repositório
                  </Link>
                </Button>
              )}
              {project.link?.production && (
                <Button variant="secondary" asChild className="flex gap-2 max-w-40 animate-pulse">
                  <Link href={project.link.production}>
                    <Rocket />
                    Produção
                  </Link>
                </Button>
              )}
            </div>
            <div className="lg:text-lg flex flex-col gap-2">
              <Markdown text={project.text} />
            </div>
          </div>

          <div className="lg:w-3/4 p-2">
            <Carousel className="w-full flex flex-col">
              <CarouselContent>
                {project.image.map((image, index) => (
                  <>
                    <CarouselItem
                      key={index}
                      onClick={() => handleImageClick(image)}
                      className="flex items-center h-[calc(100vh-280px)] justify-center"
                    >
                      <Image
                        src={image}
                        width={0}
                        height={0}
                        alt="Project Image"
                        sizes="100vw"
                        className="h-auto w-auto max-h-full rounded-md"
                      />
                    </CarouselItem>
                    <Dialog open={isOpen} onOpenChange={setIsOpen}>
                      <DialogContent className="md:w-5/6 flex md:h-[90vh] justify-center items-center">
                        <Image
                          src={carrouselImage}
                          width={0}
                          height={0}
                          alt="Project Image"
                          sizes="100vw"
                          className="w-full md:w-fit md:h-full rounded-md"
                        />
                      </DialogContent>
                    </Dialog>
                  </>
                ))}
                {project.video && project.video[0] && (
                  <CarouselItem className="flex my-auto lg:my-0 lg:items-center">
                    <iframe src={project.video[0]} frameBorder="0" allowFullScreen className="w-full aspect-video" />
                  </CarouselItem>
                )}
              </CarouselContent>
              <div className="mt-6">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
