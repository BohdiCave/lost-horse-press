const router = require("express").Router();
const itemController = require('../controllers/itemControllers');

// Matches with "/api/items"
router.route("/")
    .get(itemController.findAll)
    .post(itemController.create);

router.route("/:id")
    .get(itemController.findOne)
    .put(itemController.update)
    .delete(itemController.destroy);

module.exports = router;