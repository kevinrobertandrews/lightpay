import express from "express";
import { createCheckoutSession } from "./checkout";

const router = express.Router();

// checkout session
router.post("/checkout", async (req, res) => {
  // guard
  if (!Array.isArray(req.body.line_items) || req.body.line_items.length === 0) {
    return res.status(400).json({ error: "Missing or empty line_items" });
  }

  try {
    const session = await createCheckoutSession(req.body.line_items);
    res.json({ url: session.url });
  } catch (err) {
    res.status(500).json({ error: (err as any).message });
  }
});

// health check
router.get("/", (_, res) => res.send("lightpay backend is up 🚀"));

export default router;
