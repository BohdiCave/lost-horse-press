const router = require("express").Router();
const bookRoutes = require("./books");
const postRoutes = require("./posts");
const aboutRoutes = require("./about");
const userRoutes = require("./users");
const coverRoutes = require("./covers");
// const subRoutes = require("./submissions");

// Book routes
router.use("/catalog", bookRoutes);
router.use("/posts", postRoutes);
router.use("/about", aboutRoutes);
router.use("/users", userRoutes);
router.use("/covers", coverRoutes);
// router.use("/submissions", subRoutes);

module.exports = router;