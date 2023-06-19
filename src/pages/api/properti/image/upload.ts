import { NextApiHandler, NextApiRequest } from "next";
import { verifyJwt } from "@/lib/jwt";
import formidable from "formidable";
import path from "path";
import fs from "fs/promises";

export const config = {
   api: {
      bodyParser: false,
   },
};

const readFile = (
   req: NextApiRequest,
   id: string,
   index: string,
   saveLocally?: boolean
): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
   const options: formidable.Options = {};
   if (saveLocally) {
      options.uploadDir = path.join(
         process.cwd(),
         "/public/assets/properti/" + id
      );
      options.filename = (name, ext, path, form) => {
         return "image-" + index + ".jpg";
      };
   }
   options.maxFileSize = 4000 * 1024 * 1024;
   const form = formidable(options);
   return new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
         if (err) reject(err);
         resolve({ fields, files });
      });
   });
};

const handler: NextApiHandler = async (req, res) => {
   const accessToken = req.headers.authorization;
   const id = req.headers.id as string;
   const index = req.headers.index as string;
   
   console.log(accessToken)
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

   try {
      await fs.readdir(
         path.join(process.cwd() + "/public/assets/properti/", id)
      );
   } catch (error) {
      await fs.mkdir(
         path.join(process.cwd() + "/public/assets/properti/", id)
      );
   }
   await readFile(req, decodedToken.id, index, true);
   res.json({ done: "ok" });
};

export default handler;
