import { verifyJwt } from "@/lib/jwt";
import prisma from "@/lib/prisma";

export async function GET(
   request: Request,
) {
   try {
      const accessToken = request.headers.get("authorization");
      // console.log(accessToken)
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

      const user = await prisma.users.findFirstOrThrow({
         where: { id: decodedToken?.id },
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

export async function POST(
   request: Request,
) {
   try {
      const accessToken = request.headers.get("authorization");
      // console.log(accessToken)
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

      const user = await prisma.users.update({
         where: { id: decodedToken?.id },
         data :{
            ...await request.json()
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
