/*
  Warnings:

  - A unique constraint covering the columns `[penjualId]` on the table `Properti` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Properti_penjualId_key" ON "Properti"("penjualId");
