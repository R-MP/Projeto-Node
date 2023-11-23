-- CreateTable
CREATE TABLE `memoria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `modelo` VARCHAR(50) NOT NULL,
    `ddr` VARCHAR(50) NOT NULL,
    `frequencia` INTEGER NOT NULL,
    `marca` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `memoria_ddr_key`(`ddr`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
