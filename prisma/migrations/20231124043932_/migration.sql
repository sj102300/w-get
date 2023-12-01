/*
  Warnings:

  - You are about to drop the column `point` on the `user_plogging_info` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `plogging_log` MODIFY `accumulated_time` INTEGER NULL DEFAULT 0,
    MODIFY `regular` INTEGER NULL DEFAULT 0,
    MODIFY `plastic_bag` INTEGER NULL DEFAULT 0,
    MODIFY `can` INTEGER NULL DEFAULT 0,
    MODIFY `plastic` INTEGER NULL DEFAULT 0,
    MODIFY `point` INTEGER NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `user_plogging_info` DROP COLUMN `point`,
    MODIFY `accumulated_time` INTEGER NULL DEFAULT 0,
    MODIFY `count` INTEGER NULL DEFAULT 0,
    MODIFY `regular` INTEGER NULL DEFAULT 0,
    MODIFY `plastic_bag` INTEGER NULL DEFAULT 0,
    MODIFY `can` INTEGER NULL DEFAULT 0,
    MODIFY `plastic` INTEGER NULL DEFAULT 0;
