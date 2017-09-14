const User = require('./user')
const Product = require('./product')
const Review = require('./review')
const Order = require('./order')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

Review.belongsTo(User, { as: "user" });
Review.belongsTo(Product, { as: "product" });
Product.hasMany(Review, { as: "review" });
Order.belongsTo(User, { as: "user" });

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Product,
  Review,
  Order
}
