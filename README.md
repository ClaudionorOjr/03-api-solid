# API SOLID

> Projeto 03: GymPass style app.

## Tecnologias

- bcryptjs

- Dayjs

- Docker

```sh
# Criar container a partir do `docker-compose.yml`
docker compose up -d
```

- Dotenv

- ESLint

- Fastify

```sh
# Criar cookies e recuperar cookies da requisição
$ npm i @fastify/cookie
```

- Json Web Token

```sh
# Módulo que integra o JWT ao Fastify
$ npm i @fastify/jwt
```

- npm-run-all

```sh
# Executar scripts
$ npm i npm-run-all -D
```

- Prisma

- Supertest // Chamadas http para os testes sem precisar subir a aplicação

```sh
# Tipagens
$ npm i @types/supertest -D
```

- tsup

- tsx

- TypeScript

- Vitest

```sh
# Vitest consiga entender os paths configurados no tsconfig
$ npm i vite-tsconfig-paths -D

# Interface para os testes
$ npm i @vites/ui
```

- Zod

## RFs (Requisitos funcionais)

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil de um usuário logado;
- [x] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [x] Deve ser possível o usuário obter o seu histórico de check-ins;
- [x] Deve ser possível o usuário buscar academias próximas (até 10km);
- [x] Deve ser possível o usuário buscar academias pelo nome;
- [x] Deve ser possível o usuário realizar check-in em uma academia;
- [x] Deve ser possível validar o check-in de um usuário;
- [x] Deve ser possível cadastrar uma academia;

## RNs (Regras de negócio)

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [x] O usuário não pode fazer 2 check-ins no mesmo dia;
- [x] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [x] O check-in só pode ser validado até 20 minutos após ser criado;
- [x] O check-in só pode ser validado por administradores;
- [x] A academia só pode ser cadastrada por administradores;

## RNFs (Requisitos não-funcionais)

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [x] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [x] O usuário deve ser identificado por um JWT (JSON Web Token);
