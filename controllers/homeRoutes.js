const { Event, Blog } = require("../models");
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
  });
  recBlogs = recBlogs.map((post) => post.get({ plain: true }));
  console.log(recBlogs);
  console.log(randList);

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

  //res.render("handlebar-name", { posts });
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

// Event Get "/event"
router.get("/event", async (req, res) => {
  res.render("event");
});

// Blog Get "/blog"
router.get("/blog/:id", withAuth, async (req, res) => {
  res.render("blog");
});

// Blog UserDash "/userDash"
router.get("/userDash", async (req, res) => {
  res.render("userDash");
});

// Blog extrainfo "/extrainfo"
router.get("/extrainfo", async (req, res) => {
  res.render("extrainfo");
});

router.get("/404", async (req, res) => {
  res.render("404");
});

module.exports = router;
