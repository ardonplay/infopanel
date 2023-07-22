import { PrismaClient } from "@prisma/client"
export default class userRepository {
    private client: PrismaClient

    constructor() {
        this.client = new PrismaClient()
    }
    public async getUserByLogin(login: string) {
        try {
          const user = await this.client.users.findUnique({
            where: {
              login: login
            }
          })
          return user
        } catch(e) {
            return null
        }
      }
}