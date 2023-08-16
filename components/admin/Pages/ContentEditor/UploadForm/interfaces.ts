export interface fileData {
  inDropZone: boolean;
  fileList: File[];
}

export interface actionInterface {
    inDropZone: boolean;
    type?: string,
    files: File[],
    path?: string
    id?: number
}
