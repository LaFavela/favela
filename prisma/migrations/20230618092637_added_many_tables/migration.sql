/*
  Warnings:

  - You are about to drop the `Menjual` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[pembeliId]` on the table `Role` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[penjualId]` on the table `Role` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[desainerId]` on the table `Role` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tukangId]` on the table `Role` will be added. If there are existing duplicate values, this will fail.
  - Made the column `pembeliId` on table `Role` required. This step will fail if there are existing NULL values in that column.
  - Made the column `penjualId` on table `Role` required. This step will fail if there are existing NULL values in that column.
  - Made the column `desainerId` on table `Role` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tukangId` on table `Role` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Menjual" DROP CONSTRAINT "Menjual_penjualId_fkey";

-- DropForeignKey
ALTER TABLE "Role" DROP CONSTRAINT "Role_desainerId_fkey";

-- DropForeignKey
ALTER TABLE "Role" DROP CONSTRAINT "Role_pembeliId_fkey";

-- DropForeignKey
ALTER TABLE "Role" DROP CONSTRAINT "Role_penjualId_fkey";

-- DropForeignKey
ALTER TABLE "Role" DROP CONSTRAINT "Role_tukangId_fkey";

-- AlterTable
ALTER TABLE "Desain" ADD COLUMN     "likedId" TEXT;

-- AlterTable
ALTER TABLE "Properti" ADD COLUMN     "likedId" TEXT;

-- AlterTable
ALTER TABLE "Role" ALTER COLUMN "pembeliId" SET NOT NULL,
ALTER COLUMN "penjualId" SET NOT NULL,
ALTER COLUMN "desainerId" SET NOT NULL,
ALTER COLUMN "tukangId" SET NOT NULL;

-- DropTable
DROP TABLE "Menjual";

-- CreateTable
CREATE TABLE "Transaksi" (
    "id" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "harga" DECIMAL(65,30) NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "pembeliId" TEXT NOT NULL,
    "penjualId" TEXT NOT NULL,
    "propertiId" TEXT NOT NULL,
    "desainId" TEXT NOT NULL,

    CONSTRAINT "Transaksi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Liked" (
    "id" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,

    CONSTRAINT "Liked_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Role_pembeliId_key" ON "Role"("pembeliId");

-- CreateIndex
CREATE UNIQUE INDEX "Role_penjualId_key" ON "Role"("penjualId");

-- CreateIndex
CREATE UNIQUE INDEX "Role_desainerId_key" ON "Role"("desainerId");

-- CreateIndex
CREATE UNIQUE INDEX "Role_tukangId_key" ON "Role"("tukangId");

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_pembeliId_fkey" FOREIGN KEY ("pembeliId") REFERENCES "Pembeli"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_penjualId_fkey" FOREIGN KEY ("penjualId") REFERENCES "Penjual"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_desainerId_fkey" FOREIGN KEY ("desainerId") REFERENCES "Desainer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_tukangId_fkey" FOREIGN KEY ("tukangId") REFERENCES "Tukang"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaksi" ADD CONSTRAINT "Transaksi_pembeliId_fkey" FOREIGN KEY ("pembeliId") REFERENCES "Pembeli"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaksi" ADD CONSTRAINT "Transaksi_penjualId_fkey" FOREIGN KEY ("penjualId") REFERENCES "Penjual"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaksi" ADD CONSTRAINT "Transaksi_propertiId_fkey" FOREIGN KEY ("propertiId") REFERENCES "Properti"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaksi" ADD CONSTRAINT "Transaksi_desainId_fkey" FOREIGN KEY ("desainId") REFERENCES "Desain"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Properti" ADD CONSTRAINT "Properti_likedId_fkey" FOREIGN KEY ("likedId") REFERENCES "Liked"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Desain" ADD CONSTRAINT "Desain_likedId_fkey" FOREIGN KEY ("likedId") REFERENCES "Liked"("id") ON DELETE SET NULL ON UPDATE CASCADE;
