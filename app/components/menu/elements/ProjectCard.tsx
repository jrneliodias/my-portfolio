import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Tag from "@/app/static/Tag";
import Image from "next/image";

type ProjectCardProps = {
    title: string
    text: string
    image: string[]
    tags: string[]
}

const ProjectCard = ({
    title,
    text,
    image,
    tags
}: ProjectCardProps) => {

    return (

        <Card className="bg-black shadow-sm min-h-full text-white max-w-5xl min-w-[22rem] scale-100 transition-all hover:scale-[101%] bg-opacity-20 overflow-hidden flex flex-col">
            <Image
                src={image[0]}
                height={0}
                width={0}
                alt={title}
                className="flex-grow w-full object-cover"
                sizes="100vw"
            />
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="">
                <p className="">{text}</p>
            </CardContent>
            <CardFooter>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <div
                            key={"t" + index}>
                            <Tag title={tag} />
                        </div>))}
                </div>
            </CardFooter>
        </Card>

    )
}

export default ProjectCard
