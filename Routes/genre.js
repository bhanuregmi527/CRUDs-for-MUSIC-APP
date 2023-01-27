const express = require("express");
const router = express.Router();

const {
  getGenre,
  getSingleGenre,
  addGenre,
  updateGenre,
  deleteGenre,
  deleteAllGenre,
} = require("../controllers/genreController");
const checkUserAuth = require("../middlewares/auth-middleware");
const restrictTo = require("../middlewares/restrict");

router.get("/genre", getGenre);
router.get("/getSingleGenre/:genreID", getSingleGenre);
router.post(
  "/addGenre",
  checkUserAuth,
  addGenre
);
router.put("/genre/:id", checkUserAuth, updateGenre);
router.put(
  "/deleteGenre/:genreID",checkUserAuth,  restrictTo("admin"), deleteGenre);
router.put(
  "/deleteAllGenre",
  checkUserAuth,
  restrictTo("admin"),
  deleteAllGenre
);

module.exports = router;
