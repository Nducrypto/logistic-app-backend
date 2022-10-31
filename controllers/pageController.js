import express from "express";
import mongoose from "mongoose";

import BookingTravel from "../models/pageModel.js";

const router = express.Router();

export const getBookings = async (req, res) => {
  const { ...others } = req.query;
  try {
    const bookings = await BookingTravel.find({
      ...others,
    });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(404).json({ message: error.message });
    console.log(error);
  }
};

export const getBookingById = async (req, res) => {
  const { id } = req.params;

  try {
    const booking = await BookingTravel.findById(id);

    res.status(200).json(booking);
  } catch (error) {
    res.status(404).json({ message: error.message });
    console.log(error);
  }
};

export const createBooking = async (req, res) => {
  const booking = req.body;
  const newBooking = new BookingTravel(booking);

  try {
    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteBooking = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No booking with id: ${id}`);

  await BookingTravel.findByIdAndRemove(id);

  res.json({ message: "booking deleted successfully." });
};

export const updateSeatAvailability = async (req, res, next) => {
  try {
    await BookingTravel.updateOne(
      { "seatNumbers.number": req.params.id },
      {
        $push: {
          "seatNumbers.$.unavailableDates": req.body.date,
        },
      }
    );
    res.status(200).json("Seat booking status has been updated.");
  } catch (err) {
    next(err);
  }
};
// export const updateBooking = async (req, res) => {
//   const { id: _id } = req.params;
//   const booking = req.body;

//   if (!mongoose.Types.ObjectId.isValid(_id))
//     return res.status(404).send(`No booking with id: ${id}`);

//   const updatedBooking = await BookingTravel.findByIdAndUpdate(
//     _id,
//     booking,
//     {
//       new: true,
//     }
//   );

//   res.json(updatedBooking);
// };

export default router;
