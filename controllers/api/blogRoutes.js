const router = require("express").Router();
const { Blog } = require("../../models");

// add a new blog POST("api/blog")
router.post("/", withAuth, async (req, res) => {
  try {
    const dbBlogData = await Blog.create({
      title: req.body.title,
      content: req.body.content,
      event_id: req.body.event_id,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
