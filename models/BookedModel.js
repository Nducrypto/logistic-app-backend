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
  date: {
    type: Date,
    default: new Date(),
  },
  selectedSeats: [],
});

const Booked = mongoose.model("Booked", postSchema);

export default Booked;
