const router = require("express").Router();
const User = require("../models/User");

router.get("/", (req, res) => {
  User.find({}).then((users) => {
    res.send(users);
  });
});

module.exports = router;
