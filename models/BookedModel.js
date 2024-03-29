import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  fullName: String,
  type: String,
  departureTerminal: String,
  arrivalTerminal: String,
  adults: Number,
  price: String,
  nextOfKinName: String,
  nextOfKinNumber: String,
  phoneNumber: String,
  email: String,
  creator: String,
  vehicleId: String,
  bookedSeat: [],
  selectedSeats: [],
  totalPrice: Number,
  bookingCode: String,
  date: {
    type: Date,
    default: new Date(),
  },
});

const Booked = mongoose.model("Booked", postSchema);

export default Booked;
