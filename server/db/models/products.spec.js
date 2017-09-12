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
      breederEmail: "j@pew.com",
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
        expect(savedPuppy.categories[0]).to.equal("social")
        expect(savedPuppy.categories).to.have.lengthOf(3)
        expect(savedPuppy.inventory).to.equal(5)
      })
    })
  })

}) // end describe('User model')
