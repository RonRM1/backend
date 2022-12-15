var express = require("express");
var router = express.Router();

const UserController = require("../controllers/UserController");

/* GET users listing. */
router.get("/", UserController.getAll);

module.exports = router;
