/*
  Warnings:

  - A unique constraint covering the columns `[property_id]` on the table `RentalRequest` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "RentalRequest_property_id_key" ON "RentalRequest"("property_id");
