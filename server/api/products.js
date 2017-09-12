const router = require('express').Router()
const {Products} = require('../db/models')
module.exports = router

// Get ALL the puppies
router.get('/', (req, res, next) => {
  Products.findAll()
    .then(products => res.json(products))
    .catch(next)
})

// Get one puppy
router.get('/:id', (req, res, next) => {
  Products.findById(req.params.id)
  .then(products => res.json(products))
  .catch(next)
})

// Get puppies by breeder
router.get('/breeder/:breeder', (req, res, next) => {
  Products.findAll({
    where: { breeder: req.params.breeder }
  })
    .then(products => res.json(products))
    .catch(next)
})

// Get puppies by breed
router.get('/breed/:breed', (req, res, next) => {
  Products.findAll({
    where: { breed: req.params.breed }
  })
    .then(products => res.json(products))
    .catch(next)
})

// Get puppies by price
router.get('/price/:price', (req, res, next) => {
  Products.findAll({
    where: { price: {
      $lt: req.params.price }
    }
  })
    .then(products => res.json(products))
    .catch(next)
})

// Get puppies by tags
router.get('/tag/:tag', (req, res, next) => {
  Products.findAll({
    where: { tags: {
      $contains: [req.params.tag] }
    }
  })
    .then(products => res.json(products))
    .catch(next)
})

//Create a new product
router.post('/add-product', (req, res, next) => {
  Products.create(req.body)
  .then(product => res.status(201).send(product))
  .catch(next)
})

// Delete one puppy from database
router.delete('/:id', (req, res, next) => {
  Products.findById(req.params.id)
  .then( product => product ? product.destroy() : res.sendStatus(404))
  .then(products => res.json(products))
  .catch(next)
})

// edit puppy details
router.put('/:id', (req, res, next) => {
  Products.update(req.body, {where: {id: req.params.id}, returning: true})
  .then(result => {
    result[1][0] ? res.json(result[1][0]) : res.sendStatus(404)
  })
  .catch(next)
})