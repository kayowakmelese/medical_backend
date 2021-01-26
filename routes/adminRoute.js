var express=require('express')
var admin=require('../controller/admin')
var router=express.Router()

router.post('/newCategory',admin.newCategory)
router.post('/newSubCategory',admin.newSubCategory);


module.exports=router