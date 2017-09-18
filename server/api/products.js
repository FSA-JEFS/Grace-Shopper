const router = require("express").Router();
const { Product } = require("../db/models");
const { Review } = require("../db/models");
const { isLoggedIn, isAdmin, isSelfOrAdmin } = require("./gatekeepers");
module.exports = router;

// Get ALL the puppies
router.get("/", (req, res, next) => {
  return Product.findAll().then(product => {
    res.json(product)
    return null
  }).catch(next);
});

//get reviews of a product
router.get("/products/:id/reviews", (req, res, next) => {
  return Review.findAll({
    where: {
      productId: req.params.id
    }
  })
    .then(reviews => res.json(reviews))
    .catch(next);
});

// Get puppies by breeder
router.get("/breeder/:breeder", (req, res, next) => {
  return Product.findAll({
    where: {
      breeder: req.params.breeder
    }
  })
    .then(product => res.json(product))
    .catch(next);
});

// Get puppies by breed
router.get("/breed/:breed", (req, res, next) => {
  return Product.findAll({
    where: {
      breed: req.params.breed
    }
  })
    .then(product => res.json(product))
    .catch(next);
});

// Get puppies by price
router.get("/price/:price", (req, res, next) => {
  return Product.findAll({
    where: {
      price: {
        $lt: req.params.price
      }
    }
  })
    .then(product => res.json(product))
    .catch(next);
});

// Get puppies by tags
router.get("/tag/:tag", (req, res, next) => {
  return Product.findAll({
    where: {
      tags: {
        $contains: [req.params.tag]
      }
    }
  })
    .then(product => res.json(product))
    .catch(next);
});

//Create a new product
router.post("/add-product", isAdmin, (req, res, next) => {
  return Product.create(req.body)
    .then(product => res.status(201).send(product))
    .catch(next);
});

// Get one puppy, with reviews
router.get("/:id", (req, res, next) => {
  return Product.findById(req.params.id, {
    include: [{ model: Review, as: "review" }]
  })
    .then(product => res.json(product))
    .catch(next);
});

// Delete one puppy from database
router.delete("/:id", isAdmin, (req, res, next) => {
  return Product.findById(req.params.id)
    .then(product => {
      if (product) {
        return Product.destroy({ where: { id: req.params.id } }).then(() => res.sendStatus(200))
      } else res.sendStatus(404);
    })
    .catch(next);
});

// edit puppy details
router.put("/:id", isAdmin, (req, res, next) => {
  return Product.update(req.body, {
    where: {
      id: req.params.id
    },
    returning: true
  })
    .then(result => {
      result[1][0] ? res.json(result[1][0]) : res.sendStatus(404);
    })
    .catch(next);
});

//post a review to a product
router.post("/:id/reviews", isLoggedIn, (req, res, next) => {
  return Product.findById(req.params.id).then(product => {
    if (!product) {
      res.sendStatus(404);
    } else {
      let review = req.body;
      review.userId = req.user.id;
      review.productId = req.params.id;
      return Review.create(review).then(createdReview => res.json(createdReview));
    }
  });
});

//edit a review of a product
router.put("/:id/reviews", isSelfOrAdmin, (req, res, next) => {
  return Product.findById(req.params.id).then(product => {
    if (!product) {
      res.sendStatus(404);
    } else {
      let review = req.body;
      return Review.update(review).then(updatedReview => res.json(updatedReview));
    }
  });
});

router.delete(
  "/:productId/reviews/:reviewId",
  isSelfOrAdmin,
  (req, res, next) => {
    return Review.findById(req.params.reviewId).then(product => {
      if (!product) {
        res.sendStatus(404);
      } else {
        return product.destroy().then(() => res.sendStatus(204));
      }
    });
  }
);
