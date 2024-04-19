import Link from "next/link";

type MenuProps = {
    title: string
}
export default function MenuItem({ title }: MenuProps) {
    return (
        <a href={"/#" + title}>
            {title}
        </a>
    )
}