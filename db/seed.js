import db from "#db/client";
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
  for (let i = 0; i < 15; i++) {
    const items = faker.food.dish();
    const prices = parseFloat(faker.commerce.price({ min: 5, max: 30 }));
    try {
      const response = await createMenu(items, prices);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  for (let i = 0; i < 10; i++) {
    await createTableNumber("Table " + i);
  }
  for (let i = 20; i <= 30; i++) {
    for (let j = 1; j <= 5; j++) {
      const response = await createMenuTable(i, j);
      console.log("response")
       console.log(response)
        console.log("response")
    }
  }
  for (let i = 0; i < 5; i++) {
    const name = faker.person.firstName();
    const email = faker.internet.email();
    const phone_number = parseInt(faker.string.numeric(10)); // Generate 8-digit numeric phone number to fit in integer range
    try {
      const response = await createCustomer(name, email, phone_number);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
}
