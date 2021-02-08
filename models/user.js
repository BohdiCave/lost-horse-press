module.exports = (sequelize, DataTypes) { 
  const User = sequelize.define('User', {  
    user_login: {type: DataTypes.STRING, allowNull: false, defaultValue: ""},
    user_pass: {type: DataTypes.STRING, allowNull: false, defaultValue: ""},
    user_email: {type: DataTypes.STRING, allowNull: false, defaultValue: ""},
    user_registered: {type: DataTypes.DATETIME, allowNull: false, defaultValue: Sequelize.Now},
  });

  User.associate = models => { 
    User.hasMany(models.Post, { foreignKey: {allowNull: false}, onDelete: "cascade" });
    User.hasMany(models.Article, { foreignKey: {allowNull: false}, onDelete: "restrict" }); 
  };

  return User;
}