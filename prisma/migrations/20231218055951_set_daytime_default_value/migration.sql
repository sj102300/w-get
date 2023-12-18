-- AlterTable
ALTER TABLE `meets` MODIFY `daytime` DATETIME(0) NOT NULL DEFAULT NOW();

-- AlterTable
ALTER TABLE `plogging_log` MODIFY `day` DATETIME(0) NOT NULL DEFAULT NOW();

-- AlterTable
ALTER TABLE `user_point_log` MODIFY `day` DATETIME(0) NOT NULL DEFAULT NOW();
