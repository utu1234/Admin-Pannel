const express = require("express");
const router = express.Router();
const refundController = require("../controllers/refundController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, refundController.getRefunds);
router.post("/", protect, refundController.createRefund);
router.get("/:id", protect, refundController.getRefundById);
router.put("/:id", protect, refundController.updateRefund);
router.delete("/:id", protect, refundController.deleteRefund);

module.exports = router;
