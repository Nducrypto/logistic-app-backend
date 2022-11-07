import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    bio: {
      type: String,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },

  { timestamps: true }
);

const UserLogisticApp = mongoose.model("UserLogisticApp", userSchema);

export default UserLogisticApp;
