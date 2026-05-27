import pool from "../config/db";

export const getAllBlogs = async () => {
  const [rows] = await pool.query(
    "SELECT * FROM blogs ORDER BY created_at DESC",
  );
  return rows;
};

export const getBlogById = async (id: number) => {
  const [rows]: any = await pool.query("SELECT * FROM blogs WHERE id=?", [id]);
  return rows[0];
};

export const createBlog = async (data: any) => {
  const { title, content, image, status } = data;

  const [result]: any = await pool.query(
    `INSERT INTO blogs (title, content, image, status)
     VALUES (?,?,?,?)`,
    [title, content, image, status],
  );

  return result;
};

export const updateBlog = async (id: number, data: any) => {
  const { title, content, image, status } = data;

  await pool.query(
    `UPDATE blogs SET
     title=?, content=?, image=?, status=?
     WHERE id=?`,
    [title, content, image, status, id],
  );
};

export const deleteBlog = async (id: number) => {
  await pool.query("DELETE FROM blogs WHERE id=?", [id]);
};
