'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Products', {
      type: 'foreign key',
      name: 'custom_fkey_CategorytId',
      fields: ['categoryId'],
      references: { 
        table: 'Categories',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Products', 'custom_fkey_CategoryId')
  }
};