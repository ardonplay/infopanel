import FilePreview from "./FilePreview";
import { fileData } from "./interfaces";
import { actionInterface } from "./interfaces";

const DropZone = ({ data, dispatch, id }: { data: fileData, dispatch: React.Dispatch<actionInterface>, id: number }) => {
  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!data.inDropZone)
      dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: true });
  };

  // onDragLeave sets inDropZone to false
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (data.inDropZone)
      dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: false });
  };

  // onDragOver sets inDropZone to true
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    (e.dataTransfer as DataTransfer).dropEffect = "copy";
    if (!data.inDropZone)
      dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: true });
  };

  // onDrop sets inDropZone to false and adds files to fileList
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    let files: File[] = Array.from(e.dataTransfer.files);

    if (files && files.length > 0) {

      const existingFiles = data.fileList.map((f) => f.name);

      files = files.filter((f) => !existingFiles.includes(f.name));

      dispatch({ type: "ADD_FILE_TO_LIST", files});

      dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: false });
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    let files: File[] = Array.from(e.target.files || []);

    e.target.value = "";

    if (files && files.length > 0) {

      const existingFiles = data.fileList.map((f) => f.name);

      files = files.filter((f) => !existingFiles.includes(f.name));

      dispatch({ type: "ADD_FILE_TO_LIST", files });
    }
  };

  return (
    <>
      <div className="flex items-center justify-center w-full mb-3"
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => handleDragOver(e)}
        onDragEnter={(e) => handleDragEnter(e)}
        onDragLeave={(e) => handleDragLeave(e)}>
        <label htmlFor={"dropzone-file" + id} className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF</p>
          </div>
          <input id={"dropzone-file" + id} type="file" className="hidden" multiple
            onChange={(e) => handleFileSelect(e)}/>
        </label>
      </div>

      <FilePreview fileData={data.fileList} imageSrc={data.uploadedFiles} dispatch={dispatch}/>

    </>
  );
};

export default DropZone;

//TODO: REFACTOR REFACTOR REFACTOR