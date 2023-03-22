const cron = require("node-cron");
const { Event, Blog, User } = require("./models");

function scheduler() {
  cron.schedule("0 0 0 * * *", () => {
    for (let i = 0; i < str.events.length; i++) {
      Event.create({
        year: str.events[i].year,
        description: str.events[i].description,
        wikipedia: str.events[i].wikipedia,
      });
    }
  });
}

module.exports = scheduler;
