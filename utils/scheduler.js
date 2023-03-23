const cron = require("node-cron");
const { Event, Blog, User } = require("../models");
const fetch = require("node-fetch");

function scheduler() {
  cron.schedule("0 0 0 * * *", () => {
    fetch("https://byabbe.se/on-this-day/3/22/events.json")
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < data.events.length; i++) {
          if (
            data.events[i].description !== null &&
            data.events[i].year.length < 5
          )
            Event.create({
              year: data.events[i].year,
              description: data.events[i].description,
              wikipedia: data.events[i].wikipedia,
            });
        }
      });
    console.log("populated");
  });
}

module.exports = scheduler;
