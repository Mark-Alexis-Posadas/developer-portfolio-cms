import express from "express";
import { upload } from "../middleware/upload.middleware";
import { authenticate } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/", authenticate, upload.single("image"), (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).json({
      message: "No file uploaded",
    });
  }

  const imageUrl = `/uploads/${file.filename}`;

  res.json({
    message: "Upload success",
    imageUrl,
    filename: file.filename,
  });
});

export default router;
