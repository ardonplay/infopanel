"use client"
import { Dispatch, useState } from "react";
import BlockTypeDialog from "./BlockTypeDialog";
import Editor from "./Editor";

export default function ContentEditor() {
    const [key, setKey] = useState(0)

    const [blocksState, setBlocksState] = useState([{text: "", id: key}])
    
    const updateBlockState = (value: string, id: number) => {
        const newState = blocksState.map(obj => {
            if (obj.id === id) {
              return {...obj, text: value};
            }
            return obj;
          });
        setBlocksState(newState)
    }

    const [blocks, setBlocks] = useState([<Editor key={key} id={key} onChange={updateBlockState} />])
    const updateBlocks: Dispatch<string> = (value: string) => {
        setKey(key + 1)
        setBlocks([...blocks, <Editor key={key + 1} id={key+1} onChange={updateBlockState}  />])
        setBlocksState([...blocksState, {text: "", id: key + 1}])
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