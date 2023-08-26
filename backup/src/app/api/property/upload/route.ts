import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { create } from "domain";
import { verifyJwt } from "@/lib/jwt";

interface Marker {
   lat: number;
   lng: number;
}

interface RequestBody {
   saranaLain: string[];
   name: string;
   marker: Marker;
   description: string;
   developer: string;
   certificate: string;
   finished: number;
   listrik: number;
   kamarMandi: number;
   kamarTidur: number;
   luas: number;
   hargaJual: number;
   hargaSewaBulan: number;
   hargaSewaTahun: number;
   provinsi: string;
   kota: string;
   kecamatan: string;
   kodePos: number;
   alamat: string;
   type: string;
   infoImg: string[];
   detailImg: string[];
}

export async function POST(req: Request, res: Response) {
   const header = req.headers.get("authorization");
   const body: RequestBody = await req.json();
   body.kodePos = parseInt(body.kodePos.toString());
   body.kamarMandi = parseInt(body.kamarMandi.toString());
   body.kamarTidur = parseInt(body.kamarTidur.toString());
   body.luas = parseFloat(body.luas.toString());
   body.finished = parseInt(body.finished.toString());

   if (!header) {
      return new Response(
         JSON.stringify({
            error: "Unauthorized",
         }),
         {
            status: 401,
            statusText: "Unauthorized",
         }
      );
   }
   const decoded = verifyJwt(header);
   const penjual = await prisma.role.findFirst({
      where: {
         usersId: decoded?.id,
      },
      include: {
         Penjual: true,
      },
   });

   try {
      const response = await prisma.properti.create({
         data: {
            namaProduk: body.name,
            deskripsi: body.description,
            posisi: [body.marker.lat, body.marker.lng],
            foto: body.infoImg,
            sarana: body.saranaLain,
            alamat: {
               create: {
                  jalan: body.alamat,
                  kecamatan: body.kecamatan,
                  kelurahan: body.kota,
                  kode_pos: body.kodePos,
                  kabupatenKota: body.kota,
                  provinsi: body.provinsi,
               },
            },
            Detail_product: {
               create: {
                  harga: body.hargaJual,
                  luas_product: body.luas,
                  jumlah_kamar: body.kamarTidur,
                  jumlah_kamarMandi: body.kamarMandi,
                  pengembang: body.developer,
                  sertifikat: body.certificate,
                  tahun: body.finished,
                  tipe: body.type,
                  hargaSewa: body.hargaSewaBulan,
                  foto: body.detailImg,
               },
            },
            penjual: {
               connect: { id: penjual?.Penjual.id },
            },
         },
      });

      return new Response(JSON.stringify(response), {
         status: 200,
         statusText: "OK",
      });
   } catch (error) {
      console.error(error);
      return new Response(
         JSON.stringify({
            error: "Internal Server Error",
         }),
         {
            status: 500,
            statusText: "Internal Server Error",
         }
      );
   }
}
