
const express = require('express')
const { model } = require('mongoose')

const router =express.Router()

const productsApp = require('../controllers/products')


router.get('/',productsApp.getAllProducts)
router.get('/static',productsApp.getAllProductsStatic)

module.exports = router