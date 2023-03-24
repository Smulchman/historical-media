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

  console.log(randList);
  res.render("blog", { randList, recBlogs });
});

// router.get("/all-events", async (req, res) => {
// const month = new Date().getMonth() + 1;
// const day = new Date().getDate();
//   const postData = await MODEL.findAll({
//   where: {
//     day: day,
//     month: month
//   }
//  });

//   const posts = postData.map((post) => post.get({ plain: true }));

//   console.log(posts);
//   res.render("home", { posts });
// });

// Dashboard/User profile GET "/user-profile/:id"
// router.get("/user-profile/:id", withAuth, async (req, res) => {
//   try {
//     const blogPostData = await blogPost.findByPk(req.params.id, {
//       include: [
//         {
//           model: Blog,
//           attributes: ["id", "title", "description"],
//         },
//       ],
//     });
//     const userProfile = blogPostData.get({ plain: true });
//     res.render("userProfile", { userProfile, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// Login GET "/login"
router.get("/login", async (req, res) => {
  res.render("login");
});

// Sign Up GET "/sign-up"
router.get("/sign-up", async (req, res) => {
  res.render("signup");
});

module.exports = router;
