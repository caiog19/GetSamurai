// Importação da framework sequelize
const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

// Declaração de atributos da model Service
const Comment = sequelize.define('Comment', {

    content:{
        type: DataTypes.STRING,
        allowNull: false
    }

}

// Banco de dados cria apenas colunas com os atributos declarados acima,
// mais id e, se houver, foreign keys
/*
{
    timestamps: false

}*/);


// Declaração do tipo de associação entre as models
Comment.associate = function(models) {
    Comment.belongsTo(models.User);
    Comment.belongsTo(models.Service);

}

//Exportação de user para os controllers
module.exports = Comment;