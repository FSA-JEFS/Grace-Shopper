const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Products = db.model('products')

describe('Products routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/products/', () => {

    let puppy;
    let puppy2
    beforeEach(function(){
      puppy = Products.create({
        name: "Milkshakes",
        breed: "spaniel",
        breeder: "Jannine",
        breederEmail: "j@pew.com",
        description: "eiugrh fIOWAHGUIRW ofejhguieroils",
        price: 500,
        photos: ["http://cdn1-www.dogtime.com/assets/uploads/gallery/english-spaniel-dog-breed-pictures/8-fullbody.jpg"],
        categories: ["social", "wet", "beach-friendly"],
        inventory: 5
      });
      puppy2 = Products.create({
        name: "CookiesAndCream",
        breed: "Chowchow",
        breeder: "Eli",
        breederEmail: "e@pew.com",
        description: "BEARS!",
        price: 740,
        photos: ["https://i.pinimg.com/736x/11/12/09/1112097172845da1ab30cf3fc3eed160--white-chow-chow-chow-chow-puppies.jpg"],
        categories: ["fluffy", "adventurous", "beach-friendly"],
        inventory: 1
      });
    });

    it('GET /api/products', () => {
      return request(app)
        .get('/api/products')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array')
          expect(res.body).to.have.lengthOf(2)
          expect(res.body[0].name).to.be.equal("Milkshakes")
        })
    })
    it('GET /api/products/:id', () => {
      return request(app)
        .get('/api/products/' + puppy.id)
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('object')
          expect(res.body.name).to.be.equal(puppy.name)
          expect(res.body.breeder).to.be.equal(puppy.breeder)
        })
    })
    it('GET /api/products/breed/', () => {
      return request(app)
        .get('/api/products/breed/spaniel')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array')
          expect(res.body).to.have.lengthOf(1)
          expect(res.body[0].name).to.be.equal('Milkshakes')
        })
    })
    it('GET /api/products/breeder/', () => {
      return request(app)
        .get('/api/products/breeder/Jannine')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array')
          expect(res.body).to.have.lengthOf(1)
          expect(res.body[0].name).to.be.equal('Milkshakes')
        })
    })
    it('GET /api/products/price/', () => {
      return request(app)
        .get('/api/products/price/600')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array')
          expect(res.body).to.have.lengthOf(1)
          expect(res.body[0].name).to.be.equal('Milkshakes')
        })
    })
    it('GET /api/products/tags/', () => {
      return request(app)
        .get('/api/products/tag/fluffy')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array')
          expect(res.body).to.have.lengthOf(1)
          expect(res.body[0].name).to.be.equal('CookiesAndCream')
        })
    })

    it('GET /api/products/tags/', () => {
      return request(app)
        .get('/api/products/tag/beach-friendly')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array')
          expect(res.body).to.have.lengthOf(2)
        })
    })
  }) // end describe('/api/products')
}) // end describe('Products routes')
