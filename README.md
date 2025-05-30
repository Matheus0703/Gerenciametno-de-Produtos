# 📌 API de Gerenciamento de Produtos

Esta é uma **API RESTful** construída com **Node.js** e **Express**, que permite gerenciar produtos com operações completas de CRUD (Criar, Ler, Atualizar e Excluir). Utiliza **MongoDB** como banco de dados para armazenar as informações.

---

## ✨ Funcionalidades

- ✅ Criar um produto  
- ✅ Listar todos os produtos  
- ✅ Atualizar um produto existente  
- ✅ Excluir um produto  
- ✅ Validação de dados com `express-validator`  
- ✅ Integração com banco de dados MongoDB  

---

## 🚀 Tecnologias Utilizadas

- **Node.js** – Ambiente de execução JavaScript no backend  
- **Express** – Framework para criação de servidores HTTP  
- **MongoDB** – Banco de dados NoSQL  
- **Axios** – Cliente HTTP para testes e requisições  
- **dotenv, cors, mongoose** – Configurações e suporte para ambiente, CORS e modelagem de dados  

---

## 🔧 Instalação e Configuração

### 1️⃣ Clone o repositório
```bash
git clone https://github.com/seu-usuario/api-gerenciamento-produtos.git
cd api-gerenciamento-produtos
````

### 2️⃣ Instale as dependências

```bash
npm install
```

### 3️⃣ Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto e adicione as variáveis:

```env
MONGO_URL="sua-string-de-conexao-mongodb"
PORT=3000
```

### 4️⃣ Inicie o servidor

```bash
node server/index.js
```

Ou, para facilitar o desenvolvimento, utilize:

```bash
nodemon server/index.js
```

---

## 📌 Endpoints da API

### 1️⃣ Criar um Produto

**POST** `/products`
Exemplo de requisição:

```json
{
  "name": "Celular",
  "price": 1500,
  "category": "Eletrônicos"
}
```

Resposta esperada (201 Created):

```json
{
  "_id": "664c7b9f12e3b45678a9b0f1",
  "name": "Celular",
  "price": 1500,
  "category": "Eletrônicos"
}
```

---

### 2️⃣ Listar Todos os Produtos

**GET** `/products`
Resposta esperada (200 OK):

```json
[
  {
    "_id": "664c7b9f12e3b45678a9b0f1",
    "name": "Celular",
    "price": 1500,
    "category": "Eletrônicos"
  },
  {
    "_id": "664c7b9f12e3b45678a9b0f2",
    "name": "Notebook",
    "price": 3500,
    "category": "Computadores"
  }
]
```

---

### 3️⃣ Atualizar um Produto

**PUT** `/products/{id}`
Exemplo de requisição:

```json
{
  "name": "Notebook Gamer",
  "price": 5500,
  "category": "Computadores"
}
```

Resposta esperada (200 OK):

```json
{
  "_id": "664c7b9f12e3b45678a9b0f1",
  "name": "Notebook Gamer",
  "price": 5500,
  "category": "Computadores"
}
```

---

### 4️⃣ Excluir um Produto

**DELETE** `/products/{id}`
Resposta esperada (200 OK):

```json
{
  "message": "Produto excluído com sucesso"
}
```

---

## 🛠️ Testando a API

Você pode testar os endpoints de várias formas:

* **Insomnia** ou **Postman**
* **Curl no terminal**:

```bash
curl -X GET http://localhost:3000/products
```

* **Script de teste (`testAPI.js`)**:

```js
const axios = require('axios');

async function testarApi() {
  try {
    const produtos = await axios.get('http://localhost:3000/products');
    console.log('📄 Lista de produtos:', produtos.data);
  } catch (error) {
    console.error('❌ Erro ao testar API:', error.response ? error.response.data : error.message);
  }
}

testarApi();
```

* **Acesso direto pelo navegador**:
  `http://localhost:3000/products`

