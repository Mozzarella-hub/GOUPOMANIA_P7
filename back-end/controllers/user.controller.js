//HASH SECURITY MP & TOKEN
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require("jsonwebtoken");
//const myPlaintextPassword = 's0/\/\P4$$w0rD';

require("dotenv").config();

const db = require('../models/index');
const { ValidationError, UniqueConstraintError } = require("sequelize");

//AUTH
exports.register = (req, res) => {
    bcrypt.hash(req.body.password, saltRounds).then(function(hash) {
      db.User.create({
        email: req.body.email,
        name: req.body.name,
        password: hash,
        departement: req.body.departement,
      })
        .then((user) => {
          const message = `Utilisateur ${req.body.name} a été enregistré.`;
          res.status(201).json({ message, data: user.split('password') });
        })
        .catch((error) => {
          if (error instanceof ValidationError) {
            return res.status(400).json({ message: error.message, data: error }); 
          }
          if (error instanceof UniqueConstraintError) {
            return res.status(400).json({ message: error.message, data: error }); //contôle sequelize model_email _nique
          }
          const message = `L'utilisateur ${req.body.name} n'a pas pu être créé, problème de user.controller.`;
          return res.status(500).json({ message, data: error });
        });
    });
  };

  exports.login = (req, res ) => {
    db.User.findOne({
      where: {
        email: req.body.email,
      },
    })
      .then((user) => {
        if (!user) {
          const message = "L'utilisateur n'éxiste pas.";
          return res.status(404).json({ message });
        }
        bcrypt.compare(req.body.password, user.password).then((valid) => {
          if (!valid) {
            const message = "Le mot de passe est incorrect";
            return res.status(401).json({ message });
          }
          const token = jwt.sign(
            // token AUTH
            { userId: user.id },
            `${process.env.JWT_SECRET_TOKEN}`,
            {
              expiresIn: "14h",
            }
          );
          const message = "L'utilisateur a été connecté avec succès";
          return res.status(200).json({ message, data: token });
        });
      })
      .catch((error) => {
        const message =
          "L'utilisateur n'a pas pu être connecté, réessayez dans un instant.";
        return res.status(500).json({ message, data: error });
      });
  };


