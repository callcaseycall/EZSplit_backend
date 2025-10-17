import db from "#db/client";
<<<<<<< HEAD
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
=======

export async function createTable(table_num) {
  const sql = `
    INSERT INTO table_number
    (table_num)
    VALUES
    ($1)
    RETURNING *
  `;
  const {
    rows: [table],
  } = await db.query(sql, [table_num]);
  return table;
}

export async function getTableNumber() {
  const sql = `
  SELECT *
  FROM table_number
  `;
  const { rows: table_number } = await db.query(sql);
  return table_number;
>>>>>>> 0283254a4d61eaa1b74a30b3fc9db1db5b1d0f01
}
