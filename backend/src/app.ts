import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { corsMiddleware } from "./middleware/cors";
import { errorHandler } from "./middleware/errorHandler";
import apiRoutes from "./routes/index";
import { NODE_ENV } from "./config/env";

/**
 * Logix Express Application
 * 
 * Core del backend: recibe leads, procesa contactos,
 * conecta con las automatizaciones.
 */
const app = express();

// ─── Security & Parsing ───
app.use(helmet());
app.use(corsMiddleware);
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

// ─── Logging ───
if (NODE_ENV !== "test") {
  app.use(morgan(NODE_ENV === "production" ? "combined" : "dev"));
}

// ─── API Routes ───
app.use("/api", apiRoutes);

// ─── Global Error Handler (must be last) ───
app.use(errorHandler);

export default app;
