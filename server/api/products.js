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
router.get('/:name', (req, res, next) => {
  Products.findOne({
    where: { name: req.params.name }
  })
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

// Get puppies by categories
router.get('/tag/:tag', (req, res, next) => {
  Products.findAll({
    where: { categories: {
      $contains: [req.params.tag] }
    }
  })
    .then(products => res.json(products))
    .catch(next)
})

//Create a new product
router.post('/add-product', (req, res, next) => {
  console.log('req.body', req.body)
  Products.create(req.body)
  .then(product => res.status(201).send(product))
  .catch(next)
})
