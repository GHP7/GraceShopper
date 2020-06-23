const User = require('./user')
const Product = require('./product')
const Order = require('./order')
const Cart = require('./cart')

User.hasMany(Order)
Order.belongsTo(User)

User.belongsToMany(Product, {through: 'Cart'})
Product.belongsToMany(User, {through: 'Cart'})


module.exports = {
  User,
  Product,
  Order,
  Cart
}
