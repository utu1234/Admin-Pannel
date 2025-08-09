const Referral = require("../models/Referral");
const Wallet = require("../models/Wallet");

// ===== Referral Controllers =====

// Get all referrals
exports.getReferrals = async (req, res) => {
  try {
    const referrals = await Referral.find().sort({ createdAt: -1 });
    res.json(referrals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get referral by ID
exports.getReferralById = async (req, res) => {
  try {
    const referral = await Referral.findById(req.params.id);
    if (!referral) return res.status(404).json({ message: "Referral not found" });
    res.json(referral);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create referral
exports.createReferral = async (req, res) => {
  try {
    const { referredBy, referredTo, bonusAmount } = req.body;
    const referral = new Referral({ referredBy, referredTo, bonusAmount });
    await referral.save();
    res.status(201).json(referral);
  } catch (error) {
    res.status(400).json({ message: "Invalid data" });
  }
};

// Update referral
exports.updateReferral = async (req, res) => {
  try {
    const { referredBy, referredTo, bonusAmount } = req.body;
    const referral = await Referral.findByIdAndUpdate(
      req.params.id,
      { referredBy, referredTo, bonusAmount },
      { new: true }
    );
    if (!referral) return res.status(404).json({ message: "Referral not found" });
    res.json(referral);
  } catch (error) {
    res.status(400).json({ message: "Invalid data" });
  }
};

// Delete referral
exports.deleteReferral = async (req, res) => {
  try {
    const referral = await Referral.findByIdAndDelete(req.params.id);
    if (!referral) return res.status(404).json({ message: "Referral not found" });
    res.json({ message: "Referral deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ===== Wallet Controllers =====

// Get all wallets
exports.getWallets = async (req, res) => {
  try {
    const wallets = await Wallet.find().sort({ createdAt: -1 });
    res.json(wallets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get wallet by ID
exports.getWalletById = async (req, res) => {
  try {
    const wallet = await Wallet.findById(req.params.id);
    if (!wallet) return res.status(404).json({ message: "Wallet not found" });
    res.json(wallet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create wallet
exports.createWallet = async (req, res) => {
  try {
    const { userId, balance } = req.body;
    const wallet = new Wallet({ userId, balance });
    await wallet.save();
    res.status(201).json(wallet);
  } catch (error) {
    res.status(400).json({ message: "Invalid data" });
  }
};

// Update wallet
exports.updateWallet = async (req, res) => {
  try {
    const { userId, balance } = req.body;
    const wallet = await Wallet.findByIdAndUpdate(
      req.params.id,
      { userId, balance },
      { new: true }
    );
    if (!wallet) return res.status(404).json({ message: "Wallet not found" });
    res.json(wallet);
  } catch (error) {
    res.status(400).json({ message: "Invalid data" });
  }
};

// Delete wallet
exports.deleteWallet = async (req, res) => {
  try {
    const wallet = await Wallet.findByIdAndDelete(req.params.id);
    if (!wallet) return res.status(404).json({ message: "Wallet not found" });
    res.json({ message: "Wallet deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
