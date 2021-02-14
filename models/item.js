const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => { 
  const Item = sequelize.define('Item', {  
    title: {type: DataTypes.STRING, allowNull: false, defaultValue: ""},
    desc: {type: DataTypes.STRING, allowNull: false, defaultValue: ""},
    cat: {type: DataTypes.STRING, allowNull: false, defaultValue: ""},
    price: {type: DataTypes.DECIMAL, allowNull: false},
    qty: {type: DataTypes.INTEGER, allowNull:false, defaultValue: 1},
    date_add: {type: DataTypes.DATE, allowNull: false, defaultValue: Sequelize.Now}
  }, {
    timestamps: false
  });

  Item.associate = models => {
    Item.belongsTo(models.Cart, { foreignKey: { allowNull: false } });
    Item.belongsTo(models.Order, { foreignKey: { allowNull: false } });
    Item.belongsTo(models.Book, { foreignKey: { allowNull: false } });
  };

  return Item;
}