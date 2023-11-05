/*
  Warnings:

  - The primary key for the `issue` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[title]` on the table `Issue` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `issue` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateIndex
CREATE UNIQUE INDEX `Issue_title_key` ON `Issue`(`title`);
