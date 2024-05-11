import { ReactNode } from "react"


const Tag = ({ title }: { title: string }) => {
    return (
        <div className="bg-teal-400/10 hover:bg-teal-400/40 scale-100 hover:scale-105 flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 text-teal-300 md:text-base">
            {title}
        </div>
    )
}

export default Tag