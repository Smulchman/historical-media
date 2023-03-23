const { User } = require('../models');

const userData = [
  {
    username: 'teeShirtLover',
    email: "loveTShirts@yahoo.net",
    password: "tshirts4ever",
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

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;