const router = require("express").Router();
const aboutController = require("../../controllers/aboutController");

// Matches with "/api/about" or "/api/about/:id"
router.route("/about")
  .get(aboutController.findAll)
  .post(aboutController.create);

router.route("/about/:id")
  .get(aboutController.findById)
  .put(aboutController.update)
  .delete(aboutController.remove);

module.exports = router;
