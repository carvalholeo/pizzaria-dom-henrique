'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('usuarios', [{
     email: 'jose@egito.com',
     cpf: '12345678900',
     senha: 'casadofarao',
     admin: true
   },
   {
    email: 'lcarvalho@dh.com',
    cpf: '12345678901',
    senha: 'casadofarao'
  }
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('usuarios', null, {})
  },
};
