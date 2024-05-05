import ProjectCard from "./menu/elements/ProjectCard";
import { projectData } from "@/constants/constant";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link";

projectData
export default function Projects() {
    return (

        <section id="Projects" className="flex flex-col justify-evenly gap-4  items-center p-4 bg-slate-700 h-screen text-white min-w-full">

            <h1 className="font-bold text-4xl uppercase">Projects</h1>
            <div className="flex items-center justify-evenly h-5/6 p-2 overflow-x-auto gap-4 w-full lg:w-full [&::-webkit-scrollbar]:hidden">
                <Carousel className="flex items-center w-11/12 lg:w-11/12 h-full">
                    <CarouselContent>
                        {projectData.map((project, index) => (
                            <Link key={index} href={`projects/${index}`}>
                                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                    <ProjectCard
                                        key={index}
                                        title={project.title}
                                        text={project.resume}
                                        image={project.image}
                                        tags={project.tags}
                                    />
                                </CarouselItem>
                            </Link>

                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>

        </section>


    )
}