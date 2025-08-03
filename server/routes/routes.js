const express = require('express');
const router = express.Router();
const { getAllProducts, addProducts, deleteProduct } = require('../controllers/controllers');

// GET
router.get('/cart', getAllProducts);

// POST
router.post('/addto', addProducts);

// DELETE
router.delete('/delete/:id', deleteProduct);

module.exports = router;
