"use client"
import { Dispatch, useState, useRef, MutableRefObject } from "react";
import BlockTypeDialog from "./BlockTypeDialog";
import Editor from "./TextEditor/Editor";
import { block, block_type } from "@/Interfaces/PageInterfaces"
import UploadForm from "./UploadForm";
export default function ContentEditor() {

    const [key, setKey] = useState(0)

    const [blocksState, setBlocksState] = useState<block[]>([{ type: block_type.TEXT_BLOCK, content: "" }])

    const updateBlockState = (value: string | string[], id: number) => {
        setBlocksState((blocksState) => blocksState.map((obj, i) => {
            if (id === i) {
                return { ...obj, content: value }
            }
            return obj;
        }))
    }

    const [blocks, setBlocks] = useState([<Editor key={key} id={key} onChange={updateBlockState} />])

    const uploadRefs = useRef([]);

    const updateBlocks: Dispatch<string> = (value: string) => {
        setKey((key) => key + 1)
        switch (value) {
            case block_type.TEXT_BLOCK: {
                setBlocks((blocks) => [...blocks, <Editor key={key + 1} id={key + 1} onChange={updateBlockState} />])
                setBlocksState((blocksState) => [...blocksState, { type: block_type.TEXT_BLOCK, content: "" }])
                break;
            }
            case block_type.IMAGE: {
                setBlocks((blocks) => [...blocks, <UploadForm key={key + 1} id={key + 1} onChange={updateBlockState} ref={(element) => {uploadRefs.current[key+1] = element}} />])
                setBlocksState((blocksState) => [...blocksState, { type: block_type.IMAGE, content: [""] }])
                break;
            }
        }

    }
    const onPublish = () => {
        blocksState.map((block, i) => {
            if(block.type === block_type.IMAGE){
                uploadRefs.current[i].uploadFiles();
            }
        })
    }
    console.log(blocksState)

    return (
        <div className=" bg-gray-400 rounded-xl p-5">

            <div>
                {blocks}
                <div className="flex items-center justify-center">
                    <BlockTypeDialog confirmAction={updateBlocks} />
                </div>
                <button onClick={() => onPublish()} className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    Publish post
                </button>
            </div>
        </div>

    )
}