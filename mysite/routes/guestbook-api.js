const { Router } = require('express');
const express =require('express');
const controller =require('/..controller');

const router =express/Router();
router.route('/no').get(controller.read);
router.route('/no').delete(controller.delete);
router.route('/no').post(controller.create);

module.exports=router;