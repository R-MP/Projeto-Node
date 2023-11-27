-- AlterTable
ALTER TABLE `fonte` MODIFY `potencia` VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE `memoria` MODIFY `frequencia` VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE `processador` MODIFY `nucleos` VARCHAR(50) NOT NULL,
    MODIFY `threads` VARCHAR(50) NOT NULL,
    MODIFY `frequencia` VARCHAR(50) NOT NULL;
