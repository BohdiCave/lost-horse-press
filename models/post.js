module.exports = (sequelize, DataTypes) { 
    const Post = sequelize.define('Post', {
        post_date: {type: DataTypes.DATETIME, allowNull: false, defaultValue: Sequelize.NOW},
        post_date_gmt: {type: DataTypes.DATETIME, allowNull: false, defaultValue: Sequelize.NOW},
        post_content: {type: DataTypes.TEXT, allowNull: false},
        post_title: {type: DataTypes.TEXT, allowNull: false}, 
        post_excerpt: {type: DataTypes.TEXT, allowNull: false},
        post_status: {type: DataTypes.STRING, allowNull: false, defaultValue: "publish"},
        comment_status: {type: DataTypes.STRING, allowNull: false, defaultValue: "open"},
        ping_status: {type: DataTypes.STRING, allowNull: false, defaultValue: "open"},
        post_password: {type: DataTypes.STRING, allowNull: false, defaultValue: ""},
        post_name: {type: DataTypes.STRING, allowNull: false, defaultValue: ""},
        to_ping: {type: DataTypes.TEXT, allowNull: false},
        pinged: {type: DataTypes.TEXT, allowNull: false},
        post_content_filtered: {type: DataTypes.TEXT, allowNull: false},
        post_parent: {type: DataTypes.BIGINT.UNSIGNED, allowNull: false, defaultValue: 0},
        guid: {type: DataTypes.STRING, allowNull: false, defaultValue: ""},
        menu_order: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
        post_type: {type: DataTypes.STRING, allowNull: false, defaultValue: "post"},
        post_mime_type: {type: DataTypes.String, allowNull: false, defaultValue: ""},
        comment_count: {type: DataTypes.BIGINT, allowNull: false, defaultValue: 0}
    });

    Post.associate = models => {
        Post.belongsTo(models.User, {
            as: "post_author"
        })
    };

    return Post;
}