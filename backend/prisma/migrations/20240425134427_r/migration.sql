-- CreateTable
CREATE TABLE "Land" (
    "id" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "dimensionOfLand" TEXT NOT NULL,
    "landIdentificationNumber" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "parcelStatus" TEXT,
    "currentPrice" TEXT,
    "boughtPrice" TEXT,

    CONSTRAINT "Land_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TransferLand" (
    "id" TEXT NOT NULL,
    "prevOwnerId" TEXT NOT NULL,
    "currentOwnerId" TEXT NOT NULL,
    "landId" TEXT NOT NULL,
    "landStatus" TEXT NOT NULL,
    "transferDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "transferPrice" TEXT NOT NULL DEFAULT '0',

    CONSTRAINT "TransferLand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LandCase" (
    "id" TEXT NOT NULL,
    "caseStatus" TEXT NOT NULL,
    "caseDescription" TEXT NOT NULL,
    "caseDate" TIMESTAMP(3) NOT NULL,
    "transferLandId" TEXT NOT NULL,

    CONSTRAINT "LandCase_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Land" ADD CONSTRAINT "Land_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransferLand" ADD CONSTRAINT "TransferLand_prevOwnerId_fkey" FOREIGN KEY ("prevOwnerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransferLand" ADD CONSTRAINT "TransferLand_currentOwnerId_fkey" FOREIGN KEY ("currentOwnerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransferLand" ADD CONSTRAINT "TransferLand_landId_fkey" FOREIGN KEY ("landId") REFERENCES "Land"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LandCase" ADD CONSTRAINT "LandCase_transferLandId_fkey" FOREIGN KEY ("transferLandId") REFERENCES "TransferLand"("id") ON DELETE CASCADE ON UPDATE CASCADE;
