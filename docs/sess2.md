---
id: sess2
title: Hierarquia de pastas
---

## **Organização do Projeto:**

O projeto segue a organização da hierarquia de pastas padrão de um projeto web, ou seja, os arquivos editáveis estão na pasta **src**, na raiz do projeto, e a partir dela a orientação para o código:

```
portal-iclubs.io # root directory
├── docs
├── public
├── src
│   └── assets
│       └── css
│       └── demo
│       └── fonts
│       └── github
│       └── img
│       └── scss
│   └── components
│   └── layouts
│   └── redux
│       └── actions
│       └── reducers
│       └── store.js
│       └── types.js
│   └── services
│   └── util
│   └── variables
│   └── views
│   └── routes.js
│   └── ...
├── ...
```

- **Assets**: Contém os arquivos de estilização, imagens e fontes.
- **Components**: Contém todos os componentes que podem ser reutilizados na aplicação, como por exemplo a NavBar que é importada em todas as telas.
- **Layouts:** Nesta pasta são listados os perfis de acesso e organização de rotas para cada perfil.
- **Redux:** Nesta pasta ficam todos os arquivos relacionados ao redux, como os `reducers` e os `actions`.
- **Services**: Nesta pasta ficam as configurações do serviço de API.
- **Util**: Nesta pasta ficam alguns arquivos auxiliares, que podem ou não ser utilizados em vários locais no código.
- **Variables**: Nesta pasta temos alguns arquivos com variáveis fixas e globais.
- **Views**: Nesta pasta ficam todas as telas, sendo elas separadas em subpastas, onde cada subpasta se refere a um perfil de usuário como `Admin` ou `Customers` e as telas de autenticação.