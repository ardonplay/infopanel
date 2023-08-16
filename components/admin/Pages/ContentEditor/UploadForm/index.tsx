'use client'
import React, { forwardRef, useReducer } from "react";
import DropZone from "./DropZone";
import { actionInterface, fileData } from "./interfaces";

export const UploadForm = forwardRef(({ id, onChange,}: { id: number, onChange: Function}, ref) => {
  // reducer function to handle state changes
  const reducer = (state: fileData, action: actionInterface) => {
    switch (action.type) {
      case "SET_IN_DROP_ZONE":
        return { ...state, inDropZone: action.inDropZone };
      case "ADD_FILE_TO_LIST":
        return action.files && { ...state, fileList: state.fileList.concat(action.files) };
      case "DELETE_FILE":
        console.log(state.fileList.filter((file, i) => i !== action.id))
        return {
          ...state, fileList: state.fileList.filter((file, i) => i !== action.id)
        }
      default:
        return state;
    }
  };

  const [data, dispatch] = useReducer(reducer, {
    inDropZone: false,
    fileList: [],
  } as fileData);

  // to handle file uploads
  const uploadFiles = async () => {

    let files = data.fileList;

    const formData = new FormData();

    files.forEach((file) => formData.append("files", file));

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    console.log(await response.json())

    if (!response.ok) {
      alert("Error uploading files");
    }
  };

  React.useImperativeHandle(ref, () => ({
    uploadFiles,
  }));

  console.log(ref)


  return (
    <div className="mb-2 p-5 bg-blue-gray-800 rounded-lg">
      <DropZone key={id} id={id} data={data} dispatch={dispatch} />
    </div>
  );
});

export default UploadForm