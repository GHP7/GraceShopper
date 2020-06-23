const router = require('express').Router()
const { Cart, User } = require('../db/models')

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
  //req.session.passport.user gets the userId that is currently logged in!! console.log works!!
  // console.log(req.session.passport.user)
  console.log(req.body.productId)
  try {
    console.log(req.body.productId)
    const newItems = await Cart.create({
      where: {
        userId: req.session.passport.user,
        productId: req.body.productId
      }
    })
    res.json(newItems)
  } catch (err) {
    res.send(err)

  }
})

router.get('/', async (req, res, next) => {
  try {
    const items = await Cart.findAll()
    res.json(items)
  } catch (error) {
    next(error)
  }
})

// router.get('/', async (req, res, next) => {
//   try {
//     const cart = await Cart.findAll();
//     res.json(cart)
//   } catch (err) {
//     next(err)
//   }
// })

module.exports = router
