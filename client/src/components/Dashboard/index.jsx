import Logo from "../../assets/logo";
import DashboardComponent from "./DashboardComponent";
import PagesLogo from "../../assets/pagesLogo";
import UtilsLogo from "@/assets/utilsLogo";

export default function Dashboard() {
    return (
        <div class="flex flex-col w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <div class="flex">
                <Logo />
                <span class="flex-1 ms-3 whitespace-nowrap font-bold text-gray-900 dark:text-white">infopanel</span>
            </div>
            <ul class="mt-5 space-y-2 font-medium w-full">
                <DashboardComponent logo={PagesLogo()} title="Pages" link="/pages"/>
                <DashboardComponent logo={UtilsLogo()} title="Settings" link="/settings"/>
            </ul>
            <div class="flex mt-auto text-white">
                2023 ardonplay
            </div>
        </div>)
}