const router = require("express").Router();
const { User } = require("../../models");

// Create new user, POST ("/api/")
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

// Login
router.post("/login", async (req, res) => {
  try {
    // Email/Username Checker
    const dbUserdata = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    // If no or wrong email/username, try again
    if (!dbUserdata) {
      res.status(400).json({ message: "Incorrect email. Please try again." });
      return;
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
