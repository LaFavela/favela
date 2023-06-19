import prisma from "@/lib/prisma";

export async function GET(request: Request) {
   try {
      const id = request.headers.get("username");
      if (!id) {
         return new Response(
            JSON.stringify({
               error: "Not Found",
            }),
            {
               status: 402,
            }
         );
      }
      const user = await prisma.users.findFirstOrThrow({
         where: { username: id },
         include: {
            role: true,
         }
      });
      return new Response(JSON.stringify(user));
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
