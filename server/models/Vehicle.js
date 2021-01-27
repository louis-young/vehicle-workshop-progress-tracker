import mongoose from "mongoose";

const schema = new mongoose.Schema({
  registration: { type: String, required: true, unique: true },
  colour: { type: String, required: true },
});

const model = mongoose.model("Vehicle", schema);

export default model;
