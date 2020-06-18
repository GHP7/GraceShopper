const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isIn: [['active', 'completed', 'deleted', 'empty']]
    }
  },
  items: {
    type: Sequelize.ARRAY(Sequelize.JSON),
    allowNull: false
  },
  subtotal: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Cart
