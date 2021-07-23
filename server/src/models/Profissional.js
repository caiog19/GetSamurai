// Importação da framework sequelize
const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

// Declaração de atributos da model Profissional
const Profissional = sequelize.define('Profissional', {
    score:{
        type: DataTypes.FLOAT
    },

    role:{
        type: DataTypes.STRING,
        allowNull: false
    },

},
// Banco de dados cria apenas colunas com os atributos declarados acima,
// mais id e, se houver, foreign keys

{
    timestamps: false
});


// Declaração do tipo de associação entre as models
Profissional.associate = function(models) {
    Profissional.belongsTo(models.User);
}

//Exportação de user para os controllers
module.exports = Profissional;