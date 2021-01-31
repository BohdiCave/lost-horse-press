module.exports = (sequelize, DataTypes) { 
  const Book = sequelize.define('Book', {
    title: { type: DataTypes.STRING, allowNull: false },
    blurb: { type: DataTypes.TEXT, allowNull: false },
    author: {type: DataTypes.STRING, allowNull: false},
    blurb_author: { type: DataTypes.STRING, allowNull: false },
    isbn: {type: DataTypes.STRING, allowNull: false},
    isbn_hc: {type: DataTypes.STRING, defaultValue: null},
    genre: {type: DataTypes.STRING, allowNull: false},
    price_us: {type: DataTypes.STRING, allowNull: false},
    price_can: {type: DataTypes.STRING, defaultValue: null},
    price_us_hc: {type: DataTypes.STRING, defaultValue: null},
    editor: {type: DataTypes.STRING, defaultValue: null},
    bio: {type: DataTypes.TEXT, allowNull: false},
    rewrite: {type: DataTypes.STRING, allowNull: false},
    pages: {type: DataTypes.INTEGER, allowNull: false},
    height: {type: DataTypes.STRING, allowNull: false},
    width: {type: DataTypes.STRING, allowNull: false},
    stage: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 2},
    excerpt: {type: DataTypes.STRING}
  });
  return Book;
}