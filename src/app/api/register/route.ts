import prisma from "@/lib/prisma";
import { RoleSelect } from "@prisma/client";
import * as bycrypt from "bcrypt";

interface RequestBody {
   username: string;
   email: string;
   password: string;
}

export async function POST(req: Request) {
   const body: RequestBody = await req.json();
   let user;
   try {
      await prisma.$transaction(async (prisma) => {
         user = await prisma.users.create({
            data: {
               firstName: body.username,
               lastName: "",
               username: body.username,
               email: body.email,
               password: await bycrypt.hash(body.password, 10),
            },
         });

         await prisma.role.create({
            data: {
               user: { connect: { id: user.id } },
               role: RoleSelect.PEMBELI,
               Pembeli: {
                  create: {
                     
                  },
               },
               Penjual: {
                  create: {},
               },
               Desainer: {
                  create: {},
               },
               Tukang: {
                  create: {},
               },
            },
         });
      });
   } catch (error) {
      console.error(error);
      return new Response(
         JSON.stringify({
            error: "Internal server error",
         }),
         {
            status: 500,
         }
      );
   }

   return new Response(JSON.stringify({ body: "Success" }), {
      status: 200,
      statusText: "Register Success",
   });
}
