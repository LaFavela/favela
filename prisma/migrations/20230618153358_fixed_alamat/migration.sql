/*
  Warnings:

  - You are about to drop the column `id_alamat` on the `Properti` table. All the data in the column will be lost.
  - You are about to drop the column `id_rating` on the `Properti` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[propertiId]` on the table `Alamat` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `propertiId` to the `Alamat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Alamat" ADD COLUMN     "propertiId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Properti" DROP COLUMN "id_alamat",
DROP COLUMN "id_rating";

-- CreateIndex
CREATE UNIQUE INDEX "Alamat_propertiId_key" ON "Alamat"("propertiId");

-- AddForeignKey
ALTER TABLE "Alamat" ADD CONSTRAINT "Alamat_propertiId_fkey" FOREIGN KEY ("propertiId") REFERENCES "Properti"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
