const express = require('express');
const router = express.Router();

const sellerController = require('../controllers/seller');

router.post('/add-items', sellerController.additem);
router.get('/get-items', sellerController.getitems);
router.delete('/delete-items/:id', sellerController.deleteitem);

module.exports = router;