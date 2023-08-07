export interface block {
  type: block_type;
  content: block[] | string;
}

export function isBlock(obj: any): boolean {
  try {
    if ("type" in obj && obj.type in block_type) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
}

export enum block_type {
  TEXT_BLOCK = "TEXT_BLOCK",
  IMAGE = "IMAGE",
  TEXT = "TEXT",
  UNDEFINDED = "",
}
