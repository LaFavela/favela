/*
  Warnings:

  - Made the column `city` on table `Users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `socialMedia` on table `Users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phone` on table `Users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `website` on table `Users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "city" SET NOT NULL,
ALTER COLUMN "city" SET DEFAULT '',
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "description" SET DEFAULT '',
ALTER COLUMN "socialMedia" SET NOT NULL,
ALTER COLUMN "socialMedia" SET DEFAULT '',
ALTER COLUMN "phone" SET NOT NULL,
ALTER COLUMN "phone" SET DEFAULT '',
ALTER COLUMN "website" SET NOT NULL,
ALTER COLUMN "website" SET DEFAULT '';
