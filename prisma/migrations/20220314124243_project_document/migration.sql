/*
  Warnings:

  - You are about to drop the column `clientId` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `dueDate` on the `Project` table. All the data in the column will be lost.
  - Added the required column `document` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_clientId_fkey";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "clientId",
DROP COLUMN "dueDate",
ADD COLUMN     "document" TEXT NOT NULL;
