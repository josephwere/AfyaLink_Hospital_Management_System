import app from "./app";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

async function start() {
  try {
    await prisma.$connect();
    app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
  } catch (error) {
    console.error("❌ Failed to start server:", error);
  }
}

start();
