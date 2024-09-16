/*
  Warnings:

  - You are about to drop the column `web3Id` on the `TransferLand` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Land" ADD COLUMN     "web3Id" TEXT;

-- AlterTable
ALTER TABLE "TransferLand" DROP COLUMN "web3Id";
