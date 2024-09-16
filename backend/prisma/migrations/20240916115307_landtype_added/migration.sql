-- CreateEnum
CREATE TYPE "LandType" AS ENUM ('Government', 'Residential', 'Commercial', 'Agricultural', 'Industrial');

-- AlterTable
ALTER TABLE "Land" ADD COLUMN     "landType" "LandType" NOT NULL DEFAULT 'Government';
