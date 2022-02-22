/*
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');


module.exports = { sequelize, DataTypes } => {
    const User = sequelize.define('User', {
        define: {
            freezeTableName: true
          },  
        email: {
            type:Datatypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
                isEmpty: false,
                unique: true,
                msg:'Email manquant ou déjà inscrit',
            }
        },
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            defaultValue: function() {
              return generateMyId()
            },
            primaryKey: true
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false, // true permet d'avoir des droits d'administrateur (suppression de tous les posts ou commentaires)
            allowNull: true,
        },
        name: {
            type: DataTypes.STRING,
            defaultValue: "John Doe",
            allowNull: false,
            validate: {
                isEmpty: false,
                unique: true,
                msg: "nom manquant ou déjà choisit",
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^[0-9a-f]{64}$/i,
                isEmpty: false,
                msg:'Mot de passe manquant ou format non valide',
            }
        },
        departement: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmpty: false,
                msg:'Département ne peut pas être vide',
            },
        },
        // createdAt: new Date(),
        }
    })}

    */
