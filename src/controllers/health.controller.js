// src/controllers/health.controller.js
const healthService = require("../services/health.service");

exports.check = async (req, res, next) => {
  try {
    const status = await healthService.getStatus();
    res.status(200).json({
      success: true,
      data: status
    });
  } catch (err) {
    next(err);
  }
};
