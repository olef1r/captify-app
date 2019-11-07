module.exports = (sequelize, DataTypes) => {
  const Items = sequelize.define(
    'Items',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      item: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false
      }
    },
    {}
    );
  return Items;
}