import db from '#db/client';

export async function createTableNumber(table_num) {
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