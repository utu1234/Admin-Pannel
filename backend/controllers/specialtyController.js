const Specialty = require("../models/Specialty");

// Get all specialties
exports.getSpecialties = async (req, res) => {
  try {
    const specialties = await Specialty.find().sort({ createdAt: -1 });
    res.json(specialties);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get specialty by ID
exports.getSpecialtyById = async (req, res) => {
  try {
    const specialty = await Specialty.findById(req.params.id);
    if (!specialty) {
      return res.status(404).json({ message: "Specialty not found" });
    }
    res.json(specialty);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Create new specialty
exports.createSpecialty = async (req, res) => {
  try {
    const { name, description } = req.body;
    const existing = await Specialty.findOne({ name });
    if (existing) {
      return res.status(400).json({ message: "Specialty already exists" });
    }

    const specialty = new Specialty({ name, description });
    await specialty.save();
    res.status(201).json(specialty);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Update specialty
exports.updateSpecialty = async (req, res) => {
  try {
    const { name, description } = req.body;
    const specialty = await Specialty.findById(req.params.id);
    if (!specialty) {
      return res.status(404).json({ message: "Specialty not found" });
    }

    specialty.name = name || specialty.name;
    specialty.description = description || specialty.description;

    await specialty.save();
    res.json(specialty);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Delete specialty
exports.deleteSpecialty = async (req, res) => {
  try {
    const specialty = await Specialty.findById(req.params.id);
    if (!specialty) {
      return res.status(404).json({ message: "Specialty not found" });
    }
    await specialty.remove();
    res.json({ message: "Specialty deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
