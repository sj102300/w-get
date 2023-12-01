/*
  Warnings:

  - Made the column `day` on table `plogging_log` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `plogging_log` MODIFY `day` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
