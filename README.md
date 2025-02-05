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

financeiro-app/
│
├── node_modules/ # Pasta gerada pelo npm com as dependências do projeto
├── public/ # Arquivos públicos acessíveis pelo navegador
│ ├── index.html # Página principal da aplicação
│ └── assets/ # Outras pastas de ativos (imagens, CSS, etc.)
│ ├── css/
│ └── js/
│
├── src/ # Código-fonte do projeto
│ ├── controllers/ # Arquivos que controlam a lógica da aplicação
│ ├── models/ # Arquivos que definem os modelos e interagem com o banco de dados
│ └── routes/ # Arquivos que definem as rotas da API
│
├── .gitignore # Arquivos e pastas a serem ignorados pelo Git
├── package.json # Arquivo de configuração do npm com dependências e scripts
├── package-lock.json # Arquivo gerado pelo npm com o bloqueio de versões das dependências
└── server.js # Arquivo principal do servidor Node.js
