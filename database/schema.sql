CREATE DATABASE IF NOT EXISTS gallery;

USE gallery;

DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
  `id` INTEGER AUTO_INCREMENT NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `is_favorite` BOOLEAN,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `images`;

CREATE TABLE `images` (
  `id` INTEGER AUTO_INCREMENT NOT NULL,
  `url` VARCHAR(255) NOT NULL,
  `product_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`product_id`)
    REFERENCES `products` (`id`)
    ON DELETE CASCADE
)