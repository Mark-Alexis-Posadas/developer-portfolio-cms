import express from "express";
import { authenticate } from "../middleware/auth.middleware";

const router = express.Router();

router.get("/profile", authenticate, (req, res) => {
  res.json({
    success: true,
    message: "Protected route accessed",
  });
});

export default router;
