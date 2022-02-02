const router = require("express").Router();
const User = require("../models/User");

router.get("/", async (req, res) => {
  const username = req.query.username;
  try {
    findUser = await User.find({
      username: { $regex: username, $options: "$i" },
    });
    var newArray = findUser.map((n) => {
      return n.username;
    });
    res.status(200).json(newArray);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
