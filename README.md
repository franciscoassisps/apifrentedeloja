<div align="center">
<h1>Projeto Frente-de-Loja</h1> 
</div>


<p align="center">
  <img src="https://img.shields.io/static/v1?label=react&message=framework&color=blue&style=for-the-badge&logo=REACT"/>
  <img src="https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white"/>
  <img src="http://img.shields.io/static/v1?label=License&message=MIT&color=green&style=for-the-badge"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"/>
  <img src="http://img.shields.io/static/v1?label=TESTES&message=%3E100&color=GREEN&style=for-the-badge"/>
   <img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=RED&style=for-the-badge"/>
   <img src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white"/>
  
</p>

> Concluído em sua maioria: :heavy_check_mark: :warning:

### Tópicos 

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Funcionalidades](#funcionalidades)

:small_blue_diamond: [Layout da Aplicação](#layout-da-aplicação)

:small_blue_diamond: [Pré-requisitos](#pré-requisitos)

:small_blue_diamond: [Como rodar a aplicação](#como-rodar-a-aplicação-arrow_forward)

... 

## Descrição do projeto 

<p align="justify">
  A empresa XPTO precisa de uma aplicação capaz de gerenciar o processo de compra de produtos de seus clientes. 
O gerente de projetos conversou com as partes interessadas e levantou o seguintes requisitos: 
</p>

## Funcionalidades

:heavy_check_mark: A aplicação deve ser capaz de listar, cadastrar, atualizar e deletar um produto, cliente e compra.
:heavy_check_mark: A aplicação deve ser capaz de filtrar as compras por cliente.
:heavy_check_mark: A aplicação deve ser capaz de listar as compras de um cliente por dia, mês e ano.
:heavy_check_mark: A aplicação deve ser capaz de listar de forma ordenada os produtos mais vendidos por dia, mês e ano.
:heavy_check_mark: A aplicação deve ser capaz de listar de forma ordenada os clientes que mais gastam por dia, mês e ano.
:heavy_check_mark: A quantidade em estoque de um produto deve ser subtraída na efetivação de uma compra.
:heavy_check_mark: O cliente deve ter no mínimo as seguintes propriedades: nome, telefone e email.
:heavy_check_mark: O produto deve conter as seguintes propriedades: nome, quantidade em estoque e preço.

## Layout da Aplicação

<div align="center">
<img src="https://user-images.githubusercontent.com/34630139/150847839-f7c07504-8887-454c-b1f7-1ac510dc738c.PNG" width="700px" />
</div>

### clientes
<div align="center">
<img src="https://user-images.githubusercontent.com/34630139/150848392-3f826d26-0eeb-47e1-a927-1576586d7485.PNG" width="700px" />
</div>
<div align="center">
<img src="" width="700px" />
</div>

### produtos
<div align="center">
<img src="https://user-images.githubusercontent.com/34630139/150848442-2a434a18-8e82-4d2c-a0a9-302c52d6d772.PNG" width="700px" />
</div>

### compra
<div align="center">
<img src="https://user-images.githubusercontent.com/34630139/150848416-03448179-9628-4675-84a7-523e10e88d0e.PNG" width="700px" />
</div>

### tabelas
<div align="center">
<img src="https://user-images.githubusercontent.com/34630139/150848473-21d660aa-674d-423a-823b-b72f11814bb5.PNG" width="700px" />
</div>


## Pré-requisitos

:warning: [Node](https://nodejs.org/en/download/)
:warning: [Npm](https://www.npmjs.com/)
:warning: [Typescript](https://www.typescriptlang.org/)
:warning: [NestJs](https://nestjs.com/)
:warning: [Typeorm](https://typeorm.io/#/)
:warning: [Xammp](https://www.apachefriends.org/pt_br/index.html)
:warning: [Postman](https://www.postman.com/)

...

## Como rodar a aplicação :arrow_forward:

No terminal, clone o projeto:
git clone https://github.com/franciscoassisps/testeFrenteDeLoja.git
Instale as dependencias com o gerenciador de pacotes _npm install_ 
sobe a extenção do banco xammp mysql e apache (as configuraçoes estao no aquivo app.modules.ts)
suba o projeto _npm run start_, verifique se foi gerada as tabelas
Abra o postman e execute os metodos com as respectivas urls:
```
http://localhost:3000/clientes
http://localhost:3000/produtos
http://localhost:3000/compra

```

... 


## Tarefas em aberto

Se for o caso, liste tarefas/funcionalidades que ainda precisam ser implementadas na sua aplicação

:memo: Tarefa 1 controller compra

:memo: Tarefa 2  service compra

:memo: Tarefa 3  otimização do codigo e testes unitarios.

## Desenvolvedores/Contribuintes :octocat:

Francisco de Assis

## Licença 

The [MIT License]() (MIT)

Copyright :copyright: 2022 - Frente de Loja
