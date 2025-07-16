import express from "express";
import { getRiddels, createRiddels,updateRiddels,deleteRiddle } from "../controllers/riddelsControllers.js";

const router = express.Router();

router.get("/", getRiddels);
router.post("/", createRiddels);
router.put("/:id", updateRiddels);
router.delete("/:id", deleteRiddle);


export default router;
