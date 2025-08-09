const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
}, { timestamps: true });

module.exports = mongoose.model("Test", testSchema);