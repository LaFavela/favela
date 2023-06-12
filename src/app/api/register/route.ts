import prisma from "@/lib/prisma";
import * as bycrypt from "bcrypt";

interface RequestBody {
   username: string;
   email: string;
   password: string;
}

export async function POST(req: Request) {
   const body: RequestBody = await req.json();
   const user = await prisma.users.create({
      data: {
         firstName: body.username,
         lastName: "",
         username: body.username,
         email: body.email,
         password: await bycrypt.hash(body.password, 10),
      },
   });

   const { password, ...userWithoutPassword } = user;
   return new Response(JSON.stringify(userWithoutPassword));
}
