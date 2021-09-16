'use strict';

const { hashPassword } = require('../helpers/bcrypt')
const data = [
  {
    name: 'Owner',
    email: 'owner@mail.com',
    password: hashPassword('sayaowner'),
    role: 'Super Admin',
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    name: 'Admin',
    email: 'admin@mail.com',
    password: hashPassword('sayaadmin'),
    role: 'Admin',
    createdAt: new Date(),
    updatedAt: new Date()
}
]

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', data, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};