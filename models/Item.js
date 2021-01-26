const { Model } = require('sequelize')

module.exports=(sequelize,DataTypes)=>{
    class Item extends Model{
        static associate(Models){
            Item.belongsTo(Models.Product)
            Item.hasOne(Models.ItemPrice)
        }
    }
    Item.init({
        name:DataTypes.STRING,
    },{
        sequelize,
        modelName:'Item'
    }
    )
    return Item
}
