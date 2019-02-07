const router = require("express").Router();
const travelsController = require("../../controllers/travelsController");

// Matches with "/api/travels"
router.route("/")
  .get(travelsController.findAll)
  .post(travelsController.create);

// Matches with "/api/books/:id"
router.route("/:id")
  .get(travelsController.findById)
  .put(travelsController.update)
  .delete(travelsController.remove);

module.exports = router;