const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/catalog"
router.route("/catalog")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/catalog/:id"
router.route("/catalog/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
