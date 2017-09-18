const passport = require('passport')
const router = require('express').Router()
const FacebookStrategy = require('passport-facebook').Strategy;
const {User} = require('../db/models')
module.exports = router
 
const facebookConfig = {
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: process.env.FACEBOOK_CALLBACK
}

const strategy = new FacebookStrategy(facebookConfig, (token, refreshToken, profile, done) => {
  const facebookId = profile.id
  const name = profile.displayName
  const email = profile.username + "@fake-email-address.com";

  User.find({where: {facebookId}})
    .then(user => user
      ? done(null, user)
      : User.create({name, email, facebookId})
        .then(user => done(null, user))
    )
    .catch(done)
})

passport.use(strategy)

router.get('/', passport.authenticate('facebook', {scope: 'email'}))

router.get('/callback', passport.authenticate('facebook', {
  successRedirect: '/home',
  failureRedirect: '/login'
}))
