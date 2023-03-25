const Sequelize = require("sequelize");
const express = require("express");

require("dotenv").config();
const app = express();
let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}

app.get("/api/blog/more-blogs", (req, res) => {
  sequelize.query(
    `SELECT blog.id as "id", blog.content as "content", blog.title as "title", blog.event_id as "event_id", blog.user_id as "user_id", event.day as "day", event.month as "month", event.year as "year", event.description as "description" FROM blog JOIN event ON event.id = blog.event_id;`,
    (err, result) => {
      res.json(result);
    }
  );
});
module.exports = sequelize;
