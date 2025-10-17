import db from '#db/client';



export async function createMenuTable(menuId, tableId) {
  const sql = `
  INSERT INTO menu_table
    (menu_id, table_id)
  VALUES
    ($1, $2)
  RETURNING *
  `;
  
  const {
    rows: [menu_table],
  } = await db.query(sql, [menuId, tableId]);
  return menu_table ;
}


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