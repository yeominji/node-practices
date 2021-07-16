const express = require('express');
const controller = require('../controllers/gallery);

const router = express.Router();
router.route('').get(controller.index);
//router.route('/delete').get(controller.delete);
//router.route('/add').post(controller.add);

module.exports = router;