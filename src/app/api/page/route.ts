import { NextResponse } from "next/server";
import pageRepository from "root/prisma/repositories/pageRepository";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json("id not found!");
  }
  const client = new pageRepository();

  const page = await client.getUserById(Number(id));


  if(page) {
    page.data = JSON.parse(page.data)
    return NextResponse.json(page);
  }
  else {
    return NextResponse.json("id not found!");
  }
}
