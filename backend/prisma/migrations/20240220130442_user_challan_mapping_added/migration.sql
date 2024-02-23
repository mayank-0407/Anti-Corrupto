-- AlterTable
ALTER TABLE "Challan" ADD COLUMN     "userId" TEXT;

-- AddForeignKey
ALTER TABLE "Challan" ADD CONSTRAINT "Challan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
