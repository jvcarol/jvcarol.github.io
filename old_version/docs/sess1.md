---
id: sess1
title: Ambientação
sidebar_label: Ambientação
---

### **1- Ambientação com o projeto**

## **Pré-requisitos:**

- Node.js LTS (≥= 12.x) </br>
- NPM (>= 6.9) </br>
- Opcional: Yarn (>= 1.21) 

Ao ter acesso ao repositório do projeto, acesse-o no seu editor de texto de preferência (Ex: VSCode) e rode o comando "npm install" para que todas as dependências do projeto sejam instaladas. </br>

Na situação atual, em que não temos a branch MASTER, o flow para criação de novas branches para solução de bugs/desenvolvimento de novas features é gerar a branch a partir de QA. (Para entender melhor como funciona o flow na Zappts, estudar o Z-Flow).</br>

Neste projeto está sendo utilziado o CodeCommit da AWS, logo, credenciais são necessárias para fazer o versionamento do código (GIT), peça para o responsável da área fornecer essas credenciais. </br>

Para fazer as PRs do código, acesse o [Console iClubs](https://us-east-2.console.aws.amazon.com/console/home?region=us-east-2#), procure por CodeCommit na aba de pesquisa, procure por "iclubs-loyalty-website-original" no campo de pesquisa, caso este não apareça na tela inicial, no canto superior direito terá a opção de "criar solicitação de pull", selecione a branch de destino e origem, compare e após a aprovação, use a opção de merge —no ff.