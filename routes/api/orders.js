const router = require("express").Router();
const orderController = require('../../controllers/orderController');

// Matches with "/api/orders"
router.route("/:id")
    .get(orderController.findAll)
    .post(orderController.create);

module.exports = router;