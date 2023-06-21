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

      const role = await prisma.role.delete({
         where: { usersId: id as string },
         include: {
            user: true,
            Desainer: true,
            Pembeli: true,
            Penjual: true,
            Tukang: true,
         },
      });
      const userToDelete = await prisma.$transaction([
         prisma.users.delete({
            where: { id: role.usersId },
         }),
         prisma.pembeli.delete({
            where: { id: role.Pembeli.id },
         }),
         prisma.penjual.delete({
            where: { id: role.Penjual.id },
         }),
         prisma.desainer.delete({
            where: { id: role.Desainer.id },
         }),
         prisma.tukang.delete({
            where: { id: role.Tukang.id },
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
