const Sequelize = require('sequelize')
const db = require('../db')
const {Cart, Product} = require('../models')

const CartProduct = db.define('cartProduct', {
  productId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Product,
      key: 'id'
    }
  },
  cartId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Cart,
      key: 'id'
    }
  },
  amount: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  freezePrice: {
    type: Sequelize.INTEGER,
    defaultValue: null
  }
})

module.exports = CartProduct
