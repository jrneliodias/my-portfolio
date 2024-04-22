import Image from "next/image";
import ProjectCard from "./menu/elements/ProjectCard";
import { projectData } from "@/constants/constant";

projectData
export default function Projects() {
    return (

        <section id="Projects" className="flex flex-col justify-evenly gap-4  items-center p-4 bg-slate-700 h-screen text-white min-w-full">

            <p className="font-bold text-4xl">Project</p>
            <div className="flex items-center justify-evenly flex-col h-5/6 lg:flex-row gap-4 w-full lg:w-11/12">
                {projectData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        text={project.text}
                        image={project.image}
                        link={project.link}
                        tags={project.tags}
                    />
                ))}
            </div>

        </section>


    )
}