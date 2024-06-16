import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./db/connectDb.js";
import cors from "cors";
const corsOpts = {
  origin: "*",

  methods: ["GET", "POST"],
  

  allowedHeaders: ["Content-Type"],
};

const app = express();
import applicantRoute from "./routes/applicants.js";
dotenv.config();
app.use(cors(corsOpts));

app.use(express.json());
app.use("/applicant", applicantRoute);
app.get("/try", (req, res) => {
  res.send({ name: "Emmanuel" });
});

await connectDb(process.env.MONGO);
app.listen(process.env.PORT, () => {
  console.log(`Server is listening at port: ${process.env.PORT}`);
});
