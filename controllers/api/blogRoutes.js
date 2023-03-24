const router = require("express").Router();
const { Blog } = require("../../models");
const withAuth = require("../../utils/auth.js");

// add a new blog POST("api/blog")
router.post("/", withAuth, async (req, res) => {
  try {
    const dbBlogData = await Blog.create({
      title: req.body.title,
      content: req.body.content,
      event_id: req.body.event_id,
      user_id: req.session.user_id,
    });
    res.status(200).json(dbBlogData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get up to 5 most recent blogs GET("api/blog/dashboard")
router.get("/", async (req, res) => {
  try {
    const recBlogs = await Blog.findAll({
      limit: 5, // retrieve only the top 5 rows
      order: [["id", "DESC"]],
    });
    res.status(200).json(recBlogs);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get all the blogs of this user GET("api/blog/dashboard")
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    let userBlogs = await Blog.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });
    userBlogs = userBlogs.map((post) => post.get({ plain: true }));
    res.render("userDash", { userBlogs, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
