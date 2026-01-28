const app = require("./app");
const connectDB = require("./config/db");
const env = require("./config/env");

async function startServer() {
  try {
    await connectDB();
    app.listen(env.PORT, () => {
      console.log(`🚀 Cloudo-Storix running on port ${env.PORT}`);
    });
  } catch (err) {
    console.error("❌ Server startup failed", err);
    process.exit(1);
  }
}

startServer();
