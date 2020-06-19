const router = require('express').Router()
const {Cart} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const cart = await Cart.findAll();
    res.json(cart)
  } catch (err) {
    next(err)
  }
})