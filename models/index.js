const User = require("./user");
const Blog = require("./blog");
const Event = require("./event");

// Users have many Blogs relationship
User.hasMany(Blog, {
  foreignKey: "user_id",
});
Blog.belongsTo(User, {
  foreignKey: "user_id",
});

// Events have many Blogs relationship
Event.hasMany(Blog, {
  foreignKey: "event_id",
});
Blog.belongsTo(Event, {
  foreignKey: "event_id",
});

module.exports = { User, Blog, Event };
