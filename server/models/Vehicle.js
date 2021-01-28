import mongoose from "mongoose";

const schema = new mongoose.Schema({
  registration: { type: String, required: true, unique: true },
  make: { type: String, required: true },
  model: { type: String, required: true },
  colour: { type: String, required: true },
  fuel: { type: String, required: true },
  engine: { type: Number, required: true },
});

const model = mongoose.model("Vehicle", schema);

export default model;
