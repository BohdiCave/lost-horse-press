const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => { 
  const User = sequelize.define('User', {  
    user_login: {type: DataTypes.STRING, allowNull: false, defaultValue: ""},
    user_pass: {type: DataTypes.STRING, allowNull: false, defaultValue: ""},
    user_email: {type: DataTypes.STRING, validate:{isEmail:true}, allowNull: false, defaultValue: ""},
    user_registered: {type: DataTypes.DATE, allowNull: false, defaultValue: Sequelize.Now},
  }, {
    timestamps: false
  });

  User.associate = models => { 
    User.hasOne(models.Cart, { onDelete: "cascade" });
    User.hasMany(models.Order, { onDelete: "restrict" });
    User.hasMany(models.Post, { onDelete: "cascade" });
    // User.hasMany(models.Article, { onDelete: "restrict" }); 
  };

  return User;
}