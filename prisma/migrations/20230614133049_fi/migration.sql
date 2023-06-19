/*
  Warnings:

  - A unique constraint covering the columns `[usersId]` on the table `Role` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "roleName" DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX "Role_usersId_key" ON "Role"("usersId");
