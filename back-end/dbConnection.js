const { Sequelize } = require("sequelize");

const User = require("./migrations/20220221171244-create-user");
const Post = require("./migrations/20220221172020-create-post");
const Comment = require("./migrations/20220221172323-create-comment");
require("dotenv").config();

const sequelize = new Sequelize(
  `${process.env.NAME_DB}`,
  `${process.env.DB_USER}`,
  `${process.env.DB_PASSWORD}`,
  {
    host: 'localhost',
    dialect: "mysql",
    login: false,
  }
);

sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((error) => console.log("Unable to connect to the database:"));

module.exports = { User, Post, Comment };
