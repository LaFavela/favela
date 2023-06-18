-- CreateEnum
CREATE TYPE "RoleSelect" AS ENUM ('ADMIN', 'PEMBELI', 'PENJUAL', 'DESAINER', 'TUKANG');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('UNKNOWN', 'MALE', 'FEMALE');

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "birthDay" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "gender" "Gender" NOT NULL DEFAULT 'UNKNOWN',
ADD COLUMN     "image" TEXT NOT NULL DEFAULT 'assets/profile/default.jpg',
ADD COLUMN     "job" TEXT[],
ADD COLUMN     "number" TEXT,
ADD COLUMN     "roleName" "RoleSelect"[] DEFAULT ARRAY['PEMBELI']::"RoleSelect"[],
ADD COLUMN     "socialMedia" TEXT;
