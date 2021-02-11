const router = require("express").Router();
const articleController = require("../../controllers/articlesController");

// Matches with "/api/about" or "/api/about/:id"
router.route("/")
  .get(articleController.findAll)
  .post(articleController.create);

router.route("/:id")
  .get(articleController.findById)
  .put(articleController.update)
  .delete(articleController.remove);

module.exports = router;
