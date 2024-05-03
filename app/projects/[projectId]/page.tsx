"use client"

import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { projectData } from "@/constants/constant"
import Tag from "@/static/Tag"
import { Github, Rocket, Satellite } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

const ProjectPage = () => {
    const { projectId } = useParams()
    const projectIdInt = parseInt(projectId[0])
    const project = projectData[projectIdInt]

    return (
        <div className="w-screen h-screen px-8 py-20 flex items-center gap-10 bg-slate-800 text-white">
            <div className="flex flex-col h-5/6 w-1/2 gap-8">
                <h1 className="text-2xl lg:text-3xl font-extrabold">{project.title}</h1>
                <div className=" flex gap-2 flex-wrap">
                    {project.tags.map((tag, index) => (
                        <Tag
                            key={index}
                            title={tag}
                        />
                    ))}
                </div>
                <div className=" lg:text-lg flex flex-col gap-2">
                    {project.text.map((text, index) => (
                        <p
                            key={index}
                        >
                            {text}
                        </p>
                    ))}
                </div>
                <div className="flex items-center gap-5">

                    <Button
                        variant={"default"}
                        asChild
                        className="flex gap-2 max-w-40"
                    >
                        <Link href={project.link[0]}>
                            <Github />
                            Repositório
                        </Link>
                    </Button>
                    {project.link[1] && <Button
                        variant={"secondary"}
                        asChild
                        className="flex gap-2 max-w-40"
                    >
                        <Link href={project.link[1]}>
                            <Rocket />
                            Produção
                        </Link>
                    </Button>}

                </div>
            </div>
            <div className="w-1/2">

                <Carousel className="flex items-center w-11/12 lg:w-11/12 h-full">
                    <CarouselContent>
                        {project.image.map((image, index) => (
                            <CarouselItem className="flex items-center" key={index}>
                                <Image
                                    src={image}
                                    width={0}
                                    height={0}
                                    alt={"Project Image"}
                                    sizes="100vw"
                                    className="w-full object-contain max-h-screen"
                                />
                            </CarouselItem>

                        ))}

                        <CarouselItem className="flex items-center">
                            <iframe
                                src={project.video[0]}
                                frameBorder="0"
                                allowFullScreen
                                className="w-full aspect-video my-auto"
                            />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

            </div>
        </div>
    )
}

export default ProjectPage