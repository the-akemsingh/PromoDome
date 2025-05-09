/*
  Warnings:

  - You are about to drop the column `isCancelled` on the `Draw` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Draw" DROP COLUMN "isCancelled";

-- AlterTable
ALTER TABLE "Promo" ADD COLUMN     "isReset" BOOLEAN NOT NULL DEFAULT false;
