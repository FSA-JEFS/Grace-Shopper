/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Products = db.model('products')

describe('Product model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  let puppy;
  beforeEach(function(){
    puppy = Products.build({
      name: "Milkshakes",
      breed: "spaniel",
      breeder: "Jannine",
      brederEmail: "j@pew.com",
      description: "eiugrh fIOWAHGUIRW ofejhguieroils",
      price: 500,
      photo: "http://cdn1-www.dogtime.com/assets/uploads/gallery/english-spaniel-dog-breed-pictures/8-fullbody.jpg",
      categories: ["social", "wet", "beach-friendly"],
      inventory: 5
    });
  });

  describe('Product', function (){
    it('includes all the fields', function(){
      return puppy.save()
      .then(function(savedPuppy){
        expect(savedPuppy.name).to.equal('Milkshakes')
        expect(savedPuppy.breed).to.equal('spaniel')
        expect(savedPuppy.breeder).to.equal('Jannine')
        expect(savedPuppy.breederEmail).to.equal('j@pew.com')
        expect(savedPuppy.description).to.equal('eiugrh fIOWAHGUIRW ofejhguieroils')
        expect(savedPuppy.price).to.equal(500)
        expect(savedPuppy.photo).to.equal("http://cdn1-www.dogtime.com/assets/uploads/gallery/english-spaniel-dog-breed-pictures/8-fullbody.jpg")
        expect(savedPuppy.categories).to.equal(["social", "wet", "beach-friendly"])
        expect(savedPuppy.inventory).to.equal(5)
      })
    })
  })
  // describe('instanceMethods', () => {
  //   describe('correctPassword', () => {
  //     let cody

  //     beforeEach(() => {
  //       return User.create({
  //         email: 'cody@puppybook.com',
  //         password: 'bones'
  //       })
  //         .then(user => {
  //           cody = user
  //         })
  //     })

  //     it('returns true if the password is correct', () => {
  //       expect(cody.correctPassword('bones')).to.be.equal(true)
  //     })

  //     it('returns false if the password is incorrect', () => {
  //       expect(cody.correctPassword('bonez')).to.be.equal(false)
  //     })
  //   }) // end describe('correctPassword')
  // }) // end describe('instanceMethods')
}) // end describe('User model')
