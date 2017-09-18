/* global describe beforeEach it */

const { expect } = require("chai");
const request = require("supertest");
const db = require("../db");
const app = require("../index");
const User = db.model("user");
const Order = db.model("order");

// Auxiliary function.
const adminLogin = { email: "cody@puppybook.com", password: "bones" };
function promisedAuthRequest(loginDetails) {
  var authenticatedagent2b = request.agent(app);
  return new Promise((resolve, reject) => {
    authenticatedagent2b
      .post("/auth/login")
      .send(loginDetails)
      .end(function(error, response) {
        if (error) reject(error);
        resolve(authenticatedagent2b);
      });
  });
}

xdescribe("User routes", () => {
  describe("/api/users/", () => {
    let cody;

    beforeEach(() => {
      return db
        .sync({ force: true })
        .then(() => {
          return User.create({
            name: "Cody the Dog",
            email: "cody@puppybook.com",
            password: "bones",
            tags: ["hasOwnedDog", "City Apartment"],
            isAdmin: true,
            googleId: null
          });
        })
        .then(user => {
          cody = user;
          return cody;
        });
    });

    /**
   * Also, we empty the tables after each spec
   */

    afterEach(() => {
      return User.truncate({ cascade: true });
    });

    describe("GET /api/users/:id/orders", () => {
      it("returns a list of orders from the specific user", () => {
        return User.create({
          name: "Cody2 the Dog",
          email: "cody2@puppybook.com",
          password: "bo2nes",
          tags: ["hasOwne2Dog", "City 2Apartment"],
          isAdmin: true,
          googleId: null
        })
          .then(usr => {
            cody = usr;
            return Order.create({
              status: "CREATED",
              items: [
                {
                  productId: 1,
                  quantity: 1
                }
              ],
              subTotal: 500,
              userId: cody.id
            });
          })
          .then(order => {
            return promisedAuthRequest(adminLogin).then(agent =>
              agent
                .get("/api/users/" + cody.id + "/orders")
                .expect(200)
                .then(res => {
                  expect(res.body).to.be.an("array");
                  expect(res.body).to.have.lengthOf(1);
                })
            );
          });
      });
    });

    it("GET /api/users", () => {
      return promisedAuthRequest(adminLogin).then(agent =>
        agent.get("/api/users").expect(200).then(res => {
          expect(res.body).to.be.an("array");
          expect(res.body[0].email).to.be.equal("cody@puppybook.com");
        })
      );
    });

    it("GET /api/users/:id", () => {
      return promisedAuthRequest(adminLogin).then(agent =>
        agent.get("/api/users/" + cody.id).expect(200).then(res => {
          expect(res.body).to.be.an("object");
          expect(res.body.id).to.be.equal(cody.id);
        })
      );
    });

    it("GET /api/users/:id returns a 404 error if the ID is not correct", () => {
      return promisedAuthRequest(adminLogin).then(agent =>
        agent.get("/api/users/8675309").expect(404)
      );
    });

    describe("POST /users", function() {
      it("can create a user", () => {
        return request(app)
          .post("/api/users")
          .send({
            name: "Gaspode the Dog",
            email: "gaspode@discworld.com",
            password: "bugrit",
            tags: ["isSewerDog", "CanTalk"],
            isAdmin: false,
            googleId: null
          })
          .expect(200)
          .then(res => {
            expect(res.body).to.be.an("object");
            expect(res.body.id).to.not.be.an("undefined");
            expect(res.body.name).to.equal("Gaspode the Dog");
          });
      });

      xit("post with insufficient information should fail with 500", () => {
        return request(app)
          .post("/api/users")
          .send({
            email: "gaspode@discworld.com",
            password: "bugrit",
            tags: ["isSewerDog", "CanTalk"],
            isAdmin: false,
            googleId: null
          })
          .expect(500);
      });

      xit("saves the student to the DB", () => {
        return request(app)
          .post("/api/users")
          .send({
            name: "Gaspode the Dog",
            email: "gaspode@discworld.com",
            password: "bugrit",
            tags: ["isSewerDog", "CanTalk"],
            isAdmin: false,
            googleId: null
          })
          .expect(200)
          .then(function() {
            return User.findOne({
              where: {
                name: "Gaspode the Dog"
              }
            });
          })
          .then(function(foundUser) {
            expect(foundUser).to.exist;
            expect(foundUser.email).to.equal("gaspode@discworld.com");
            expect(foundUser.createdAt).to.exist;
          });
      });
    });

    describe("DELETE /users", () => {
      it("deletes a user", () => {
        return promisedAuthRequest(adminLogin).then(agent =>
          agent
            .delete("/api/users/" + cody.id)
            .expect(200)
            .then(() => User.findAll())
            .then(users => {
              expect(users.length).to.equal(0);
            })
        );
      });

      it("returns a 404 error if the ID is not correct", function() {
        return promisedAuthRequest(adminLogin).then(agent =>
          agent.delete("/api/users/76142896").expect(404)
        );
      });
    });

    describe("PUT /users", () => {
      it("updates a user", () => {
        return promisedAuthRequest(adminLogin).then(agent =>
          agent
            .put("/api/users/" + cody.id)
            .send({
              name: "Loki"
            })
            .expect(200)
            .expect(response => {
              expect(response.body.name).to.equal("Loki");
              expect(response.body.email).to.equal(cody.email);
            })
        );
      });

      it("saves update to the DB", () => {
        return promisedAuthRequest(adminLogin).then(agent =>
          agent
            .put("/api/users/" + cody.id)
            .send({
              name: "Loki"
            })
            .then(() => User.findById(cody.id))
            .then(user => {
              expect(user.dataValues.name).to.equal("Loki");
              expect(user.dataValues.email).to.equal(cody.email);
            })
        );
      });

      it("returns a 404 error if the ID is not correct", function() {
        return promisedAuthRequest(adminLogin).then(agent =>
          agent
            .put("/api/users/76344667")
            .send({
              name: "Loki"
            })
            .expect(404)
        );
      });
    });
  }); // end describe('/api/users')
}); // end describe('User routes')
