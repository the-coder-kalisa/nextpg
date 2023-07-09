/*
  Warnings:

  - You are about to drop the column `userId` on the `MagicLink` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[magicLinkToken]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "MagicLink" DROP CONSTRAINT "MagicLink_userId_fkey";

-- AlterTable
ALTER TABLE "MagicLink" DROP COLUMN "userId",
ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "User_magicLinkToken_key" ON "User"("magicLinkToken");
