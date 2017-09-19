const Sequelize = require("sequelize");
const db = require("../db");

const Order = db.define("order", {
  status: {
    type: Sequelize.ENUM("CREATED", "PROCESSING", "CANCELLED", "COMPLETED"),
    defaultValue: "CREATED",
    allowNull: false
  },
  items: {
    // structure: {product: {Product}, quantity: X, price: X}
    type: Sequelize.ARRAY(Sequelize.JSON),
    allowNull: false
  },
  subTotal: {
      type: Sequelize.VIRTUAL,
      get: function() {
        if (this.items && this.items.length)
          return this.items.map(item => item.quantity * item.price).reduce((a,b) => a + b, 0)
        else {
          return 0
        }
      }
  },
  recipientName: {
    type: Sequelize.STRING
  },
  confirmationEmail: {
    type: Sequelize.STRING
  },
  recipientAddress: {
    type: Sequelize.STRING
  },
  recipientPhone: {
    type: Sequelize.STRING
  },
  specialInstructions: {
    type: Sequelize.STRING
  }
});

module.exports = Order;

// TODO: create join table for items (products) and order