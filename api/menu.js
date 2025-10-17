import express from "express";
<<<<<<< HEAD
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

=======
import { getMenu, getMenuById } from "#db/queries/menu";
const router = express.Router();
router.route("/").get(async (req, res) => {
  try {
    const menu = await getMenu();
    res.status(200).json(menu);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to fetch menu items" });
  }
});
router.route("/:id").get(async (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }
  try {
    const menuItem = await getMenuById(id);
    if (!menuItem)
      return res.status(404).json({ error: "Menu item not found" });
    return res.status(200).json(menuItem);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Unable to fetch menu item" });
  }
});
>>>>>>> 0283254a4d61eaa1b74a30b3fc9db1db5b1d0f01
export default router;
