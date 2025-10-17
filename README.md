# Backend Template

You can use this repository as a template for your backend. It comes with a `users` table
as well as routes to register and login.

## Usage

1. Change the name of the package in `package.json`.
2. Change the database name from `foobar` in the `db:schema` script.
3. Update the environment variables in `example.env` and rename the file to `.env`.


4.Backend EzSplit
5.Databases Called EzSplit
6.Create the tables (Customer, tables_number, menu_table, menu)
•Customer: id serial(pk), Name text (not null), email text(null), phone_number integer(null), number_of_guests integer(null)
•tables_number: id serial (pk), number(unique, not null)
•Menu: id serial(pk), items text (not null), prices float (not null), image optional(URL)
•menu_table: id serial (pk), t_ id serial(fk), m_id serial(fk)
7. Seed the data in the db.
8. Create or modify folders.
•Api: customer.js, tableNumber.js, menu.js, menuTable.js
•db/queries: customer.js, tableNumber.js, menu.js, menuTable.js
9. Finale check for the routers. (edited) 
