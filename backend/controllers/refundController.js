const Refund = require("../models/Refund");

// Get all refunds
exports.getRefunds = async (req, res) => {
  try {
    const refunds = await Refund.find().sort({ createdAt: -1 });
    res.json(refunds);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get refund by ID
exports.getRefundById = async (req, res) => {
  try {
    const refund = await Refund.findById(req.params.id);
    if (!refund) return res.status(404).json({ message: "Refund not found" });
    res.json(refund);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create refund
exports.createRefund = async (req, res) => {
  try {
    const { userId, amount, reason, status } = req.body;
    const refund = new Refund({ userId, amount, reason, status });
    await refund.save();
    res.status(201).json(refund);
  } catch (error) {
    res.status(400).json({ message: "Invalid data" });
  }
};

// Update refund
exports.updateRefund = async (req, res) => {
  try {
    const { userId, amount, reason, status } = req.body;
    const refund = await Refund.findByIdAndUpdate(
      req.params.id,
      { userId, amount, reason, status },
      { new: true }
    );
    if (!refund) return res.status(404).json({ message: "Refund not found" });
    res.json(refund);
  } catch (error) {
    res.status(400).json({ message: "Invalid data" });
  }
};

// Delete refund
exports.deleteRefund = async (req, res) => {
  try {
    const refund = await Refund.findByIdAndDelete(req.params.id);
    if (!refund) return res.status(404).json({ message: "Refund not found" });
    res.json({ message: "Refund deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
