import db from "#db/client";
<<<<<<< HEAD
import bcrypt from "bcrypt";
=======
>>>>>>> 0283254a4d61eaa1b74a30b3fc9db1db5b1d0f01

export async function createCustomer(name, email, phone_number) {
  const sql = `
  INSERT INTO customer
    (name, email, phone_number)
  VALUES
    ($1, $2, $3)
  RETURNING *
  `;
<<<<<<< HEAD
  const { rows } = await db.query(sql, [name, email, phone_number]);
  return rows[0];
}

=======
  const {
    rows: [customer],
  } = await db.query(sql, [name, email, phone_number]);
  return customer;
}
>>>>>>> 0283254a4d61eaa1b74a30b3fc9db1db5b1d0f01
export async function getCustomers() {
  const sql = `
  SELECT *
  FROM customer
  `;
  const { rows: customer } = await db.query(sql);
  return customer;
}

export async function getCustomerById(id) {
  const sql = `
<<<<<<< HEAD
  SELECT * FROM customer
  WHERE id = $1
  `;
  const { rows } = await db.query(sql, [id]);
  return rows[0];
}

=======
  SELECT *
  FROM customer
  WHERE id = $1
  `;
  const { rows: customer } = await db.query(sql, [id]);
  return customer;
}
>>>>>>> 0283254a4d61eaa1b74a30b3fc9db1db5b1d0f01
