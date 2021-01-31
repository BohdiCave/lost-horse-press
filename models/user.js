module.exports = (sequelize, DataTypes) { 
  const User = sequelize.define('User', {  
    user_login: {type: DataTypes.STRING, allowNull: false, defaultValue: ""},
    user_pass: {type: DataTypes.STRING, allowNull: false, defaultValue: ""},
    user_nicename: {type: DataTypes.STRING, allowNull: false, defaultValue: ""},
    user_email: {type: DataTypes.STRING, allowNull: false, defaultValue: ""},
    user_url: {type: DataTypes.STRING, allowNull: false, defaultValue: ""},
    user_registered: {type: DataTypes.DATETIME, allowNull: false, defaultValue: Sequelize.Now},
    user_activation_key: {type: DataTypes.STRING, allowNull: false, defaultValue: ""},
    user_status: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    display_name: {type: DataTypes.STRING, allowNull: false, defaultValue: ""}
  });
  return User;
}