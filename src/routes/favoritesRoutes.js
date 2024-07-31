const express = require("express");
const router = express.Router();
const favoritesController = require("../controllers/favoritesController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, favoritesController.addFavorite);
router.delete(
  "/:favoriteId",
  authMiddleware,
  favoritesController.removeFavorite
);

module.exports = router;
