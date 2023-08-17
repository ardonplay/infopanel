import { Dispatch, useState } from "react"
import Image from "./Image"
import { actionInterface } from "../interfaces";
export default function ImageThumbnail({ file, src, id,  dispatch }: { file?: File, src?: string, id: number,  dispatch: Dispatch<actionInterface> }) {
    const [showButton, setShowButton] = useState(false);
    const [filePath] = useState(file && URL.createObjectURL(file) || src && src);
    const deleteImage = () => {
        dispatch({ type: "DELETE_FILE", id: id });
    };


    return (
        <div className="rounded-xl h-48 w-48 relative m-1" onMouseOver={() => setShowButton(true)} onMouseOut={() => setShowButton(false)}>
            <Image file={filePath ?  filePath : ""} />
            {showButton && <button className="absolute left-auto right-0 p-1.5  rounded-lg bg-blue-gray-100" onClick={deleteImage}>
                <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg></button>}
        </div>
    )
}
