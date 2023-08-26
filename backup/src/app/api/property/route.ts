import { PrismaClient, Properti } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   try {
      const properties: Properti[] = await prisma.properti.findMany({
         include: {
            Detail_product: true,
         },
      });

      res.status(200).json(properties);
   } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
   }
}
