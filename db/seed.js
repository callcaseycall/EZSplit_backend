import db from "#db/client";
import { createUser } from "#db/queries/users";
import { createMenu } from "#db/queries/menu";
import { createCustomer } from "#db/queries/customer";
import { createTableNumber } from "#db/queries/tableNumber";
import { createMenuTable } from "#db/queries/menuTable";

import {createMenuTable} from"./queries/menuTable.js";
import { createMenu } from "./queries/menu.js";
import {createTableNumber} from"./queries/tableNumber.js";
import { createCustomer } from "./queries/customer.js";


import { faker } from "@faker-js/faker";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");





async function seed() {

  console.log("🌱 Starting database seeding...");

  // Create menu items
  for (let i = 0; i < 5; i++) {

  for (let i = 0; i < 15; i++) {

  for (let i = 0; i < 15; i++) {

    const items = faker.food.dish();
    const prices = parseFloat(faker.commerce.price({ min: 5, max: 30 }));
    try {
      const response = await createMenu(items, prices);
      console.log("Created menu:", response);
    } catch (error) {
      console.error("Error creating menu:", error);
    }
  }

  // Create customers
  for (let i = 0; i < 5; i++) {
    const name = faker.person.firstName();
    const email = faker.internet.email();
    const phone_number = parseInt(faker.string.numeric(10)); // Generate 8-digit numeric phone number to fit in integer range
    try {
      const response = await createCustomer(name, email, phone_number);
      console.log("Created customer:", response);
    } catch (error) {
      console.error("Error creating customer:", error);
    }
  }

  // Create table numbers
  for (let i = 1; i <= 5; i++) {
    const number = i; // Use simple sequential table numbers (1, 2, 3, 4, 5)
    try {
      const response = await createTableNumber(number);
      console.log("Created table number:", response);
    } catch (error) {
      console.error("Error creating table number:", error);
    }
  }

  // Create menu-table associations
  for (let i = 0; i < 5; i++) {
    // Create associations between menu items and table numbers
    const menu_id = i + 1; // References menu(id)
    const table_id = i + 1; // References table_number(id)
    try {
      const response = await createMenuTable(menu_id, table_id);
      console.log("Created menu-table association:", response);
    } catch (error) {
      console.error("Error creating menu-table association:", error);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  for (let i = 0; i < 10; i++) {
    await createTableNumber("Table " + i);
  }
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
      await createMenuTable(i, j);
    }
  }

  for (let i = 0; i < 5; i++) {
    const name = faker.person.firstName();
    const email = faker.internet.email();
    const phone_number = parseInt(faker.string.numeric(10)); // Generate 10-digit numeric phone number to fit in integer range
    try {
      const response = await createCustomer(name, email, phone_number);
      console.log(response);
    } catch (error) {
      console.error(error);

    }
  }
}

