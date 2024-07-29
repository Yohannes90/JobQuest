/*
  Warnings:

  - You are about to alter the column `interest` on the `JobApplication` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(1))`.

*/
-- AlterTable
ALTER TABLE `JobApplication` MODIFY `interest` ENUM('graphic_design', 'website_software_development', 'content_creation', 'social_media_management', 'copywriting', 'project_management', 'data_collection_analysis', 'fundraising_marketing', 'hr', 'law', 'video_editing') NOT NULL;
