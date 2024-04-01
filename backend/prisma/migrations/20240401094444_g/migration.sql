/*
  Warnings:

  - You are about to drop the column `amount` on the `Challan` table. All the data in the column will be lost.
  - Added the required column `fine` to the `Challan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Challan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Challan" DROP COLUMN "amount",
ADD COLUMN     "fine" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "officerId" TEXT;
