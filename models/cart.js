module.exports = (sequelize, DataTypes) => { 
  const Cart = sequelize.define('Cart', {
    total_qty: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 1},
    total: {type: DataTypes.DECIMAL, allowNull: false, defaultValue: 0}
  }, {
    timestamps: false
  });

  Cart.associate = models => {
    Cart.hasMany(models.Item, {
        foreignKey: {
            allowNull: false
        }
    });
    Cart.belongsTo(models.User);
  };

  return Cart;
}