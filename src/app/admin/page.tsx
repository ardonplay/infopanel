"use client"

import { Button } from "@material-tailwind/react";


export default function LoginPage() {
    return (
        <div className="h-screen flex items-center">
            <div className="flex flex-col mx-auto h-full items-center">
                <div className="text-8xl text-neutral-100 font-bold pt-20 h-1/3">
                    Infopanel v0.1.0
                </div>
                <div className="flex-initial p-10 py-20 bg-gradient-to-b from-[#1e3b8ac5] to-[#1e3b8a3f] text-[#fff] backdrop-blur-lg border-[1px] border-solid border-white border-opacity-20 rounded-2xl shadow-[rgba(0,0,0,0.70)] shadow-2x">
                    <div className="flex flex-col w-72 space-y-5">
                        <input
                            type="text"
                            aria-describedby="new-post-explanation"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="login"
                        />
                        <input
                            type="text"

                            aria-describedby="new-post-explanation"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="password"
                        />
                        <Button className=" bg-blue-700">Sign in</Button>
                    </div>
                </div>
            </div>
        </div>

    );
}