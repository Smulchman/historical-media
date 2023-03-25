const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Blog extends Model {}

Blog.init(
  {
    // primary key of blog
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // title of the blog
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // content of the blog, simple text
    // could potentially store html instead of just the text of the blog
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      
    },
    // foreign key for corresponding event
    event_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "event",
        key: "id",
      },
    },
    //   foreign key for user that wrote the blog
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    freezeTableName: true,
    modelName: "blog",
  }
);

module.exports = Blog;
