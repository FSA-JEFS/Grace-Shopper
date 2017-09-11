/* global describe beforeEach it */

const { expect } = require("chai");
const request = require("supertest");
const db = require("../db");
const app = require("../index");
const User = db.model("user");

describe("User routes", () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  describe("/api/users/", () => {
    let cody;

    beforeEach(() => {
      return User.create({
        name: "Cody the Dog",
        email: "cody@puppybook.com",
        password: "bones",
        tags: ["hasOwnedDog", "City Apartment"],
        isAdmin: true,
        googleId: null
      }).then(user => {
        cody = user;
        return cody;
      });
    });

    it("GET /api/users", () => {
      return request(app).get("/api/users").expect(200).then(res => {
        expect(res.body).to.be.an("array");
        expect(res.body[0].email).to.be.equal("cody@puppybook.com");
      });
    });

    it("GET /api/users/:id", () => {
      return request(app).get("/api/users/" + cody.id).expect(200).then(res => {
        expect(res.body).to.be.an("object");
        expect(res.body.id).to.be.equal(cody.id);
      });
    });

    it("GET /api/users/:id returns a 404 error if the ID is not correct", () => {
      return request(app).get("/api/users/8675309").expect(404);
    });

    describe("POST /users", function() {
      it("can create a student", () => {
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

      it("post with insufficient information should fail with 500", () => {
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

      it("saves the student to the DB", () => {
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
              where: { name: "Gaspode the Dog" }
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
      it("deletes a student", () => {
        return request(app)
          .delete("/api/users/" + cody.id)
          .expect(200)
          .then(User.findAll)
          .then(users => {
            expect(users.length).to.equal(0);
          });
      });

      it("returns a 404 error if the ID is not correct", function() {
        return agent.delete("/api/users/76142896").expect(404);
      });
    });
  }); // end describe('/api/users')
}); // end describe('User routes')
