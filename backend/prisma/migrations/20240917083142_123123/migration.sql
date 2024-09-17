/*
  Warnings:

  - You are about to drop the column `landStatus` on the `TransferLand` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[landIdWeb3]` on the table `TransferLand` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `landIdWeb3` to the `TransferLand` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TransferLand" DROP COLUMN "landStatus",
ADD COLUMN     "landIdWeb3" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "TransferLand_landIdWeb3_key" ON "TransferLand"("landIdWeb3");
