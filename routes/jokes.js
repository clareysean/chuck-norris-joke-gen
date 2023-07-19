var express = require("express");
var router = express.Router();

var jokesCtrl = require("../controllers/joke");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/", jokesCtrl.getJoke);

module.exports = router;
