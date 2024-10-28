-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: trailerflix
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE DATABASE IF NOT EXISTS trailerflix;
USE trailerflix;

-- Table structure for `categorias`
DROP TABLE IF EXISTS `categorias`;
CREATE TABLE `categorias` (
  `categoria_id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`categoria_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data for `categorias`
INSERT INTO `categorias` VALUES (1,'Serie'),(2,'Película');

-- Table structure for `generos`
DROP TABLE IF EXISTS `generos`;
CREATE TABLE `generos` (
  `genero_id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  PRIMARY KEY (`genero_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data for `generos`
INSERT INTO `generos` VALUES 
(1,'Sci-Fi'),(2,'Fantasía'),(3,'Acción'),(4,'Drama'),(5,'Ficción'),
(6,'Misterio'),(7,'Suceso Real'),(8,'Crimen'),(9,'Comedia'),(10,'Familia'),
(11,'Suspenso'),(12,'Aventura'),(13,'Tecnología'),(14,'Western'),(15,'Terror');

-- Table structure for `produccion_genero`
DROP TABLE IF EXISTS `produccion_genero`;
CREATE TABLE `produccion_genero` (
  `produccion_genero_id` int NOT NULL AUTO_INCREMENT,
  `produccion_id` int DEFAULT NULL,
  `genero_id` int DEFAULT NULL,
  PRIMARY KEY (`produccion_genero_id`),
  KEY `produccion_id` (`produccion_id`),
  KEY `genero_id` (`genero_id`),
  CONSTRAINT `produccion_genero_ibfk_1` FOREIGN KEY (`produccion_id`) REFERENCES `producciones` (`produccion_id`) ON DELETE CASCADE,
  CONSTRAINT `produccion_genero_ibfk_2` FOREIGN KEY (`genero_id`) REFERENCES `generos` (`genero_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data for `produccion_genero`
INSERT INTO `produccion_genero` VALUES 
(1,1,1),(2,1,2),(4,2,1),(5,2,2),(6,2,4),
(10,4,4),(11,4,6),(12,4,5),(15,6,4),(16,6,6),
(17,6,5),(18,7,8),(19,7,9),(20,8,1),(21,8,3),
(22,8,11),(23,8,12),(24,9,2),(25,9,4),(26,9,11),
(27,16,1),(28,16,2),(29,40,1),(30,40,2),(31,41,1),
(32,41,2),(35,44,1),(36,44,2),(37,3,1),(38,3,2),
(39,5,1),(40,5,2);

-- Table structure for `produccion_reparto`
DROP TABLE IF EXISTS `produccion_reparto`;
CREATE TABLE `produccion_reparto` (
  `produccion_reparto_id` int NOT NULL AUTO_INCREMENT,
  `produccion_id` int DEFAULT NULL,
  `reparto_id` int DEFAULT NULL,
  PRIMARY KEY (`produccion_reparto_id`),
  KEY `produccion_id` (`produccion_id`),
  KEY `reparto_id` (`reparto_id`),
  CONSTRAINT `produccion_reparto_ibfk_1` FOREIGN KEY (`produccion_id`) REFERENCES `producciones` (`produccion_id`) ON DELETE CASCADE,
  CONSTRAINT `produccion_reparto_ibfk_2` FOREIGN KEY (`reparto_id`) REFERENCES `reparto` (`reparto_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data for `produccion_reparto`
INSERT INTO `produccion_reparto` VALUES 
(3,1,3),(4,1,4),(7,2,7),(8,2,8),(9,2,9),
(10,2,10),(11,2,11),(12,2,12),(19,4,19),(20,4,20),
(21,4,21),(22,4,22),(23,4,23),(24,4,24),(31,6,31),
(32,6,32),(33,6,33),(34,6,34),(35,6,35),(36,6,36),
(37,7,37),(38,7,38),(39,7,39),(40,7,40),(41,7,41),
(42,7,42),(43,16,3),(44,16,4),(45,40,5),(46,40,6),
(47,41,5),(48,41,6),(51,44,3),(52,44,4),(53,3,3),
(54,3,4),(55,5,3),(56,5,4);

-- Table structure for `producciones`
DROP TABLE IF EXISTS `producciones`;
CREATE TABLE `producciones` (
  `produccion_id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `categoria_id` int NOT NULL,
  `resumen` text,
  `temporadas` int DEFAULT NULL,
  `duracion` varchar(255) DEFAULT NULL,
  `trailer` varchar(255) DEFAULT NULL,
  `poster` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`produccion_id`),
  KEY `categoria_id` (`categoria_id`),
  CONSTRAINT `producciones_ibfk_1` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`categoria_id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data for `producciones`
INSERT INTO `producciones` VALUES 
(1,'Uwu Producción',1,'Descripción de la nueva producción.',3,'45 minutos','https://www.youtube.com/nuevo_trailer','./posters/nuevo_poster.jpg'),
(2,'The Umbrella Academy',1,'La muerte de su padre reúne a unos hermanos...',1,NULL,'https://www.youtube.com/embed/KHucKOK-Vik','./posters/4.jpg'),
(3,'Uwu Producción',1,'Descripción de la nueva producción.',3,'45 minutos','https://www.youtube.com/nuevo_trailer','./posters/nuevo_poster.jpg'),
(4,'Riverdale',1,'El paso a la edad adulta incluye sexo...',5,NULL,'https://www.youtube.com/embed/HxtLlByaYTc','./posters/2.jpg'),
(5,'Uwu Producción',1,'Descripción de la nueva producción.',3,'45 minutos','https://www.youtube.com/nuevo_trailer','./posters/nuevo_poster.jpg'),
(6,'Enola Holmes',2,'La hermana menor de Sherlock Holmes...',NULL,'97 minutos','https://www.youtube.com/embed/3t1g2pa355k','./posters/6.jpg'),
(7,'Guasón',2,'Arthur Fleck es un hombre ignorado...',NULL,'97 minutos','https://www.youtube.com/embed/zAGVQLHvwOY','./posters/7.jpg'),
(8,'Avengers: End Game',2,'Después de los devastadores eventos...',NULL,'97 minutos','https://www.youtube.com/embed/TcMBFSGVi1c','./posters/8.jpg'),
(9,'Juego de Tronos',1,'En un mundo fantástico y en un contexto medieval...',8,NULL,'https://www.youtube.com/embed/cv981BsmhUM','./posters/9.jpg'),
(16,'Dark',1,'Un niño desaparece y desata un misterioso...',1,NULL,'https://www.youtube.com/embed/Cq7MlL3P6BY','./posters/14.jpg'),
(40,'The Witcher',1,'En el Continente, un cazador de monstruos mutante...',3,'60 minutos','https://www.youtube.com/embed/ndl1W4ltcmg','./posters/1.jpg'),
(41,'Merlina',1,'Una detective adolescente investiga...',1,'60 minutos','https://www.youtube.com/embed/G4gqXzMLuc0','./posters/3.jpg'),
(44,'Better Call Saul',1,'La precuela de Breaking Bad.',6,NULL,'https://www.youtube.com/embed/HhSHMDLR3O8','./posters/11.jpg');

-- Table structure for `reparto`
DROP TABLE IF EXISTS `reparto`;
CREATE TABLE `reparto` (
  `reparto_id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  PRIMARY KEY (`reparto_id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data for `reparto`
INSERT INTO `reparto` VALUES 
(3,'Robert Downey Jr'),(4,'Chris Evans'),(5,'Henry Cavill'),(6,'Anya Chalotra'),
(7,'Evan Peters'),(8,'Mariana Genesio Peña'),(9,'Elliot Page'),(10,'Mary J. Blige'),
(11,'Kate Walsh'),(12,'Aidan Gallagher'),(19,'KJ Apa'),(20,'Lili Reinhart'),
(21,'Camila Mendes'),(22,'Cole Sprouse'),(23,'Marisol Nichols'),(24,'Madelaine Petsch'),
(31,'Millie Bobby Brown'),(32,'Henry Cavill'),(33,'Sam Claflin'),(34,'Helena Bonham Carter'),
(35,'Louis Partridge'),(36,'Fiona Shaw'),(37,'Joaquin Phoenix'),(38,'Robert De Niro'),
(39,'Zazie Beetz'),(40,'Frances Conroy'),(41,'Marc Maron'),(42,'Shea Whigham');
