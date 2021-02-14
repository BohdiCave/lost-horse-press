module.exports = (sequelize, DataTypes) => { 
  
  const Book = sequelize.define('Book', {
    title: { type: DataTypes.STRING, allowNull: false },
    blurb: { type: DataTypes.TEXT, allowNull: false },
    blurb_author: { type: DataTypes.STRING, allowNull: false },
    author: {type: DataTypes.STRING, allowNull: false},
    isbn: {type: DataTypes.STRING, allowNull: false},
    isbn_hc: {type: DataTypes.STRING, defaultValue: null},
    genre: {type: DataTypes.STRING, allowNull: false},
    price_us: {type: DataTypes.STRING, allowNull: false},
    price_can: {type: DataTypes.STRING, defaultValue: null},
    price_us_hc: {type: DataTypes.STRING, defaultValue: null},
    editor: {type: DataTypes.STRING, defaultValue: null},
    rewrite: {type: DataTypes.STRING, allowNull: false},
    bio: {type: DataTypes.TEXT, allowNull: false},
    pages: {type: DataTypes.INTEGER, allowNull: false},
    height: {type: DataTypes.STRING, allowNull: false},
    width: {type: DataTypes.STRING, allowNull: false},
    stage: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 2},
    // excerpt: {type: DataTypes.STRING},
    // praise: {type: DataTypes.TEXT}
  }, {
    timestamps: false
  });

  Book.associate = models => {
    Book.hasMany(models.Item);
  }
  // Book.associate = models => {
  //   Book.hasOne(models.Cover, {foreignKey: {allowNull: false}, onDelete: "cascade" });
    // Book.belongsToMany(models.Author, {
    //   through: "AuthorBooks"
    // });
  // };

  return Book;
}