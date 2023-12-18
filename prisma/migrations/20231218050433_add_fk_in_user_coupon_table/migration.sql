/*
  Warnings:

  - The primary key for the `user_coupon` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `user_coupon` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.

*/
-- DropIndex
DROP INDEX `couponid` ON `user_coupon`;

-- AlterTable
ALTER TABLE `user_coupon` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateIndex
CREATE INDEX `userid` ON `user_coupon`(`userid`);

-- AddForeignKey
ALTER TABLE `user_coupon` ADD CONSTRAINT `user_coupon_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user_coupon` ADD CONSTRAINT `user_coupon_ibfk_2` FOREIGN KEY (`couponid`) REFERENCES `coupons`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
