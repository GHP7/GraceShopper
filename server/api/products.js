const router = require('express').Router()
const {Product, User} = require('../db/models')
module.exports = router

// delete selected product by ID
router.delete('/:productId', async (req, res, next) => {
  try {
    const selectedProduct = await Product.findAll({
      where: {
        id: req.params.productId
      }
    })
    selectedProduct.destroy()
    res.json(`${selectedProduct} has been deleted.`)
  } catch (err) {
    next(err)
  }
})

//create new product
router.post('/', async (req, res, next) => {
  try {
    const {name, description, price, itemsInStock, imageURL} = req.body
    const newProduct = await Product.create({
      name,
      description,
      price,
      itemsInStock,
      imageURL
    })
    res.json(newProduct)
  } catch (err) {
    next(err)
  }
})

//show all products associated with selected user
router.get('/productsByUser/:userId', async (req, res, next) => {
  try {
    const productsPurchasedByUser = await Product.findAll({
      include: [
        {
          model: User,
          as: 'user',
          where: {
            id: req.params.userId
          }
        }
      ]
    })
    res.json(productsPurchasedByUser)
  } catch (err) {
    next(err)
  }
})

//display selected product by ID
router.get('/:productId', async (req, res, next) => {
  try {
    const selectedProduct = await Product.findAll({
      where: {
        id: req.params.productId
      }
    })
    res.json(selectedProduct)
  } catch (err) {
    next(err)
  }
})

//display all products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({})
    res.json(products)
  } catch (err) {
    next(err)
  }
})
