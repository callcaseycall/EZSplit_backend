import { getTableNumber } from "#db/queries/tableNumber";
import express from "express";
const router = express.Router();
export default router;

router.route("/").get(async (req, res) => {
  try {
    const table_number = await getTableNumber();
    res.status(200).json(table_number);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to fetch table" });
  }
});
