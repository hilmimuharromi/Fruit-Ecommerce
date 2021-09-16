'use strict';

const data = [
  {
    id: 1,
    name: "Buah",
    slug: 'buah',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    name: "Sayur",
    slug: 'sayur',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 3,
    name: "Ikan & Makanan Laut",
    slug: 'ikan-dan-makanan-laut',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 4,
    name: "Sembako",
    slug: 'sembako',
    createdAt: new Date(),
    updatedAt: new Date()
  }, 
  {
    id:5,
    name: "Telur & Unggas",
    slug: 'telur-dan-unggas',
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};