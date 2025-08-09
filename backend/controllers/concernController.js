const Concern = require("../models/Concern");

exports.getConcerns = async (req, res) => {
  try {
    const concerns = await Concern.find().sort({ createdAt: -1 });
    res.json(concerns);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getConcernById = async (req, res) => {
  try {
    const concern = await Concern.findById(req.params.id);
    if (!concern) return res.status(404).json({ message: "Concern not found" });
    res.json(concern);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createConcern = async (req, res) => {
  try {
    const { title, description } = req.body;
    const concern = new Concern({ title, description });
    await concern.save();
    res.status(201).json(concern);
  } catch (error) {
    res.status(400).json({ message: "Invalid data" });
  }
};

exports.updateConcern = async (req, res) => {
  try {
    const { title, description } = req.body;
    const concern = await Concern.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true }
    );
    if (!concern) return res.status(404).json({ message: "Concern not found" });
    res.json(concern);
  } catch (error) {
    res.status(400).json({ message: "Invalid data" });
  }
};

exports.deleteConcern = async (req, res) => {
  try {
    const concern = await Concern.findByIdAndDelete(req.params.id);
    if (!concern) return res.status(404).json({ message: "Concern not found" });
    res.json({ message: "Concern deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
