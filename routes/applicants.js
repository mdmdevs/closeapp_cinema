import mongoose from "mongoose";

const Schema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  complexion: { type: Number, required: true },
  phone: { type: Number, required: true },
  birthday: { type: Date, Default: Date.now() },
  homeTown: { type: String, required: true },
  Address: { type: String, required: true },
  nationality: { type: String, required: true },
  zipCode: { type: Number, required: true },
  lastMovieFeatured: { type: String, required: true },
  visitedProduction: { type: String, required: true },
  isPrevProductions: { type: Boolean, required: true },
  isHavingCert: { type: Boolean, required: true },
  languagesSpoken: { type: Array },
  currentOccupation: { type: String, required: true },
  whyActing: { type: String },
  isWithness: { type: Boolean, required: true },
});
