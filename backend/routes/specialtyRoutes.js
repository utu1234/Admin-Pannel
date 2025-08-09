const express = require("express");
const router = express.Router();
const specialtyController = require("../controllers/specialtyController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, specialtyController.getSpecialties);
router.post("/", protect, specialtyController.createSpecialty);
router.get("/:id", protect, specialtyController.getSpecialtyById);
router.put("/:id", protect, specialtyController.updateSpecialty);
router.delete("/:id", protect, specialtyController.deleteSpecialty);

module.exports = router;
