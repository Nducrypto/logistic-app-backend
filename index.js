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

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/api/page", homeRoutes);
app.use("/api/passengerinfo", passengerinfoRoutes);
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

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((req, res) =>
    app.listen(PORT, () => console.log(`backend Running on Port:${PORT}`))
  )
  .catch((error) => console.log(`${error} did not connect`));
