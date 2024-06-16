// app.js or server.js
import mongoose from "mongoose";

// Replace the following with your MongoDB connection string.
// Make sure to replace <username>, <password>, and <dbname> with your actual database credentials.

export const connectDb = async (mongoURI) => {
  await mongoose
    .connect(mongoURI)
    .then(() => {
      console.log("Successfully connected to MongoDB");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB", err);
    });
};
