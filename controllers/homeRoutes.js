const { MODEL } = require("../models");
const withAuth = require("../utils/auth");

const router = require("express").Router();

// Home Page
router.get("/", async (req, res) => {
  //   const postData = await MODEL.findAll({ include: [{ model: MODEL }] });
  //   const posts = postData.map((post) => post.get({ plain: true }));
  //   console.log(posts);
  //   res.render("home", { posts });
});

// Dashboard/User profile GET "/user-profile/:id"

module.exports = router;
