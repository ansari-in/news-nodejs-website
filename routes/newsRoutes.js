// routes\newsRoutes.js

const express = require("express");
const router = express.Router();
const newsController = require("../controllers/newsController");

// Homepage (Top Headlines)
router.get("/", newsController.getTopHeadlines);

// Category Route
router.get("/category/:cat", newsController.getCategoryNews);

// About Me Page
router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;
