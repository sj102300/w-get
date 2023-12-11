/*
  Warnings:

  - You are about to drop the column `location` on the `meets` table. All the data in the column will be lost.
  - You are about to alter the column `day` on the `plogging_log` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `day` on the `user_point_log` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - A unique constraint covering the columns `[userid,couponid]` on the table `user_coupon` will be added. If there are existing duplicate values, this will fail.
  - Made the column `storename` on table `coupons` required. This step will fail if there are existing NULL values in that column.
  - Made the column `address` on table `coupons` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `address` to the `meets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lat` to the `meets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lng` to the `meets` table without a default value. This is not possible if the table is not empty.
  - Made the column `title` on table `meets` required. This step will fail if there are existing NULL values in that column.
  - Made the column `content` on table `meets` required. This step will fail if there are existing NULL values in that column.
  - Made the column `daytime` on table `meets` required. This step will fail if there are existing NULL values in that column.
  - Made the column `current_num` on table `meets` required. This step will fail if there are existing NULL values in that column.
  - Made the column `max_num` on table `meets` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `coupons` MODIFY `storename` VARCHAR(255) NOT NULL,
    MODIFY `address` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `meets` DROP COLUMN `location`,
    ADD COLUMN `address` VARCHAR(255) NOT NULL,
    ADD COLUMN `lat` DECIMAL(10, 7) NOT NULL,
    ADD COLUMN `lng` DECIMAL(10, 7) NOT NULL,
    MODIFY `title` VARCHAR(255) NOT NULL,
    MODIFY `content` VARCHAR(255) NOT NULL,
    MODIFY `daytime` DATETIME(0) NOT NULL,
    MODIFY `current_num` INTEGER NOT NULL DEFAULT 0,
    MODIFY `max_num` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `plogging_log` MODIFY `day` DATETIME NOT NULL DEFAULT NOW();

-- AlterTable
ALTER TABLE `user_point_log` MODIFY `day` DATETIME NOT NULL DEFAULT NOW();

-- CreateIndex
CREATE UNIQUE INDEX `user_coupon_userid_couponid_key` ON `user_coupon`(`userid`, `couponid`);
