const express = require('express');
const controller = require('../controllers/board');

const router = express.Router();
router.route('').get(controller.index);
router.route('/modify').get(controller.modify);
router.route('/view').get(controller.view);
router.route('/write').get(controller.write);
router.route('/add').post(controller.add);

module.exports = router;