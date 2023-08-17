'use client'
import { forwardRef, useReducer, useImperativeHandle } from "react";
import DropZone from "./DropZone";
import { actionInterface, fileData } from "./interfaces";

interface uploadFormProps {
  id: number,
  onChange: (value: string | string[], id: number) => void
}

export interface uploadFormRef {
  uploadFiles: () => Promise<void>;
}
interface uploadedFile {
  path: string,
  success: boolean
}
interface uploadedFiles extends Array<uploadedFile> { }

export const UploadForm = forwardRef<uploadFormRef, uploadFormProps>((props, ref) => {
  // reducer function to handle state changes
  const reducer = (state: fileData, action: actionInterface): fileData => {
    switch (action.type) {
      case "SET_IN_DROP_ZONE":
        return { ...state, inDropZone: action.inDropZone || false };
      case "ADD_FILE_TO_LIST":
        return action.files
          ? { ...state, fileList: state.fileList.concat(action.files) }
          : state;
      case "DELETE_FILE":
        return {
          ...state,
          fileList: state.fileList.filter((file) => file !== action.path),
        };
      default:
        return state;
    }
  };
  
  const [data, dispatch] = useReducer(reducer, {
    inDropZone: false,
    fileList: [],
  });

  // to handle file uploads
  const uploadFiles = async () => {

    let files = data.fileList;

    const formData = new FormData();

    files.forEach((file) => formData.append("files", file));

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const uploadedFiles =  (await response.json() as uploadedFiles).map((file) => file.path)

    if (!response.ok) {
      alert("Error uploading files");
    }
    props.onChange(uploadedFiles, props.id)
  };

  useImperativeHandle(ref, () => ({
    uploadFiles,
  }));

  return (
    <div className="mb-2 p-5 bg-blue-gray-800 rounded-lg">
      <DropZone key={props.id} id={props.id} data={data} dispatch={dispatch} />
    </div>
  );
});

export default UploadForm