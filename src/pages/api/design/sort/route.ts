import { Desain, PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export async function GET(req: NextApiRequest, res: NextApiResponse<Desain[]>) {
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
      res.status(500);
   }
}