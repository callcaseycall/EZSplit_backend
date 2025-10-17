<<<<<<< HEAD
-- Create tables in EZSplit database
-- Note: Database should already exist before running this script
DROP TABLE IF EXISTS customer;
DROP TABLE IF EXISTS menu;
DROP TABLE IF EXISTS menu_table;
DROP TABLE IF EXISTS table_number;
DROP TABLE IF EXISTS users;
=======
DROP TABLE IF EXISTS menu_table CASCADE;
DROP TABLE IF EXISTS menu CASCADE;
DROP TABLE IF EXISTS table_number CASCADE;
DROP TABLE IF EXISTS customer CASCADE;
DROP TABLE IF EXISTS users CASCADE;

>>>>>>> 0283254a4d61eaa1b74a30b3fc9db1db5b1d0f01
CREATE TABLE users (
  id serial PRIMARY KEY,
  username text NOT NULL UNIQUE,
  password text NOT NULL
);
<<<<<<< HEAD
=======

>>>>>>> 0283254a4d61eaa1b74a30b3fc9db1db5b1d0f01
CREATE TABLE customer (
  id serial PRIMARY KEY,
 name text NOT NULL ,
 email text NULL,
<<<<<<< HEAD
 phone_number BIGINT NULL
);
CREATE TABLE table_number (
  id serial PRIMARY KEY,
  number integer UNIQUE NOT NULL
);
=======
 phone_number bigint NULL
);

CREATE TABLE table_number (
  id serial PRIMARY KEY,
  table_num text UNIQUE NOT NULL
);

>>>>>>> 0283254a4d61eaa1b74a30b3fc9db1db5b1d0f01
CREATE TABLE menu (
  id serial PRIMARY KEY,
 items text NOT NULL ,
 prices float NOT NULL,
 image_url TEXT
);
<<<<<<< HEAD
CREATE TABLE menu_table (
  id serial PRIMARY KEY,
 table_id integer NOT NULL REFERENCES table_number(id) ON DELETE CASCADE,
 menu_id integer NOT NULL REFERENCES menu(id) ON DELETE CASCADE
);
=======

CREATE TABLE menu_table (
  id serial PRIMARY KEY,
 table_id integer NOT NULL REFERENCES table_number(id) ON DELETE CASCADE,
 menu_id integer NOT NULL REFERENCES menu(id) ON DELETE CASCADE,

 UNIQUE (table_id, menu_id)
);











>>>>>>> 0283254a4d61eaa1b74a30b3fc9db1db5b1d0f01
