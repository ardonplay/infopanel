"use client"

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
export default function SettingsItem() {
    const [hovered, setHover] = useState(false)
    return (
        <li>
            <Link onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} href="/admin/settings" className=
                {"flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group "}>
                {hovered ? <Image src="/settings.gif" width={20} height={20} alt="ogo" /> :
                    <Image src="/settings.svg" width={20} height={20} alt="ogo" className=" bg-none" />}
                <span className="flex-1 ml-3 whitespace-nowrap">Settings</span>
            </Link>
        </li>
    )
}