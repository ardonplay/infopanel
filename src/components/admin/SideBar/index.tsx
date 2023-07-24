import Image from "next/image"
import LogOutItem from "./LogOutItem"
import PagesItem from "./PagesItem"
import SettingsItem from "./SettingsItem"

export default function SideBar() {
    return (
        <div>
            <aside className="fixed top-0 left-0 z-40 w-64 h-screen" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <div className="flex items-center pl-2.5 mb-5">
                        <Image src="/info_logo.png" width={100} height={100} alt="Infopanel Logo" className="rounded-full mr-3 w-10" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Infopanel</span>
                    </div>
                    <ul className="space-y-2 font-medium">
                        <SettingsItem />
                        <PagesItem />
                        <LogOutItem />
                    </ul>
                </div>
            </aside>
        </div>
    )
}