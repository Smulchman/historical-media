const { User } = require('../models');

const userData = [
  // I found an online generator to encrypt the passwords into bcrypt hashes. I used 10 rounds.
  {
    username: 'teeShirtLover',
    email: "loveTShirts@yahoo.net",
    // original password: tshirts4ever
    password: "$2a$10$4R4OCCkbAMY9nw82twXg.eIKPmWO26CdrZxpNxkJU0bRnCoVJNFky",
  },
  {
    username: 'smulchman',
    email: "mulcahy.samuel@gmail.com",
    // original password: D1ngusPatr0l
    password: "$2a$10$.wTjnM8LCutXU0c4BIPao.O4lWIKRnrNY7QbgJ/i1e/u1vkpZW1eC",
  },
  {
    username: 'Elvisdiaz1',
    email: "elvisdiaz020@gmail.com",
    // original password: **CLICK**
    password: "$2a$10$JubDlO6CVB71wArrQ.CQAOe3QN4rKDguU3U0dWgkJOXBD343H7kx6",
  },
  {
    username: 'JRob',
    email: "jroberts1931@gmail.com",
    // original password: ILoveMyFamily99
    password: "$2a$10$q3Qx1ZzjF9RdetWDpyYX8ealE8khOPHjarzGdQdWWu4nv102MagoW",
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

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;