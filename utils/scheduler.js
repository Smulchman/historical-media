const cron = require("node-cron");

function scheduler() {
  cron.schedule("0 0 0 * * *", () => {
    console.log("Loop");
  });
}

module.exports = scheduler;
