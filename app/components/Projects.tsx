import ProjectCard from "./menu/elements/ProjectCard";
import { projectData } from "@/constants/constant";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Link from "next/link";

projectData;
export default function Projects() {
  return (
    <section id="Projects" className=" flex flex-col justify-evenly gap-4 py-12 items-center bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800  min-h-screen text-white">
      <h1 className="font-bold text-4xl uppercase pt-10">Projetos</h1>
      <div className="flex flex-1 items-center h-11/12 overflow-x-auto gap-4 w-full lg:w-full [&::-webkit-scrollbar]:hidden">
        <Carousel className="flex items-center w-full lg:w-full h-11/12">
          <CarouselContent className="pl-5 lg:px-20 py-4 w-full">
            {projectData.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 xl:basis-1/3">
                <Link href={`projects/${index}`}>
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
