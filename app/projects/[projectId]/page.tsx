"use client"

import { projectData } from "@/constants/constant"
import Tag from "@/static/Tag"
import Image from "next/image"
import { useParams } from "next/navigation"

const ProjectPage = () => {
    const { projectId } = useParams()
    const projectIdInt = parseInt(projectId[0])
    const project = projectData[projectIdInt]

    return (
        <div className="w-screen h-screen px-8 py-20 flex items-center gap-5 bg-slate-800 text-white">
            <div className="flex flex-col h-5/6 w-1/2 gap-5">
                <h1 className="text-3xl font-extrabold">{project.title}</h1>
                <p className="text-lg">{project.text}</p>
                <p>link do projeto: {project.link}</p>
                <div className=" flex gap-2">
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
                    src={project.image}
                    width={0}
                    height={0}
                    alt={project.title}
                    sizes="100vw"
                    className="w-full object-contain"
                />

            </div>
        </div>
    )
}

export default ProjectPage