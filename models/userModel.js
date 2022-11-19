import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    firstName: String,

    lastName: String,

    phoneNumber: String,

    bio: String,

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },

  { timestamps: true }
);

const UserLogisticApp = mongoose.model("UserLogisticApp", userSchema);

export default UserLogisticApp;
