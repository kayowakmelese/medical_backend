const { Model } = require('sequelize')

module.exports=(sequelize,DataTypes)=>{
    class ItemPrice extends Model{
        static associate(Models){
            ItemPrice.belongsTo(Models.Item)
        }
    }
    ItemPrice.init({
        price:DataTypes.STRING,
    },{
        sequelize,
        modelName:'ItemPrice'
    }
    )
    return ItemPrice
}
