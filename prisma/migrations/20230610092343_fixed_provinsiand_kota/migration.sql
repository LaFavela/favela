/*
  Warnings:

  - The primary key for the `KabupatenKota` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `KabupatenKota` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Provinsi` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Provinsi` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `kabupatenKotaId` on the `Alamat` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `latitude` to the `KabupatenKota` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `KabupatenKota` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `provinsiId` on the `KabupatenKota` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `latitude` to the `Provinsi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `Provinsi` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Alamat" DROP CONSTRAINT "Alamat_kabupatenKotaId_fkey";

-- DropForeignKey
ALTER TABLE "KabupatenKota" DROP CONSTRAINT "KabupatenKota_provinsiId_fkey";

-- AlterTable
ALTER TABLE "Alamat" DROP COLUMN "kabupatenKotaId",
ADD COLUMN     "kabupatenKotaId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "KabupatenKota" DROP CONSTRAINT "KabupatenKota_pkey",
ADD COLUMN     "latitude" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "longitude" DECIMAL(65,30) NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "provinsiId",
ADD COLUMN     "provinsiId" INTEGER NOT NULL,
ADD CONSTRAINT "KabupatenKota_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Provinsi" DROP CONSTRAINT "Provinsi_pkey",
ADD COLUMN     "latitude" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "longitude" DECIMAL(65,30) NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Provinsi_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "KabupatenKota" ADD CONSTRAINT "KabupatenKota_provinsiId_fkey" FOREIGN KEY ("provinsiId") REFERENCES "Provinsi"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alamat" ADD CONSTRAINT "Alamat_kabupatenKotaId_fkey" FOREIGN KEY ("kabupatenKotaId") REFERENCES "KabupatenKota"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
