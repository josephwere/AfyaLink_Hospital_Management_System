import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { errorHandler } from "./middleware/error.middleware";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import emailRoutes from "./routes/email.routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(rateLimit({ windowMs: 60 * 1000, max: 100 }));

app.get("/", (_, res) => res.json({ message: "Backend API running" }));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/email", emailRoutes);

app.use(errorHandler);

export default app;
