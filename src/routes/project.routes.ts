import express from "express";
import {
  getProjects,
  getProject,
  addProject,
  editProject,
  removeProject,
} from "../controllers/project.controller";

import { authenticate } from "../middleware/auth.middleware";

const router = express.Router();

// public (portfolio view)
router.get("/", getProjects);
router.get("/:id", getProject);

// protected (admin CMS)
router.post("/", authenticate, addProject);
router.put("/:id", authenticate, editProject);
router.delete("/:id", authenticate, removeProject);

export default router;
