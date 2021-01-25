const { Model } = require('sequelize')

module.exports=(sequelize,DataTypes)=>{
    class SubCategory extends Model{
        static associate(Models){
            SubCategory.belongsTo(Models.Category)
        }
    }
    SubCategory.init({
        name:DataTypes.STRING,
        description:DataTypes.STRING,
    },{
        sequelize,
        modelName:'SubCategory'
    }
    )
    return SubCategory
}
