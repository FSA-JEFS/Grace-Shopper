const router = require('express').Router()
const {Product} = require('../db/models')
module.exports = router

// Get ALL the puppies
router.get('/', (req, res, next) => {
  Product.findAll()
    .then(product => res.json(product))
    .catch(next)
})

// Get one puppy
router.get('/:id', (req, res, next) => {
  Product.findById(req.params.id)
  .then(product => res.json(product))
  .catch(next)
})

// Get puppies by breeder
router.get('/breeder/:breeder', (req, res, next) => {
  Product.findAll({
    where: { breeder: req.params.breeder }
  })
    .then(product => res.json(product))
    .catch(next)
})

// Get puppies by breed
router.get('/breed/:breed', (req, res, next) => {
  Product.findAll({
    where: { breed: req.params.breed }
  })
    .then(product => res.json(product))
    .catch(next)
})

// Get puppies by price
router.get('/price/:price', (req, res, next) => {
  Product.findAll({
    where: { price: {
      $lt: req.params.price }
    }
  })
    .then(product => res.json(product))
    .catch(next)
})

// Get puppies by tags
router.get('/tag/:tag', (req, res, next) => {
  Product.findAll({
    where: { tags: {
      $contains: [req.params.tag] }
    }
  })
    .then(product => res.json(product))
    .catch(next)
})

//Create a new product
router.post('/add-product', (req, res, next) => {
  Product.create(req.body)
  .then(product => res.status(201).send(product))
  .catch(next)
})

// Delete one puppy from database
router.delete('/:id', (req, res, next) => {
  Product.findById(req.params.id)
  .then( product => product ? product.destroy() : res.sendStatus(404))
  .then(product => res.json(product))
  .catch(next)
})

// edit puppy details
router.put('/:id', (req, res, next) => {
  Product.update(req.body, {where: {id: req.params.id}, returning: true})
  .then(result => {
    result[1][0] ? res.json(result[1][0]) : res.sendStatus(404)
  })
  .catch(next)
})
