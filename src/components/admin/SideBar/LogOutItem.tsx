"use client"

import { useState } from "react"
import Image from "next/image"
import axios from "axios"

export default function LogOutItem() {
    const [hovered, setHover] = useState(false)
   
    const logOut = () => {
        axios.delete("/api/auth").then(
            (request) => {
                if (request.status === 200) {
                  window.location.reload()
                }
            }
        )
    }


    return (
        <li>
            <div onClick={() => logOut()} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer">
                {hovered ? <Image src="/logout.gif" width={20} height={20} alt="ogo" /> :
                    <Image src="/logout.svg" width={20} height={20} alt="ogo" className=" bg-none" />}
                <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
            </div>
        </li>
    )
}