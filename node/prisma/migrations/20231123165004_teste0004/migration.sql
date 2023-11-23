-- CreateTable
CREATE TABLE `fonte` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `modelo` VARCHAR(50) NOT NULL,
    `potencia` INTEGER NOT NULL,
    `tamanho` VARCHAR(50) NOT NULL,
    `marca` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
