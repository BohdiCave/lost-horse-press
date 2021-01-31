const router = require("express").Router();
const postsController = require("../../controllers/postsController");

// Matches with "/api/news" or "/api/news/:id"
router.route("/news")
  .get(postsController.findAll)
  .post(postsController.create);

router.route("/news/:id")
  .get(postsController.findById)
  .put(postsController.update)
  .delete(postsController.remove);

module.exports = router;
