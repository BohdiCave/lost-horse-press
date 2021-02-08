const router = require("express").Router();
const bookRoutes = require("./books");
const postRoutes = require("./posts");
const aboutRoutes = require("./about");
const userRoutes = require("./users");
// const subRoutes = require("./submissions");

// Book routes
router.use("/catalog", bookRoutes);
router.use("/news", postRoutes);
router.use("/about", aboutRoutes);
router.use("/users", userRoutes);
// router.use("/submissions", subRoutes);

module.exports = router;