Projeto Frente-de-Loja -> teste para Semantix
       

Concluído em sua maioria✔️ 

Tópicos
🔹 Descrição do projeto

🔹 Funcionalidades

🔹 Deploy da Aplicação

🔹 Pré-requisitos

🔹 Como rodar a aplicação

...

Insira os tópicos do README em links para facilitar a navegação do leitor

Descrição do projeto
A empresa XPTO precisa de uma aplicação capaz de gerenciar o processo de compra de produtos de seus clientes. 
O gerente de projetos conversou com as partes interessadas e levantou o seguintes requisitos:

Funcionalidades
✔️ A aplicação deve ser capaz de listar, cadastrar, atualizar e deletar um produto, cliente e compra.
✔️ A aplicação deve ser capaz de filtrar as compras por cliente.
✔️ A aplicação deve ser capaz de listar as compras de um cliente por dia, mês e ano.
✔️ A aplicação deve ser capaz de listar de forma ordenada os produtos mais vendidos por dia, mês e ano.
✔️ A aplicação deve ser capaz de listar de forma ordenada os clientes que mais gastam por dia, mês e ano.
✔️ A quantidade em estoque de um produto deve ser subtraída na efetivação de uma compra.
✔️ O cliente deve ter no mínimo as seguintes propriedades: nome, telefone e email.
✔️ O produto deve conter as seguintes propriedades: nome, quantidade em estoque e preço.


Layout ou Deploy da Aplicação 💨

########prints do projeto

Pré-requisitos
⚠️ Node
⚠️ npm ou yarn
⚠️ Typescript 
⚠️ NestJs
⚠️ Xammp Sql como banco de dados
⚠️ Postman
...

Como rodar a aplicação ▶️
No terminal, clone o projeto:

git clone https://github.com/franciscoassisps/testeFrenteDeLoja.git
Instale as dependencias com o gerenciador de pacotes npm install 
sobe a exteção do banco xammp mysql e apache (as configuraçoes estao no aquivo app.modules.ts)
suba o projeto npm run start, verifique se foi gerada as tabelas
Abra o postman e execute os metodos com as respectivas urls:
http://localhost:3000/clientes
http://localhost:3000/produtos
http://localhost:3000/compra

...

Tarefas em aberto


📝 Tarefa 1 controller compra

📝 Tarefa 2 service compra

📝 Tarefa 3 otimização do codigo e testes unitarios.

Desenvolvedores/Contribuintes :octocat:

Francisco de Assis	

Licença
The MIT License (MIT)

Copyright ©️ Ano - Frente de Loja
