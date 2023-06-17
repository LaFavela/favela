import { NextApiRequest, NextApiResponse } from "next";
import formidable, { File } from "formidable";
import fs from "fs";
import path from "path";

export type FormidableParseReturn = {
   fields: formidable.Fields;
   files: formidable.Files;
};


export const config = {
   api: {
      bodyParser: false,
   },
};

export async function parseFormAsync(
   request: NextApiRequest,
   formidableOptions?: formidable.Options
): Promise<FormidableParseReturn> {
   const form = formidable(formidableOptions);

   return await new Promise<FormidableParseReturn>((resolve, reject) => {
      form.parse(request, async (err, fields, files) => {
         if (err) {
            reject(err);
         }

         resolve({ fields, files });
      });
   });
}

export async function POST(request: NextApiRequest, response: NextApiResponse<string>) {
   try {      // Parse request with formidable
      const { fields, files } = await parseFormAsync(request);

      // Files are always arrays (formidable v3+)
      const myfile = (files["myfile"] as any as File[])[0];

      // Save file in the public folder
      saveFile(myfile, "/public/assets/profile");

      // Return success
      response.status(200).json("success!");
   } catch (e: any) {
      return response.status(500).json(e);
   }
}

function saveFile(file: File, publicFolder: string): void {
   const fileExt = path.extname(file.originalFilename || "");

   fs.renameSync(
      file.filepath,
      `${publicFolder}/${file.newFilename}${fileExt}`
   );
}
