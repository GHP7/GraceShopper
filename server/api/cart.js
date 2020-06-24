const router = require('express').Router()
const { Cart, User, Product } = require('../db/models')

router.put('/user', async (req, res, next) => {
  try {
    console.log(req.body)
    const updatedItem = await Cart.update({
      quantity: req.body.quantity,
      subtotal: req.body.subtotal,
    }, {where: {
      productId: req.body.productId
    }})
    console.log(updatedItem)
    res.json(updatedItem)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  //req.session.passport.user gets the userId that is currently logged in!! console.log works!!
  try {
    const newItems = await Cart.create({
        userId: req.session.passport.user,
        productId: req.body.productId,
        quantity: 1
    })
    res.json(newItems)
  } catch (err) {
    res.send(err)

  }
})

router.get('/productsByUser/', async (req, res, next) => {
  try {
    let productsPurchasedByUser = [];
    // get user's cart
    const usersCart = await Cart.findAll({
      where: {
        userId: req.session.passport.user
      }
    })
    // gets all products associated with user
    for (let i = 0; i < usersCart.length; i++) {
      let productId = usersCart[i].productId
      const product = await Product.findByPk(productId)
      productsPurchasedByUser.push(product)
    }
    res.json(productsPurchasedByUser)
  } catch (err) {
    next(err)
  }
})


// this gets cart related to user logged in!!
router.get('/user', async (req, res, next) => {
  try {
    const items = await Cart.findAll({
      where: {
        userId: req.session.passport.user
      }
    })
    res.json(items)
  } catch (error) {
    next(error)
  }
})

router.delete('/user', async (req, res, next) => {
  try {
    console.log(req.body)
    const itemToRemove = await Cart.destroy({
      where: {
        userId: req.session.passport.user,
        productId: req.body.productId
      }
    })
    res.json(`${itemToRemove} has been removed from your cart.`)
  } catch (err) {
    next(err)
  }
})

// this gets all carts in the database!!
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
