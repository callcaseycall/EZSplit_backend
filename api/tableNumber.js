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
