const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    specialty: { type: mongoose.Schema.Types.ObjectId, ref: "Specialty" },
    experienceYears: { type: Number, default: 0 },
    bio: { type: String },
    phone: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Doctor", doctorSchema);
