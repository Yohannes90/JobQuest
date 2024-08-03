/*
  Warnings:

  - The values [graphic_design,website_software_development,content_creation,social_media_management,copywriting,project_management,data_collection_analysis,fundraising_marketing,law,video_editing] on the enum `JobApplication_interest` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `requirements` on the `JobPosting` table. All the data in the column will be lost.
  - You are about to drop the column `salaryRange` on the `JobPosting` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `JobApplication` MODIFY `interest` ENUM('information_technology', 'hr', 'software_development', 'marketing_and_sales', 'product_management') NOT NULL;

-- AlterTable
ALTER TABLE `JobPosting` DROP COLUMN `requirements`,
    DROP COLUMN `salaryRange`,
    ADD COLUMN `experienceLevel` ENUM('no_experience', 'junior', 'senior', 'expert') NOT NULL DEFAULT 'no_experience',
    ADD COLUMN `jobCategory` ENUM('information_technology', 'hr', 'software_development', 'marketing_and_sales', 'product_management') NOT NULL DEFAULT 'information_technology',
    ADD COLUMN `workArrangement` ENUM('in_person', 'remote', 'hybrid') NOT NULL DEFAULT 'in_person';
