/*
  Warnings:

  - You are about to drop the column `paymentStatus` on the `Payment` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[customer_id]` on the table `Payment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `customer_id` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Payment_transaction_id_key";

-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "paymentStatus",
ADD COLUMN     "customer_id" TEXT NOT NULL,
ADD COLUMN     "status" "paymentStatus" NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "Properties" ALTER COLUMN "price" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "rents" BOOLEAN;

-- CreateIndex
CREATE UNIQUE INDEX "Payment_customer_id_key" ON "Payment"("customer_id");
