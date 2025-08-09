const express = require("express");
const router = express.Router();
const patientController = require("../controllers/patientController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, patientController.getPatients);
router.post("/", protect, patientController.createPatient);
router.get("/:id", protect, patientController.getPatientById);
router.put("/:id", protect, patientController.updatePatient);
router.delete("/:id", protect, patientController.deletePatient);

module.exports = router;
