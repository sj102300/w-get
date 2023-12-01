-- AlterTable
ALTER TABLE `coupons` MODIFY `required_point` INTEGER NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `meets` MODIFY `current_num` INTEGER NULL DEFAULT 0,
    MODIFY `max_num` INTEGER NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `user_plogging_info` ADD COLUMN `point` INTEGER NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `user_point_log` MODIFY `title` VARCHAR(191) NULL,
    MODIFY `content` VARCHAR(191) NULL,
    MODIFY `point_info` VARCHAR(191) NULL;
