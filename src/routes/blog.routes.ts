import express from "express";
import {
  getBlogs,
  getBlog,
  addBlog,
  editBlog,
  removeBlog,
} from "../controllers/blog.controller";

import { authenticate } from "../middleware/auth.middleware";

const router = express.Router();

// PUBLIC (portfolio/blog page)
router.get("/", getBlogs);
router.get("/:id", getBlog);

// ADMIN (CMS protected)
router.post("/", authenticate, addBlog);
router.put("/:id", authenticate, editBlog);
router.delete("/:id", authenticate, removeBlog);

export default router;
