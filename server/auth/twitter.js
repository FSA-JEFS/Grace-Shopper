const passport = require('passport')
const router = require('express').Router()
const TwitterStrategy = require('passport-twitter').Strategy;
const {User} = require('../db/models')
module.exports = router

/**
 * For OAuth keys and other secrets, your Node process will search
 * process.env to find environment variables. On your production server,
 * you will be able to set these environment variables with the appropriate
 * values. In development, a good practice is to keep a separate file with
 * these secrets that you only share with your team - it should NOT be tracked
 * by git! In this case, you may use a file called `secrets.js`, which will
 * set these environment variables like so:
 *
 * process.env.GOOGLE_CLIENT_ID = 'your google client id'
 * process.env.GOOGLE_CLIENT_SECRET = 'your google client secret'
 * process.env.GOOGLE_CALLBACK = '/your/google/callback'
 */
 
const twitterConfig = {
  consumerKey: process.env.TWITTER_CONSUMER_KEY,
  consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
  callbackURL: process.env.TWITTER_CALLBACK
}

const strategy = new TwitterStrategy(twitterConfig, (token, refreshToken, profile, done) => {
  const twitterId = profile.id
  const name = profile.displayName
  const email = profile.username + "@fake-email-address.com";

  User.find({where: {twitterId}})
    .then(user => user
      ? done(null, user)
      : User.create({name, email, twitterId})
        .then(user => done(null, user))
    )
    .catch(done)
})

passport.use(strategy)

router.get('/', passport.authenticate('twitter', {scope: 'email'}))

router.get('/callback', passport.authenticate('twitter', {
  successRedirect: '/',
  failureRedirect: '/login'
}))
