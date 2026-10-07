import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import portfolioRoutes from "./routes/portfolio.js";
const app = express();
const port = process.env.PORT || 5000;
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json({ limit: "2mb" }));
app.get("/api/health", (req, res) =>
  res.json({ status: "ok", message: "Portfolio API is running" }),
);
app.use("/api/portfolio", portfolioRoutes);
app.listen(port, () => console.log(`Portfolio API running on port ${port}`));
connectDB();
