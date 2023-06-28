'use client'

import { User } from "@prisma/client"
import UserBox from "./UserBox"
import { useTheme } from "next-themes";
import { useEffect,useState } from "react";
 
interface UserListProps {
    items: User[]
}

const UserList: React.FC<UserListProps> = ({
    items
}) => {

    const { theme, setTheme }= useTheme();
    const [mounted, setMounted] = useState(false)
    
    useEffect(() => setMounted(true),[])
    if(!mounted) return null

    return(
        <aside
            className="
                fixed
                inset-y-0
                pb-20
                lg:pb-0
                lg:left-20
                lg:w-80
                lg:block
                overflow-y-auto
                border-r
                border-gray-200
                block
                w-full
                left-0
            "
        >
            <div className="px-5">
                <div className="flex justify-between">
                    <div
                    className="
                        text-2xl
                        font-bold
                        text-neutral-800
                        dark:text-white
                        py-4
                    "
                >
                    People
                    </div>
                    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                        className="
                            lg:hidden
                            rounded-full
                            text-sm
                            p-2
                            my-2
                            bg-neutral-100
                            dark:bg-neutral-700  
                            "
                             >
                       {theme}
                    </button>
                </div>   
                {items.map((item)=>(
                    <UserBox
                        key={item.id}
                        data={item}
                    />
                ))} 
            </div>
        </aside>
    );
}

export default UserList;