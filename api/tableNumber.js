import express from "express";
import { createTableNumber, getAllTableNumbers } from "#db/queries/tableNumber";
import requireBody from "#middleware/requireBody";
import { createToken } from "#utils/jwt";

const router = express.Router();

// get all  & no post

router.get("/", async (req, res) => {
  try {
    const tableNumbers = await getAllTableNumbers();
    res.status(200).json(tableNumbers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve table numbers" });
  }
});

router.post("/", requireBody(["number"]), async (req, res) => {
  const { number } = req.body;
  try {
    const tableNumber = await createTableNumber(number);
    // const token = createToken(tableNumber.id);  // Temporarily disabled
    res.status(201).json({ tableNumber });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create table number" });
  }
});

export default router;

import {getAllTableNumber, getTableNumberId} from "#db/queries/tableNumber";
import express from "express";
const router = express.Router();

export default router;


router.route("/").get(async (req, res) => {
  try {
    const table_number = await getAllTableNumber();
    res.status(200).json(table_number);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to fetch menu items" });
  }
});


router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const table_number= await getTableNumberId(id);
    res.status(200).json(table_number);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve menu table by ID" });
  }
});

