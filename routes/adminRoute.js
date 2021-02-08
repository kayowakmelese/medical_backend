var express=require('express')
var admin=require('../controller/admin')

var multer=require('multer') 
var storage=multer.memoryStorage()
var router=express.Router()

router.post('/newCategory',admin.newCategory)
router.post('/newSubCategory',admin.newSubCategory)
router.post('/newProduct',admin.newProduct)
router.post('/newItem',uploadFile,admin.newItem)
router.post('/addPrice',admin.addPrice)
router.post('/createAdmin',admin.createAdmin)
router.post('/listCategory',admin.listCategory)
router.post('/listSubCategory',admin.listSubCategory)
router.post("/addTag",admin.addTag)
router.post("/listtags",admin.listTags)


function uploadFile(req, res, next) {
  const upload = multer({ storage: storage }).array('image',5);

  upload(req, {}, function (err) {
      if (err instanceof multer.MulterError) {
          console.log(err)
      } else if (err) {
        console.log(err)
      }
      next()
  })
}

var storager=multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
module.exports=router