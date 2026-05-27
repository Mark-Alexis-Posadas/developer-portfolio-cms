import { Request, Response } from "express";
import {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../services/blog.service";

export const getBlogs = async (req: Request, res: Response) => {
  const data = await getAllBlogs();
  res.json(data);
};

export const getBlog = async (req: Request, res: Response) => {
  const data = await getBlogById(Number(req.params.id));
  res.json(data);
};

export const addBlog = async (req: Request, res: Response) => {
  await createBlog(req.body);
  res.status(201).json({ message: "Blog created" });
};

export const editBlog = async (req: Request, res: Response) => {
  await updateBlog(Number(req.params.id), req.body);
  res.json({ message: "Blog updated" });
};

export const removeBlog = async (req: Request, res: Response) => {
  await deleteBlog(Number(req.params.id));
  res.json({ message: "Blog deleted" });
};
