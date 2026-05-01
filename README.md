# SariSync

SariSync is a modern, full-stack Point-of-Sale (POS) and Inventory Management system tailored specifically for the unique needs of Philippine sari-sari stores. It aims to digitize the traditional *utang* notebook and manual inventory tracking through a streamlined mobile experience.

---

## 🚀 Tech Stack

Full-stack TypeScript architecture for type safety and consistency from the database to the mobile interface.

| Layer | Technology | Purpose |
|---|---|---|
| Frontend | React Native (TypeScript) | Cross-platform mobile application for store owners and staff |
| Backend | Node.js + Express (TypeScript) | High-performance API handling business logic and routing |
| Database | PostgreSQL 15 | Relational data storage for inventory, stores, and users |
| Infrastructure | Docker | Containerized database for consistent environments across development and production |
| Database Driver | Raw SQL (`pg`) | Direct database communication without an ORM for maximum control and performance |

---

## ✨ Key Features

- **Real-time Inventory** — Track stock levels, categories, and barcodes.
- **Dynamic Sales Tracking** — Record transactions instantly with automated stock deduction.
- **Profit Analytics** — Monitor daily and monthly earnings through detailed transaction history.
- **Multi-Store Support** — Manage multiple store locations or owners within a single ecosystem.
- **User Roles** — Differentiate access between Store Owners (Admin) and Staff.

---

## 🏗️ Architecture

SariSync follows a classic **Three-Tier architecture** designed for scalability and separation of concerns.

```
┌─────────────────────────────────┐
│         Client Tier             │
│   React Native Mobile App       │
│   (communicates via REST API)   │
└────────────────┬────────────────┘
                 │
┌────────────────▼────────────────┐
│          Logic Tier             │
│   Express.js Server             │
│   (auth, validation, routing)   │
└────────────────┬────────────────┘
                 │
┌────────────────▼────────────────┐
│           Data Tier             │
│   PostgreSQL (Docker)           │
│   (isolated container)          │
└─────────────────────────────────┘
```

---

## 🛠️ Getting Started

### Prerequisites

- [Docker & Docker Compose](https://docs.docker.com/get-docker/)
- [Node.js](https://nodejs.org/) v18+
- `npm` or `yarn`

### 1. Database Setup

Ensure your Docker daemon is running, then launch the database container:

```bash
docker compose up -d
```

The database will automatically initialize using the schema defined in `docs/init.sql`.

### 2. Backend Configuration

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` root and configure your credentials:

```env
POSTGRES_USER=your_user
POSTGRES_PASSWORD=your_password
POSTGRES_DB=sarisync_main
PORT=3000
```

### 3. Run the Development Server

Start the backend with hot-reloading:

```bash
npx nodemon src/index.ts
```

---

## 📂 Directory Structure

```
sarisync/
├── apps/                   # React Native mobile application
├── backend/
│   └── src/
│       ├── db.ts           # PostgreSQL connection pool
│       └── routes/         # API endpoints (users, products, stores)
├── docs/
│   └── init.sql            # Database schema
└── docker-compose.yaml     # Infrastructure orchestration
```

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).
