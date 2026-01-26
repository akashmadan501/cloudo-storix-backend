// src/services/health.service.js
exports.getStatus = async () => {
  return {
    service: "cloudo-storix-api",
    status: "healthy",
    timestamp: new Date().toISOString()
  };
};
