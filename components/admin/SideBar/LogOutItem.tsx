"use client"

import { useState } from "react"
import Image from "next/image"
import {signOut} from "next-auth/react"

export default function LogOutItem() {
    const [hovered, setHover] = useState(false)
    return (
        <li>
            <div onClick={() => signOut({callbackUrl: "/" })} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer">
                {hovered ? <Image src="/logout.gif" width={20} height={20} alt="ogo" /> :
                    <Image src="/logout.svg" width={20} height={20} alt="ogo" className=" bg-none" />}
                <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
            </div>
        </li>
    )
}