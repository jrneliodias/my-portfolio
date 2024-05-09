"use client"

import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { projectData } from "@/constants/constant"
import Tag from "@/app/static/Tag"
import { Github, Rocket } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

const ProjectPage = () => {
    const { projectId } = useParams()
    const projectIdInt = parseInt(projectId[0])
    const project = projectData[projectIdInt]

    return (
        <div className="w-full  min-h-screen px-5 py-20 flex flex-col lg:flex-row items-center justify-center gap-10 bg-slate-800 text-white">
            <div className="flex flex-col lg:w-5/6  gap-8">
                <h1 className="text-3xl lg:text-4xl font-extrabold">{project.title}</h1>

                <div className=" flex gap-2 flex-wrap">
                    {project.tags.map((tag, index) => (
                        <Tag
                            key={index}
                            title={tag}
                        />
                    ))}
                </div>
                <div className="flex flex-col-reverse gap-10 lg:flex-row ">
                    <div className="flex flex-col-reverse lg:flex-col lg:w-1/2 gap-10">
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
                                className="flex gap-2 max-w-40 animate-pulse"
                            >
                                <Link href={project.link[1]}>
                                    <Rocket />
                                    Produção
                                </Link>
                            </Button>}

                        </div>
                    </div>
                    <div className="lg:w-3/4 p-2">
                        <Carousel className="w-full lg:w-5/6 flex flex-col">
                            <CarouselContent>
                                {project.image.map((image, index) => (
                                    <CarouselItem className="flex items-center  lg:items-start min-h-max" key={index}>
                                        <Image
                                            src={image}
                                            width={0}
                                            height={0}
                                            alt={"Project Image"}
                                            sizes="100vw"
                                            className="w-full rounded-md"
                                        />
                                    </CarouselItem>

                                ))}
                                {project.video[0] &&
                                    (<CarouselItem className="flex my-auto lg:my-0 lg:items-start">
                                        <iframe
                                            src={project.video[0]}
                                            frameBorder="0"
                                            allowFullScreen
                                            className="w-full aspect-video"
                                        />
                                    </CarouselItem>)
                                }
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
    )
}

export default ProjectPage