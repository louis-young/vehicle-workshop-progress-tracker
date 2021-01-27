import mongoose from "mongoose";

const schema = new mongoose.Schema({
  status: { type: String, required: true },
  technician: { type: String },
  vehicle: { type: String, required: true },
});

const model = mongoose.model("Update", schema);

export default model;
