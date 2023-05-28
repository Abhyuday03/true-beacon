const express = require("express");
const router = new express.Router();
const controller = require("../controllers/orderController");
const auth = require("../middleware/auth");

router.post("/addOrder", auth, controller.addOrder);
router.get("/getOrder", auth, controller.getOrder);

module.exports = router;
