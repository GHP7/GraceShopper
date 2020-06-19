const router = require('express').Router()
const {Product, User} = require('../db/models')

// [ ] To-do trycatch all routers
// [ ] To-do conditionals for found consts

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
    if (selectedProduct) {
      res.status(200).json(selectedProduct)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    next(err)
  }
})

//display all products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    if (products) {
      res.status(200).json(products)
    } else {
      res.sendStatus(404)
    }
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

module.exports = router