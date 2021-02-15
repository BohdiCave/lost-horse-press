const router = require("express").Router();
const cartController = require('../../controllers/cartController');

// Matches with "/api/cart"
router.route("/:id")
    .get(cartController.findOne)
    .post(cartController.create);

router.route("/:userId/:itemId")
    .delete(cartController.destroy);

module.exports = router;