/* global describe beforeEach it */

const {
  expect
} = require("chai");
const db = require("../index");
const User = db.model("user");
const Product = db.model("products");
const Order = db.model("order");

let user1, product1, product2, order1;

let user1Promise = User.create({
  name: "Cody2 the Dog",
  email: "cody2@puppybook.com",
  password: "bones2",
  tags: ["hasOwnedDog", "City Apartment"],
  isAdmin: true,
  googleId: null
});
let product1Promise = Product.create({
  name: "Milkshakes",
  breed: "spaniel",
  breeder: "Jannine",
  breederEmail: "j@pew.com",
  description: "eiugrh fIOWAHGUIRW ofejhguieroils",
  price: 500,
  photos: [
    "http://cdn1-www.dogtime.com/assets/uploads/gallery/english-spaniel-dog-breed-pictures/8-fullbody.jpg"
  ],
  tags: ["social", "wet", "beach-friendly"],
  inventory: 5
});
let product2Promise = Product.create({
  name: "Milkshakes2",
  breed: "spaniel2",
  breeder: "Jannine2",
  breederEmail: "j@pew.com",
  description: "eiugrh fIOWAHGUIRW ofejhguieroils",
  price: 500,
  photos: [
    "http://cdn1-www.dogtime.com/assets/uploads/gallery/english-spaniel-dog-breed-pictures/8-fullbody.jpg"
  ],
  tags: ["social", "wet", "beach-friendly"],
  inventory: 5
});

const CREATED = "CREATED";
const PROCESSING = "PROCESSING";
const CANCELLED = "CANCELLED";
const COMPLETED = "COMPLETED";

describe("order model", () => {
  beforeEach(() => {
    return db
      .sync({
        force: true
      })
  });

  describe("attributes definition", function () {
    it("includes `status, subTotal, & items` field", function () {
      return product1Promise
        .then(product1 => {
          return Order.create({
            status: CREATED,
            items: [{
              productId: product1,
              quantity: 2,
              price: 100
            }]
          })
        })
        .then(function (order) {
          expect(order.status).to.equal(CREATED);
          expect(order.items).to.have.length(1);
          expect(order.subTotal).to.equal(200);
        });
    });
  });

  describe("associations", function () {
    /**
     * Add a `belongsTo` relationship between order and user,
     * but make sure the user is aliased as `user` for each user.
     *
     * http://sequelize.readthedocs.io/en/v3/docs/associations/#belongsto
     */
    it("belongs to a user, who is stored as the order's `user`", function () {
      var creatingUser = User.create({
        name: "Cody3 the Dog",
        email: "cody3@puppybook.com",
        password: "bones",
        tags: ["hasOwnedDog", "City Apartment"],
        isAdmin: true,
        googleId: null
      });
      
      var creatingOrder = product1Promise
        .then(product1 => {
          return Order.create({
            status: CREATED,
            items: [{
              productId: product1,
              quantity: 2,
              price: 100
            }]
          })
        })

      return Promise.all([creatingUser, creatingOrder])
        .then(([u, r]) => {
          // this method `setUser` method automatically exists if you set up the association correctly
          user1 = u;
          return r.setUser(u);
        })
        .then(function () {
          return Order.findOne({
            where: {
              userId: user1.id
            },
            include: {
              model: User,
              as: "user"
            }
          });
        })
        .then(function (foundOrder) {
          expect(foundOrder.user).to.exist; // eslint-disable-line no-unused-expressions
          expect(foundOrder.user.name).to.equal(user1.name);
        });
    });
  });
}); // end describe('Order model')