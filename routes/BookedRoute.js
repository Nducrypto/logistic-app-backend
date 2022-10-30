import express from "express";

import { createInfo, getInfo } from "../controllers/Bookedcontroller.js";

const router = express.Router();
// import auth from "../middleware/auth.js";

router.get("/", getInfo);
router.post("/", createInfo);

export default router;
