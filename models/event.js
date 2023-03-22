const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Event extends Model {}

Event.init(
  {
    // all keys in this model correspond to the keys of the data returned by the API
    // id of event, auto-incrementing
    // potentially would be wiser to randomize keys?
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // year of event
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // this actually has the simple rundown of the event in question
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // 'wikipedia' value from API gives an array of objects, each object containing a wikipedia link and a simple title for that link. Likely to contain several links.
    wikipedia: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
  },
  {
    sequelize,
    underscored: true,
    modelName: "event",
  }
);

module.exports = Event;
