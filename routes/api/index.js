const router = require("express").Router();
// content-related routes
const bookRoutes = require("./books");
const postRoutes = require("./posts");
const aboutRoutes = require("./about");
const coverRoutes = require("./covers");
// authentication- and order-related routes
const userRoutes = require("./users");
const itemRoutes = require("./items");
const cartRoutes = require("./cart");
const orderRoutes = require("./orders");
// const subRoutes = require("./submissions");

// Book routes
router.use("/catalog", bookRoutes);
router.use("/posts", postRoutes);
router.use("/about", aboutRoutes);
router.use("/users", userRoutes);
router.use("/covers", coverRoutes);
router.use("/items", itemRoutes);
router.use("/cart", cartRoutes);
router.use("/orders", orderRoutes);
// router.use("/submissions", subRoutes);

module.exports = router;