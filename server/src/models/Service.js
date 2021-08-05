// Importação da framework sequelize
const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

// Declaração de atributos da model Service
const Service = sequelize.define('Service', {

    title:{
        type: DataTypes.STRING,
        allowNull: false
    },

    description:{
        type: DataTypes.STRING,
        allowNull: false
    },

    address:{
        type: DataTypes.STRING,
        allowNull:false
    }


}

// Banco de dados cria apenas colunas com os atributos declarados acima,
// mais id e, se houver, foreign keys
/*
{
    timestamps: false

}*/);


// Declaração do tipo de associação entre as models
Service.associate = function(models) {
    Service.belongsTo(models.User);
    Service.hasMany(models.Comment);
    Service.hasMany(models.Photo);
    Service.hasMany(models.Rating);
    Service.belongsToMany(models.Cart, {through: 'List', as: 'listed', foreignKey: 'listedId'});
}

//Exportação de user para os controllers
module.exports = Service;