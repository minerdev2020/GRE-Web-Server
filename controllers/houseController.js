const { House } = require('../models');

module.exports = class HouseController {
  static async show(req, res, next) {
    try {
      const result = await House.findOne({
        where: { id: req.params.id },
      });
      const length = result !== null ? 1 : 0;
      res.json({
        message: `selected ${length} rows`,
        data: result,
      });
    } catch (err) {
      console.error(err);
      next(err);
    }
  }

  static async showAll(req, res, next) {
    try {
      console.log(req.query);

      const result = await House.findAll({
        where: { state: req.query.state },
      });
      const lastUpdatedAt = await House.findOne({
        attributes: ['updated_at'],
        order: [['updated_at', 'DESC']],
      });
      const updatedAt =
        lastUpdatedAt !== null ? lastUpdatedAt.dataValues.updated_at : '0';
      res.json({
        message: `selected ${result.length} rows`,
        updated_at: updatedAt,
        data: result,
      });
    } catch (err) {
      console.error(err);
      next(err);
    }
  }

  static async create(req, res, next) {
    try {
      console.log(req.query);
      console.log(req.body);

      const result = await House.create(req.body);
      const length = result !== null ? 1 : 0;
      res.json({
        message: `created ${length} rows`,
        data: result,
      });
    } catch (err) {
      console.error(err);
      next(err);
    }
  }

  static async update(req, res, next) {
    try {
      console.log(req.query);
      console.log(req.body);

      const result = await House.update(req.body, {
        where: { id: req.params.id },
      });
      res.json({ message: `updated ${result} rows` });
    } catch (err) {
      console.error(err);
      next(err);
    }
  }

  static async updateState(req, res, next) {
    try {
      console.log(req.query);
      console.log(req.body);

      const result = await House.update(
        { state: req.query.state },
        { where: { id: req.params.id } }
      );
      res.json({ message: `updated ${result} rows` });
    } catch (err) {
      console.error(err);
      next(err);
    }
  }

  static async delete(req, res, next) {
    try {
      const result = await House.destroy({
        where: { id: req.params.id },
      });
      res.json({ message: `deleted ${result} rows` });
    } catch (err) {
      console.error(err);
      next(err);
    }
  }

  static async deleteAll(req, res, next) {
    try {
      const result = await House.destroy({});
      res.json({ message: `deleted ${result} rows` });
    } catch (err) {
      console.error(err);
      next(err);
    }
  }
};
