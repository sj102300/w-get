/*
  Warnings:

  - You are about to alter the column `day` on the `plogging_log` table. The data in that column could be lost. The data in that column will be cast from `DateTime(3)` to `DateTime`.
  - You are about to alter the column `day` on the `user_point_log` table. The data in that column could be lost. The data in that column will be cast from `DateTime(3)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `plogging_log` MODIFY `day` DATETIME NOT NULL DEFAULT NOW();

-- AlterTable
ALTER TABLE `user_point_log` MODIFY `day` DATETIME NOT NULL DEFAULT NOW();
