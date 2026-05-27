import { Request, Response } from "express";
import {
  getAllSkills,
  createSkill,
  updateSkill,
  deleteSkill,
} from "../services/skill.service";

export const getSkills = async (req: Request, res: Response) => {
  const data = await getAllSkills();
  res.json(data);
};

export const addSkill = async (req: Request, res: Response) => {
  await createSkill(req.body);
  res.status(201).json({ message: "Skill created" });
};

export const editSkill = async (req: Request, res: Response) => {
  await updateSkill(Number(req.params.id), req.body);
  res.json({ message: "Skill updated" });
};

export const removeSkill = async (req: Request, res: Response) => {
  await deleteSkill(Number(req.params.id));
  res.json({ message: "Skill deleted" });
};
