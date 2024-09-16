/*
  Warnings:

  - A unique constraint covering the columns `[web3Id]` on the table `Land` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[landIdentificationNumber]` on the table `Land` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Land_web3Id_key" ON "Land"("web3Id");

-- CreateIndex
CREATE UNIQUE INDEX "Land_landIdentificationNumber_key" ON "Land"("landIdentificationNumber");
