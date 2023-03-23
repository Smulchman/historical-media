const router = require("express").Router();
const { User } = require("../../models");

// Create new user
router.post("/", async (req, res) => {
  try {
    const dbUserdata = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json(dbUserdata);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
