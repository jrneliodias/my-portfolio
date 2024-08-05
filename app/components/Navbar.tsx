"use client"
import { cn } from "@/lib/utils";
import MenuItem from "./menu/elements/MenuItem";
import UseScrollPos from "@/hooks/useScrollPos";
import { useEffect, useState } from "react";
import useDeviceSize from "@/hooks/useDeviceSize";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import SocialMedia from "../static/SocialMedia";

export default function Navbar() {
    const isAtTop = UseScrollPos();
    const [isOpen, setIsOpen] = useState(false)
    const [windowsWidth, _] = useDeviceSize()

    const handleOpenSheet = () => setIsOpen(!isOpen)

    return (
        <>
            {windowsWidth > 500 ? (<nav className={cn(
                `sticky -mt-14 top-0 z-50 flex justify-around items-center bg-black h-14 text-white`,
                `${isAtTop ? "opacity-100"
                    : "opacity-0 hover:opacity-100 transition-opacity duration-500"}`,
            )}>
                <div />
                <div />
                <MenuItem title="Sobre mim" />
                <MenuItem title="Projetos" />
                <MenuItem title="Serviços" />
            </nav>)
                : (<nav className={cn(
                    `sticky -mt-14 top-0 z-50 flex justify-end items-center px-3 bg-black/40 h-14 text-white `,

                )}>
                    <Button
                        onClick={handleOpenSheet}
                        size={'icon'}>
                        <Menu />

                    </Button>

                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetContent className="flex flex-col  justify-between pt-12 bg-slate-700 text-white ">
                            <div className="flex flex-col gap-4">
                                <Button
                                    variant={'ghost'}
                                    className="justify-start"
                                    onClick={handleOpenSheet}
                                >
                                    <MenuItem title="About" />

                                </Button>
                                <Button
                                    variant={'ghost'}
                                    className="justify-start"
                                    onClick={handleOpenSheet}
                                >
                                    <MenuItem title="Projects" />
                                </Button>
                                <Button
                                    variant={'ghost'}
                                    className="justify-start"
                                    onClick={handleOpenSheet}
                                >
                                    <MenuItem title="Services" />
                                </Button>
                            </div>

                            <SocialMedia size={20} />

                        </SheetContent>
                    </Sheet>
                </nav >
                )
            }
        </>
    )
}