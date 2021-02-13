const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/about" or "/api/about/:id"
router.route("/")
  .get(articlesController.findAll)
  .post(articlesController.create);

router.route("/:id")
  .get(articlesController.findOne)
  .put(articlesController.update)
  .delete(articlesController.destroy);

module.exports = router;
