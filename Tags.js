const { Model } = require('sequelize')
module.exports=(sequelize,DataTypes)=>{
    class Tags extends Model{
        static associate(Models){
           // Tags.hasMany(Models.ItemTags)
        }
    }
    Tags.init({
        name:DataTypes.STRING
    },{
        sequelize,
        modelName:'Tags'
    }
    )
    return Tags
}
