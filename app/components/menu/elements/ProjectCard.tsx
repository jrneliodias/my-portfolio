import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Tag from "@/static/Tag";
import Image from "next/image";

type ProjectCardProps = {
    title: string
    text: string
    image: string
    link: string
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
        <Card className="bg-black shadow-sm text-white max-w-80 min-w-72 scale-100 transition-all hover:scale-[101%] bg-opacity-20 overflow-hidden">
            <Image
                src={image}
                height={300}
                width={400}
                alt="image"
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
