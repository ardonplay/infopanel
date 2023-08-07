"use client"
import { useState } from "react"
import TopBar from "./TopBar"
interface EditorInterface {
    text: string
}
export default function Editor({ onChange, id }: { onChange: Function, id: number}) {
    const [text, setText] = useState("")

    const updateAll = (value: string) => {   
        onChange(value, id);
        setText(value);
    }
    return (
        <div className="w-full mb-2 bg-white rounded-lg">
            <TopBar />
            <div className="px-4 py-2 bg-white rounded-lg">
                <textarea onChange={(event) => updateAll(event.target.value)} value={text} id="editor" rows={8} className=" resize-none block w-full px-0 text-sm text-gray-800 bg-white border-0  focus:ring-0" placeholder="Write an article..." required></textarea>
            </div>
        </div>
    )
}