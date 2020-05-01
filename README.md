# desafio-database-upload
# Desafio 06 - Database Upload

## Overview

Backend para Cadastro, Exclusão e Upload via CSV de Transações.
Desenvolvido no Desafio 06 do Bootcamp GoStack da Rocketseat.

Tecnologias utilizadas:
- NodeJS
- Typescript
- TypeORM
- REST
- PostgresSQL

Padronizado com:
- eslint
- prettier
- editorconfig

## Quick Start

Requisitos:

- Banco de dados Postgres configurado;
- Node e Yarn instalados

Clonando e executando o projeto:

```
> git clone https://github.com/Marcelosyd/desafio-database-upload.git
> cd desafio-database-upload
> yarn
> Alterar no ormconfig.json os dados do banco
> yarn typeorm migration:run
> yarn dev:server
```

## Dependências

    "@types/cors": "^2.8.6",
    "@types/csv-parse": "^1.2.2",
    "cors": "^2.8.5",
    "csv-parse": "^4.8.8",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "express-async-errors": "^3.1.1",
    "multer": "^1.4.2",
    "pg": "^8.0.0",
    "reflect-metadata": "^0.1.13",
    "typeorm": "^0.2.24"
    
## Dependências de Dev
    "@types/express": "4.17.3",
    "@types/express-serve-static-core": "4.17.2",
    "@types/jest": "^25.2.1",
    "@types/multer": "^1.4.2",
    "@types/supertest": "^2.0.8",
    "@typescript-eslint/eslint-plugin": "^2.27.0",
    "@typescript-eslint/parser": "^2.27.0",
    "cross-env": "^7.0.2",
    "eslint": "^6.8.0",
    "eslint-config-airbnb-base": "^14.1.0",
    "eslint-config-prettier": "^6.10.1",
    "eslint-import-resolver-typescript": "^2.0.0",
    "eslint-plugin-import": "^2.20.1",
    "eslint-plugin-prettier": "^3.1.2",
    "jest": "^25.3.0",
    "prettier": "^2.0.4",
    "supertest": "^4.0.2",
    "ts-jest": "^25.3.1",
    "ts-node": "3.3.0",
    "ts-node-dev": "^1.0.0-pre.44",
    "typescript": "^3.8.3"

