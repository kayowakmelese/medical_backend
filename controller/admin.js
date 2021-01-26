const db=require('../models')
const sequelize=require('sequelize')
const JWT=require('../authentication/JWT')

module.exports={
    createAdmin:(req,res)=>{
        db.Admin.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        }).then(
            function(dat){
                var token=JWT.createToken(req.body.name,dat.dataValues.ID,req.body.email)
                res.json([{success:1,error:0,token}])
            }
        ).catch(function(err){
            res.json(message(0,err))
        })
    }
    ,
    newCategory:(req,res)=>{
        db.Category.create({
            name:req.body.name,
            description:req.body.description
        }).then(res.json(message(1,"created successfully"))).catch(function(err){
            res.json(message(0,err))
        })
    },
    newSubCategory:(req,res)=>{
        db.SUbCategory.create({
            name:req.name,
            description:req.description,
            CategoryId:req.categoryId
        }).then(res.json(message(1,"created successfully"))).catch(function(err){
            res.json(message(0,err))})
    },
    newProduct:(req,res)=>{
        db.Product.create({
            name:req.body.name,
            SUbCategoryId:req.body.subCategory
        }).then(res.json(message(1,"created successfully"))).catch(function(err){
            res.json(message(0,err))})
    },
    newItem:(req,res)=>{
        db.Item.create({
            name:req.body.name,
            ProductId:req.body.product
        }).then(res.json(message(1,"created successfully"))).catch(function(err){
            res.json(message(0,err))})
    },
    addPrice:(req,res)=>{
        db.ItemPrice.create({
            price:req.body.price,
            ItemId:req.body.itemid
        }).then(res.json(message(1,"created successfully"))).catch(function(err){
            res.json(message(0,err))})
    }

    
}

function message(bool,message){
    const success=[{success:bool,error:!bool,message:message}]
    return success;
}