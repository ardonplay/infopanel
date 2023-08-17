import React from "react";
import ImageThumbnail from "./ImageThumbnail";
import { actionInterface } from "./interfaces";

const FilePreview = React.memo(({ fileData, dispatch }: { fileData: File[], dispatch: React.Dispatch<actionInterface> }) => {
  return (
    <div >
      <div className="mx-auto flex flex-wrap">
        {fileData.map((file) => {
          return (
                <ImageThumbnail key={file.name} file={file} dispatch={dispatch}/>
          );
        })}
      </div>
    </div>
  );
});

export default FilePreview;
