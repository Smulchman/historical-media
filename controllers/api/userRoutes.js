const router = require("express").Router();
const { User } = require("../../models");

// Create new user, POST ("/api/users")
router.post("/", async (req, res) => {
  try {
    const dbUserdata = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = dbUserdata.id;
      res.status(200).json(dbUserdata);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login POST ("api/users/login")
router.post("/login", async (req, res) => {
  try {
    // Email/Username Checker
    const dbUserdata = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    // If wrong email/username, try again
    if (!dbUserdata) {
      res.status(400).json({ message: "Incorrect email. Please try again." });
      return;
    }
    // Password Checker
    const validPassword = await dbUserdata.checkPassword(req.body.password);

    // If wrong password, try again
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect password. Please try again." });
      return;
    }

    // If everything is good, tell user "good job"
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = dbUserdata.id;
      res.status(200).json({ user: dbUserdata, message: "Logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
