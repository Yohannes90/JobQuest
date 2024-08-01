/*
  Warnings:

  - The values [FULL_TIME,PART_TIME,CONTRACT,INTERNSHIP] on the enum `JobPost_jobType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `JobPost` MODIFY `jobType` ENUM('full_time', 'part_time', 'contract', 'internship') NOT NULL;
