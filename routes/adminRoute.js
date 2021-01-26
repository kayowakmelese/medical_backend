var express=require('express')
var admin=require('../controller/admin')
var router=express.Router()

router.post('/newCategory',admin.newCategory)
router.post('/newSubCategory',admin.newSubCategory)
router.post('/newProduct',admin.newProduct)
router.post('/newItem',admin.newItem)
router.post('/addPrice',admin.addPrice)
router.post('/createAdmin',admin.createAdmin)
router.post('/listCategory',admin.listCategory)
router.post('/listSubCategory',admin.listSubCategory)




module.exports=router