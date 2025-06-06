# 💸 Transaction Management API

This project is a RESTful API for managing financial transactions, built as part of a technical evaluation. It allows basic **CRUD operations** (Create, Read, Update, Delete) for mock transactions using Express.js.

---

## 🚀 Features

- View all transactions (with optional filter by type)
- Get a single transaction by ID
- Create a new transaction
- Update an existing transaction
- Delete a transaction

---

## 🛠 Tech Stack

- Node.js
- Express.js
- JavaScript (ES Modules)
- Postman (for manual testing)

---

## 📂 Folder Structure

- `tech-evaluation/`
  - `api/`
    - `config/` – Configuration files
    - `controllers/` – Route logic (`index`, `create`, `update`, `delete`)
    - `router/` – Express routers
    - `server.js` – Entry point for API server
  - `app/` – Frontend (not the focus of this task)
  - `.env.example` – Example env file
  - `README.md`

## 📦 Installation & Usage
**1.** Clone the repository

```bash
git clone https://github.com/Ania58/transaction-api.git
cd transaction-api
```
**2.** Install dependencies

```bash
npm install
```
**3.** Start the API server

```bash
npm run dev
```
By default:

Frontend runs on http://localhost:3000

Backend API runs on http://localhost:5800

## 📮 API Endpoints

### ✅ Get all transactions

```bash
GET /api/transactions
```
### 🔍 Get transaction by ID

```bash
GET /api/transactions/:id
```

### ➕ Create a new transaction

```bash
POST /api/transactions
```
Body

```bash
{
  "username": "annamaria",
  "transactionType": "Stake",
  "token": "ETH",
  "amount": 1000
}
```
### ✏️ Update transaction

```bash
PUT /api/transactions/:id
```
Body (same format as POST)

### ❌ Delete transaction

```bash
DELETE /api/transactions/:id
```

## 📹 Walkthrough
👉 A Veed video walkthrough: https://www.veed.io/view/757444ca-b8f6-4852-a8b1-06871f5a8751?panel=share

## ⚠️ Notes
* No external libraries or frameworks were added — only the provided project resources were used.

* All data is stored in-memory (no database) for demo purposes.

## Requirements
Ensure your system meets the following requirement before starting:

Node.js: **Version 23.4.0**


## Postman documentation
https://documenter.getpostman.com/view/38010309/2sB2x2LEb8