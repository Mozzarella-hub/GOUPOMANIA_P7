// "use strict";

// const SequelizeTokenify = require('sequelize-tokenify');

// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.createTable("Users", {
//       // define: {
//       //   freezeTableName: true,
//       // },
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER,
//       },
//       email: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         unique: true,
//         validate: {
//           isEmail: true,
//           isEmpty: false,
//           unique: true,
//           msg: "Email manquant ou déjà inscrit",
//         },
//       },
//       name: {
//         type: Sequelize.STRING,
//         defaultValue: "John Doe",
//         allowNull: false,
//         validate: {
//           isEmpty: false,
//           unique: true,
//           msg: "nom manquant ou déjà choisit",
//         },
//       },
//       password: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         validate: {
//           is: /^[0-9a-f]{64}$/i,
//           isEmpty: false,
//           msg: "Mot de passe manquant ou format non valide",
//         },
//       },
//       departement: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         validate: {
//           isEmpty: false,
//           msg: "Département ne peut pas être vide",
//         },
//       },
//       isAdmin: {
//         type: Sequelize.BOOLEAN,
//         defaultValue: false, // true permet d'avoir des droits d'administrateur (suppression de tous les posts ou commentaires)
//         allowNull: false,
//       },
//       bio: {
//         type: Sequelize.STRING,
//         allowNull: true,
//       },
//       createdAt: {
//         allowNull: false,
//         type: Sequelize.DATE,
//       },
//       updatedAt: {
//         allowNull: false,
//         type: Sequelize.DATE,
//       },
//       recovery_token: {
//         type: Sequelize.STRING,
//         unique: true
//     }
//     });
//     SequelizeTokenify.tokenify(User, {
//       field: 'recovery_token'
//   });
//   },
//   async down(queryInterface, Sequelize) {
//     await queryInterface.dropTable("Users");
//   },
// };