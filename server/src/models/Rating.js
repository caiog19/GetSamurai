// Importação da framework sequelize
const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

// Declaração de atributos da model Rating
const Rating = sequelize.define('Rating', {

    value:{
        type: DataTypes.INTEGER,
        allowNull: false
    },

    content:{
        type: DataTypes.STRING,
        allowNull: false
    },



}

// Banco de dados cria apenas colunas com os atributos declarados acima,
// mais id e, se houver, foreign keys

/*{
    timestamps: false

}*/);


// Declaração do tipo de associação entre as models
Rating.associate = function(models) {
    Rating.belongsTo(models.User);
    Rating.belongsTo(models.Service);
}

//Exportação de user para os controllers
module.exports = Rating;