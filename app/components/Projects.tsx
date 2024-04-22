import Image from "next/image";
import ProjectCard from "./menu/elements/ProjectCard";
import { projectData } from "@/constants/constant";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

projectData
export default function Projects() {
    return (

        <section id="Projects" className="flex flex-col justify-evenly gap-4  items-center p-4 bg-slate-700 h-screen text-white min-w-full">

            <p className="font-bold text-4xl">Project</p>
            <div className="flex items-center justify-evenly h-5/6 p-2 overflow-x-auto gap-4 w-full lg:w-11/12 [&::-webkit-scrollbar]:hidden">
                <Carousel className="flex items-center w-11/12 lg:w-full h-full  lg:max-w-[80%]">
                    <CarouselContent>
                        {projectData.map((project, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                                <ProjectCard
                                    key={index}
                                    title={project.title}
                                    text={project.text}
                                    image={project.image}
                                    link={project.link}
                                    tags={project.tags}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>

        </section>


    )
}