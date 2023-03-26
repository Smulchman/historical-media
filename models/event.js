const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Event extends Model {}

Event.init(
  {
    // all keys in this model correspond to the keys of the data returned by the API
    // id of event, auto-incrementing
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    day: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    month: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // year of event
    year: {
      type: DataTypes.STRING(7),
      allowNull: false,
    },
    // this actually has the simple rundown of the event in question
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // 'wikipedia' value from API gives an array of objects, each object containing a wikipedia link and a simple title for that link. Likely to contain several links.
    wikipedia: {
      type: DataTypes.JSON,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    freezeTableName: true,
    modelName: "event",
  }
);

module.exports = Event;
