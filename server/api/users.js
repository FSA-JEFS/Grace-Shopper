const router = require('express').Router()
const {User} = require('../db/models')
const {Order} = require('../db/models')
const {
  isLoggedIn,
  isAdmin,
  isSelfOrAdmin
} = require('./gatekeepers')
module.exports = router

// TODO: permissioning/gatekeeping for isAdmin

router.get('/', isAdmin, (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'email']
  })
    .then(users => res.json(users))
    .catch(next)
})

// get a user by id
router.get('/:id', isSelfOrAdmin, (req, res, next) => {
  User.findById(req.params.id)
    .then(user => user ? res.json(user) : res.sendStatus(404))
    .catch(next)
})

// get ordeers by user
router.get('/:id/orders', isSelfOrAdmin, (req, res, next) => {
  const userId = req.params.id;
  console.log('req.params.id', req.params.id)
  Order.findAll({ where: { userId } })
    .then(orders => res.json(orders))
    .catch(next);
})

// create user; unprotected
router.post('/', (req, res, next) => {
  User.create(req.body)
  .then(user => res.json(user))
  .catch(next)
})

// delete user
router.delete('/:id',isSelfOrAdmin, (req, res, next) => {
  return User.findById(req.params.id)
  .then(user => user ? User.destroy({where: {id: req.params.id}}) : res.sendStatus(404))
  .then(() => res.sendStatus(200))
  .catch(next)
})

//  edit user 
// TODO: what if user wants to edit own info but we have block from making himself an admin.
router.put('/:id', isAdmin, (req, res, next) => {
  User.findById(req.params.id)
    .then(user => {
      if (!user) return res.sendStatus(404);
      else {
        user.update(req.body)
        .then(updatedUser => {
          res.status(200).json(updatedUser)
      })
    }})
    .catch(next)
})


// Campus.findById(req.params.campusId)
// .then(campus => campus.update(req.body))
// .then(updatedCampus => res.sendStatus(201).json(updatedCampus))
// .catch(next);