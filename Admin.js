const { Model } = require('sequelize')
module.exports=(sequelize,DataTypes)=>{
    class Admin extends Model{
        static associate(Models){
        }
    }
    Admin.init({
        name:DataTypes.STRING,
        password:DataTypes.STRING,
        email:DataTypes.STRING
    },{
        sequelize,
        modelName:'Admin'
    }
    )
    return Admin
}
