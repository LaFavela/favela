import { verifyJwt } from "@/lib/jwt";
import prisma from "@/lib/prisma";
import { RoleSelect } from "@prisma/client";

export async function POST(request: Request) {
   try {
      const accessToken = request.headers.get("authorization");
      console.log(accessToken);
      const decodedToken = verifyJwt(accessToken!);
      // console.log(decodedToken)

      if (!accessToken || !decodedToken) {
         return new Response(
            JSON.stringify({
               error: "unauthorized",
            }),
            {
               status: 401,
            }
         );
      }

      const checkAdmin = await prisma.users.findFirst({
         where: {
            id: decodedToken.id,
         },
      });

      if (checkAdmin?.roleName !== RoleSelect.ADMIN) {
         return new Response(
            JSON.stringify({
               error: "unauthorized",
            }),
            {
               status: 401,
            }
         );
      }

      const id = request.headers.get("id");

      const userToDelete = await prisma.$transaction([
         prisma.role.delete({
            where: { usersId: id as string },
         }),
         prisma.users.delete({
            where: { id: id as string },
         }),
      ]);

      return new Response(JSON.stringify(userToDelete));
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
}
