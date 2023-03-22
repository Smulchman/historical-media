const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Event extends Model {}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    wikipedia: {
        type: DataTypes.ARRAY,
        allowNull: false,
      },
    blog_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'blog',
          key: 'id',
        },
      },
  },
  {
    sequelize,
    underscored: true,
    modelName: "event",
  }
);

module.exports = Blog;
