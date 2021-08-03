// Importação da framework sequelize
const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

// Declaração de atributos da model User
const Photo = sequelize.define('Photo', {

    path:{
        type: DataTypes.STRING,
        allowNull: false
    }

},

// Banco de dados cria apenas colunas com os atributos declarados acima,
// mais id e, se houver, foreign keys
{
    timestamps: false

});


// Declaração do tipo de associação entre as models
Photo.associate = function(models) {
    Photo.belongsTo(models.Service);
}

//Exportação de user para os controllers
module.exports = Photo;