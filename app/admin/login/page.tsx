"use client"
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
export default function LoginPageComponent() {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [passShow, setPassShow] = useState(false)
    const [error, setError] = useState("")

    const router = useRouter()
    const handleSubmit = async () => {


        const res = await signIn('credentials', { login: login, password: password, redirect: false })

        if (res && !res.error) {
            router.push("/admin/pages");
        }
        else if(res?.error){
            console.log(res.error)
            setError(res.error)
        }
    }
    return (
        <div
            className="w-full h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 background-animate"
        >

            <div className="h-screen flex items-center">
                <div className="flex flex-col mx-auto h-full items-center">
                    <div className="text-8xl text-white font-bold pt-20 h-1/3">
                        Infopanel v0.1.0
                    </div>
                    <div className="flex-initial p-10 py-20 bg-gradient-to-b from-[#1e3b8ac5] to-[#1e3b8a3f] text-[#fff] backdrop-blur-lg border-[1px] border-solid border-white border-opacity-20 rounded-2xl shadow-[rgba(0,0,0,0.70)] shadow-2x">
                        <div className="flex flex-col w-72 space-y-5">
                            <input
                                type="text"
                                aria-describedby="new-post-explanation"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="login"
                                value={login}
                                onChange={(event) =>
                                    setLogin(event.target.value)
                                }
                                required />
                            <div className="relative">
                                <input
                                    type={passShow ? "text" : "password"}
                                    aria-describedby="new-post-explanation"
                                    className="block w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    required />
                                <button className="absolute right-2.5 w-8 top-1.5" onClick={() => passShow ? setPassShow(false) : setPassShow(true)}>
                                    {
                                        passShow ? <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 256 256">
                                            <g><g><path fill="#000000" d="M246,128c0,22.6-48.5,71.2-117.7,71.2c-67.5,0-118.1-47.8-118.1-71.2c0-23.4,50.6-71.2,117.7-71.2C197.9,56.8,246,104.3,246,128L246,128L246,128z M128.3,69.8C97,69.8,71.6,95.7,71.6,128c0,32.3,25.5,58.2,56.7,58.2c31.2,0,56.7-25.9,56.7-58.2C185,96,159.5,69.8,128.3,69.8L128.3,69.8L128.3,69.8z M128.3,91C108.2,91,92,107.5,92,128c0,20.5,16.2,37,36.2,37c20.1,0,36.2-16.5,36.2-37C164.2,107.5,148,91,128.3,91L128.3,91L128.3,91z" /><path fill="#000000" d="M21.8,66.7l220.4,106.7c3.1,1.5,4.4,5.3,2.9,8.4l-2.7,5.7c-1.5,3.1-5.3,4.4-8.4,2.9L13.5,83.7c-3.1-1.5-4.4-5.3-2.9-8.4l2.7-5.6C14.9,66.5,18.6,65.2,21.8,66.7z" /></g></g>
                                        </svg> : <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 256 256" >
                                            <g><g><path fill="#000000" d="M246,128c0,22.7-48.5,71.2-117.8,71.2C60.6,199.2,10,151.4,10,128s50.6-71.2,117.8-71.2C197.9,56.8,246,104.3,246,128L246,128L246,128z M128.2,69.7c-31.3,0-56.8,25.9-56.8,58.3c0,32.3,25.5,58.3,56.8,58.3c31.3,0,56.8-25.9,56.8-58.3C184.9,96,159.4,69.7,128.2,69.7L128.2,69.7L128.2,69.7z M128.2,91c-20.1,0-36.3,16.5-36.3,37s16.2,37,36.3,37c20.1,0,36.3-16.5,36.3-37C164.1,107.5,147.9,91,128.2,91L128.2,91L128.2,91z" /></g></g>
                                        </svg>
                                    }
                                </button>
                            </div>

                            <Button className=" bg-blue-700" onClick={() => handleSubmit()}>Sign in</Button>
                            {error}
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}