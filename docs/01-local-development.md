# Phase 1: Local Development (0–100 Users)

## Goal
Build a correct, stable backend foundation with clean architecture and
configuration discipline before focusing on scale or performance.

## Architecture
Single-node backend running locally.

Client tools (Postman / curl) interact directly with the API.


## Tech Used
- Node.js
- Express (API-only)
- MongoDB (local instance)
- Mongoose
- dotenv
- Postman (API testing)

## What Is Implemented
- API-first backend (no UI rendering)
- Clean project scaffold
- Separation of app and server bootstrap
- Centralized error handling
- Environment variable loading and validation
- Database connection setup
- Health check endpoint

## Why This Works at This Scale
- Very low traffic
- No concurrency pressure
- Easy debugging and iteration
- Minimal operational overhead

## Known Limitations
- Single process (no redundancy)
- No automatic restarts
- No monitoring or logging
- No horizontal scaling

## When This Phase Breaks
- Application crash causes downtime
- Manual deployment required
- Increased traffic would overload a single instance

