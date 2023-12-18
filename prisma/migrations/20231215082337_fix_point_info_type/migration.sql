/*
  Warnings:

  - You are about to alter the column `day` on the `plogging_log` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `day` on the `user_point_log` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - Made the column `title` on table `user_point_log` required. This step will fail if there are existing NULL values in that column.
  - Made the column `point_info` on table `user_point_log` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `plogging_log` MODIFY `day` DATETIME NOT NULL DEFAULT NOW();

-- AlterTable
ALTER TABLE `user_point_log` MODIFY `day` DATETIME NOT NULL DEFAULT NOW(),
    MODIFY `title` VARCHAR(191) NOT NULL,
    MODIFY `point_info` INTEGER NOT NULL;
