'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.User, { foreignKey: 'userId' })
      Post.hasMany(models.Comment)
    }
  }
  Post.init({
    userId: DataTypes.STRING,
    picture: DataTypes.STRING,
    video: DataTypes.STRING,
    date_creation: DataTypes.STRING,
    texte: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};