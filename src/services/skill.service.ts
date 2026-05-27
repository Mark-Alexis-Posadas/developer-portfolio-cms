import pool from "../config/db";

export const getAllSkills = async () => {
  const [rows] = await pool.query(
    "SELECT * FROM skills ORDER BY created_at DESC",
  );
  return rows;
};

export const createSkill = async (data: any) => {
  const { name, level, category } = data;

  const [result]: any = await pool.query(
    "INSERT INTO skills (name, level, category) VALUES (?,?,?)",
    [name, level, category],
  );

  return result;
};

export const updateSkill = async (id: number, data: any) => {
  const { name, level, category } = data;

  await pool.query("UPDATE skills SET name=?, level=?, category=? WHERE id=?", [
    name,
    level,
    category,
    id,
  ]);
};

export const deleteSkill = async (id: number) => {
  await pool.query("DELETE FROM skills WHERE id=?", [id]);
};
