/*
  Warnings:

  - You are about to drop the column `id_desain` on the `Desainer` table. All the data in the column will be lost.
  - You are about to drop the column `id_desain` on the `Tukang` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Users` table. All the data in the column will be lost.
  - Added the required column `firstName` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Desain" ADD COLUMN     "desainerId" TEXT,
ADD COLUMN     "tukangId" TEXT;

-- AlterTable
ALTER TABLE "Desainer" DROP COLUMN "id_desain";

-- AlterTable
ALTER TABLE "Tukang" DROP COLUMN "id_desain";

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "name",
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Role" (
    "id" TEXT NOT NULL,
    "usersId" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "pembeliId" TEXT,
    "penjualId" TEXT,
    "desainerId" TEXT,
    "tukangId" TEXT,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_pembeliId_fkey" FOREIGN KEY ("pembeliId") REFERENCES "Pembeli"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_penjualId_fkey" FOREIGN KEY ("penjualId") REFERENCES "Penjual"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_desainerId_fkey" FOREIGN KEY ("desainerId") REFERENCES "Desainer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_tukangId_fkey" FOREIGN KEY ("tukangId") REFERENCES "Tukang"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Desain" ADD CONSTRAINT "Desain_desainerId_fkey" FOREIGN KEY ("desainerId") REFERENCES "Desainer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Desain" ADD CONSTRAINT "Desain_tukangId_fkey" FOREIGN KEY ("tukangId") REFERENCES "Tukang"("id") ON DELETE SET NULL ON UPDATE CASCADE;
