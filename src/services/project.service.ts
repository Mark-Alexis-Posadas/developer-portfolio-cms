import pool from "../config/db";

export const getAllProjects = async () => {
  const [rows] = await pool.query(
    "SELECT * FROM projects ORDER BY created_at DESC",
  );
  return rows;
};

export const getProjectById = async (id: number) => {
  const [rows]: any = await pool.query("SELECT * FROM projects WHERE id=?", [
    id,
  ]);
  return rows[0];
};

export const createProject = async (data: any) => {
  const {
    title,
    description,
    image,
    github_url,
    live_url,
    technologies,
    status,
  } = data;

  const [result]: any = await pool.query(
    `INSERT INTO projects
    (title, description, image, github_url, live_url, technologies, status)
    VALUES (?,?,?,?,?,?,?)`,
    [title, description, image, github_url, live_url, technologies, status],
  );

  return result;
};

export const updateProject = async (id: number, data: any) => {
  const {
    title,
    description,
    image,
    github_url,
    live_url,
    technologies,
    status,
  } = data;

  await pool.query(
    `UPDATE projects SET
    title=?, description=?, image=?, github_url=?, live_url=?, technologies=?, status=?
    WHERE id=?`,
    [title, description, image, github_url, live_url, technologies, status, id],
  );
};

export const deleteProject = async (id: number) => {
  await pool.query("DELETE FROM projects WHERE id=?", [id]);
};
