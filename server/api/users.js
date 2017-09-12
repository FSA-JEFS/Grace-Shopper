const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'email']
  })
    .then(users => res.json(users))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(user => user ? res.json(user) : res.sendStatus(404))
    .catch(next)
})

router.post('/', (req, res, next) => {
  User.create(req.body)
  .then(user => res.json(user))
  .catch(next)
})

router.delete('/:id', (req, res, next) => {
  return User.findById(req.params.id)
  .then(user => user ? User.destroy({where: {id: req.params.id}}) : res.sendStatus(404))
  .then(() => res.sendStatus(200))
  .catch(next)
})

router.put('/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(user => {
      // console.log("@@@@@", user);      
      if (!user) return res.sendStatus(404);
      else {
        user.update(req.body)
        .then(updatedUser => {
          // console.log(">>>>>", updatedUser);
          res.status(200).json(updatedUser)
      })
    }})
    .catch(next)
})


// Campus.findById(req.params.campusId)
// .then(campus => campus.update(req.body))
// .then(updatedCampus => res.sendStatus(201).json(updatedCampus))
// .catch(next);