// Importação da framework sequelize
const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

// Declaração de atributos da model Service
const Cart = sequelize.define('Cart',{}, 

// Banco de dados cria apenas colunas com os atributos declarados acima,
// mais id e, se houver, foreign keys

{
    timestamps: false

});


// Declaração do tipo de associação entre as models
Cart.associate = function(models) {
    Cart.hasOne(models.User);
    Cart.belongsToMany(models.Service, {through: 'List', as: 'listing', foreignKey: 'listingId'});

}

//Exportação de user para os controllers
module.exports = Cart;