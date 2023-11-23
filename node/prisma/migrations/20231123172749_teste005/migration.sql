/*
  Warnings:

  - You are about to drop the column `tamanho` on the `fonte` table. All the data in the column will be lost.
  - Added the required column `formato` to the `Fonte` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `fonte` DROP COLUMN `tamanho`,
    ADD COLUMN `formato` VARCHAR(50) NOT NULL;

-- CreateTable
CREATE TABLE `Processador` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `modelo` VARCHAR(50) NOT NULL,
    `socket` INTEGER NOT NULL,
    `arquitetura` VARCHAR(50) NOT NULL,
    `nucleos` INTEGER NOT NULL,
    `threads` INTEGER NOT NULL,
    `frequencia` INTEGER NOT NULL,
    `marca` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PlacaMae` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `modelo` VARCHAR(50) NOT NULL,
    `socket` INTEGER NOT NULL,
    `formato` VARCHAR(50) NOT NULL,
    `slotRam` VARCHAR(50) NOT NULL,
    `slotExp` VARCHAR(50) NOT NULL,
    `marca` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
