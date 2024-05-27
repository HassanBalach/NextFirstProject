'use client'
import React, { act, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";



export default function Header({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Homepage">

                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/myself">MySelf</HoveredLink>
                            <HoveredLink href="/mybackground">MyBackground</HoveredLink>
                        </div>
                    </MenuItem>
                </Link>

                <Link href={"/courses"}>
                <MenuItem setActive={setActive} active={active} item="Courses">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/myself">MySelf</HoveredLink>
                        <HoveredLink href="/mybackground">MyBackground</HoveredLink>
                        <HoveredLink href="/skills">Skills</HoveredLink>
                        <HoveredLink href="/resume">Resume</HoveredLink>
                    </div>
                </MenuItem>
                </Link>
               
                <Link href={"/contact"}>
                    <MenuItem setActive={setActive} active={active} item="Contact">
                    </MenuItem>
                </Link>
            </Menu>

        </div>
    )
}
