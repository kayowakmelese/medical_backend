const { Model } = require('sequelize')
module.exports=(sequelize,DataTypes)=>{
    class Featured extends Model{
        static associate(Models){
            Featured.belongsTo(Models.Item)
        }
    }
    Featured.init({
        

    },{
        sequelize,
        modelName:'Featured'
    }
    )
    return Featured
}
