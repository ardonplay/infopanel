"use client"
import { Dispatch, useState } from "react";
import BlockTypeDialog from "./BlockTypeDialog";
import Editor from "./Editor";

export default function ContentEditor() {
    const [blocks, setBlocks] = useState([<Editor />])

    const updateBlocks: Dispatch<string> = (value: string) => {
            setBlocks([...blocks, <Editor />])
    }
    return (
        <div className=" bg-gray-400 rounded-xl p-5">

            <form>
                {blocks}
                <div className="flex items-center justify-center">
                    <BlockTypeDialog confirmAction={updateBlocks} />
                </div>
                <button type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    Publish post
                </button>
            </form>
        </div>

    )
}