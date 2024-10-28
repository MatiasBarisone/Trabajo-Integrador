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

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `categoria_id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`categoria_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Serie'),(2,'Película');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `generos`
--

DROP TABLE IF EXISTS `generos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `generos` (
  `genero_id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  PRIMARY KEY (`genero_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `generos`
--

LOCK TABLES `generos` WRITE;
/*!40000 ALTER TABLE `generos` DISABLE KEYS */;
INSERT INTO `generos` VALUES (1,'Sci-Fi'),(2,'Fantasía'),(3,'Acción'),(4,'Drama'),(5,'Ficción'),(6,'Misterio'),(7,'Suceso Real'),(8,'Crimen'),(9,'Comedia'),(10,'Familia'),(11,'Suspenso'),(12,'Aventura'),(13,'Tecnología'),(14,'Western'),(15,'Terror');
/*!40000 ALTER TABLE `generos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produccion_genero`
--

DROP TABLE IF EXISTS `produccion_genero`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produccion_genero`
--

LOCK TABLES `produccion_genero` WRITE;
/*!40000 ALTER TABLE `produccion_genero` DISABLE KEYS */;
INSERT INTO `produccion_genero` VALUES (1,1,1),(2,1,2),(4,2,1),(5,2,2),(6,2,4),(10,4,4),(11,4,6),(12,4,5),(15,6,4),(16,6,6),(17,6,5),(18,7,8),(19,7,9),(20,8,1),(21,8,3),(22,8,11),(23,8,12),(24,9,2),(25,9,4),(26,9,11),(27,16,1),(28,16,2),(29,40,1),(30,40,2),(31,41,1),(32,41,2),(35,44,1),(36,44,2),(37,3,1),(38,3,2),(39,5,1),(40,5,2);
/*!40000 ALTER TABLE `produccion_genero` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produccion_reparto`
--

DROP TABLE IF EXISTS `produccion_reparto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produccion_reparto`
--

LOCK TABLES `produccion_reparto` WRITE;
/*!40000 ALTER TABLE `produccion_reparto` DISABLE KEYS */;
INSERT INTO `produccion_reparto` VALUES (3,1,3),(4,1,4),(7,2,7),(8,2,8),(9,2,9),(10,2,10),(11,2,11),(12,2,12),(19,4,19),(20,4,20),(21,4,21),(22,4,22),(23,4,23),(24,4,24),(31,6,31),(32,6,32),(33,6,33),(34,6,34),(35,6,35),(36,6,36),(37,7,37),(38,7,38),(39,7,39),(40,7,40),(41,7,41),(42,7,42),(43,16,3),(44,16,4),(45,40,5),(46,40,6),(47,41,5),(48,41,6),(51,44,3),(52,44,4),(53,3,3),(54,3,4),(55,5,3),(56,5,4);
/*!40000 ALTER TABLE `produccion_reparto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producciones`
--

DROP TABLE IF EXISTS `producciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producciones`
--

LOCK TABLES `producciones` WRITE;
/*!40000 ALTER TABLE `producciones` DISABLE KEYS */;
INSERT INTO `producciones` VALUES (1,'Uwu Producción',1,'Descripción de la nueva producción.',3,'45 minutos','https://www.youtube.com/nuevo_trailer','./posters/nuevo_poster.jpg'),(2,'The Umbrella Academy',1,'La muerte de su padre reúne a unos hermanos...',1,NULL,'https://www.youtube.com/embed/KHucKOK-Vik','./posters/4.jpg'),(3,'Uwu Producción',1,'Descripción de la nueva producción.',3,'45 minutos','https://www.youtube.com/nuevo_trailer','./posters/nuevo_poster.jpg'),(4,'Riverdale',1,'El paso a la edad adulta incluye sexo...',5,NULL,'https://www.youtube.com/embed/HxtLlByaYTc','./posters/2.jpg'),(5,'Uwu Producción',1,'Descripción de la nueva producción.',3,'45 minutos','https://www.youtube.com/nuevo_trailer','./posters/nuevo_poster.jpg'),(6,'Enola Holmes',2,'La hermana menor de Sherlock Holmes...',NULL,'97 minutos','https://www.youtube.com/embed/3t1g2pa355k','./posters/6.jpg'),(7,'Guasón',2,'Arthur Fleck es un hombre ignorado...',NULL,'97 minutos','https://www.youtube.com/embed/zAGVQLHvwOY','./posters/7.jpg'),(8,'Avengers: End Game',2,'Después de los devastadores eventos...',NULL,'97 minutos','https://www.youtube.com/embed/TcMBFSGVi1c','./posters/8.jpg'),(9,'Juego de Tronos',1,'En un mundo fantástico y en un contexto medieval...',8,NULL,'https://www.youtube.com/embed/KPLWWIOCOOQ','./posters/9.jpg'),(10,'The Flash',1,'Sigue las veloces aventuras de Barry Allen...',6,NULL,'https://www.youtube.com/embed/Yj0l7iGKh8g','./posters/10.jpg'),(11,'The Big Bang Theory',1,'Leonard y Sheldon son dos físicos que comparten...',12,NULL,'https://www.youtube.com/embed/WBb3fojgW0Q','./posters/11.jpg'),(12,'Friends',1,'Friends narra las aventuras y desventuras...',10,NULL,'https://www.youtube.com/embed/ekYGfU0XIx0','./posters/12.jpg'),(13,'Nueva Producción',1,'Descripción de la nueva producción.',3,'45 minutos','https://www.youtube.com/nuevo_trailer','./posters/nuevo_poster.jpg'),(14,'Nueva Producción',1,'Descripción de la nueva producción.',3,'45 minutos','https://www.youtube.com/nuevo_trailer','./posters/nuevo_poster.jpg'),(16,'Uwu Producción',1,'Descripción de la nueva producción.',3,'45 minutos','https://www.youtube.com/nuevo_trailer','./posters/nuevo_poster.jpg'),(17,'Nueva Producción',1,'Descripción de la nueva producción.',3,'45 minutos','https://www.youtube.com/nuevo_trailer','./posters/nuevo_poster.jpg'),(18,'Nueva Producción',1,'Descripción de la nueva producción.',3,'45 minutos','https://www.youtube.com/nuevo_trailer','./posters/nuevo_poster.jpg'),(19,'Nueva Producción',1,'Descripción de la nueva producción.',3,'45 minutos','https://www.youtube.com/nuevo_trailer','./posters/nuevo_poster.jpg'),(20,'Nueva Producción',1,'Descripción de la nueva producción.',3,'45 minutos','https://www.youtube.com/nuevo_trailer','./posters/nuevo_poster.jpg'),(21,'Nueva Producción',1,'Descripción de la nueva producción.',3,'45 minutos','https://www.youtube.com/nuevo_trailer','./posters/nuevo_poster.jpg'),(22,'Nueva Producción',1,'Descripción de la nueva producción.',3,'45 minutos','https://www.youtube.com/nuevo_trailer','./posters/nuevo_poster.jpg'),(23,'Nueva Producción',1,'Descripción de la nueva producción.',3,'45 minutos','https://www.youtube.com/nuevo_trailer','./posters/nuevo_poster.jpg'),(24,'Nueva Producción',1,'Descripción de la nueva producción.',3,'45 minutos','https://www.youtube.com/nuevo_trailer','./posters/nuevo_poster.jpg'),(25,'Nueva Producción',1,'Descripción de la nueva producción.',3,'45 minutos','https://www.youtube.com/nuevo_trailer','./posters/nuevo_poster.jpg'),(26,'Nueva Producción',1,'Descripción de la nueva producción.',3,'45 minutos','https://www.youtube.com/nuevo_trailer','./posters/nuevo_poster.jpg'),(27,'Nueva Producción',1,'Descripción de la nueva producción.',3,'45 minutos','https://www.youtube.com/nuevo_trailer','./posters/nuevo_poster.jpg'),(28,'Nueva Producción',1,'Descripción de la nueva producción.',3,'45 minutos','https://www.youtube.com/nuevo_trailer','./posters/nuevo_poster.jpg'),(29,'Nueva Producción',1,'Descripción de la nueva producción.',3,'45 minutos','https://www.youtube.com/nuevo_trailer','./posters/nuevo_poster.jpg'),(30,'Nueva Producción',1,'Descripción de la nueva producción.',3,'45 minutos','https://www.youtube.com/nuevo_trailer','./posters/nuevo_poster.jpg'),(31,'Nueva Producción',1,'Descripción de la nueva producción.',3,'45 minutos','https://www.youtube.com/nuevo_trailer','./posters/nuevo_poster.jpg'),(32,'Nueva Producción',1,'Descripción de la nueva producción.',3,'45 minutos','https://www.youtube.com/nuevo_trailer','./posters/nuevo_poster.jpg'),(33,'Nueva Producción',1,'Descripción de la nueva producción.',3,'45 minutos','https://www.youtube.com/nuevo_trailer','./posters/nuevo_poster.jpg'),(34,'Nueva Producción',1,'Descripción de la nueva producción.',3,'45 minutos','https://www.youtube.com/nuevo_trailer','./posters/nuevo_poster.jpg'),(35,'Nueva Producción',1,'Descripción de la nueva producción.',3,'45 minutos','https://www.youtube.com/nuevo_trailer','./posters/nuevo_poster.jpg'),(36,'Nueva Producción',1,'Descripción de la nueva producción.',3,'45 minutos','https://www.youtube.com/nuevo_trailer','./posters/nuevo_poster.jpg'),(37,'Nueva Producción',1,'Descripción de la nueva producción.',3,'45 minutos','https://www.youtube.com/nuevo_trailer','./posters/nuevo_poster.jpg'),(38,'Nueva Producción',1,'Descripción de la nueva producción.',3,'45 minutos','https://www.youtube.com/nuevo_trailer','./posters/nuevo_poster.jpg'),(39,'Nueva Producción',1,'Descripción de la nueva producción.',3,'45 minutos','https://www.youtube.com/nuevo_trailer','./posters/nuevo_poster.jpg'),(40,'Nueva Producción',1,'Descripción de la nueva producción.',3,'45 minutos','https://www.youtube.com/nuevo_trailer','./posters/nuevo_poster.jpg'),(41,'Nueva Producción',1,'Descripción de la nueva producción.',0,'45 minutos','https://www.youtube.com/nuevo_trailer','./posters/nuevo_poster.jpg'),(43,'Nueva Producción',1,'Descripción de la nueva producción.',0,'45 minutos','https://www.youtube.com/nuevo_trailer','./posters/nuevo_poster.jpg'),(44,'Uwu Producción',1,'Descripción de la nueva producción.',3,'45 minutos','https://www.youtube.com/nuevo_trailer','./posters/nuevo_poster.jpg');
/*!40000 ALTER TABLE `producciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reparto`
--

DROP TABLE IF EXISTS `reparto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reparto` (
  `reparto_id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  PRIMARY KEY (`reparto_id`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reparto`
--

LOCK TABLES `reparto` WRITE;
/*!40000 ALTER TABLE `reparto` DISABLE KEYS */;
INSERT INTO `reparto` VALUES (1,'Pedro Pascal'),(2,'Carl Weathers'),(3,'Misty Rosas'),(4,'Chris Bartlett'),(5,'Rio Hackford'),(6,'Giancarlo Esposito'),(7,'Tom Hopper'),(8,'David Castañeda'),(9,'Emmy Raver-Lampman'),(10,'Robert Sheehan'),(11,'Aidan Gallagher'),(12,'Elliot Page'),(13,'Anya Taylor-Joy'),(14,'Thomas Brodie-Sangster'),(15,'Harry Melling'),(16,'Moses Ingram'),(17,'Chloe Pirrie'),(18,'Janina Elkin'),(19,'Lili Reinhart'),(20,'Casey Cott'),(21,'Camila Mendes'),(22,'Marisol Nichols'),(23,'Madelaine Petsch'),(24,'Mädchen Amick'),(25,'Claire Fox'),(26,'Olivia Colman'),(27,'Matt Smith'),(28,'Tobias Menzies'),(29,'Vanesa Kirby'),(30,'Helena Bonham Carter'),(31,'Millie Bobby Brown'),(32,'Henry Cavill'),(33,'Sam Claflin'),(34,'Louis Partridge'),(35,'Adeel Akhtar'),(36,'Joaquin Phoenix'),(37,'Robert De Niro'),(38,'Zazie Beetz'),(39,'Frances Conroy'),(40,'Brett Cullen'),(41,'Shea Whigham'),(42,'Robert Downey Jr.'),(43,'Chris Evans'),(44,'Mark Ruffalo'),(45,'Chris Hemsworth'),(46,'Scarlett Johansson'),(47,'Jeremy Renner'),(48,'Emilia Clarke'),(49,'Lena Headey'),(50,'Sophie Turner'),(51,'Kit Harington'),(52,'Peter Dinklage'),(53,'Nikolaj Coster-Waldau'),(54,'Grant Gustin'),(55,'Carlos Valdes'),(56,'Danielle Panabaker'),(57,'Candice Patton'),(58,'Jesse L. Martin'),(59,'Tom Cavanagh'),(60,'Jim Parsons'),(61,'Johnny Galecki'),(62,'Kaley Cuoco'),(63,'Simon Helberg'),(64,'Kunal Nayyar'),(65,'Melissa Rauch'),(66,'Mayim Bialik'),(67,'Jennifer Aniston'),(68,'Courteney Cox'),(69,'Lisa Kudrow'),(70,'David Schwimmer'),(71,'Matthew Perry'),(72,'Matt LeBlanc');
/*!40000 ALTER TABLE `reparto` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-22  0:18:12
