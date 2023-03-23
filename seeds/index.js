const seedUsers = require('./userData');
const seedEvents = require('./eventData');
const seedBlogs = require('./blogData');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedEvents();
  console.log('\n----- EVENTS SEEDED -----\n');

  await seedBlogs();
  console.log('\n----- BLOGS SEEDED -----\n');

  process.exit(0);
};

seedAll();