const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctorController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, doctorController.getDoctors);
router.post("/", protect, doctorController.createDoctor);
router.get("/:id", protect, doctorController.getDoctorById);
router.put("/:id", protect, doctorController.updateDoctor);
router.delete("/:id", protect, doctorController.deleteDoctor);

module.exports = router;
