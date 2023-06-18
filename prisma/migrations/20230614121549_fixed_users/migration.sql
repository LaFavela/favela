/*
  Warnings:

  - You are about to drop the column `number` on the `Users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Users" DROP COLUMN "number",
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "website" TEXT;
