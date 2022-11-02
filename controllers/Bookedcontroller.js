import express from "express";
import mongoose from "mongoose";
import Booked from "../models/BookedModel.js";

const router = express.Router();

export const getInfo = async (req, res) => {
  try {
    const info = await Booked.find().sort({ _id: -1 });
    res.status(200).json(info);
  } catch (error) {
    res.status(404).json({ message: error.message });
    console.log(error);
  }
};

export const createInfo = async (req, res) => {
  const info = req.body;
  const newInfo = new Booked(info);
  try {
    await newInfo.save();
    res.status(201).json(newInfo);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteInfo = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No booking with id: ${id}`);

  await Booked.findByIdAndRemove(id);

  res.json({ message: "booking deleted successfully." });
};

export default router;
