const mongoose = require("mongoose");

const referralSchema = new mongoose.Schema(
  {
    referredBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    referredTo: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    bonusAmount: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Referral", referralSchema);
