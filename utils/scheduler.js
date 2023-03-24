const cron = require("node-cron");
const { Event, Blog, User } = require("../models");
const fetch = require("node-fetch");

function scheduler() {
  cron.schedule("0 0 0 * * *", async () => {
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();

    //delete all events from the event table that have no blogs written about them
    await Event.findAll({
      include: {
        model: Blog,
        required: true, // only return rows that have blogs written about them
      },
    })
      .then((results) => {
        const idsToSave = results.map((row) => row.id);
        return ModelA.destroy({
          where: {
            id: {
              [Sequelize.Op.notIn]: idsToSave, // only delete rows that do not have blogs written about them
            },
          },
        });
      })
      .then((numRowsDeleted) => {
        console.log(`Deleted ${numRowsDeleted} rows from Event.`);
      })
      .catch((err) => {
        console.error("Error deleting rows:", err);
      });

    console.log("Connected");
    fetch(`https://byabbe.se/on-this-day/${month}/${day}/events.json`)
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < data.events.length; i++) {
          if (
            data.events[i].description !== null &&
            data.events[i].year.length < 5
          )
            // if event exist then do not added a dup
            Event.findOrCreate({
              where: {
                day: day,
                month: month,
                year: data.events[i].year,
                description: data.events[i].description,
              },
              defaults: {
                day: day,
                month: month,
                year: data.events[i].year,
                description: data.events[i].description,
                wikipedia: data.events[i].wikipedia,
              },
            })
              .then(([event, created]) => {
                if (created) {
                  console.log("New event created:", event.get({ plain: true }));
                } else {
                  console.log(
                    "Event already exists:",
                    event.get({ plain: true })
                  );
                }
              })
              .catch((err) => {
                console.error("Error creating event:", err);
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
