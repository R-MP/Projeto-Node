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
