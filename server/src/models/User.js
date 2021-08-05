// Importação da framework sequelize
const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

// Declaração de atributos da model User
const User = sequelize.define('User', {

    name:{
        type: DataTypes.STRING,
        allowNull: false
    },

    email:{
        type: DataTypes.STRING,
        allowNull: false
    },

    hash: {
		type: DataTypes.STRING
	},
    
	salt: {
		type: DataTypes.STRING
	},
   
    birthDate:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    phoneNumber:{
        type: DataTypes.STRING,
        allowNull: false
    },

    isAdmin:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },

    isCliente:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },

    photo: {
        type: DataTypes.STRING
    },

    score:{
        type: DataTypes.FLOAT
    },

    description:{
        type: DataTypes.STRING

    }

},

// Banco de dados cria apenas colunas com os atributos declarados acima,
// mais id e, se houver, foreign keys
{
    timestamps: false

});


// Declaração do tipo de associação entre as models
User.associate = function(models) {
    User.hasMany(models.Service);
    User.hasMany(models.Comment);
    User.hasMany(models.Rating);
    User.belongsTo(models.Cart);
    User.belongsToMany(models.User, {through: 'Favorite', as: 'liking', foreignKey: 'likingId'});
    User.belongsToMany(models.User, {through: 'Favorite', as: 'liked_by', foreignKey: 'likedId'});
    
}

//Exportação de user para os controllers
module.exports = User;