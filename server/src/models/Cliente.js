// Importação da framework sequelize
const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

// Declaração de atributos da model Cliente
const Cliente = sequelize.define('Cliente', {}, 


// Banco de dados cria apenas colunas com os atributos declarados acima,
// mais id e, se houver, foreign keys
{
     timestamps: false
});


// Declaração do tipo de associação entre as models
Cliente.associate = function(models) {
    Cliente.belongsTo(models.User);
}

//Exportação de user para os controllers
module.exports = Cliente;