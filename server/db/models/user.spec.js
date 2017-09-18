/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const User = db.model('user')
let cody

describe('User model', () => {
  beforeEach(() => {
    return db.sync({force: true}).then(() => {
      return User.create({
        name: 'Cody the Dog',
        email: 'cody@puppybook.com',
        password: 'bones',
        tags: ['hasOwnedDog', 'City Apartment'],
        isAdmin: true,
        googleId: null
      })
    })
    .then(user => {
          cody = user
          return cody
    })
  })

  describe('attributes definition', function(){
    it('includes `name` field', function () {
      expect(cody.name).to.equal('Cody the Dog')
    })
    it('includes `email` field', function () {
      expect(cody.email).to.equal('cody@puppybook.com')
    })
    it('includes `isAdmin` field', function () {
      expect(cody.isAdmin).to.be.true;
    })
    it('includes `googleId` field', function () {
      expect(cody.googleId).to.be.null;
    })
    it('includes `tags` field', function () {
      expect(cody.tags).to.have.length(2);
      expect(cody.tags[0]).to.equal('hasOwnedDog')
    })
  })

  describe('instanceMethods', () => {
    describe('correctPassword', () => {
      it('returns true if the password is correct', () => {
        expect(cody.correctPassword('bones')).to.be.equal(true)
      })

      it('returns false if the password is incorrect', () => {
        expect(cody.correctPassword('bonez')).to.be.equal(false)
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
}) // end describe('User model')
