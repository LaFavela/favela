/*
  Warnings:

  - Added the required column `hargaSewa` to the `Detail_product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `penjualId` to the `Properti` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `Transaksi` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `type` on the `Transaksi` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'BUILDING', 'FINISHED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "TransctionType" AS ENUM ('BELI', 'SEWA', 'DESAIN', 'BUILD');

-- AlterTable
ALTER TABLE "Detail_product" ADD COLUMN     "foto" TEXT[],
ADD COLUMN     "hargaSewa" DECIMAL(65,30) NOT NULL;

-- AlterTable
ALTER TABLE "Properti" ADD COLUMN     "penjualId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Transaksi" ADD COLUMN     "quantity" INTEGER NOT NULL,
DROP COLUMN "type",
ADD COLUMN     "type" "TransctionType" NOT NULL;

-- AddForeignKey
ALTER TABLE "Properti" ADD CONSTRAINT "Properti_penjualId_fkey" FOREIGN KEY ("penjualId") REFERENCES "Penjual"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
