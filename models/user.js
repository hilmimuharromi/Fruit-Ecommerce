'use strict';
const {
  hashPassword
} = require('../helpers/bcrypt')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Cart, {
        foreignKey: 'userId'
      })
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Email Is Required'
        },
        isEmail: {
          args: true,
          msg: 'Invalid Email Format'
        },
        notNull: {
          args: true,
          msg: 'Email Is Required'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Password Is Required'
        },
        notNull: {
          args: true,
          msg: 'Password Is Required'
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'role Is Required'
        }
      }
    },
    name:{
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'name Is Required'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: (User, options) => {
        User.password = hashPassword(User.password)
        if (User.role !== 'Super Admin' && User.role !== 'Admin') {
          User.role = 'Customer'
        }
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};