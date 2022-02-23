const { Sequelize } = require("sequelize");
// const bcrypt = require("bcrypt");
// const saltRounds = 12;

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

// const initDb = () => {
//   return sequelize.sync().then(() => {
//     bcrypt.hash(`${process.env.TEST_PASSWORD}`, saltRounds, function(err, hash) {
//     // .then((hash) => {
//       User
//         .create({
//         email: `${process.env.TEST_EMAIL}`,
//         name: `${process.env.TEST_NAME}`,
//         departement: `${process.env.TEST_DEPARTEMENT}`,
//         password: hash ,   // `${process.env.TEST_PASSWORD}`,
//         isAdmin: false,
//       }).then((user) => console.log(user.toJSON()));
//      });
//     console.log("La base de données est initialisée");
//   }).catch((err) => console.log('user TEST ne  ce créé pas '));
// };

module.exports = { User, Post, Comment };
