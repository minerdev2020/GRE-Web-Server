const Sequelize = require('sequelize');

module.exports = class Image extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        url: {
          type: Sequelize.STRING(50),
          allowNull: false,
          defaultValue: '',
        },
        position: {
          type: Sequelize.TINYINT,
          allowNull: false,
        },
        thumbnail: {
          type: Sequelize.TINYINT(1),
          allowNull: false,
          defaultValue: 0,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: 'Image',
        tableName: 'images',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }
  static associate(db) {
    db.Image.belongsTo(db.House, { foreignKey: 'house_id', targetKey: 'id' });
  }
};
