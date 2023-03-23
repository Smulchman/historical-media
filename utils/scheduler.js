const cron = require("node-cron");
const { Event, Blog, User } = require("../models");
const fetch = require("node-fetch");

function scheduler() {
  cron.schedule("0 0 0 * * *", () => {
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();
    console.log("Connected");
    fetch(`https://byabbe.se/on-this-day/${month}/${day}/events.json`)
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < data.events.length; i++) {
          if (
            data.events[i].description !== null &&
            data.events[i].year.length < 5
          )
            Event.create({
              day: day,
              month: month,
              year: data.events[i].year,
              description: data.events[i].description,
              wikipedia: data.events[i].wikipedia,
            });
        }
      })
      .catch((error) => {
        console.error("An error occurred while fetching events:", error);
      });
    console.log("populated");
  });
}

module.exports = scheduler;
