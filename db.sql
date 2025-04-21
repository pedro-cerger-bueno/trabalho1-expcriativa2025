-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: crud
-- ------------------------------------------------------
-- Server version	8.0.41

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
  `sobrenome` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `usuario` varchar(45) NOT NULL,
  `cidade` varchar(45) NOT NULL,
  `cargo` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Pedro','Bueno','Henry_Padberg@gmail.com','Stone_Schinner38','Dillonland','Direct Configuration Developer'),(2,'Lupe','Simonis','Rigoberto.Ritchie@gmail.com','Madisyn_Halvorson','Rubyechester','District Paradigm Manager'),(3,'Alana','Waelchi','Vergie24@gmail.com','Connor.Deckow','West Janet','Product Mobility Strategist'),(4,'Rosemarie','Williamson','Gunnar.Schroeder72@gmail.com','Louie.Christiansen','West Lacy','Lead Research Strategist'),(5,'Melba','Stiedemann','Fabian_Wyman15@hotmail.com','Elta64','South Bend','Lead Applications Consultant'),(6,'Sabrina','Quitzon','Gonzalo_Grant27@hotmail.com','Jeromy_Rice-Schuster92','South Manuelaborough','Senior Intranet Liaison'),(7,'Santina','Tremblay','Emile.West@hotmail.com','Phoebe_Wisozk61','Luettgenchester','Regional Response Developer'),(8,'Orval','Stokes','Bret_Bahringer49@yahoo.com','Jedediah.Davis92','East Zachariahbury','Regional Factors Coordinator'),(9,'Deja','Schumm','Alda.Konopelski4@gmail.com','Yasmeen5','Collinsport','Direct Brand Agent'),(10,'Norwood','Flatley','Zaria.Reichel8@yahoo.com','Martina_Spencer16','South Emmitt','Human Security Orchestrator'),(11,'Rozella','Harvey','Emerald_Stamm26@yahoo.com','Kirstin_Lindgren','Port Maximeville','Direct Tactics Liaison'),(12,'Jude','Conroy','Cecelia.Howe5@gmail.com','Greyson.Bode','Warner Robins','Customer Infrastructure Agent'),(13,'Rosalee','Spinka','Lysanne.Hermann@yahoo.com','Linwood14','Lake Ashtynbury','Direct Division Executive'),(14,'Winfield','Baumbach','Brianne.Johnson37@yahoo.com','Dayna_OKon48','Odessafurt','Forward Communications Technician'),(15,'Maximilian','Pacocha','Haven_Beahan22@yahoo.com','Kira.Ernser','Lake Margarette','Human Applications Administrator'),(16,'Angelita','Nikolaus','Lisette.Ortiz30@yahoo.com','Carli40','Norwalk','Forward Directives Engineer'),(17,'Isabel','Von','Cathryn.Gutmann@hotmail.com','Hassie.Jaskolski','Lowellside','Internal Operations Associate'),(18,'Gustave','Howe','Annette37@hotmail.com','Astrid92','Feestburgh','Customer Creative Supervisor'),(19,'Cielo','Mosciski','Carlie87@hotmail.com','Paul.Leannon','Reingerboro','Chief Accountability Representative'),(20,'Donna','Kshlerin','Torey.Hirthe@hotmail.com','Garth.Legros66','Breanneburgh','Investor Creative Technician'),(21,'Madisen','Witting','Mariano.Yost-Hamill40@hotmail.com','Al.Luettgen67','Port Sylvanshire','Forward Optimization Supervisor'),(22,'Keeley','Hudson','Emely.Goyette97@gmail.com','Dean56','North Norris','Dynamic Implementation Assistant'),(23,'Tyshawn','Purdy','Josefa_Volkman81@gmail.com','Lizzie.Witting5','Fort Dangelo','Investor Research Supervisor'),(24,'Jane','Lebsack','Werner28@gmail.com','Richard62','West Keyonport','Direct Applications Orchestrator'),(25,'Fred','Bins','Amari.Langosh22@gmail.com','Maye50','Ryanncester','Lead Usability Supervisor'),(26,'Zakary','Gottlieb','Elfrieda85@gmail.com','Chadd36','Port Aiyanafort','Investor Marketing Developer'),(27,'Jerrold','Treutel','Michale.Volkman35@gmail.com','Deondre92','Queenieville','Regional Program Consultant'),(28,'Adonis','Block','Keith62@gmail.com','Judson74','East Gina','Central Creative Liaison'),(29,'Hilda','Ullrich','Eliezer_Watsica@gmail.com','Christian.Jast19','Blacksburg','Chief Research Supervisor'),(30,'Bettye','Kuhic','Orland_Miller@yahoo.com','Stone67','Bauchchester','Future Markets Director'),(31,'Zaria','Koelpin','Yasmin_Connelly78@gmail.com','Everardo_Ruecker48','South Hollyburgh','Principal Tactics Orchestrator'),(32,'Matilda','Homenick','Alexandra3@gmail.com','Dedrick.Reichert33','Claudestead','Chief Mobility Engineer'),(33,'Nathanael','Dooley','Allen32@hotmail.com','Buster.Pfeffer6','Blaine','Legacy Operations Representative'),(34,'Jean','Renner-Bernier','Margaret44@yahoo.com','Annamarie.Gleichner','New Kyleighburgh','Principal Data Orchestrator'),(35,'Wilburn','Walter','Jed97@yahoo.com','Kenya_Koelpin','Centennial','Chief Group Officer'),(36,'Bernadette','Schuppe','Jennie.Johnston19@yahoo.com','Erling92','Armstrongboro','Regional Configuration Supervisor'),(37,'Toy','McGlynn','Xzavier83@gmail.com','Clyde.Stracke86','North Jocelyn','District Communications Designer'),(38,'Dee','Ondricka','Blaise_Corkery61@hotmail.com','Rahul.Will8','Faheyshire','National Division Associate'),(39,'Jeanie','Bahringer','Jimmy50@gmail.com','Luther.Dare','Fort Jerel','Human Response Designer'),(40,'Dax','Sawayn','Courtney_Cummings@hotmail.com','Horacio_Gleichner88','North Shemar','Dynamic Mobility Producer'),(41,'Florida','Hyatt','Royal.Adams@gmail.com','Hertha14','Novato','Human Identity Coordinator'),(42,'Lina','Weimann','Veronica.Hamill@hotmail.com','Kelly.Lehner-Cormier35','South Oma','Corporate Division Representative'),(43,'Nedra','Steuber','Adrain59@yahoo.com','Jarrell_Cassin7','East Selmerport','Chief Tactics Developer'),(44,'Alvah','Terry','Frederic_Hartmann@gmail.com','Kaela_Walter34','New Mohamedfield','Regional Group Supervisor');
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

-- Dump completed on 2025-04-21 20:15:08
