const router = require("express").Router();
const Mail = require("../models/Mail");

//CREATE POST
router.post("/", async (req, res) => {
  const newMail = new Mail(req.body);
  try {
    const savedMail = await newMail.save();
    res.status(200).json(savedMail);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
