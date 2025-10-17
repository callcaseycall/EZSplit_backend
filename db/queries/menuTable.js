import db from "#db/client";
import bcrypt from "bcrypt";

export async function getAllMenuTables() {
  const sql = `SELECT * FROM menu_table`;
  const { rows } = await db.query(sql);
  return rows;
}

export async function getMenuTableById(id) {
  const sql = `SELECT * FROM menu_table WHERE id = $1`;
  const { rows } = await db.query(sql, [id]);
  return rows[0];
}

export async function createMenuTable(menu_id, table_id) {
  const sql = `
  INSERT INTO menu_table
    (menu_id, table_id)
  VALUES
    ($1, $2)
  RETURNING *
  `;
  const { rows } = await db.query(sql, [menu_id, table_id]);
  return rows[0];
}
