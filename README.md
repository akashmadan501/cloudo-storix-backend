# Cloudo-Storix Backend

Cloudo-Storix is an **API-first cloud storage backend** designed to allow users to **securely store, manage, and retrieve their files on demand**.

The project is built using a **phase-based system design approach** to understand how backend systems evolve from local development to cloud-scale architecture by introducing technologies **only when they are actually required**, while keeping security, scalability, and clean architecture as first-class concerns.

---

## 🧠 Project Philosophy

- Build **correct systems before complex systems**
- Separate **identity, data, and infrastructure concerns**
- Introduce technology **to solve real problems**, not for hype
- Design for **scaling and failure**, even in local development
- Document architectural decisions as the system evolves

---

## 🏗️ Current Status

### Phase 1: Core Backend Foundation ✅ (Completed)
**Scale:** 0–100 users

Delivered:
- API-first backend
- Secure authentication & authorization
- Stateless JWT-based auth
- Dockerized local database
- Clean service-based architecture
- Health checks and documentation

### Phase 2: Data & File Storage Design 🟡 (In Progress)
**Scale:** 100–1,000 users

Current focus:
- Designing file storage architecture
- Separating file metadata from file bytes
- Preparing system for scalable object storage
- Local-first development with cloud compatibility

> File upload and download are **intentionally not implemented yet**.
> Architecture and data modeling are completed before feature delivery.

---

## ⚙️ Tech Stack (Current)

- **Node.js** – Runtime
- **Express.js** – Backend framework
- **MongoDB** – Database (Dockerized, metadata & auth data)
- **Mongoose** – ODM
- **bcrypt** – Secure password hashing
- **JWT (jsonwebtoken)** – Stateless authentication
- **Docker & Docker Compose** – Local infrastructure
- **dotenv** – Environment configuration
- **Postman** – API testing

---

## 🧩 High-Level Architecture (Current)

```
API Client (Postman / Consumer)
       ↓
   Express API
       ↓
  MongoDB (Docker)
```

- API-first backend
- Stateless authentication
- No frontend layer
- Infrastructure decoupled from application logic

---

## 🔐 Authentication & Authorization

Implemented features:
- User registration
- Secure password hashing using bcrypt
- JWT-based login
- Stateless authentication
- Protected routes using middleware

### Authentication Flow

```
Register → Hash password → Store user
Login → Verify password → Issue JWT
Request → JWT Middleware → Protected route
```

---

## 🗂️ File Storage Design (Phase 2)

### Key Design Principle
**File bytes are never stored in the database.**

The system separates:
- **Metadata** → Database
- **File content** → Object storage

### Storage Strategy
- Local development uses **MinIO** (S3-compatible object storage)
- Production will use **AWS S3**
- Backend never streams large files directly

This ensures:
- Scalability
- Cloud portability
- Cost efficiency
- Clean separation of concerns

---

## 🐳 Why Docker Is Used

Docker is used to:
- Avoid OS-specific installation issues
- Ensure consistent local environments
- Keep infrastructure reproducible and disposable
- Mirror real-world backend workflows

Application code remains unchanged regardless of how infrastructure is run.

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

Architecture decisions and phase-by-phase notes are documented in the `docs/` directory:

- `00-overview.md`
- `01-local-development.md`
- `02-file-storage-design.md`

---

## 🔮 Planned Phases

- **Phase 2:** Local file upload & download (MinIO)
- **Phase 3:** PostgreSQL & cloud deployment (AWS)
- **Phase 4:** Performance, caching, and scaling
- **Phase 5:** Production-grade architecture

Each phase is implemented incrementally and documented.

---

## 👤 Author

Akash Madan  
Backend-focused developer building scalable systems through hands-on engineering and architectural design.

---

## 📄 License

MIT