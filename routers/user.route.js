
var express = require('express');
var router = express.Router();

var controller=require('./../controllers/user.controller');
router.get('/',controller.index);
// Link tới trang tạo mới
router.get('/create',controller.linkcreate)
// Tạo mới 1 đối tượng user
router.post('/create',controller.add)
//Xem chi tiết 1 user
router.get('/:id',controller.view)
// Tìm kiếm
router.get('/search',controller.search)
module.exports = router;