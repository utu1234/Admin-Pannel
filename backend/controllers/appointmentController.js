const Appointment = require("../models/Appointment");

exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate("doctor")
      .populate("patient")
      .sort({ date: -1 });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id)
      .populate("doctor")
      .populate("patient");
    if (!appointment) return res.status(404).json({ message: "Appointment not found" });
    res.json(appointment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createAppointment = async (req, res) => {
  try {
    const { doctor, patient, date, reason } = req.body;
    const appointment = new Appointment({ doctor, patient, date, reason });
    await appointment.save();
    res.status(201).json(appointment);
  } catch (error) {
    res.status(400).json({ message: "Invalid data" });
  }
};

exports.updateAppointment = async (req, res) => {
  try {
    const { doctor, patient, date, reason } = req.body;
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { doctor, patient, date, reason },
      { new: true }
    );
    if (!appointment) return res.status(404).json({ message: "Appointment not found" });
    res.json(appointment);
  } catch (error) {
    res.status(400).json({ message: "Invalid data" });
  }
};

exports.deleteAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndDelete(req.params.id);
    if (!appointment) return res.status(404).json({ message: "Appointment not found" });
    res.json({ message: "Appointment deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
