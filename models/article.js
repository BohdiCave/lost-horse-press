module.exports = (sequelize, DataTypes) { 
  const Article = sequelize.define('Article', {
    article_name: {type: DataTypes.STRING, allowNull: false, defaultValue: ""},
    article_title: { type: DataTypes.TEXT, allowNull: false },
    article_password: {type: DataTypes.STRING, allowNull: false, defaultValue: ""},
    article_author: {type: DataTypes.STRING, allowNull: false},
    //   post_author: {type: DataTypes.BIGINT.UNSIGNED, allowNull: false, defaultValue: 0},
    article_date: {type: DataTypes.DATETIME, allowNull: false, defaultValue: Sequelize.NOW},
    article_date_gmt: {type: DataTypes.DATETIME, allowNull: false, defaultValue: Sequelize.NOW},
    article_content: {type: DataTypes.TEXT, allowNull: false},
    article_excerpt: {type: DataTypes.TEXT, allowNull: false},
    article_status: {type: DataTypes.STRING, allowNull: false, defaultValue: "publish"},
    comment_status: {type: DataTypes.STRING, allowNull: false, defaultValue: "open"},
    article_content_filtered: {type: DataTypes.TEXT, allowNull: false},
    article_parent: {type: DataTypes.BIGINT.UNSIGNED, allowNull: false, defaultValue: 0},
    article_type: {type: DataTypes.STRING, allowNull: false, defaultValue: "post"},
    article_mime_type: {type: DataTypes.String, allowNull: false, defaultValue: ""},
    comment_count: {type: DataTypes.BIGINT, allowNull: false, defaultValue: 0}  
  });

  Article.associate = models => {
    Article.belongsTo(models.User, {
        as: "article_author"
    });
  }

  return Article;
}