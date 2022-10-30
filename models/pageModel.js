import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    type: String,
    departureTerminal: String,
    arrivalTerminal: String,
    adults: Number,
    price: String,
    seats: [],
    seatNumbers: [{ number: Number, unavailableDates: { type: [Date] } }],
  },

  { timestamps: true }
);

const BookingTravel = mongoose.model("BookingTravel", postSchema);

export default BookingTravel;
