const { Event, Blog, User } = require("../models");
const withAuth = require("../utils/auth");
const { getRandElements } = require("../utils/helpers");

const router = require("express").Router();

// Home Page

router.get("/", async (req, res) => {
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();
  const postData = await Event.findAll({
    where: {
      day: day,
      month: month,
    },
  });
  const posts = postData.map((post) => post.get({ plain: true }));
  const randList = getRandElements(posts, 10);

  let recBlogs = await Blog.findAll({
    limit: 5, // retrieve only the top 5 rows
    order: [["id", "DESC"]],
    include: [
      {
        model: User,
        required: true,
        attributes: { exclude: ["password"] },
      },
      {
        model: Event,
        required: true,
      },
    ],
  });
  recBlogs = recBlogs.map((post) => post.get({ plain: true }));
  //console.log(randList);
  res.render("homepage", {
    randList,
    recBlogs,
    loggedIn: req.session.loggedIn,
  });
});

router.get("/all-events", async (req, res) => {
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();
  const postData = await Event.findAll({
    where: {
      day: day,
      month: month,
    },
  });

  const posts = postData.map((post) => post.get({ plain: true }));

  res.render("event", { posts, loggedIn: req.session.loggedIn });
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

// Login GET "/login"
router.get("/login", async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

// Sign Up GET "/sign-up"
router.get("/sign-up", async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

// Blog Get "/blog/:id"
router.get("/blog/:id", withAuth, async (req, res) => {
  const ev = await Event.findOne({
    where: {
      id: req.params.id,
    },
  });
  //if no event is available for that endpoint then go to a 404 page
  const event = ev.get({ plain: true });
  if (ev) {
    req.session.event_id = req.params.id;
    res.render("blog", { event, loggedIn: req.session.loggedIn });
  } else {
    res.render("404", { badEventId: true });
  }
});

//will return the events info, blogs written about it with the author's info
// GET (/event/:id)
router.get("/event/:id", async (req, res) => {
  const ev = await Event.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Blog,
        include: [
          {
            model: User,
            required: true,
            attributes: { exclude: ["password"] },
          },
        ],
      },
    ],
  });
  const event = ev.get({ plain: true });
  console.log(event);
  //if no event is available for that endpoint then go to a 404 page
  if (ev) {
    req.session.event_id = req.params.id;
    res.render("extrainfo", { event, loggedIn: req.session.loggedIn });
  } else {
    res.render("404", { badEventId: true });
  }
});

// Delete blog DELETE (/blog/:id)
router.delete("/blog/:id", async (req, res) => {
  // Finds one blog
  const blog = await Blog.findOne({
    where: {
      id: req.params.id,
    },
  });

  // If no blog with that id exists, send 404 page
  if (!blog) {
    res.render("404");
    return;
  } else {
    // If user id does not match the session user id, send 404 page
    if (blog.user_id !== req.session.user_id) {
      res.render("404");
      return;
    } else {
      // Deletes the blog based on its id
      await Blog.destroy({
        where: {
          id: req.params.id,
        },
      });
    }
  }
});

// TESTING ROUTE to view all blogs
router.get("/blogs", async (req, res) => {
  const blogs = await Blog.findAll();
  res.json(blogs);
});

module.exports = router;
