-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: crud
-- ------------------------------------------------------
-- Server version	8.0.42

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
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `idade` int NOT NULL,
  `cpf` varchar(45) NOT NULL,
  `genero` varchar(45) NOT NULL,
  `dataNascimento` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Sherri Larson',40,'92271-4190','Feminino','11/01/1985'),(2,'Mr. Albert Friesen I editadoTeste',76,'83533-1655','female','1948-04-29'),(3,'Kerry Balistreri',57,'98194','female','1980-04-02'),(4,'Nina Wunsch',53,'03957-5226','male','1992-04-14'),(6,'Michelle Considine',78,'13037-4530','female','1973-12-14'),(7,'Mrs. Jasmine Cruickshank',54,'25541-7155','male','1983-06-21'),(8,'Paul Schowalter',43,'45290','female','2006-04-08'),(9,'Timothy Howe I',23,'55256-8130','male','1985-03-20'),(10,'June O\'Connell',43,'81928','female','1977-07-25'),(11,'Nancy Schumm',22,'62406','female','1946-09-25'),(12,'Donna Skiles',74,'36331-9817','male','1984-12-25'),(13,'Bertha Carter',21,'34374','female','1967-01-28'),(14,'Billy Lubowitz',77,'48118','male','2001-07-06'),(15,'Kathy Pfeffer II',50,'81179-5312','male','1955-08-25'),(16,'Wade Oberbrunner',53,'78504-4899','female','1984-05-01'),(17,'Rafael McDermott',24,'81525-4791','female','1974-06-03'),(18,'Anna Koss III',79,'35629','male','1969-07-15'),(19,'Dr. Malcolm Koelpin',28,'46269-7404','female','1947-05-15');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-22 22:53:31
