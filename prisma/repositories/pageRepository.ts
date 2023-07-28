import { PlainText, PrismaClient } from "@prisma/client";

interface CyberPage {
  id: number;
  type: string;
  title: string;
  content: PlainText;
}
export default class pageRepository {
  private client: PrismaClient;

  constructor() {
    this.client = new PrismaClient();
  }
  public async getContentOfPageByID(type: string, id: number) {
    let content = undefined;
    switch (type) {
      case "plain_text": {
        content = await this.client.plainText.findUnique({
          where: {
            id: id,
          },
        });
      }
    }
    this.client.$disconnect;
    return content;
  }
  public async getAllUsers() {
    const pages = await this.client.pages.findMany();
    this.client.$disconnect;
    return Promise.all(
      pages.map(async (page) => {
        const content = await this.getContentOfPageByID(
          page.type,
          page.related_id
        );
        return {
          id: page.id,
          type: page.type,
          title: page.title,
          content: content,
        } as CyberPage;
      })
    );
  }
  public async getUserById(id: number) {
    const page = await this.client.pages.findUnique({
      where: {
        id: id,
      },
    });

    if (!page) {
      return undefined;
    }
    let content = await this.getContentOfPageByID(page.type, page.related_id);
    this.client.$disconnect;
    return {
      id: page.id,
      type: page.type,
      title: page.title,
      content: content,
    } as CyberPage;
  }
}
