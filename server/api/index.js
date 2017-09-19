const router = require('express').Router()
const { Order } = require("../db/models");
const { isAdmin } = require("./gatekeepers");

module.exports = router

router.use('/users', require('./users'))
router.use('/email', require('./email'))
router.use('/stripe', require('./stripe'))
router.use('/products', require('./products'))

router.get('/orders', isAdmin, (req, res, next) => {
  return Order.findAll().then(product => res.json(product)).catch(next);
})

// may not need it since /orders gives you all orders
router.get('/orders/:id', isAdmin, (req, res, next) => {
  return Order.findById(req.params.id).then(product => res.json(product)).catch(next);
})

//PUT /orders/:id only allows you to set order status :)
router.put('/orders/:id', isAdmin, (req, res, next) => {
  const newStatus = req.body.status
  // can do some validation checks here
  return Order.update({status: newStatus}, {where: {id: req.params.id}, returning: true})
  .then(result => result[1][0] ? res.json(result[1][0]) : res.sendStatus(404))
  .catch(next);
})

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
