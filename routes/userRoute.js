var express=require('express')
var userController=require('../controller/user')
var router=express.Router()

router.post('/recentItems',userController.FeaturedItems)
router.post('/listCategory',userController.listCategory)
router.post('/CategoryContent',userController.CategoryContent)
router.post('/loadDetail',userController.itemDetails)
router.post('/listProduct',userController.listProduct)
router.post('/listCategoryOnly',userController.listCategoryOnly)
router.post('/listSubCategory',userController.listSubCategory)
router.post('/searchItems',userController.searchItems)
module.exports=router