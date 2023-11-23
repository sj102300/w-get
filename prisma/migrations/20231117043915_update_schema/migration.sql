-- CreateTable
CREATE TABLE `coupons` (
    `id` VARCHAR(191) NOT NULL,
    `storename` VARCHAR(255) NULL,
    `address` VARCHAR(255) NULL,
    `content` VARCHAR(255) NULL,
    `required_point` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `meets` (
    `id` VARCHAR(191) NOT NULL,
    `leaderid` VARCHAR(255) NULL,
    `status` VARCHAR(255) NULL,
    `title` VARCHAR(255) NULL,
    `content` VARCHAR(255) NULL,
    `location` VARCHAR(255) NULL,
    `daytime` DATETIME(0) NULL,
    `current_num` INTEGER NULL,
    `max_num` INTEGER NULL,

    INDEX `leaderid`(`leaderid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `plogging_log` (
    `id` VARCHAR(191) NOT NULL,
    `userid` VARCHAR(255) NULL,
    `day` DATE NULL,
    `accumulated_time` INTEGER NULL,
    `regular` INTEGER NULL,
    `plastic_bag` INTEGER NULL,
    `can` INTEGER NULL,
    `plastic` INTEGER NULL,
    `point` INTEGER NULL,

    INDEX `userid`(`userid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_coupon` (
    `userid` VARCHAR(255) NOT NULL,
    `couponid` VARCHAR(255) NOT NULL,

    INDEX `couponid`(`couponid`),
    PRIMARY KEY (`userid`, `couponid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_meets` (
    `meetsid` VARCHAR(255) NOT NULL,
    `userid` VARCHAR(255) NOT NULL,

    INDEX `userid`(`userid`),
    PRIMARY KEY (`meetsid`, `userid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_plogging_info` (
    `userid` VARCHAR(255) NOT NULL,
    `accumulated_time` INTEGER NULL,
    `point` INTEGER NULL,
    `count` INTEGER NULL,
    `regular` INTEGER NULL,
    `plastic_bag` INTEGER NULL,
    `can` INTEGER NULL,
    `plastic` INTEGER NULL,

    PRIMARY KEY (`userid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_point_log` (
    `id` VARCHAR(191) NOT NULL,
    `userid` VARCHAR(255) NULL,
    `day` DATE NULL,
    `title` INTEGER NULL,
    `content` INTEGER NULL,
    `point_info` INTEGER NULL,

    INDEX `userid`(`userid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `pw` VARCHAR(255) NULL,
    `address` VARCHAR(255) NULL,
    `introduction` MEDIUMTEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `meets` ADD CONSTRAINT `meets_ibfk_1` FOREIGN KEY (`leaderid`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `plogging_log` ADD CONSTRAINT `plogging_log_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user_coupon` ADD CONSTRAINT `user_coupon_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user_coupon` ADD CONSTRAINT `user_coupon_ibfk_2` FOREIGN KEY (`couponid`) REFERENCES `coupons`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user_meets` ADD CONSTRAINT `user_meets_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user_meets` ADD CONSTRAINT `user_meets_ibfk_2` FOREIGN KEY (`meetsid`) REFERENCES `meets`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user_plogging_info` ADD CONSTRAINT `user_plogging_info_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user_point_log` ADD CONSTRAINT `user_point_log_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
