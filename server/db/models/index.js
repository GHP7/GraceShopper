const User = require('./user')
const Product = require('./product')
const Order = require('./order')

User.hasMany(Order)
Order.belongsTo(User)

Order.belongsToMany(Product, {through: 'ProductOrder'})
Product.belongsToMany(Order, {through: 'ProductOrder'})

module.exports = {
  User,
  Product,
  Order
}
