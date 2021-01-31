module.exports = (sequelize, DataTypes) { 
  const Author = sequelize.define('Author', {
    name: {type: DataTypes.STRING, allowNull: false},
    bio: {type: DataTypes.TEXT, allowNull: false},
    praise_author: {type: DataTypes.STRING, allowNull: false, defaultValue: ""}, 
    praise_book: {type: DataTypes.TEXT, allowNull: false, defaultValue: ""}
    // create association to books
    // 'bid' int(11) NOT NULL
  });
  return Author;
}