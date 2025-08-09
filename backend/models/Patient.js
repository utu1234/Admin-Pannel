const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    age: { type: Number },
    gender: { type: String, enum: ["male", "female", "other"] },
    phone: { type: String },
    address: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Patient", patientSchema);
