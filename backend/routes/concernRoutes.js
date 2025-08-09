const express = require("express");
const router = express.Router();
const concernController = require("../controllers/concernController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, concernController.getConcerns);
router.post("/", protect, concernController.createConcern);
router.get("/:id", protect, concernController.getConcernById);
router.put("/:id", protect, concernController.updateConcern);
router.delete("/:id", protect, concernController.deleteConcern);

module.exports = router;
