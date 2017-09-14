const Sequelize = require("sequelize");
const db = require("../db");
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


module.exports = Review;
