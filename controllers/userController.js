import express from "express";
import mongoose from "mongoose";
import UserBookingTravel from "../models/userModel.js";
import { createError } from "../utils/error.js";

const router = express.Router();

export const getUsers = async (req, res) => {
  try {
    const allusers = await UserBookingTravel.find();
    res.status(200).json(allusers);
  } catch (error) {
    res.status(404).json({ message: error.message });
    console.log(error);
  }
};

export default router;
