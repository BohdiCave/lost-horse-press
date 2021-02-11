module.exports = (sequelize, DataTypes) => { 
  
    const Cover = sequelize.define('Cover', {
      image_url: { type: DataTypes.STRING, allowNull: false }
    }, {
      timestamps: false
    });
  
    // Cover.associate = models => {
    //   Cover.belongsTo(models.Book, {
    //     unique: true
    //   });
    // };
  
    return Cover;
}