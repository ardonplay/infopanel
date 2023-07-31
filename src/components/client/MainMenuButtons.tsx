"use client"
import { Button } from "@material-tailwind/react";
export default function MainMenuButtons() {
    return (
        <div className="flex flex-row items-start space-x-4 h-1/2 w-full pl-12">
            <Button className="rounded-2xl bg-green-400 w-1/4 h-full text-3xl">History</Button>
            <Button className="rounded-2xl bg-red-400 w-1/4 h-full  text-3xl">Map</Button>
            <Button className="rounded-2xl  bg-purple-700 w-1/4 h-full text-3xl">Feedback</Button>

        </div>
    )
}