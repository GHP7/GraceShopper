const router = require('express').Router()
const Users = require('../db/models/user')
const Products = require('../db/models/product')
const Cart = require('../db/models/cart')

router.use('/users', require('./users'))
router.use('/products', require('./products'))
router.use('/cart', require('./cart'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

module.exports = router
