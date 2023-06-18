/*
  Warnings:

  - You are about to drop the column `kabupatenKotaId` on the `Alamat` table. All the data in the column will be lost.
  - Added the required column `kabupatenKota` to the `Alamat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `provinsi` to the `Alamat` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Alamat" DROP CONSTRAINT "Alamat_kabupatenKotaId_fkey";

-- AlterTable
ALTER TABLE "Alamat" DROP COLUMN "kabupatenKotaId",
ADD COLUMN     "kabupatenKota" TEXT NOT NULL,
ADD COLUMN     "provinsi" TEXT NOT NULL;
