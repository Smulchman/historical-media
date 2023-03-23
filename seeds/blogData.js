const { Blog } = require('../models');

const blogData = [
  {
    title: 'teeShirtLover',
    content: "loveTShirts@yahoo.net",
    event_id: "tshirts4ever",
    user_id: "tshirts4ever",
  },
  {
    title: 'teeShirtLover',
    content: "loveTShirts@yahoo.net",
    event_id: "tshirts4ever",
    user_id: "tshirts4ever",
  },
  {
    title: 'teeShirtLover',
    content: "loveTShirts@yahoo.net",
    event_id: "tshirts4ever",
    user_id: "tshirts4ever",
  },
  {
    title: 'teeShirtLover',
    content: "loveTShirts@yahoo.net",
    event_id: "tshirts4ever",
    user_id: "tshirts4ever",
  },
  {
    title: 'teeShirtLover',
    content: "loveTShirts@yahoo.net",
    event_id: "tshirts4ever",
    user_id: "tshirts4ever",
  },
  {
    title: 'teeShirtLover',
    content: "loveTShirts@yahoo.net",
    event_id: "tshirts4ever",
    user_id: "tshirts4ever",
  },
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;