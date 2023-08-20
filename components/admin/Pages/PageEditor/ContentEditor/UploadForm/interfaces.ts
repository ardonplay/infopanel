export interface fileData {
  inDropZone: boolean;
  fileList: File[];
  uploadedFiles: string[]
}

export interface actionInterface {
    inDropZone?: boolean;
    type?: string,
    files?: File[],
    path?: string,
    id?: number
}
