const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => { 
  const Order = sequelize.define('Order', {  
    total_qty: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 1},
    total: {type: DataTypes.DECIMAL, allowNull: false, defaultValue: 0},
    date_add: {type: DataTypes.DATE, allowNull: false, defaultValue: Sequelize.Now}
  }, {
    timestamps: false
  });

  Order.associate = models => {
    Order.belongsTo(models.User);
    Order.hasMany(models.Item, {
        foreignKey: {
            allowNull: false
        },
        onDelete: "restrict"
    });
  };

  return Order;
}