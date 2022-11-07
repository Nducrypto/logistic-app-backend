import express from "express";
import mongoose from "mongoose";
import UserLogisticApp from "../models/userModel.js";
import { createError } from "../utils/error.js";

const router = express.Router();

export const getUsers = async (req, res) => {
  try {
    const allusers = await UserLogisticApp.find();
    res.status(200).json(allusers);
  } catch (error) {
    next(createError(401, "error making Users request"));
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const user = await UserLogisticApp.find({ _id: req.params.id });
    res.status(200).json(user);
  } catch (err) {
    next(createError(401, "error making user request"));
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const user = await UserLogisticApp.findById(req.params.id);

    if (user) {
      const { _id, email, bio, userName, firstName, lastName } = user;
      user.email = email;
      user.userName = req.body.userName || userName;
      user.firstName = req.body.firstName || firstName;
      user.lastName = req.body.lastName || lastName;
      user.bio = req.body.bio || bio;
    }
    const updatedUser = await user.save();
    res.status(200).json(updatedUser);
  } catch (err) {
    next(createError(401, "failed to update"));
  }
};

export default router;
