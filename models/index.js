const User = require('./User');
const Blog = require('./Blog');
const Event = require('./Event');

User.hasMany(Blog, {
  foreignKey: 'user_id',
});

Blog.belongsTo(User, {
  foreignKey: 'user_id',
});

Event.hasMany(Blog, {
    foreignKey: 'event_id',
  });
  
Blog.belongsTo(Event, {
    foreignKey: 'event_id',
  });

module.exports = { User, Blog, Event };