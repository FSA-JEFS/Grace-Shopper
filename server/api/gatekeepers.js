// const router = require('express').Router()

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) // if user is authenticated in the session, carry on 
        return next();
    res.redirect('/');     // if they aren't redirect them to the home page
}


// route middleware to make sure a user is logged in
function isAdmin(req, res, next) {
    if (req.user.isAdmin) // if user is authenticated in the session, carry on 
        return next();
    res.redirect('/');     // if they aren't redirect them to the home page
}

// route middleware to make sure a user is logged in
function isSelfOrAdmin(req, res, next) {
    if (req.params.id == req.user.id || req.user.isAdmin) // if user is authenticated in the session, carry on 
        return next();
    res.redirect('/');     // if they aren't redirect them to the home page
}

module.exports = {
    isLoggedIn,
    isAdmin,
    isSelfOrAdmin
}