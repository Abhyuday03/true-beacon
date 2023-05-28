const express = require("express");
const router = new express.Router();
const controller = require("../controllers/userController");

router.post("/signUp", controller.signUpUser);
router.post("/login", controller.loginUser);
router.post("/logout", controller.logoutUser);

module.exports = router;
