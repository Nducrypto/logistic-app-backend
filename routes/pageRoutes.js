import express from "express";

import {
  createBooking,
  deleteBooking,
  getBookings,
  getBookingById,
  updateSeatAvailability,
} from "../controllers/pageController.js";

const router = express.Router();
// import auth from "../middleware/auth.js";

router.get("/", getBookings);
router.get("/:id", getBookingById);
router.put("/availability/:id", updateSeatAvailability);
router.post("/", createBooking);
router.delete("/:id", deleteBooking);

export default router;
