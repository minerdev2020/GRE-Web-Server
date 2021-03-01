const { House, Image } = require('../models');

module.exports = class ImageController {
  static async show(req, res, next) {
    try {
      const result = await Image.findOne({
        where: { house_id: req.params.house_id, position: req.params.position },
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
      const result = await Image.findAll({
        where: { house_id: req.params.house_id },
        order: [['position']],
      });
      res.json({
        message: `selected ${result.length} rows`,
        data: result,
      });
    } catch (err) {
      console.error(err);
      next(err);
    }
  }

  static async create(req, res, next) {
    try {
      console.log(req.file);
      const result = await Image.create({
        url: `uploads/images/${req.file.filename}`,
        position: req.query.position,
        thumbnail: req.query.thumbnail,
        house_id: req.params.house_id,
      });
      await House.update(
        { thumbnail: result.url },
        { where: { id: req.params.house_id } }
      );
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

      const result = await Image.update(
        {
          position: req.query.position,
          thumbnail: req.query.thumbnail,
        },
        {
          where: { id: req.params.id },
        }
      );
      res.json({ message: `updated ${result} rows` });
    } catch (err) {
      console.error(err);
      next(err);
    }
  }

  static async delete(req, res, next) {
    try {
      const result = await Image.destroy({
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
      const result = await Image.destroy({
        where: { house_id: req.params.house_id },
      });
      res.json({ message: `deleted ${result} rows` });
    } catch (err) {
      console.error(err);
      next(err);
    }
  }
};
