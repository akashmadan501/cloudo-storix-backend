# Cloudo-Storix Backend

Cloudo-Storix is an **API-first cloud storage backend** built using a **phase-based system design approach**.

The purpose of this project is to understand how a backend system evolves from local development to large-scale cloud architecture by introducing technologies only when they are actually required.

---

## 🧠 Project Philosophy

- Build **correct systems before complex systems**
- Introduce technology **only to solve real problems**
- Keep business logic **independent of infrastructure**
- Focus on scalability, security, and clean architecture

---

## 🏗️ Current Phase

### Phase 1: Local Development (0–100 users)

Current focus:
- Clean backend architecture
- Secure authentication and authorization
- API-first development (no frontend yet)
- Reproducible local environment using Docker

---

## ⚙️ Tech Stack (Current)

- **Node.js** – Runtime
- **Express.js** – Backend framework
- **MongoDB** – Database (Dockerized)
- **Mongoose** – ODM
- **bcrypt** – Secure password hashing
- **JWT (jsonwebtoken)** – Stateless authentication
- **Docker & Docker Compose** – Local infrastructure
- **dotenv** – Environment variables
- **Postman** – API testing

---

## 🧩 High-Level Architecture

```
API Client (Postman / Consumer)
↓
Express API
↓
MongoDB (Docker)
```

- Stateless authentication
- No UI layer
- Infrastructure decoupled from application code

---

## 📂 Project Structure

```
src/
├── app.js                    # Express app configuration
├── server.js                 # Server startup
├── config/
│   ├── env.js               # Environment validation
│   └── db.js                # Database connection
├── routes/
│   ├── auth.routes.js       # Authentication routes
│   └── health.routes.js     # Health check
├── controllers/
│   └── auth.controller.js   # Auth HTTP handlers
├── services/
│   └── auth.service.js      # Authentication business logic
├── middlewares/
│   └── auth.middleware.js   # JWT verification middleware
└── models/
    └── user.model.js        # User schema
```

---

## 🔐 Authentication & Authorization

Implemented features:
- User registration
- Secure password hashing using bcrypt
- JWT-based login
- Stateless authentication
- Route protection using middleware

### Authentication Flow

```
Register → Hash password → Store user
Login → Verify password → Issue JWT
Request → JWT Middleware → Protected route
```

---

## 🐳 Why Docker Is Used

MongoDB runs inside Docker to:
- Avoid OS-specific installation issues
- Ensure consistent local environments
- Keep infrastructure reproducible and disposable
- Reflect real-world backend practices

Application code remains unchanged regardless of infrastructure.

---

## 🚀 Getting Started (Local Setup)

### Prerequisites
- Node.js
- Docker
- Docker Compose

### Steps

1. Clone the repository
2. Create `.env` from `.env.example`
3. Start MongoDB:
   ```bash
   docker-compose up -d
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the backend:
   ```bash
   npm run dev
   ```

---

## 🧪 API Endpoints

### Health Check
```
GET /health
```

### Register User
```
POST /auth/register
```

### Login User
```
POST /auth/login
```

### Protected Route
```
GET /auth/me
Authorization: Bearer <JWT_TOKEN>
```

---

## 📘 Documentation

Architecture decisions and phase details are documented in the `docs/` directory.

---

## 🔮 Planned Phases

- **Phase 2:** PostgreSQL (local)
- **Phase 3:** Cloud deployment (AWS)
- **Phase 4:** Scaling & performance
- **Phase 5:** Production-grade architecture

Each phase will be implemented incrementally and documented.

---

## 👤 Author

**Akash Madan**  
Backend-focused developer learning system design through hands-on projects.

---

## 📄 License

MIT