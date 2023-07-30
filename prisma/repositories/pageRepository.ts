import { PrismaClient } from "@prisma/client";

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
}
