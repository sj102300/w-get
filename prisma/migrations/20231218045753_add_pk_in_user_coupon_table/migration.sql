/*
  Warnings:

  - The primary key for the `user_coupon` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `user_coupon` DROP PRIMARY KEY,
    ADD PRIMARY KEY (`id`);
