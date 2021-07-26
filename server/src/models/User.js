// Importação da framework sequelize
const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

// Declaração de atributos da model User
const User = sequelize.define('User', {

    full_name:{
        type: DataTypes.STRING,
        allowNull: false
    },

    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
   
    birth_date:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },

    address:{
        type: DataTypes.STRING
    },

    phone_number:{
        type: DataTypes.STRING,
        allowNull: false
    },

    is_admin:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },

    is_cliente:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },

    photo: {
        type: DataTypes.STRING
    },

    score:{
        type: DataTypes.FLOAT
    },

    role:{
        type: DataTypes.STRING
    },

    password: {
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
User.associate = function(models) {

}

//Exportação de user para os controllers
module.exports = User;