import e from "express";
import { getAllriddels, addriddels ,updateRiddelById,deleteRiddleById} from "../DAL/dal.js";

export async function getRiddels(req, res) {
  try {
    const riddels = await getAllriddels();
    res.json(riddels);
  } catch (err) {
    res.status(500).json({ error: "Failed to get products" });
  }
}

export async function createRiddels(req, res) {
  try {
    const result = await addriddels(req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to add product" });
  }
}

export async function updateRiddels(req, res) {
   try {
    const id = req.params.id;
    const result = await updateRiddelById(id, req.body);
    res.json(result);
  } catch {
    res.status(500).json({ error: "Failed to update riddle" });
  }
}

export async function deleteRiddle(req, res) {
  try {
    const id = req.params.id;
    const result = await deleteRiddleById(id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to delete riddle" });
  }
}