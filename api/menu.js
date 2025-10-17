import express from "express";
import { createMenu, getAllMenus, getMenuByTableId } from "#db/queries/menu";
import requireBody from "#middleware/requireBody";
import { createToken } from "#utils/jwt";

const router = express.Router();

// get all router & get by table id??

router.get("/", async (req, res) => {
  try {
    const menus = await getAllMenus();
    res.status(200).json(menus);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve menus" });
  }
});

router.get("/:table_id", async (req, res) => {
  const { table_id } = req.params;
  try {
    const menus = await getMenuByTableId(table_id);
    res.status(200).json(menus);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve menu by table ID" });
  }
});

router.post("/", requireBody(["items", "prices"]), async (req, res) => {
  const { items, prices } = req.body;
  try {
    const menu = await createMenu(items, prices);
    // const token = createToken(menu.id);  // Temporarily disabled
    res.status(201).json({ menu });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create menu" });
  }
});

export default router;
