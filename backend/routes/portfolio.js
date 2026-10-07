import { Router } from "express";
import Portfolio from "../models/Portfolio.js";
const router = Router();
router.get("/", async (req, res) => {
  try {
    const doc = await Portfolio.findOne({ key: "main" }).lean();
    res.json(doc?.data || null);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});
router.put("/", async (req, res) => {
  try {
    const doc = await Portfolio.findOneAndUpdate(
      { key: "main" },
      { key: "main", data: req.body },
      { upsert: true, new: true },
    );
    res.json(doc.data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});
export default router;
