const User = require('./user')
const Product = require('./product')
const Order = require('./order')
const Cart = require('./cart')

User.hasMany(Order)
Order.belongsTo(User)

User.belongsToMany(Product, {through: 'Cart', foreignKey: 'productId'})
Product.belongsToMany(User, {through: 'Cart', foreignKey: 'userId'})


module.exports = {
  User,
  Product,
  Order,
  Cart
}
