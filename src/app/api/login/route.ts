import { signJwtAccessToken } from "@/lib/jwt";
import prisma from "@/lib/prisma";
import * as bcrypt from "bcrypt";
import { SignOptions } from "jsonwebtoken";

interface RequestBody {
   username: string;
   password: string;
   rememberMe: boolean;
}

export async function POST(request: Request) {
   const body: RequestBody = await request.json();

   const user = await prisma.users.findFirst({
      where: {
         OR: [
            {
               username: body.username,
            },
            {
               email: body.username,
            },
         ],
      },
   });

   if (user && (await bcrypt.compare(body.password, user.password))) {
      const { password, ...userWithoutPassword } = user;
      
      let expiresIn: SignOptions = { expiresIn: "1h" };
      if (body.rememberMe) {
         expiresIn = {
            expiresIn: "30d",
         };
      }
      const accessToken = signJwtAccessToken(
         userWithoutPassword,
         expiresIn as any
      );
      const result = {
         ...userWithoutPassword,
         accessToken,
         expiresIn: expiresIn.expiresIn,
      };
      return new Response(JSON.stringify(result));
   } else {
      return new Response(
         JSON.stringify({ error: "Invalid username or password" }),
         {
            status: 401,
            statusText: "Unauthorized",
         }
      );
   }
}
