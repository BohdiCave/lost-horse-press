const router = require("express").Router();
const postsController = require("../../controllers/postsController");

// Matches with "/api/posts" or "/api/posts/:id"
router.route("/")
  .get(postsController.findAll)
  .post(postsController.create);

router.route("/:id")
  .get(postsController.findOne)
  .put(postsController.update)
  .delete(postsController.destroy);

module.exports = router;
