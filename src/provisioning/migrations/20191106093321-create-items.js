module.exports = {
  up: (queryInterface, Sequelize) =>
    Promise.all([
      queryInterface.createTable(
        'Items',
        {
          id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
          },
          item: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: false
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
          }
        },
        {}
      )
    ]),
  down: queryInterface => Promise.all([queryInterface.dropTable('Items')])
};