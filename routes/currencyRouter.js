const express = require('express')
const router = express.Router()
const {getAllCurrency,convertCurrency} = require('../controllers/currencyController')

router.get('/get' , getAllCurrency)
router.get('/convert', convertCurrency)

module.exports = router