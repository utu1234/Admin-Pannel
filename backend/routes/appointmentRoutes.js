const express = require("express");
const router = express.Router();
const appointmentController = require("../controllers/appointmentController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, appointmentController.getAppointments);
router.post("/", protect, appointmentController.createAppointment);
router.get("/:id", protect, appointmentController.getAppointmentById);
router.put("/:id", protect, appointmentController.updateAppointment);
router.delete("/:id", protect, appointmentController.deleteAppointment);

module.exports = router;
