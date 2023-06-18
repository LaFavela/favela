import { PrismaClient, Properti } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
   req: NextApiRequest,
   { params }: { params: { id: string } },
   res: NextApiResponse
) {
   try {
      const properties: Properti = await prisma.properti.findFirst({
         where: { id: params.id },
         include: {
            Detail_product: true,
         },
      }) as any;

      res.status(200).json(properties);
   } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
   }
}
