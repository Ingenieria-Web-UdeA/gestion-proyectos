/*
  Warnings:

  - A unique constraint covering the columns `[path]` on the table `Page` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Page_path_key" ON "Page"("path");
