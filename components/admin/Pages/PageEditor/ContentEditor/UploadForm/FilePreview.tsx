import React from "react";
import ImageThumbnail from "./ImageThumbnail";
import { actionInterface } from "./interfaces";

const FilePreview = React.memo(({ fileData, dispatch, imageSrc }: { fileData?: File[], dispatch: React.Dispatch<actionInterface>, imageSrc?: string[] }) => {
  let index = 0;
  return (
    <div >
      <div className="mx-auto flex flex-wrap">
        {
          imageSrc && imageSrc.map((file, i, { length }) => {
            index = i;
            if (i + 1 === length) {
              index = i + 1;
            }
            return (
              <ImageThumbnail key={file} id={i} src={file} dispatch={dispatch} />
            );
          })
        }
        {
          fileData && fileData.map((file) => {
            const block = <ImageThumbnail key={file.name} id={index} file={file} dispatch={dispatch} />;
            index += 1;
            return (
              block
            );
          })
        }

      </div>
    </div>
  );
}
);
export default FilePreview;
