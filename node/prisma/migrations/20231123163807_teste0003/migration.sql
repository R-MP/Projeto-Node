/*
  Warnings:

  - Added the required column `quantidadeRam` to the `memoria` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `memoria` ADD COLUMN `quantidadeRam` VARCHAR(50) NOT NULL;
