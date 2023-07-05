"use strict";
/** @type {import('sequelize-cli').Migration} */
const config = require("../config/config");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      { schema: config.development.schema, tableName: "rooms" },
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.STRING,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable({
      schema: config.development.schema,
      tableName: "rooms",
    });
  },
};
