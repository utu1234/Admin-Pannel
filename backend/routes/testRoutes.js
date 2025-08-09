const express = require("express");
const router = express.Router();
const testController = require("../controllers/testController");
const { protect } = require("../middleware/authMiddleware");


router.get("/", protect, testController.getAllTests);


router.post("/", protect, testController.createTest);


router.get("/:id", protect, testController.getTestById);


router.put("/:id", protect, testController.updateTest);


router.delete("/:id", protect, testController.deleteTest);

module.exports = router;