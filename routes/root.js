/* jshint esversion: 6 */

const express = require('express');
const Joi = require('joi');
const router = express.Router();

// getters
router.get('/', (req, res) => {
    res.send("Welcome to Streamly!");
});

module.exports = router;