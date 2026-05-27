import express from "express";
import {
  getSkills,
  addSkill,
  editSkill,
  removeSkill,
} from "../controllers/skill.controller";

import { authenticate } from "../middleware/auth.middleware";

const router = express.Router();

// public (portfolio display)
router.get("/", getSkills);

// admin CMS (protected)
router.post("/", authenticate, addSkill);
router.put("/:id", authenticate, editSkill);
router.delete("/:id", authenticate, removeSkill);

export default router;
