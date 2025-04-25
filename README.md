# React CRUD Project - PUCPR

Este é um projeto desenvolvido como parte de um trabalho para a PUCPR. Ele implementa um sistema de CRUD (Create, Read, Update, Delete) de usuários utilizando **React** no frontend e **Node.js + MySQL** no backend.

## 💻 Tecnologias Utilizadas

- React
- Node.js (Express)
- MySQL
- Fetch API

## ⚙️ Funcionalidades

- Listagem de usuários
- Cadastro de novo usuário
- Edição de usuário existente
- Exclusão de usuário
- Validação de campos obrigatórios
- Modal para edição e mais detalhes

## 📁 Estrutura do Projeto

Trabalho1/ ├── backend/ │ ├── controllers/ │ ├── routes/ │ ├── node_modules/ │ ├── app.js │ ├── db.js │ └── package.json ├── frontend/ │ ├── public/ │ ├── src/ │ │ ├── components/ │ │ │ └── DataList.jsx │ │ └── Admin.jsx │ │ ├── App.jsx │ │ └── index.js │ ├── node_modules/ │ ├── package.json │ └── vite.config.js └── README.md

## 🚀 Como Executar

1. **Configure o MySQL**
- Abra o arquivo SQLusuarios.sql execute a criação da table e depois os Inserts. Ou:
```bash
DROP TABLE IF EXISTS `usuarios`;
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
INSERT INTO `usuarios` VALUES (1,'Sherri Larson',40,'92271-4190','Feminino','11/01/1985'),(2,'Mr. Albert Friesen I editadoTeste',76,'83533-1655','female','1948-04-29'),(3,'Kerry Balistreri',57,'98194','female','1980-04-02'),(4,'Nina Wunsch',53,'03957-5226','male','1992-04-14'),(6,'Michelle Considine',78,'13037-4530','female','1973-12-14'),(7,'Mrs. Jasmine Cruickshank',54,'25541-7155','male','1983-06-21'),(8,'Paul Schowalter',43,'45290','female','2006-04-08'),(9,'Timothy Howe I',23,'55256-8130','male','1985-03-20'),(10,'June O\'Connell',43,'81928','female','1977-07-25'),(11,'Nancy Schumm',22,'62406','female','1946-09-25'),(12,'Donna Skiles',74,'36331-9817','male','1984-12-25'),(13,'Bertha Carter',21,'34374','female','1967-01-28'),(14,'Billy Lubowitz',77,'48118','male','2001-07-06'),(15,'Kathy Pfeffer II',50,'81179-5312','male','1955-08-25'),(16,'Wade Oberbrunner',53,'78504-4899','female','1984-05-01'),(17,'Rafael McDermott',24,'81525-4791','female','1974-06-03'),(18,'Anna Koss III',79,'35629','male','1969-07-15'),(19,'Dr. Malcolm Koelpin',28,'46269-7404','female','1947-05-15');
```

2. **Instale as dependências**
Primeiro Console:
```bash
- cd frontend
- npm install
- npm start
```

Segundo Console:
```bash
- cd backend
- npm install
- npm start
```

Desenvolvido por Pedro Bastos Leite para a PUCPR.
GitHub: @PedroLeite3005