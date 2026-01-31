# File Storage Design (Local)

## Overview
This project separates file metadata from file content to ensure
scalability, security, and cloud compatibility.

## Why Files Are Not Stored in the Database
Databases are optimized for structured data, not large binary objects.
Storing files in a database leads to performance and scaling issues.

The database stores only file metadata.

## Object Storage
Actual file bytes are stored in an object storage system.

Locally, MinIO is used as an S3-compatible object storage solution.
In production, this maps directly to AWS S3 without code changes.

## Responsibilities
- Database: metadata, ownership, permissions
- Backend API: authentication, authorization, metadata management
- Object storage: file bytes

## Storage Key Strategy
Files are stored using a deterministic key format:

users/{userId}/{fileId}

This avoids collisions and simplifies user-level cleanup.
