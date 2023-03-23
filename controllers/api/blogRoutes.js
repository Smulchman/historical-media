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

// get all the blogs of this user GET("api/blog/dashboard")
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    console.log(req.session);
    const userBlogs = await Blog.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });
    res.status(200).json(userBlogs);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
