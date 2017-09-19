/* global describe beforeEach it */

const { expect } = require("chai");
const db = require("../index");
const User = db.model("user");
const Product = db.model("products");
const Review = db.model("review");

let user1, product1, product2, review1;

let user1Promise = User.create({
  name: "Cody the Dog",
  email: "cody27@puppybook.com",
  password: "bones",
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
let reviewText =
  "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas sed diam eget risus varius blandit sit amet non magna.";
let review1Promise = Review.create({
  reviewText: reviewText
});

describe("review model", () => {
  beforeEach(() => {
    return db
      .sync({ force: true })
      .then(() => {
        return Promise.all([user1Promise, product1Promise, product2Promise]);
      })
      .then(result => {
        [user1, product1, product2] = result;
        review1 = review1Promise;
      });
  });

  describe("attributes definition", function () {
    it("includes `reviewText` field", function () {
      return Review.create({
        reviewText
      }).then(function (review) {
        expect(review.reviewText).to.equal(reviewText);
      });
    });

    it("reviewText must be at least 100 characters length", function () {
      return Review.build({
        reviewText: "tooshort"
      })
        .validate()
        .then(
        function () {
          throw new Error(
            "validation should fail when review text is too short"
          );
        },
        function (result) {
          expect(result).to.be.an.instanceOf(Error);
          expect(result.message).to.contain("Validation error");
        }
        );
    });
  });

  describe("associations", function () {
    /**
     * Add a `belongsTo` relationship between order and user,
     * but make sure the user is aliased as `user` for each user.
     *
     * http://sequelize.readthedocs.io/en/v3/docs/associations/#belongsto
     */
    it("belongs to a user, who is stored as the review's `user`", function () {
      var creatingUser = User.create({
        name: "Cody the Dog",
        email: "cody2@puppybook.com",
        password: "bones",
        tags: ["hasOwnedDog", "City Apartment"],
        isAdmin: true,
        googleId: null
      });
      var creatingReview = Review.create({
        reviewText
      });

      return Promise.all([creatingUser, creatingReview])
        .then(([u, r]) => {
          // this method `setUser` method automatically exists if you set up the association correctly
          user1 = u;
          return r.setUser(u);
        })
        .then(function () {
          return Review.findOne({
            where: { userId: user1.id },
            include: { model: User, as: "user" }
          });
        })
        .then(function (foundReview) {
          expect(foundReview.user).to.exist; // eslint-disable-line no-unused-expressions
          expect(foundReview.user.name).to.equal(user1.name);
        });
    });

    it("belongs to a product, which is stored as the review's `product`", function () {
      var creatingUser = User.create({
        name: "Cody the Dog",
        email: "cody@puppybook.com",
        password: "bones",
        tags: ["hasOwnedDog", "City Apartment"],
        isAdmin: true,
        googleId: null
      });
      var creatingProduct = Product.create({
        name: "Milkshakes",
        breed: "spaniel",
        breeder: "Jannine",
        breederEmail: "j@pew.com",
        description: "eiugrh fIOWAHGUIRW ofejhguieroils",
        price: 500,
        photos: ["http://cdn1-www.dogtime.com/assets/uploads/gallery/english-spaniel-dog-breed-pictures/8-fullbody.jpg"],
        tags: ["social", "wet", "beach-friendly"],
        inventory: 5
      })
      var creatingReview = Review.create({
        reviewText
      });

      return Promise.all([creatingUser, creatingReview, creatingProduct])
        .then(([u, r, p]) => {
          // this method `setUser` method automatically exists if you set up the association correctly
          user1 = u;
          product1 = p;
          return r.setUser(u)
          .then( () => r.setProduct(p) );
        })
        .then(function () {
          return Review.findOne({
            where: { userId: user1.id },
            include: { all: true}
          });
        })
        .then(function (foundReview) {
          expect(foundReview.user).to.exist; // eslint-disable-line no-unused-expressions
          expect(foundReview.user.name).to.equal(user1.name);
        });
    });
  });
}); // end describe('Order model')
