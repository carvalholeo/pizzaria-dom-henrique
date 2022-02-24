SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE DATABASE IF NOT EXISTS `pizzaria`;
USE `pizzaria`;

CREATE TABLE IF NOT EXISTS `pizzaria`.`usuarios` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `data_nascimento` DATE NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `cpf` CHAR(11) NOT NULL,
  `senha` VARCHAR(255) NOT NULL,
  `admin` TINYINT(2) NOT NULL DEFAULT 0,
  `data_criacao` DATETIME NULL DEFAULT NULL,
  `data_atualizacao` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email`),
  UNIQUE INDEX `cpf_UNIQUE` (`cpf`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `pizzaria`.`pizzas` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `descricao` VARCHAR(255) NULL DEFAULT NULL,
  `preco` DECIMAL NOT NULL,
  `tamanho` VARCHAR(45) NOT NULL,
  `imagem` VARCHAR(255) NOT NULL DEFAULT 'imagem-construcao.jpg',
  `data_criacao` DATETIME NULL DEFAULT NULL,
  `data_atualizacao` DATETIME NULL DEFAULT NULL,
  `usuarios_id` INT(11) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `nome_UNIQUE` (`nome`),
  UNIQUE INDEX `descricao_UNIQUE` (`descricao`),
  UNIQUE INDEX `imagem_UNIQUE` (`imagem`),
  INDEX `fk_pizzas_usuarios_idx` (`usuarios_id`),
  CONSTRAINT `fk_pizzas_usuarios`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `pizzaria`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;



CREATE TABLE IF NOT EXISTS `pizzaria`.`telefones` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `ddd` TINYINT(2) NOT NULL,
  `telefone` VARCHAR(9) NOT NULL,
  `data_criacao` DATETIME NULL DEFAULT NULL,
  `data_atualizacao` DATETIME NULL DEFAULT NULL,
  `usuarios_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_telefones_usuarios1_idx` (`usuarios_id`),
  CONSTRAINT `fk_telefones_usuarios1`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `pizzaria`.`usuarios` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `pizzaria`.`enderecos` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `logradouro` VARCHAR(100) NOT NULL,
  `numero` VARCHAR(6) NOT NULL,
  `complemento` VARCHAR(50) NULL DEFAULT NULL,
  `cep` CHAR(8) NOT NULL,
  `bairro` VARCHAR(100) NOT NULL,
  `cidade` VARCHAR(100) NOT NULL,
  `uf` CHAR(2) NOT NULL,
  `ponto_referencia` VARCHAR(255) NULL DEFAULT NULL,
  `data_criacao` DATETIME NULL DEFAULT NULL,
  `data_atualizacao` DATETIME NULL DEFAULT NULL,
  `usuarios_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_enderecos_usuarios1_idx` (`usuarios_id`),
  CONSTRAINT `fk_enderecos_usuarios1`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `pizzaria`.`usuarios` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `pizzaria`.`ingredientes` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(50) NOT NULL,
  `data_criacao` DATETIME NULL DEFAULT NULL,
  `data_atualizacao` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `nome_UNIQUE` (`nome`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `pizzaria`.`pizzas_has_ingredientes` (
  `pizzas_id` INT(11) NOT NULL,
  `ingredientes_id` INT(11) NOT NULL,
  `quantidade` DECIMAL NOT NULL,
  `unidade_de_medida` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`pizzas_id`, `ingredientes_id`),
  INDEX `fk_pizzas_has_ingredientes_ingredientes1_idx` (`ingredientes_id`),
  INDEX `fk_pizzas_has_ingredientes_pizzas1_idx` (`pizzas_id`),
  CONSTRAINT `fk_pizzas_has_ingredientes_pizzas1`
    FOREIGN KEY (`pizzas_id`)
    REFERENCES `pizzaria`.`pizzas` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pizzas_has_ingredientes_ingredientes1`
    FOREIGN KEY (`ingredientes_id`)
    REFERENCES `pizzaria`.`ingredientes` (`id`)
    ON DELETE RESTRICT
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
