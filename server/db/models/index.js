const User = require('./user')
const Product = require('./product')
const Order = require('./order')
const Cart = require('./cart')

User.hasMany(Order)
Order.belongsTo(User)

Order.belongsToMany(Product, {through: 'Cart'})
Product.belongsToMany(Order, {through: 'Cart'})

module.exports = {
  User,
  Product,
  Order,
  Cart
}
