const router = require('express').Router()
const { Cart } = require('../db/models')

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

router.post('/:userId', async (req, res, next) => {
  try {
    const user = await Cart.findAll({
      where: {
        userId: req.params.userId
      }
    })
    const newItems = user.create(req.body)
    res.json(newItems)
  } catch (err) {
    res.send(err)

  }
})

router.get('/:userId', async (req, res, next) => {
  try {
    const items = await Cart.findAll({
      where: {
        userId: req.params.userId
      }
    })
    res.json(items)
  } catch (error) {
    next(error)
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

module.exports = router
