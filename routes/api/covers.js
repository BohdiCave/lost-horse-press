const router = require("express").Router();
const coversController = require("../../controllers/coversController");

// Matches with "/api/covers"
router.route("/")
  .get(coversController.findAll)
  .post(coversController.create);

// Matches with "/api/covers/:id"
router.route("/:id")
  .get(coversController.findOne)
  .put(coversController.update)
  .delete(coversController.destroy);

module.exports = router;
