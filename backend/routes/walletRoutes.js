const express = require("express");
const router = express.Router();
const walletController = require("../controllers/referralWalletController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, walletController.getWallets);
router.post("/", protect, walletController.createWallet);
router.get("/:id", protect, walletController.getWalletById);
router.put("/:id", protect, walletController.updateWallet);
router.delete("/:id", protect, walletController.deleteWallet);

module.exports = router;
