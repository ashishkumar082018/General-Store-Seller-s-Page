const express = require('express');
const router = express.Router();

const sellerController = require('../controllers/seller');

router.post('/add-items', sellerController.additem);
router.get('/get-items', sellerController.getitems);
router.post('/buy-items/:id', sellerController.buyitem);

module.exports = router;