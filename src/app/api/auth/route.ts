import { NextResponse } from "next/server";
import userRepository from "root/prisma/repositories/userRepository";
const bcrypt = require("bcrypt");

export async function POST(req: Request) {
  const data = await req.json();
  try {
    if (data.hasOwnProperty("login") && data.hasOwnProperty("pass")) {
      const user = await new userRepository().getUserByLogin(data.login);

      if (!user) {
        throw new Error("login or password is incorrect!");
      }
      if (
        (await bcrypt
          .compare(user?.password, data.pass)
          .then((result: boolean) => result)) &&
        data.login === user?.login
      ) {
        const response = NextResponse.json(
          {
            message: "welcome!",
            status: 1,
          },
          {
            status: 200,
          }
        );

        response.cookies.set({
          name: 'loggined',
          value: 'true',
          path: '/admin'
        });

        return response;
      } else {
        throw new Error("login or password is incorrect!");
      }
    } else {
      throw new Error("login or password is incorrect!");
    }
  } catch (e: any) {
    return NextResponse.json(
      {
        message: e.toString().split(": ").pop(),
        status: 0,
      },
      {
        status: 200,
      }
    )
  }
}
