import express from "express";

import {
  createBooking,
  getBookings,
  getBookingById,
  deleteLocation,
  updateSeatAvailability,
  deleteDate,
} from "../controllers/pageController.js";
import { verifyAdmin, verifyUser } from "../middleware/authmiddleware.js";

const router = express.Router();
// import auth from "../middleware/auth.js";

router.get("/", getBookings);
router.get("/:id", getBookingById);
router.put("/availability/:id", updateSeatAvailability);
router.post("/", verifyAdmin, createBooking);
router.delete("/:id", verifyAdmin, deleteLocation);
router.delete("/date/:id/:seatNumberId/:unavailableDates", deleteDate);

export default router;
