"use client"
import { cn } from "@/lib/utils";
import MenuItem from "./menu/elements/MenuItem";
import UseScrollPos from "@/hooks/useScrollPos";

export default function Navbar() {
    const isAtTop = UseScrollPos();

    return (
        <nav className={cn(
            `sticky -mt-14 top-0 z-50 flex justify-around items-center bg-black h-14 text-white`,
            `${isAtTop ? "opacity-100"
                : "opacity-0 hover:opacity-100 transition-opacity duration-500"}`,
        )}>
            <div />
            <div />
            <MenuItem title="About" />
            <MenuItem title="Projects" />
            <MenuItem title="Services" />
        </nav>
    )
}