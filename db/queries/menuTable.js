import db from "#db/client";
<<<<<<< HEAD
import bcrypt from "bcrypt";

export async function getAllMenuTables() {
  const sql = `SELECT * FROM menu_table`;
=======

export async function createMenuTable(menuId, tableId) {
  const sql = `
   INSERT INTO menu_table
   (menu_id, table_id)
   VALUES ($1, $2)
   RETURNING *
    `;
  const {
    rows: [menuTable],
  } = await db.query(sql, [menuId, tableId]);
  return menuTable;
}

export async function getAllMenuTables() {
  const sql = `
    SELECT * FROM menu_table
    ORDER BY id
  `;
>>>>>>> 0283254a4d61eaa1b74a30b3fc9db1db5b1d0f01
  const { rows } = await db.query(sql);
  return rows;
}

export async function getMenuTableById(id) {
<<<<<<< HEAD
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
=======
  const sql = `
    SELECT * FROM menu_table
    WHERE id = $1
    LIMIT 1
  `;
  const {
    rows: [menuTable],
  } = await db.query(sql, [id]);
  return menuTable || null;
>>>>>>> 0283254a4d61eaa1b74a30b3fc9db1db5b1d0f01
}
