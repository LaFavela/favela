import { Desainer, PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   try {
      const response: Desainer[] = await prisma.desainer.findMany();

      res.status(200).json(response);
   } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
   }
}
