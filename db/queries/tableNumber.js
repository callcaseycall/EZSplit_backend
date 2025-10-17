import db from "#db/client";
import bcrypt from "bcrypt";

export async function getAllTableNumbers() {
  const sql = `SELECT * FROM table_number`;
  const { rows } = await db.query(sql);
  return rows;
}

export async function createTableNumber(number) {
  const sql = `
  INSERT INTO table_number
    (number)
  VALUES
    ($1)
  RETURNING *
  `;
  const { rows } = await db.query(sql, [number]);
  return rows[0];
}
