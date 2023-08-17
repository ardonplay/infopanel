import { page } from "@/Interfaces/PageInterfaces";
import { Prisma, PrismaClient } from "@prisma/client";

export default class pageRepository {
  private client: PrismaClient;

  constructor() {
    this.client = new PrismaClient();
  }

  public async getAllPages() {
    const pages = await this.client.pages.findMany();
    await this.client.$disconnect();
    return pages;
  }

  public async getPageById(id: number) {
    const page = await this.client.pages.findUnique({
      where: {
        id: id,
      },
    });
    await this.client.$disconnect();
    if (!page) {
      return undefined;
    }

    return page;
  }

  public async upsertPage(page: page){
    await this.client.pages.upsert({
      where: { id: page.id },
      update: { title: page.title, type: page.type, content: page.content as unknown as Prisma.JsonArray},
      create: { title: page.title, type: page.type, content: page.content as unknown as Prisma.JsonArray}
    });
  }
}
