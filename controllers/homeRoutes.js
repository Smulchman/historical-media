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
router.get("/user-profile/:id", withAuth, async (req, res) => {
  try {
    const blogPostData = await blogPost.findByPk(req.params.id, {
      include: [
        {
          model: Blog,
          attributes: ["id", "title", "description"],
        },
      ],
    });
    const userProfile = blogPostData.get({ plain: true });
    res.render("userProfile", { userProfile, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
