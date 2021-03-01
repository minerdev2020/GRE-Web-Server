const path = require('path');
const express = require('express');
const HouseController = require('../controllers/houseController');
const ImageController = require('../controllers/imageController');
const multer = require('multer');

const router = express.Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      console.log(req);
      done(null, 'public/uploads/images/');
    },
    filename(req, file, done) {
      console.log(req);
      done(null, path.basename(file.originalname));
    },
  }),
  limits: { fileSize: 10 * 1024 * 1024 },
});

router.get('/', (req, res, next) => {
  res.send('Hello, Express');
});

// get daum address dialog
router.get('/daum-address', (req, res, next) =>
  res.sendFile(path.join(__dirname, '../views/daum-address.html'))
);

// get all house infos
router.get('/houses', (req, res, next) =>
  HouseController.showAll(req, res, next)
);

// get one house info
router.get('/houses/:id', (req, res, next) =>
  HouseController.show(req, res, next)
);

// create one house info
router.post('/houses', (req, res, next) =>
  HouseController.create(req, res, next)
);

// update one house info
router.put('/houses/:id', (req, res, next) =>
  HouseController.update(req, res, next)
);

// update one house state
router.patch('/houses/:id', (req, res, next) =>
  HouseController.updateState(req, res, next)
);

// delete one house info
router.delete('/houses/:id', (req, res, next) =>
  HouseController.delete(req, res, next)
);

// delete all house info
router.delete('/houses', (req, res, next) =>
  HouseController.deleteAll(req, res, next)
);

// get all house images
router.get('/houses/:house_id/images', (req, res, next) =>
  ImageController.showAll(req, res, next)
);

// get one house images
router.get('/houses/:house_id/images/:position', (req, res, next) =>
  ImageController.show(req, res, next)
);

// create one house image
router.post(
  '/houses/:house_id/images',
  upload.single('image'),
  (req, res, next) => ImageController.create(req, res, next)
);

// update one house image
router.patch('/images/:id', (req, res, next) =>
  ImageController.update(req, res, next)
);

// delete one house image
router.delete('/images/:id', (req, res, next) =>
  ImageController.delete(req, res, next)
);

// delete all house image
router.delete('/houses/:house_id/images', (req, res, next) =>
  ImageController.deleteAll(req, res, next)
);

module.exports = router;
