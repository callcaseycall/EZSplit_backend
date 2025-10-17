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

export async function getAllTableNumber() {
  const sql = `
    SELECT *
    FROM table_number
   
  `;

  const { rows: table_number } = await db.query(sql);
  return table_number ;
}

// export async function getTableNumberId(id) {
//   const sql = `
//     SELECT id, 
//     FROM table_number
//     WHERE id = $1
    
//   `;

//   const {
//     rows: table_number,
//   } = await db.query(sql, [id]);

//   return table_number|| null;
// }

export async function getTableNumberId(id) {
  const sql = `
    SELECT id, table_num 
    FROM table_number
    WHERE id = $1
    
  `;
  const {
    rows: [table_number],
  } = await db.query(sql, [id]);
  return table_number || null;

}
