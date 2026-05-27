import pool from "../config/db";

export const findUserByEmail = async (email: string) => {
  const [row]: any = await pool.query("SELECT * FROM users WHERE email=?", [
    email,
  ]);
  return row[0];
};

export const createUser = async (
  name: string,
  email: string,
  password: string,
) => {
  const [result]: any = await pool.query(
    `INSERT INTO users(name,email,password) VALUES(?,?,?)`,
    [name, email, password],
  );
  return result;
};
