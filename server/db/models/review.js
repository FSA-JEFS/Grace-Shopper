const Sequelize = require("sequelize");
const db = require("../db");
const User = require("./user");
const Review = db.define("review", {
  reviewText: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      len: {
        args: 100,
        msg: "Review text must be atleast 100 characters in length"
      }
    }
  }
});

Review.belongsTo(User, { as: "user" });
// User.hasMany(Review)

module.exports = Review;
