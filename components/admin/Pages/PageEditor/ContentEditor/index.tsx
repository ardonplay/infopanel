"use client"
import { Dispatch, useState, useRef, useEffect} from "react";
import BlockTypeDialog from "./BlockTypeDialog";
import Editor from "./TextEditor/Editor";
import { block, block_type } from "@/Interfaces/PageInterfaces"
import UploadForm, { uploadFormRef } from "./UploadForm";
import { PageEditorActions } from "..";
export default function ContentEditor({data, dispatch}: {data: block[], dispatch: Dispatch<PageEditorActions>}) {

    const [key, setKey] = useState(0)

    const [blocksState, setBlocksState] = useState<block[]>(data)

    const [upload, setUpload] = useState(false)

    const updateBlockState = (value: string | string[], id: number) => {
        setBlocksState((blocksState) => blocksState.map((obj, i) => {
            if (id === i) {
                return { ...obj, content: value }
            }
            return obj;
        }))
    }

    const [blocks, setBlocks] = useState<JSX.Element[]>(data.map((block, i) => {
        switch (block.type) {
            case block_type.TEXT_BLOCK: {
                return (<Editor key={i} id={i} onChange={updateBlockState} value={data[i].content as string}/>)
            }
            case block_type.IMAGE: {
                return (<UploadForm key={i} id={i} onChange={updateBlockState} ref={(element) => { uploadRefs.current[i] = element }} files={data[i].content as string[]}/>)
            }
            default: {
                return <></>
            }
        }
    }))

    const uploadRefs = useRef<(uploadFormRef | null)[]>([]);

    const updateBlocks: Dispatch<string> = (value: string) => {
        setKey((key) => key + 1)
        switch (value) {
            case block_type.TEXT_BLOCK: {
                setBlocks((blocks) => [...blocks, <Editor key={key + 1} id={key + 1} onChange={updateBlockState}  value=""/>])
                setBlocksState((blocksState) => [...blocksState, { type: block_type.TEXT_BLOCK, content: "" }])
                break;
            }
            case block_type.IMAGE: {
                setBlocks((blocks) => [...blocks, <UploadForm key={key + 1} id={key + 1} onChange={updateBlockState} ref={(element) => { uploadRefs.current[key + 1] = element }} files={[]} />])
                setBlocksState((blocksState) => [...blocksState, { type: block_type.IMAGE, content: [""] }])
                break;
            }
        }

    }
    const onPublish = async () => {
        const uploadPromises = blocksState.map(async (block, i) => {
            if (block.type === block_type.IMAGE) {
                await uploadRefs.current[i]?.uploadFiles();
            }
        });

        await Promise.all(uploadPromises);

        setUpload(true);
    }
    
    useEffect(() => {
        console.log(blocksState)
        if(upload){
            setUpload(false);
            dispatch({type: "CHANGE_CONTENT", value: blocksState})
            dispatch({type: "UPLOAD"});
        }
      }, [blocksState, upload]);

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

//TODO: REWRITE UPDATE BLOCKS TO REDUCER IN PAGEEDITOR