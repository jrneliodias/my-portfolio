"use client"

import { Button } from "@/components/ui/button"
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
            <div className="flex flex-col h-5/6 w-1/2 gap-5">
                <h1 className="text-2xl lg:text-3xl font-extrabold">{project.title}</h1>
                <div className=" lg:text-lg flex flex-col gap-2">
                    {project.text.map((tag, index) => (
                        <p
                            key={index}
                        >
                            {tag}
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
                <div className=" flex gap-2 flex-wrap">
                    {project.tags.map((tag, index) => (
                        <Tag
                            key={index}
                            title={tag}
                        />
                    ))}
                </div>
            </div>
            <div className="w-1/2">
                <Image
                    src={project.image[0]}
                    width={0}
                    height={0}
                    alt={project.title}
                    sizes="100vw"
                    className="w-full object-contain max-h-screen"
                />

            </div>
        </div>
    )
}

export default ProjectPage