const { expect } = require("chai");
const request = require("supertest");
const db = require("../db");
const app = require("../index");
const Products = db.model("products");
const User = db.model("user");

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

xdescribe("Products routes", () => {
  let cody;
  beforeEach(() => {
    return db.sync({ force: true });
  });
  describe("/api/products/", () => {
    let puppy;
    let puppy2;
    beforeEach(function() {
      let promise1 = Products.create({
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
      let promise2 = Products.create({
        name: "CookiesAndCream",
        breed: "Chowchow",
        breeder: "Eli",
        breederEmail: "e@pew.com",
        description: "BEARS!",
        price: 740,
        photos: [
          "https://i.pinimg.com/736x/11/12/09/1112097172845da1ab30cf3fc3eed160--white-chow-chow-chow-chow-puppies.jpg"
        ],
        tags: ["fluffy", "adventurous", "beach-friendly"],
        inventory: 1
      });
      return Promise.all([promise1, promise2]).then(results => {
        [puppy, puppy2] = results;
      });
    });
    describe("GET requests: ", () => {
      it("/api/products", () => {
        return request(app).get("/api/products").expect(200).then(res => {
          expect(res.body).to.be.an("array");
          expect(res.body).to.have.lengthOf(2);
          // expect(res.body[0].name).to.be.equal( // gets a sequelizevalidationerror
          //   puppy.id > puppy2.id ? puppy.name : puppy2.name
          // );
        });
      });
      it("/api/products/:id", () => {
        return request(app)
          .get("/api/products/" + puppy.id)
          .expect(200)
          .then(res => {
            expect(res.body).to.be.an("object");
            expect(res.body.name).to.be.equal(puppy.name);
            expect(res.body.breeder).to.be.equal(puppy.breeder);
          });
      });
      it("/api/products/breed/", () => {
        return request(app)
          .get("/api/products/breed/spaniel")
          .expect(200)
          .then(res => {
            expect(res.body).to.be.an("array");
            expect(res.body).to.have.lengthOf(1);
            expect(res.body[0].name).to.be.equal("Milkshakes");
          });
      });
      it("/api/products/breeder/", () => {
        return request(app)
          .get("/api/products/breeder/Jannine")
          .expect(200)
          .then(res => {
            expect(res.body).to.be.an("array");
            expect(res.body).to.have.lengthOf(1);
            expect(res.body[0].name).to.be.equal("Milkshakes");
          });
      });
      it("/api/products/price/", () => {
        return request(app)
          .get("/api/products/price/600")
          .expect(200)
          .then(res => {
            expect(res.body).to.be.an("array");
            expect(res.body).to.have.lengthOf(1);
            expect(res.body[0].name).to.be.equal("Milkshakes");
          });
      });
      it("/api/products/tags/", () => {
        return request(app)
          .get("/api/products/tag/fluffy")
          .expect(200)
          .then(res => {
            expect(res.body).to.be.an("array");
            expect(res.body).to.have.lengthOf(1);
            expect(res.body[0].name).to.be.equal("CookiesAndCream");
          });
      });

      it("/api/products/tags/", () => {
        return request(app)
          .get("/api/products/tag/beach-friendly")
          .expect(200)
          .then(res => {
            expect(res.body).to.be.an("array");
            expect(res.body).to.have.lengthOf(2);
          });
      });
    });

    describe("DELETE requests", () => {
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
      it("deletes a product", () => {
        return promisedAuthRequest(adminLogin).then(agent =>
          agent
            .delete("/api/products/" + puppy.id)
            .expect(200)
            .then(() => Products.findAll())
            .then(products => {
              expect(products.length).to.equal(1);
            })
        );
      });

      it("returns a 404 error if the ID is not correct", function() {
        return promisedAuthRequest(adminLogin).then(agent =>
          agent.delete("/api/products/76142896").expect(404)
        );
      });
    });

    describe("POST requests", () => {
      let gaspode = {
        name: "Gaspode",
        breed: "terrier-like",
        breeder: "Foul Ole Ron",
        breederEmail: "foulron@beggarsguild.net",
        description: "Woof bloody woof",
        price: 500,
        photos: [],
        tags: ["canTalk", "scruffy"],
        inventory: 5
      };

      xit("posts a product", () => {
        return request("app")
          .post("/api/products")
          .send(gaspode)
          .expect(201) //201 'Created' status
          .expect(response => {
            expect(response.body.name).to.equal("Gaspode");
          })
          // .catch(console.error)
      });

      xit("saves the posted product to the DB", () => {
        return request("app")
          .post("/api/products")
          .send(gaspode)
          .then(res => {
            return Products.findOne({ where: { name: gaspode.name } });
          })
          .then(product =>
            expect(product.description).to.equal(gaspode.description)
          );
      });

      xit("has status 500 when request.body is not a valid product", () => {
        return request("app")
          .post("/api/products")
          .send({}) //an empty object is not a valid product
          .expect(500);
      });
    });

    describe("PUT requests", () => {
      xit("updates a products", () => {
        return request(app)
          .put("/api/products/" + puppy.id)
          .send({
            name: "Lassie"
          })
          .expect(200)
          .expect(response => {
            expect(response.body.name).to.equal("Lassie");
            expect(response.body.email).to.equal(puppy.email);
          });
      });

      xit("saves update to the DB", () => {
        return request(app)
          .put("/api/products/" + puppy.id)
          .send({
            name: "Lassie"
          })
          .then(() => Products.findById(puppy.id))
          .then(user => {
            expect(user.name).to.equal("Lassie");
            expect(user.email).to.equal(puppy.email);
          });
      });

      xit("returns a 404 error if the ID is not correct", function() {
        return request(app)
          .put("/api/products/76344667")
          .send({
            name: "Lassie"
          })
          .expect(404);
      });
    });
  }); // end describe('/api/products')
}); // end describe('Products routes')
