// Importação das models existentes e framework sequelize
const { response } = require('express');
const User = require('../models/User');



// Criação da Rota que retorna todos os usuários do banco de dados
const index = async(req,res) => {
    try {
        const users = await User.findAll();
        return res.status(200).json({users});
    }catch(err){
        return res.status(500).json({err});
    }
};

// Criação da Rota que retorna um único usuário específico do banco de dados
const show = async(req,res) => {
    const {id} = req.params;
    try {
        const user = await User.findByPk(id);
        return res.status(200).json({user});
    }catch(err){
        return res.status(500).json({err});
    }
};


// Criação da Rota que cria novos usuários no banco de dados
const create = async(req,res) => {
    try{
          const user = await User.create(req.body);
          return res.status(201).json({message: "Usuário cadastrado com sucesso!", user: user});
      }catch(err){
          res.status(500).json({error: err});
      }
};

// Criação da Rota que atualiza atributos de um usuário do banco de dados
const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await User.update(req.body, {where: {id: id}});
        if(updated) {
            const user = await User.findByPk(id);
            return res.status(200).send(user);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Usuário não encontrado");
    }
};

// Criação da Rota que deleta um usuário específico do banco de dados
const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await User.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Usuário deletado com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Usuário não encontrado.");
    }
};


// Exportação da CRUD criada acima para routes
module.exports = {
    index,
    show,
    create,
    update,
    destroy
};