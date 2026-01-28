// src/app.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();


const healthRoutes = require("./routes/health.routes");
const errorMiddleware = require("./middlewares/error.middleware");

const app = express();

// Global middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/health", healthRoutes);

// Global error handler (LAST)
app.use(errorMiddleware);

module.exports = app;
