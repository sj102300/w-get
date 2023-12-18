/*
  Warnings:

  - Added the required column `id` to the `user_coupon` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `user_coupon` DROP FOREIGN KEY `user_coupon_ibfk_1`;

-- DropForeignKey
ALTER TABLE `user_coupon` DROP FOREIGN KEY `user_coupon_ibfk_2`;

-- DropIndex
DROP INDEX `user_coupon_userid_couponid_key` ON `user_coupon`;

-- AlterTable
ALTER TABLE `user_coupon` ADD COLUMN `id` VARCHAR(255) NOT NULL;
