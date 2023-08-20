import { NextResponse } from "next/server";
import pageRepository from "@/prisma/repositories/pageRepository";
import { page } from "@/Interfaces/PageInterfaces";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const client = new pageRepository();

  if (!id) {
    const pages = await client.getAllPages();
    return NextResponse.json(pages, {
      status: 200,
    });
  }
  const page = await client.getPageById(Number(id));

  if (page) {
    return NextResponse.json(page);
  } else {
    return NextResponse.json(
      {
        error: "page not found",
      },
      {
        status: 200,
      }
    );
  }
}

export async function POST(request: Request) {
  const data = await request.formData();

  const page: page | null = JSON.parse(data.getAll("page") as unknown as string) as page;
  const client = new pageRepository();

  if (!page) {
    return NextResponse.json({ success: false });
  }

  await client.upsertPage(page);
  
  return NextResponse.json({ success: true });
}
