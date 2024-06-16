import mongoose from "mongoose";

const Schema = mongoose.Schema({
  name: { type: String, unique: true },
  age: { type: Number },
  height: { type: Number },
  weight: { type: Number },
  complexion: { type: Number },
  phoneNO: { type: Number },
  birthday: { type: Date, Default: Date.now() },
  hometown: { type: String },
  address: { type: String },
  nationality: { type: String },
  zipCode: { type: Number },
  lastMovie: { type: String },
  visitedProduction: { type: String },
  isPrevProduction: { type: Boolean },
  isHavingCert: { type: Boolean },
  langsSpoken: { type: Array },
  occupation: { type: String },
  whyActing: { type: String },
});

const applicantModel = mongoose.model("Applicant", Schema);
export default applicantModel;
