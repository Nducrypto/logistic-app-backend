import express from "express";
import { getUsers } from "../controllers/userController.js";

const router = express.Router();
// import auth from "../middleware/auth.js";

router.get("/", getUsers);

export default router;
