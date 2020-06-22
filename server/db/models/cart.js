const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
  status: {
    type: Sequelize.STRING,
    defaultValue: 'ACTIVE'
  },
  items: {
    type: Sequelize.JSON,
    allowNull: false
  },
  subtotal: {
    type: Sequelize.INTEGER
  }
})

module.exports = Cart
