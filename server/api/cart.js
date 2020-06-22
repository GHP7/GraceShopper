const router = require('express').Router()
const { Cart } = require('../db/models')
module.exports = router

router.delete('/:productId', async (req, res, next) => {
  try {
    const itemToRemove = await Cart.findAll({
      where: {
        items: req.params.productId
      }
    })
    const removeItem = await itemToRemove.destroy()
    res.json(`${removeItem} has been removed from your cart.`)
  } catch (err) {
    next(err)
  }
})

router.put('/', async (req, res, next) => {
  try {
    const updatedItem = await Cart.update({
      status: 'ACTIVE',
      items: req.body
    })
    res.json(updatedItem)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newItem = await Cart.create({
      items: req.body
    })
    res.status(201).json(newItem)
  } catch (err) {
    res.status(404).send('Cannot add to cart!')
  }
})

router.get('/', async (req, res, next) => {
  try {
    const cart = await Cart.findAll();
    res.json(cart)
  } catch (err) {
    next(err)
  }
})
