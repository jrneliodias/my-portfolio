import { Github, Linkedin } from "lucide-react"
import Link from "next/link"

export const SocialMedia = ({ size }: { size: number }) => {

    return (
        <div className="flex justify-center gap-2 pb-4"
            style={{ pointerEvents: "auto" }}>
            <Link
                className={"bg-black bg-opacity-50 p-4 rounded-full transition-all hover:scale-110 scale-100"}
                href="https://www.linkedin.com/in/neliodias"

            >
                <Linkedin size={size} />
            </Link>
            <Link
                className={"bg-black bg-opacity-50 p-4 rounded-full transition-all hover:scale-110 scale-100"}
                href="https://www.github.com/jrneliodias"

            >
                <Github size={size} />
            </Link>
        </div>
    )
}