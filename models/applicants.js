import mongoose from "mongoose";

const Schema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  complexion: { type: Number, required: true },
  phoneNO: { type: Number, required: true },
  birthday: { type: Date, Default: Date.now() },
  hometown: { type: String, required: true },
  address: { type: String, required: true },
  nationality: { type: String, required: true },
  zipCode: { type: Number, required: true },
  lastMovie: { type: String, required: true },
  visitedProduction: { type: String, required: true },
  isPrevProduction: { type: Boolean, required: true },
  isHavingCert: { type: Boolean, required: true },
  langsSpoken: { type: Array },
  occupation: { type: String, required: true },
  whyActing: { type: String },
});

const applicantModel = mongoose.Model("Applicant", Schema);
export default applicantModel;
