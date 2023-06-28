'use client';

import useRoutes from "@/app/hooks/useRoutes";
import { useState, useEffect } from "react";
import { User } from "@prisma/client";
import DesktopItem from "./DesktopItem";
import Avatar from "../Avatar";
import SettingsModal from "./SettingsModal";
import { useTheme } from "next-themes";



interface DesktopSidebarProps{
    currentUser: User
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({
    currentUser
}) => {
    const routes = useRoutes();
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme }= useTheme();
    const [mounted, setMounted] = useState(false)

    console.log({currentUser});
    
    useEffect(() => setMounted(true),[])
    if(!mounted) return null
    return ( 
        <>
            <SettingsModal
                currentUser={currentUser}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
            <div
                className="
                hidden
                lg:fixed
                lg:inset-y-0
                lg:left-0
                lg:z-40
                lg:w-20
                xl:px-6
                lg:overflow-y-auto
                lg:border-r-[1px]
                lg:pb-4
                lg:flex
                lg:flex-col
                justify-between
                "
            >
                <nav
                    className="
                        mt-4
                        flex
                        flex-col
                        justify-between
                    "
                >
                    <ul
                        role="list"
                        className="
                            flex
                            flex-col
                            items-center
                            space-y-1
                        "
                    >
                        {routes.map((item) => (
                            <DesktopItem
                                key={item.label}
                                href={item.href}
                                label={item.label}
                                icon={item.icon}
                                active={item.active}
                                onClick={item.onClick}
                            />
                        ))}
                    </ul>
                </nav>   
                <nav
                    className="
                        mt-4
                        flex
                        flex-col
                        justify-between
                        items-center
                        mb-5
                    "
                >
                    <div>
                    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                        className="
                            rounded-full
                            text-sm
                            p-2
                            mb-5
                            bg-neutral-100
                            dark:bg-neutral-700  
                            "
                             >
                       {theme}
                    </button>
                    </div>
                    <div
                        onClick={() => setIsOpen(true)}
                        className="
                            cursor-pointer
                            hover:opacioty-75
                            transition
                        "
                    >
                        <Avatar user={currentUser} />
                    </div>
                </nav>
            </div>
        </>
    );
}

export default DesktopSidebar