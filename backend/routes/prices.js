const express = require("express");
const router = new express.Router();
const controller = require("../controllers/priceController");

router.post('/addPriceFromCsv',controller.addPricesFromCsv)
router.get('/getPrices',controller.getPrices)

module.exports = router;