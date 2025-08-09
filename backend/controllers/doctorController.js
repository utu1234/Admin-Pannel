const Doctor = require("../models/Doctor");

// Get all doctors
exports.getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find().sort({ createdAt: -1 });
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get doctor by ID
exports.getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });
    res.json(doctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create doctor
exports.createDoctor = async (req, res) => {
  try {
    const { name, specialty, email, phone } = req.body;
    const doctor = new Doctor({ name, specialty, email, phone });
    await doctor.save();
    res.status(201).json(doctor);
  } catch (error) {
    res.status(400).json({ message: "Invalid data" });
  }
};

// Update doctor
exports.updateDoctor = async (req, res) => {
  try {
    const { name, specialty, email, phone } = req.body;
    const doctor = await Doctor.findByIdAndUpdate(
      req.params.id,
      { name, specialty, email, phone },
      { new: true }
    );
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });
    res.json(doctor);
  } catch (error) {
    res.status(400).json({ message: "Invalid data" });
  }
};

// Delete doctor
exports.deleteDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });
    res.json({ message: "Doctor deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
