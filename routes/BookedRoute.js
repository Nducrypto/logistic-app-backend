import express from "express";

import {
  createInfo,
  getInfo,
  deleteInfo,
} from "../controllers/Bookedcontroller.js";
import { verifyAdmin } from "../middleware/authmiddleware.js";

const router = express.Router();
// import auth from "../middleware/auth.js";

router.get("/", getInfo);
router.post("/", createInfo);
router.delete("/:id", verifyAdmin, deleteInfo);

export default router;
