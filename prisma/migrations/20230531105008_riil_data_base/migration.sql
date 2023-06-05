/*
  Warnings:

  - You are about to drop the column `address` on the `Properti` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `Properti` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Properti` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Properti` table. All the data in the column will be lost.
  - Added the required column `deskripsi` to the `Properti` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_alamat` to the `Properti` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_rating` to the `Properti` table without a default value. This is not possible if the table is not empty.
  - Added the required column `namaProduk` to the `Properti` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Properti` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Properti" DROP COLUMN "address",
DROP COLUMN "city",
DROP COLUMN "name",
DROP COLUMN "price",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deskripsi" TEXT NOT NULL,
ADD COLUMN     "foto" TEXT[],
ADD COLUMN     "id_alamat" INTEGER NOT NULL,
ADD COLUMN     "id_rating" INTEGER NOT NULL,
ADD COLUMN     "namaProduk" TEXT NOT NULL,
ADD COLUMN     "pembeliId" TEXT,
ADD COLUMN     "posisi" DECIMAL(65,30)[],
ADD COLUMN     "sarana" TEXT[],
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Pembeli" (
    "id" TEXT NOT NULL,
    "keranjang" TEXT[],
    "wishlist" TEXT[],

    CONSTRAINT "Pembeli_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Desainer" (
    "id" TEXT NOT NULL,
    "id_desain" TEXT NOT NULL,

    CONSTRAINT "Desainer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tukang" (
    "id" TEXT NOT NULL,
    "id_desain" TEXT NOT NULL,

    CONSTRAINT "Tukang_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Penjual" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Penjual_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mengerjakan" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "id_desain" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "desainerId" TEXT,
    "tukangId" TEXT,

    CONSTRAINT "Mengerjakan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Menjual" (
    "id" TEXT NOT NULL,
    "id_produk" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "penjualId" TEXT,

    CONSTRAINT "Menjual_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Detail_product" (
    "id" TEXT NOT NULL,
    "tipe" TEXT NOT NULL,
    "pengembang" TEXT NOT NULL,
    "sertifikat" TEXT NOT NULL,
    "tahun" INTEGER NOT NULL,
    "harga" DECIMAL(65,30) NOT NULL,
    "jumlah_kamar" INTEGER NOT NULL,
    "jumlah_kamarMandi" INTEGER NOT NULL,
    "luas_product" DECIMAL(65,30) NOT NULL,
    "propertiId" TEXT NOT NULL,

    CONSTRAINT "Detail_product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Desain" (
    "id" TEXT NOT NULL,
    "nama_desain" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "foto" TEXT[],
    "id_rating" TEXT NOT NULL,
    "harga" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "pembeliId" TEXT,

    CONSTRAINT "Desain_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Detail_desain" (
    "id" TEXT NOT NULL,
    "harga" DECIMAL(65,30) NOT NULL,
    "username" TEXT NOT NULL,
    "tipe" TEXT NOT NULL,
    "sertifikat" TEXT NOT NULL,
    "luas_desain" DECIMAL(65,30) NOT NULL,
    "jumlah_kamar" INTEGER NOT NULL,
    "jumlah_kamarMandi" INTEGER NOT NULL,
    "desainId" TEXT NOT NULL,

    CONSTRAINT "Detail_desain_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rating" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "komentar" TEXT NOT NULL,
    "propertiId" TEXT,
    "desainId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Provinsi" (
    "id" TEXT NOT NULL,
    "namaProvinsi" TEXT NOT NULL,

    CONSTRAINT "Provinsi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KabupatenKota" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "provinsiId" TEXT NOT NULL,

    CONSTRAINT "KabupatenKota_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Alamat" (
    "id_alamat" TEXT NOT NULL,
    "kabupatenKotaId" TEXT NOT NULL,
    "kecamatan" TEXT NOT NULL,
    "kelurahan" TEXT NOT NULL,
    "kode_pos" INTEGER NOT NULL,
    "jalan" TEXT NOT NULL,

    CONSTRAINT "Alamat_pkey" PRIMARY KEY ("id_alamat")
);

-- CreateIndex
CREATE UNIQUE INDEX "Detail_product_propertiId_key" ON "Detail_product"("propertiId");

-- CreateIndex
CREATE UNIQUE INDEX "Detail_desain_desainId_key" ON "Detail_desain"("desainId");

-- AddForeignKey
ALTER TABLE "Mengerjakan" ADD CONSTRAINT "Mengerjakan_desainerId_fkey" FOREIGN KEY ("desainerId") REFERENCES "Desainer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mengerjakan" ADD CONSTRAINT "Mengerjakan_tukangId_fkey" FOREIGN KEY ("tukangId") REFERENCES "Tukang"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Menjual" ADD CONSTRAINT "Menjual_penjualId_fkey" FOREIGN KEY ("penjualId") REFERENCES "Penjual"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Properti" ADD CONSTRAINT "Properti_pembeliId_fkey" FOREIGN KEY ("pembeliId") REFERENCES "Pembeli"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Detail_product" ADD CONSTRAINT "Detail_product_propertiId_fkey" FOREIGN KEY ("propertiId") REFERENCES "Properti"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Desain" ADD CONSTRAINT "Desain_pembeliId_fkey" FOREIGN KEY ("pembeliId") REFERENCES "Pembeli"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Detail_desain" ADD CONSTRAINT "Detail_desain_desainId_fkey" FOREIGN KEY ("desainId") REFERENCES "Desain"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_propertiId_fkey" FOREIGN KEY ("propertiId") REFERENCES "Properti"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_desainId_fkey" FOREIGN KEY ("desainId") REFERENCES "Desain"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KabupatenKota" ADD CONSTRAINT "KabupatenKota_provinsiId_fkey" FOREIGN KEY ("provinsiId") REFERENCES "Provinsi"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alamat" ADD CONSTRAINT "Alamat_kabupatenKotaId_fkey" FOREIGN KEY ("kabupatenKotaId") REFERENCES "KabupatenKota"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
