/*
  Warnings:

  - Made the column `required_point` on table `coupons` required. This step will fail if there are existing NULL values in that column.
  - Made the column `leaderid` on table `meets` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userid` on table `plogging_log` required. This step will fail if there are existing NULL values in that column.
  - Made the column `accumulated_time` on table `plogging_log` required. This step will fail if there are existing NULL values in that column.
  - Made the column `regular` on table `plogging_log` required. This step will fail if there are existing NULL values in that column.
  - Made the column `plastic_bag` on table `plogging_log` required. This step will fail if there are existing NULL values in that column.
  - Made the column `can` on table `plogging_log` required. This step will fail if there are existing NULL values in that column.
  - Made the column `plastic` on table `plogging_log` required. This step will fail if there are existing NULL values in that column.
  - Made the column `point` on table `plogging_log` required. This step will fail if there are existing NULL values in that column.
  - Made the column `accumulated_time` on table `user_plogging_info` required. This step will fail if there are existing NULL values in that column.
  - Made the column `count` on table `user_plogging_info` required. This step will fail if there are existing NULL values in that column.
  - Made the column `regular` on table `user_plogging_info` required. This step will fail if there are existing NULL values in that column.
  - Made the column `plastic_bag` on table `user_plogging_info` required. This step will fail if there are existing NULL values in that column.
  - Made the column `can` on table `user_plogging_info` required. This step will fail if there are existing NULL values in that column.
  - Made the column `plastic` on table `user_plogging_info` required. This step will fail if there are existing NULL values in that column.
  - Made the column `point` on table `user_plogging_info` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userid` on table `user_point_log` required. This step will fail if there are existing NULL values in that column.
  - Made the column `day` on table `user_point_log` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `pw` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `meets` DROP FOREIGN KEY `meets_ibfk_1`;

-- DropForeignKey
ALTER TABLE `plogging_log` DROP FOREIGN KEY `plogging_log_ibfk_1`;

-- DropForeignKey
ALTER TABLE `user_point_log` DROP FOREIGN KEY `user_point_log_ibfk_1`;

-- AlterTable
ALTER TABLE `coupons` MODIFY `required_point` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `meets` MODIFY `leaderid` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `plogging_log` MODIFY `userid` VARCHAR(255) NOT NULL,
    MODIFY `day` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `accumulated_time` INTEGER NOT NULL DEFAULT 0,
    MODIFY `regular` INTEGER NOT NULL DEFAULT 0,
    MODIFY `plastic_bag` INTEGER NOT NULL DEFAULT 0,
    MODIFY `can` INTEGER NOT NULL DEFAULT 0,
    MODIFY `plastic` INTEGER NOT NULL DEFAULT 0,
    MODIFY `point` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `user_plogging_info` MODIFY `accumulated_time` INTEGER NOT NULL DEFAULT 0,
    MODIFY `count` INTEGER NOT NULL DEFAULT 0,
    MODIFY `regular` INTEGER NOT NULL DEFAULT 0,
    MODIFY `plastic_bag` INTEGER NOT NULL DEFAULT 0,
    MODIFY `can` INTEGER NOT NULL DEFAULT 0,
    MODIFY `plastic` INTEGER NOT NULL DEFAULT 0,
    MODIFY `point` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `user_point_log` MODIFY `userid` VARCHAR(255) NOT NULL,
    MODIFY `day` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `users` MODIFY `name` VARCHAR(255) NOT NULL,
    MODIFY `email` VARCHAR(255) NOT NULL,
    MODIFY `pw` VARCHAR(255) NOT NULL;

-- AddForeignKey
ALTER TABLE `meets` ADD CONSTRAINT `meets_ibfk_1` FOREIGN KEY (`leaderid`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `plogging_log` ADD CONSTRAINT `plogging_log_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user_point_log` ADD CONSTRAINT `user_point_log_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
