const Sequelize = require("sequelize");
const db = require("../db");
const User = require("./user");

const CREATED = "CREATED";
const PROCESSING = "PROCESSING";
const CANCELLED = "CANCELLED";
const COMPLETED = "COMPLETED";

const Order = db.define("order", {
  status: {
    type: Sequelize.ENUM("CREATED", "PROCESSING", "CANCELLED", "COMPLETED"),
    allowNull: false
  },
  items: {
    type: Sequelize.ARRAY(Sequelize.JSON),
    allowNull: false
  },
  subTotal: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  }
});

Order.belongsTo(User, { as: "user" });
// User.hasMany(Review)

module.exports = {Order, CREATED, PROCESSING, CANCELLED, COMPLETED};