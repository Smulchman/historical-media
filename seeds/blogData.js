const { Blog } = require('../models');

const blogData = [
  {
    title: 'teeShirtLover',
    content: "loveTShirts@yahoo.net",
    event_id: "tshirts4ever",
    user_id: "tshirts4ever",
  },
  {
    username: 'smulchman',
    email: "mulcahy.samuel@gmail.com",
    password: "D1ngusPatr0l",
  },
  {
    username: 'Elvisdiaz1',
    email: "elvisdiaz020@gmail.com",
    password: "**CLICK**",
  },
  {
    username: 'JRob',
    email: "jroberts1931@gmail.com",
    password: "ILoveMyFamily99",
  },
  {
    username: 'AlienOyi',
    email: "daijinmin78@gmail.com",
    password: "Joker.Str1kes.Again",
  },
  {
    username: 'LaertXH',
    email: "laertxhumari@gmail.com",
    password: "D_Cage_Sucks",
  },
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;