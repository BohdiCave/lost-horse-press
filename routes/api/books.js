const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/catalog"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/catalog/:id"
router.route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
