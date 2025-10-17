import db from "#db/client";
import bcrypt from "bcrypt";

export async function getAllMenus() {
  //changed from getMenus
  const sql = `SELECT * FROM menu`;
  const { rows } = await db.query(sql);
  return rows;
}

export async function getMenuByTableId(table_id) {
  // changed from getMenuById
  const sql = `
    SELECT m.* FROM menu m
    JOIN menu_table mt ON m.id = mt.menu_id
    WHERE mt.table_id = $1
  `;
  const { rows } = await db.query(sql, [table_id]);
  return rows;
}

export async function createMenu(items, prices) {
  //changed from createMenu
  const sql = `
  INSERT INTO menu
    (items, prices)
  VALUES
    ($1, $2)
  RETURNING *
  `;
  const { rows } = await db.query(sql, [items, prices]);
  return rows[0];
  const {
    rows: [menu],
  } = await db.query(sql, [items, prices]);
  return menu;
}

export async function getMenu() {
  const sql = `
    SELECT id, items, prices, image_url
    FROM menu
    ORDER BY id
  `;
  const { rows } = await db.query(sql);
  return rows;
}
export async function getMenuById(id) {
  const sql = `
    SELECT id, items, prices, image_url
    FROM menu
    WHERE id = $1
    LIMIT 1
  `;

  const {
    rows: [menu],
  } = await db.query(sql, [id]);
  return menu || null;



  const {
    rows: [menu],
  } = await db.query(sql, [id]);

  return menu || null;

}
