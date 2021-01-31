module.exports = (sequelize, DataTypes) { 
  const Author = sequelize.define('Author', {
    first_name: {type: DataTypes.STRING, allowNull: false},
    middle_name: {type: DataTypes.STRING},
    last_name: {type: DataTypes.STRING, allowNull: false},
    bio: {type: DataTypes.TEXT, allowNull: false, defaultValue: ""},
    editor: {type: DataTypes.BOOLEAN, defaultValue: false},
    praise: {type: DataTypes.STRING, allowNull: false, defaultValue: ""}, 
  });

  Author.associate = models => {
    Author.belongsToMany(models.Book, {
      through: "AuthorBooks"
    });
  };

  return Author;
}