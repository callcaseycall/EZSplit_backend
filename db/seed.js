import db from "#db/client";
import { createMenu } from "#db/queries/menu";
import { createTableNumber } from "#db/queries/tableNumber";
import { createMenuTable } from "#db/queries/menuTable";
import { createCustomer } from "#db/queries/customer";
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
