const { MODEL } = require("../models");
const withAuth = require("../utils/auth");
const { getRandElements } = require("../utils/helpers");

const router = require("express").Router();

// Home Page

router.get("/", async (req, res) => {
  //    // const month = new Date(date).getMonth() + 1;
  // const day = new Date(date).getDate();
  //   const postData = await MODEL.findAll({
  //   where: {
  //     day: day,
  //     month: month
  //   }
  //  });
  //   const posts = postData.map((post) => postData.get({ plain: true }));
  //   const randList = getRandElements(posts, 10);
  //   res.render("home", { randList });
  res.render("main");
});

router.get("/all-events", async (req, res) => {
  // const month = new Date(date).getMonth() + 1;
  // const day = new Date(date).getDate();
  //   const postData = await MODEL.findAll({
  //   where: {
  //     day: day,
  //     month: month
  //   }
  //  });
  //   const posts = postData.map((post) => postData.get({ plain: true }));
  //   console.log(posts);
  //   res.render("home", { posts });
});

// // Dashboard/User profile GET "/user-profile/:id"
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
