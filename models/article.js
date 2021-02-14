const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => { 
  const Article = sequelize.define('Article', {
    article_name: {type: DataTypes.STRING, allowNull: false, defaultValue: ""},
    article_title: { type: DataTypes.TEXT, allowNull: false },
    article_author: {type: DataTypes.STRING, allowNull: false},
    article_content: {type: DataTypes.TEXT, allowNull: false},
    article_excerpt: {type: DataTypes.TEXT, allowNull: false},
    article_status: {type: DataTypes.STRING, allowNull: false, defaultValue: "publish"},
    article_type: {type: DataTypes.STRING, allowNull: false, defaultValue: "post"},
    article_date: {type: DataTypes.DATE, allowNull: false, defaultValue: Sequelize.NOW},
    article_date_gmt: {type: DataTypes.DATE, allowNull: false, defaultValue: Sequelize.NOW},
    // comment_status: {type: DataTypes.STRING, allowNull: false, defaultValue: "open"},
    // comment_count: {type: DataTypes.BIGINT, allowNull: false, defaultValue: 0}, 
    // article_content_filtered: {type: DataTypes.TEXT, allowNull: false},
    // article_parent: {type: DataTypes.BIGINT.UNSIGNED, allowNull: false, defaultValue: 0},
    // article_mime_type: {type: DataTypes.STRING, allowNull: false, defaultValue: ""},
    // article_password: {type: DataTypes.STRING, allowNull: false, defaultValue: ""},
    // post_author: {type: DataTypes.BIGINT.UNSIGNED, allowNull: false, defaultValue: 0}
  }, {timestamps: false});

  Article.associate = models => {
    Article.belongsTo(models.User);
  }

  return Article;
}