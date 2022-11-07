import express from "express";
import {
  getUserById,
  getUsers,
  updateUser,
} from "../controllers/userController.js";
import { verifyUser } from "../middleware/authmiddleware.js";

const router = express.Router();
// import auth from "../middleware/auth.js";

router.get("/", getUsers);
router.get("/:id", getUserById);
router.put("/:id", verifyUser, updateUser);

export default router;
