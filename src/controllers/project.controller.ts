import { Request, Response } from "express";
import {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} from "../services/project.service";

export const getProjects = async (req: Request, res: Response) => {
  const data = await getAllProjects();
  res.json(data);
};

export const getProject = async (req: Request, res: Response) => {
  const data = await getProjectById(Number(req.params.id));
  res.json(data);
};

export const addProject = async (req: Request, res: Response) => {
  await createProject(req.body);
  res.status(201).json({ message: "Project created" });
};

export const editProject = async (req: Request, res: Response) => {
  await updateProject(Number(req.params.id), req.body);
  res.json({ message: "Project updated" });
};

export const removeProject = async (req: Request, res: Response) => {
  await deleteProject(Number(req.params.id));
  res.json({ message: "Project deleted" });
};
