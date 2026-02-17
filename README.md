# Projeto Controle de Estoque

Aplicação web Full Stack desenvolvida para gerenciamento de estoque, contemplando controle de produtos, clientes e vendas. O sistema permite operações completas de cadastro, atualização, exclusão e listagem de registros, além de autenticação de usuários.

O projeto foi desenvolvido com foco em boas práticas de arquitetura, organização em camadas e utilização de tecnologias modernas amplamente utilizadas no mercado.

---

## Stack Tecnológica

### Backend
- Node.js
- NestJS
- TypeScript
- PostgreSQL
- Prisma ORM
- Docker

### Frontend
- React
- TypeScript
- TailwindCSS

### Ferramentas e Apoio ao Desenvolvimento
- Prisma Studio
- Insomnia
- Git
- GitHub

---

## Arquitetura e Banco de Dados

O sistema utiliza banco de dados relacional PostgreSQL executado em container Docker.

A modelagem e o acesso aos dados são realizados através do Prisma ORM, com controle de migrações via Prisma Migrate e visualização dos dados utilizando Prisma Studio.

---

## Estrutura do Projeto

```
backend/   API REST estruturada com NestJS seguindo padrão de arquitetura em camadas 
frontend/  Interface desenvolvida em React com comunicação integrada à API
```

---

## Principais Funcionalidades

- Cadastro, edição e remoção de produtos  
- Controle de quantidade em estoque  
- Cadastro de clientes  
- Registro de vendas  
- Autenticação e autorização de usuários  
- Integração completa entre frontend e backend  
- Persistência de dados em banco relacional  

---

## Execução do Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/projeto-controle-de-estoque.git
```

### 2. Subir o banco de dados com Docker

```bash
docker-compose up -d
```

### 3. Configurar e iniciar o backend

```bash
cd backend
npm install
npx prisma migrate dev
npm run start
```

Servidor padrão:  
http://localhost:3000  

### 4. Iniciar o frontend

```bash
cd frontend
npm install
npm run dev
```

Aplicação disponível em:  
http://localhost:5173  
(ou porta configurada no ambiente)

---

## Testes da API

As rotas podem ser testadas utilizando o Insomnia para validação dos endpoints e fluxos de autenticação.

---

## Conceitos Aplicados

- Arquitetura em camadas  
- Desenvolvimento de API REST  
- Integração Frontend e Backend  
- ORM para abstração de banco de dados  
- Banco relacional PostgreSQL  
- Containerização com Docker  
- Autenticação com JWT  
- Versionamento de código com Git  

---

## Objetivo

O projeto foi desenvolvido com foco em consolidar conhecimentos em desenvolvimento Full Stack, aplicando padrões e práticas utilizadas em ambientes profissionais.

---

## Autor

Gustavo Nunes  
Desenvolvedor em formação!
