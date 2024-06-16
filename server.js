import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./db/connectDb.js";
const app = express();
import applicantRoute from './routes/applicants.js'
dotenv.config();
app.use(express.json())
app.use("/applicant",applicantRoute)
app.get("/try", (req, res) => {
  res.send({ name: "Emmanuel" });
});



await connectDb();
app.listen(process.env.PORT, () => {
  console.log(`Server is listening at port: ${process.env.PORT}`);
});
