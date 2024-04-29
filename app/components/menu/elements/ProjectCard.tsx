import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Tag from "@/static/Tag";
import Image from "next/image";

type ProjectCardProps = {
    title: string
    text: string
    image: string[]
    link: string[]
    tags: string[]
}

const ProjectCard = ({
    title,
    text,
    image,
    link,
    tags
}: ProjectCardProps) => {

    return (

        <Card className="bg-black shadow-sm h-full text-white max-w-5xl min-w-96 scale-100 transition-all hover:scale-[101%] bg-opacity-20 overflow-hidden">
            <Image
                src={image[0]}
                height={0}
                width={0}
                alt="image"
                className=" w-full max-h-64 object-cover"
                sizes="100vw"
            />
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p>{text}</p>
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
