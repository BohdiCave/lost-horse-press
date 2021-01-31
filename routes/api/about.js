const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// Matches with "/api/about" or "/api/about/:id"
router.route("/about")
  .get(articleController.findAll)
  .post(articleController.create);

router.route("/about/:id")
  .get(articleController.findById)
  .put(articleController.update)
  .delete(articleController.remove);

module.exports = router;
