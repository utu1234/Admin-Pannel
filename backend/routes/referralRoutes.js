const express = require("express");
const router = express.Router();
const referralController = require("../controllers/referralWalletController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, referralController.getReferrals);
router.post("/", protect, referralController.createReferral);
router.get("/:id", protect, referralController.getReferralById);
router.put("/:id", protect, referralController.updateReferral);
router.delete("/:id", protect, referralController.deleteReferral);

module.exports = router;
