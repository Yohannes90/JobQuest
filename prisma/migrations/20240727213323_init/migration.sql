/*
  Warnings:

  - You are about to drop the `JobPost` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `JobPost`;

-- CreateTable
CREATE TABLE `JobPosting` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `jobTitle` VARCHAR(191) NOT NULL,
    `companyName` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `jobType` ENUM('full_time', 'part_time', 'contract', 'internship') NOT NULL,
    `salaryRange` VARCHAR(191) NULL,
    `description` VARCHAR(191) NOT NULL,
    `requirements` VARCHAR(191) NOT NULL,
    `applicationDeadline` DATETIME(3) NOT NULL,
    `contactEmail` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
