const Sequelize = require('sequelize');

module.exports = class House extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        address: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        number: {
          type: Sequelize.STRING(10),
          allowNull: false,
        },
        house_type: {
          type: Sequelize.TINYINT,
          allowNull: false,
        },
        facility: {
          type: Sequelize.TINYINT(1),
          allowNull: false,
          defaultValue: 0,
        },
        payment_type: {
          type: Sequelize.TINYINT,
          allowNull: false,
        },
        price: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        deposit: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        monthly_rent: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        premium: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        manage_fee: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        manage_fee_contains: {
          type: Sequelize.STRING(255),
          allowNull: false,
          defaultValue: '',
        },
        area_meter: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        rent_area_meter: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        building_floor: {
          type: Sequelize.TINYINT,
          allowNull: false,
        },
        floor: {
          type: Sequelize.TINYINT,
          allowNull: false,
        },
        structure: {
          type: Sequelize.TINYINT,
          allowNull: false,
          defaultValue: 0,
        },
        bathroom: {
          type: Sequelize.TINYINT,
          allowNull: false,
        },
        bathroom_location: {
          type: Sequelize.TINYINT,
          allowNull: false,
          defaultValue: 0,
        },
        direction: {
          type: Sequelize.TINYINT,
          allowNull: false,
        },
        built_date: {
          type: Sequelize.STRING(10),
          allowNull: false,
        },
        move_date: {
          type: Sequelize.STRING(10),
          allowNull: false,
          defaultValue: '',
        },
        options: {
          type: Sequelize.STRING(255),
          allowNull: false,
          defaultValue: '',
        },
        detail_info: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        phone: {
          type: Sequelize.STRING(13),
          allowNull: false,
        },
        state: {
          type: Sequelize.TINYINT(1),
          allowNull: false,
          defaultValue: 0,
        },
        thumbnail: {
          type: Sequelize.STRING(50),
          allowNull: false,
          defaultValue: '',
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: 'House',
        tableName: 'houses',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }
  static associate(db) {
    db.House.hasMany(db.Image, { foreignKey: 'house_id', sourceKey: 'id' });
  }
};
