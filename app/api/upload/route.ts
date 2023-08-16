import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const files: File[] | null = data.getAll("files") as unknown as File[];

  if (!files || files.length === 0) {
    return NextResponse.json({ success: false });
  }
  const currentPath = process.cwd()
  const uploadDirectory = "/public/uploads/";
  const responses: { success: boolean; path?: string }[] = [];

  for (const file of files) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const fileType: string[] = file.type.split("/");
    let path = "";
    
    switch (fileType[0]) {
      case "image": {
        path = "images" + "/" + uuidv4() + "." + fileType[1];
        break;
      }
      // Add more cases for different file types if needed
      
      default: {
        // Handle unsupported file types
        responses.push({ success: false });
        continue;
      }
    }

    await writeFile(currentPath + uploadDirectory + path, buffer);
    responses.push({ success: true, path: uploadDirectory + path });
  }

  console.log(`Uploaded ${responses.length} files`);
  return NextResponse.json(responses);
}
