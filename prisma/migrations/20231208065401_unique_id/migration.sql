/*
  Warnings:

  - You are about to alter the column `day` on the `plogging_log` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `day` on the `user_point_log` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - A unique constraint covering the columns `[meetsid,userid]` on the table `user_meets` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `plogging_log` MODIFY `day` DATETIME NOT NULL DEFAULT NOW();

-- AlterTable
ALTER TABLE `user_point_log` MODIFY `day` DATETIME NOT NULL DEFAULT NOW();

-- CreateIndex
CREATE UNIQUE INDEX `user_meets_meetsid_userid_key` ON `user_meets`(`meetsid`, `userid`);
