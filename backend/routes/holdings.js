const express = require("express");
const router = new express.Router();
const controller = require("../controllers/holdingsController");
const auth = require("../middleware/auth");

router.get("/getHoldings", controller.getHoldings);
router.post("/addHoldings", controller.addHolding);

module.exports = router;
