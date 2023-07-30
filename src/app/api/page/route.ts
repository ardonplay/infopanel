import { NextResponse } from "next/server";
import pageRepository from "root/prisma/repositories/pageRepository";

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
