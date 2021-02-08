const { Model } = require('sequelize')
module.exports=(sequelize,DataTypes)=>{
    class ItemTags extends Model{
        static associate(Models){
            ItemTags.belongsTo(Models.Tags)
            ItemTags.belongsTo(Models.Item)
        }
    }
    ItemTags.init({
    },{
        sequelize,
        modelName:'ItemTags'
    }
    )
    return ItemTags
}
