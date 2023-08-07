import { AuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import userRepository from "@/prisma/repositories/userRepository";
const bcrypt = require("bcrypt");
export const authConfig: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        login: { label: "login", type: "text", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.login || !credentials.password) return null;

        const user = await new userRepository().getUserByLogin(
          credentials.login
        );
        
        if (
          (await bcrypt
            .compare(credentials.password, user?.password)
            .then((result: boolean) => result)) &&
          credentials.login === user?.login
        )
          return { id: user.id.toString(), login: user.login } as User;
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/admin/login",
  },
};
