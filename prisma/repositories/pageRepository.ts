import { PrismaClient } from "@prisma/client"
export default class pageRepository {
    private client: PrismaClient

    constructor() {
        this.client = new PrismaClient()
    }
    public async  getUserById(id: number) {
        try {
          const page = await this.client.pages.findUnique({
            where: {
              id: id
            }
          })
          return page
        } catch(e) {
            return null
        }
      }
}