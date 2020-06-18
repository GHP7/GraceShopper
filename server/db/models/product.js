const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  },
  itemsInStock: {
    type: Sequelize.INTEGER
  },
  imageURL: {
    type: Sequelize.STRING,
    defaultValue: 'https://i.pinimg.com/originals/a5/60/bd/a560bd923578934b33177d157f12c899.png'
  }
})

module.exports = User
