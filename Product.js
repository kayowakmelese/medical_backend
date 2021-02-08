const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(Models) {
            Product.belongsTo(Models.SubCategory)
            Product.hasMany(Models.Item)
        }
    }
    Product.init(
        {
            name: DataTypes.STRING,
        }
        , { 
            sequelize,
            modelName: 'Product'
         }
    )
    return Product

}