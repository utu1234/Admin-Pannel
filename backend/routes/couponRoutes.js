const express = require("express");
const router = express.Router();
const couponController = require("../controllers/couponController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, couponController.getCoupons);
router.post("/", protect, couponController.createCoupon);
router.get("/:id", protect, couponController.getCouponById);
router.put("/:id", protect, couponController.updateCoupon);
router.delete("/:id", protect, couponController.deleteCoupon);

module.exports = router;
