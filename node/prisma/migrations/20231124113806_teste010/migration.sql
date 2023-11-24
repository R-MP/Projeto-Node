-- CreateTable
CREATE TABLE `livro` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(50) NOT NULL,
    `isbn` VARCHAR(50) NOT NULL,
    `anoEdicao` INTEGER NOT NULL,
    `editora` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `livro_isbn_key`(`isbn`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Memoria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `modelo` VARCHAR(50) NOT NULL,
    `ddr` VARCHAR(50) NOT NULL,
    `frequencia` INTEGER NOT NULL,
    `quantidadeRam` VARCHAR(50) NOT NULL,
    `marca` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Fonte` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `modelo` VARCHAR(50) NOT NULL,
    `potencia` INTEGER NOT NULL,
    `formato` VARCHAR(50) NOT NULL,
    `marca` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Processador` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `modelo` VARCHAR(50) NOT NULL,
    `socket` VARCHAR(50) NOT NULL,
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
    `socket` VARCHAR(50) NOT NULL,
    `formato` VARCHAR(50) NOT NULL,
    `slotRam` VARCHAR(50) NOT NULL,
    `slotExp` VARCHAR(50) NOT NULL,
    `marca` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
