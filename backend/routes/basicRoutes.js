const express = require("express");

const router = express.Router();
const {
  getProduct,
  getSingleConsumer,
  getBonusProduct,
} = require("../controllers/basicControllers");

// GET ALL data
router.get("/allProduct/:id", getProduct);
router.get("/consumer", getSingleConsumer);
router.get("/bonusProduct", getBonusProduct);
module.exports = router;
