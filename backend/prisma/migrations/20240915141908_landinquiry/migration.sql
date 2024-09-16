-- CreateEnum
CREATE TYPE "InquiryStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'COMPLETED');

-- CreateTable
CREATE TABLE "LandInquiry" (
    "id" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "landId" TEXT NOT NULL,
    "inquiryDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "InquiryStatus" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "LandInquiry_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LandInquiry" ADD CONSTRAINT "LandInquiry_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LandInquiry" ADD CONSTRAINT "LandInquiry_landId_fkey" FOREIGN KEY ("landId") REFERENCES "Land"("id") ON DELETE CASCADE ON UPDATE CASCADE;
