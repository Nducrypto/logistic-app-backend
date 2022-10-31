import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import homeRoutes from "./routes/pageRoutes.js";
import passengerinfoRoutes from "./routes/BookedRoute.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_URL);
    console.log("connected to mongodb");
  } catch (error) {
    throw error;
  }
};

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/api/page", homeRoutes);
app.use("/api/passenger", passengerinfoRoutes);
app.use("/api/auth", userRoutes);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "something went wrong";
  return res.status(errorStatus).json({
    success: false,
    errorStatus: errorStatus,
    message: errorMessage,
    stack: err.stack,
    ndu: err.ndu,
  });
});

app.listen(5000, () => {
  connect();
  console.log("connected to backend");
});
