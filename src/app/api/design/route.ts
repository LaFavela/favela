import { Desain, PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function GET(
   req: NextApiRequest,
   res: NextApiResponse
) {
   try {
      const response: Desain[] = await prisma.desain.findMany({
         include: {
            Detail: true,
         },
      });

      res.status(200).json(response);
   } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
   }
}
export async function sortDesain(req: NextApiRequest, res: NextApiResponse) {
   try {
      const response: Desain[] = await prisma.desain.findMany({
         include: {
            Detail: true,
         },
         orderBy: {
            nama_desain: "asc",
         },
      });

      res.status(200).json(response);
   } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
   }
}
