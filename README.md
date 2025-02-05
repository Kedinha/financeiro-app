# README.md

# Financeiro App

Este projeto é um aplicativo de gerenciamento financeiro que permite o lançamento de contas a pagar e a receber, além de gerar relatórios em PDF.

## Estrutura do Projeto

O projeto possui os seguintes arquivos:

- `src/index.html`: Estrutura principal do aplicativo, contendo as abas para "Financeiro", "Lançamento de Contas a Pagar" e "Contas a Receber".
- `src/script.js`: Lógica JavaScript do aplicativo, gerenciando eventos das abas, atualizando listas de lançamentos e gerando PDFs.
- `src/style.css`: Estilos do aplicativo, ajustados para garantir uma apresentação clara e responsiva das abas.

## Instalação

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   ```
2. Navegue até o diretório do projeto:
   ```
   cd financeiro-app
   ```

## Uso

1. Abra o arquivo `src/index.html` em um navegador.
2. Utilize as abas para navegar entre "Financeiro", "Lançamento de Contas a Pagar" e "Contas a Receber".
3. Adicione lançamentos e gere relatórios conforme necessário.

## Funcionalidades

- Lançamento de contas a pagar e a receber.
- Geração de relatórios em PDF.
- Interface responsiva e fácil de usar.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Hierarquia de pastas

financeiro-app/<br>
│<br>
├── node_modules/  `# Pasta gerada pelo npm com as dependências do projeto`<br>
├── public/  `# Arquivos públicos acessíveis pelo navegador`<br>
│ ├── index.html  `# Página principal da aplicação`<br>
│ └── assets/  `# Outras pastas de ativos (imagens, CSS, etc.)`<br>
│ ├── css/<br>
│ └── js/<br>
│<br>
├── src/ # Código-fonte do projeto<br>
│ ├── controllers/ `# Arquivos que controlam a lógica da aplicação`<br>
│ ├── models/  `# Arquivos que definem os modelos e interagem com o banco de dados`<br>
│ └── routes/  `# Arquivos que definem as rotas da API`<br>
│<br>
├── .gitignore  `# Arquivos e pastas a serem ignorados pelo Git`<br>
├── package.json  `# Arquivo de configuração do npm com dependências e scripts`<br>
├── package-lock.json `# Arquivo gerado pelo npm com o bloqueio de versões das dependências`<br>
└── server.js  `# Arquivo principal do servidor Node.js`<br>
[![Netlify Status](https://api.netlify.com/api/v1/badges/5a4d2763-8adf-4a75-9b8e-090c543afd0e/deploy-status)](https://app.netlify.com/sites/deft-finance-app/deploys)
